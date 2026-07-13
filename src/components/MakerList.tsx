"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Maker } from "@/data/types";
import { S } from "@/data/i18n";
import type { Lang } from "@/data/types";
import MarkStamp from "./MarkStamp";

export default function MakerList({ lang, makers }: { lang: Lang; makers: Maker[] }) {
  const t = S[lang];
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return makers;
    return makers.filter((m) => {
      const haystack = [m.name, m.kana, m.region[lang], m.period]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, makers, lang]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t.searchPh}
        className="w-full rounded-xl border border-line bg-paper px-5 py-4 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale mb-8"
      />

      {filtered.length === 0 ? (
        <p className="text-lg text-biscuit py-12 text-center">{t.emptySearch}</p>
      ) : (
        <ul className="grid sm:grid-cols-2 gap-4">
          {filtered.map((maker) => (
            <li key={maker.id}>
              <Link
                href={`/${lang}/marques/${maker.id}`}
                className="flex items-center gap-4 border border-line rounded-xl p-5 bg-paper hover:border-cobalt transition-colors"
              >
                <MarkStamp mark={maker.marks[0]} size={64} />
                <div className="min-w-0">
                  <p className="font-display text-xl text-cobalt-ink truncate">
                    {maker.name}
                  </p>
                  <p className="text-base text-biscuit truncate">{maker.region[lang]}</p>
                  <p className="text-base text-cobalt mt-1">{maker.period}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
