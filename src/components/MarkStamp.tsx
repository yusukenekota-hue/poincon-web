import type { Mark } from "@/data/types";

const COBALT = "#24457E";

/* v4の MarkStamp をそのまま移植(円形/楕円/八角形/盾/リボン/モノグラム)。 */
export default function MarkStamp({ mark, size = 92 }: { mark: Mark; size?: number }) {
  const rot = ((mark.id.charCodeAt(0) + mark.id.length) % 7) - 3;
  const common = { fill: "none", stroke: COBALT, strokeWidth: 2.2, opacity: 0.88 };
  const text = mark.label.length > 12 ? mark.label.split(" ")[0] : mark.label;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ transform: `rotate(${rot}deg)`, display: "block" }}
      aria-hidden="true"
    >
      {mark.shape === "circle" && (
        <>
          <circle cx="50" cy="50" r="40" {...common} />
          <circle cx="50" cy="50" r="33" {...common} strokeWidth={1} opacity={0.5} />
        </>
      )}
      {mark.shape === "oval" && <ellipse cx="50" cy="50" rx="44" ry="30" {...common} />}
      {mark.shape === "octagon" && (
        <polygon points="30,12 70,12 88,30 88,70 70,88 30,88 12,70 12,30" {...common} />
      )}
      {mark.shape === "shield" && (
        <path d="M50 8 L86 20 L86 55 Q86 80 50 94 Q14 80 14 55 L14 20 Z" {...common} />
      )}
      {mark.shape === "ribbon" && (
        <path d="M10 40 Q50 25 90 40 L90 62 Q50 77 10 62 Z" {...common} />
      )}
      {mark.shape === "mono" && (
        <circle cx="50" cy="50" r="41" {...common} strokeDasharray="3 4" />
      )}
      <text
        x="50"
        y={mark.shape === "mono" ? 58 : 55}
        textAnchor="middle"
        fontFamily="var(--font-marcellus), serif"
        fontSize={mark.shape === "mono" ? 30 : text.length > 8 ? 9 : 13}
        letterSpacing="1"
        fill={COBALT}
        opacity={0.92}
      >
        {mark.shape === "mono" ? mark.label.split(" ")[0] : text}
      </text>
      {mark.shape !== "mono" && mark.label.length > 12 && (
        <text
          x="50"
          y="67"
          textAnchor="middle"
          fontFamily="var(--font-marcellus), serif"
          fontSize="7"
          letterSpacing="1"
          fill={COBALT}
          opacity={0.8}
        >
          {mark.label.split(" ").slice(1, 3).join(" ")}
        </text>
      )}
    </svg>
  );
}
