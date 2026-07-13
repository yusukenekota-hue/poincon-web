import { MAKERS } from "../src/data/makers";
import { SHOPS } from "../src/data/shops";

/* MAKERS/SHOPS(TypeScript)からsupabase/seed.sqlを生成するワンショットスクリプト。
   実行: npx tsx scripts/gen-seed.ts > supabase/seed.sql */

function esc(s: string | undefined | null) {
  if (s === undefined || s === null) return "null";
  return `'${s.replace(/'/g, "''")}'`;
}

const lines: string[] = [
  "-- POINÇON シードデータ（scripts/gen-seed.ts で自動生成。手編集しないこと）",
  "-- schema.sql 実行後にこのファイルを実行してください。",
  "",
  "begin;",
  "",
];

for (const maker of MAKERS) {
  lines.push(
    `insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (`,
    `  ${esc(maker.id)}, ${esc(maker.name)}, ${esc(maker.kana)},`,
    `  ${esc(maker.region.ja)}, ${esc(maker.region.fr)}, ${esc(maker.region.en)}, ${esc(maker.period)},`,
    `  ${esc(maker.blurb.ja)}, ${esc(maker.blurb.fr)}, ${esc(maker.blurb.en)}`,
    `);`
  );
  for (const mark of maker.marks) {
    lines.push(
      `insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (`,
      `  (select id from makers where slug = ${esc(maker.id)}), ${esc(mark.id)}, ${esc(mark.label)}, ${esc(mark.shape)}, ${esc(mark.period)},`,
      `  ${esc(mark.style.ja)}, ${esc(mark.style.fr)}, ${esc(mark.style.en)},`,
      `  ${esc(mark.desc.ja)}, ${esc(mark.desc.fr)}, ${esc(mark.desc.en)}`,
      `);`
    );
  }
  lines.push("");
}

for (const shop of SHOPS) {
  lines.push(
    `insert into shops (slug, name, place_ja, place_fr, place_en, genre_ja, genre_fr, genre_en, owner_ja, owner_fr, owner_en, note_ja, note_fr, note_en, instagram_url, published) values (`,
    `  ${esc(shop.id)}, ${esc(shop.name)},`,
    `  ${esc(shop.place.ja)}, ${esc(shop.place.fr)}, ${esc(shop.place.en)},`,
    `  ${esc(shop.genre.ja)}, ${esc(shop.genre.fr)}, ${esc(shop.genre.en)},`,
    `  ${esc(shop.owner.ja)}, ${esc(shop.owner.fr)}, ${esc(shop.owner.en)},`,
    `  ${esc(shop.note.ja)}, ${esc(shop.note.fr)}, ${esc(shop.note.en)},`,
    `  ${esc(shop.link)}, ${shop.published}`,
    `);`
  );
}

lines.push("", "commit;", "");

process.stdout.write(lines.join("\n"));
