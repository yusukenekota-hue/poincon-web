/* v4の compressImage をそのまま移植。最大800px/JPEG品質0.68、大きすぎる場合は段階的に落とす。
   iPhoneのHEIC/HEIF写真は、ブラウザのcanvasが読めないため先にJPEGへ変換する。 */

function isHeic(file: File): boolean {
  return (
    /image\/hei[cf]/i.test(file.type) ||
    /\.hei[cf]$/i.test(file.name)
  );
}

/* HEICならJPEGのBlobへ変換して返す。それ以外はそのまま。
   heic2anyは約1MBあるため、HEICが来たときだけ動的に読み込む。 */
async function toDecodableBlob(file: File): Promise<Blob> {
  if (!isHeic(file)) return file;
  const heic2any = (await import("heic2any")).default;
  const converted = await heic2any({
    blob: file,
    toType: "image/jpeg",
    quality: 0.85,
  });
  return Array.isArray(converted) ? converted[0] : converted;
}

export async function compressImage(
  file: File,
  maxDim = 800,
  quality = 0.68
): Promise<string> {
  const blob = await toDecodableBlob(file);

  const render = (img: HTMLImageElement, dim: number, q: number) => {
    const scale = Math.min(1, dim / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.width * scale));
    canvas.height = Math.max(1, Math.round(img.height * scale));
    canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", q);
  };

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let out = render(img, maxDim, quality);
        if (out.length > 1_000_000) out = render(img, maxDim, 0.5);
        if (out.length > 1_000_000) out = render(img, 560, 0.5);
        resolve(out);
      };
      img.onerror = () => reject(new Error("image decode failed"));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error("file read failed"));
    reader.readAsDataURL(blob);
  });
}

export function dataUrlToBlob(dataUrl: string): Blob {
  const [meta, base64] = dataUrl.split(",");
  const mime = meta.match(/:(.*?);/)?.[1] ?? "image/jpeg";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}
