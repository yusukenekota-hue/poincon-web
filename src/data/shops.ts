import type { Shop } from "./types";

/* v4プロトタイプから移植。Entre Cour et Jardinは店主の許諾待ちのため published=false。 */
export const SHOPS: Shop[] = [
  {
    id: "entre-cour-et-jardin",
    name: "Entre Cour et Jardin",
    place: {
      ja: "タルヌ＝エ＝ガロンヌ県 サン・アントナン・ノーブル・ヴァル(教会通り5番地)",
      fr: "5 rue de l'Église, Saint-Antonin-Noble-Val (Tarn-et-Garonne)",
      en: "5 rue de l'Église, Saint-Antonin-Noble-Val (Tarn-et-Garonne)",
    },
    genre: {
      ja: "アンティーク小物 / 古いファブリック / ヴィンテージモード",
      fr: "Objets de charme / tissus anciens / mode vintage",
      en: "Charming objects / antique textiles / vintage fashion",
    },
    owner: { ja: "店主: クリスティーヌさん", fr: "Tenu par Christine", en: "Run by Christine" },
    note: {
      ja: "中世の面影が残るサン・アントナンの旧市街、教会のすぐそば。趣ある小物、アンティークのリネンや布もの、ヴィンテージのモード小物が並ぶ。",
      fr: "Au cœur du village médiéval, à deux pas de l'église : objets de charme, tissus anciens et accessoires de mode vintage.",
      en: "In the heart of the medieval village, steps from the church: charming objects, antique textiles and vintage fashion accessories.",
    },
    link: "https://www.instagram.com/entrecouretjardin_3/",
    published: false,
  },
];

export function getPublishedShops() {
  return SHOPS.filter((s) => s.published);
}

export function getShop(id: string) {
  return SHOPS.find((s) => s.id === id && s.published);
}
