import "../globals.css";

/* /admin は [lang] 配下ではないため、独自のルートレイアウトが必要
   (Next.jsのマルチルートレイアウト構成)。管理画面は日本語のみ。 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-email text-cobalt-ink">{children}</body>
    </html>
  );
}
