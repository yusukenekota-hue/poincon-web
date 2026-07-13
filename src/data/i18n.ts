import type { Lang } from "./types";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ja", label: "日本語" },
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
];

export const DEFAULT_LANG: Lang = "ja";

export function isLang(value: string): value is Lang {
  return LANGS.some((l) => l.code === value);
}

interface Dict {
  siteName: string;
  tagline: string;
  navMarques: string;
  navMarchands: string;
  navAbout: string;
  heroTitle: string;
  heroCta: string;
  obProps: [string, string][];
  zukanTitle: string;
  zukanSub: string;
  searchPh: string;
  marksListLabel: string;
  emptySearch: string;
  backList: string;
  desc: string;
  contributor: string;
  aboutPoincon: string;
  marchandsTitle: string;
  marchandsSub: string;
  marchandsNote: string;
  marchandsEmpty: string;
  backShops: string;
  visitInstagram: string;
}

export const S: Record<Lang, Dict> = {
  ja: {
    siteName: "POINÇON",
    tagline: "フランスアンティークの刻印を、みんなで読み解いていく図鑑。",
    navMarques: "図鑑",
    navMarchands: "店主",
    navAbout: "について",
    heroTitle: "刻印図鑑",
    heroCta: "窯元一覧を見る",
    obProps: [
      ["調べる", "窯元別・年代別に刻印を検索。"],
      ["読み解く", "刻印の変遷から、年代をかなり正確に絞り込める窯も。"],
      ["つながる", "みんなで育てる図鑑。あなたの一枚が誰かの手がかりに。"],
    ],
    zukanTitle: "刻印図鑑",
    zukanSub: "Répertoire des marques",
    searchPh: "窯名・地域・年代で探す(例: ロレーヌ / 1890)",
    marksListLabel: "刻印一覧",
    emptySearch: "該当する窯元がありません。別のキーワードでお試しください。",
    backList: "窯元一覧",
    desc: "解説",
    contributor: "登録",
    aboutPoincon: "POINÇONについて",
    marchandsTitle: "店主をたずねる",
    marchandsSub: "Portraits de marchands",
    marchandsNote: "※ 紹介文は下書きです。掲載は店主の確認・許諾を得て正式版にします。",
    marchandsEmpty: "現在、公開許諾済みの店主ページはまだありません。準備が整い次第、順次公開します。",
    backShops: "店主一覧",
    visitInstagram: "Instagramを見る",
  },
  fr: {
    siteName: "POINÇON",
    tagline: "Le répertoire collaboratif des marques des antiquités françaises.",
    navMarques: "Répertoire",
    navMarchands: "Marchands",
    navAbout: "À propos",
    heroTitle: "Répertoire des marques",
    heroCta: "Voir les manufactures",
    obProps: [
      ["Identifier", "Recherche par manufacture et par époque."],
      ["Dater", "Pour certaines manufactures, la marque seule permet une datation précise."],
      ["Contribuer", "Un répertoire construit ensemble — votre marque peut aider quelqu'un."],
    ],
    zukanTitle: "Répertoire des marques",
    zukanSub: "刻印図鑑",
    searchPh: "Manufacture, région, époque (ex: Lorraine / 1890)",
    marksListLabel: "Marques",
    emptySearch: "Aucune manufacture trouvée. Essayez un autre mot-clé.",
    backList: "Manufactures",
    desc: "Description",
    contributor: "Enregistré par",
    aboutPoincon: "À propos de POINÇON",
    marchandsTitle: "Portraits de marchands",
    marchandsSub: "店主をたずねる",
    marchandsNote: "※ Texte provisoire. La fiche sera publiée après validation par la marchande.",
    marchandsEmpty: "Aucune fiche de marchand n'est encore publiée. Elles arriveront au fur et à mesure des validations.",
    backShops: "Marchands",
    visitInstagram: "Voir Instagram",
  },
  en: {
    siteName: "POINÇON",
    tagline: "The collaborative reference for French antique marks, decoded together.",
    navMarques: "Marks",
    navMarchands: "Dealers",
    navAbout: "About",
    heroTitle: "Mark Reference",
    heroCta: "Browse makers",
    obProps: [
      ["Identify", "Search marks by maker and era."],
      ["Date", "For some makers, the mark alone lets you date a piece precisely."],
      ["Contribute", "A reference built together — your mark could help someone else."],
    ],
    zukanTitle: "Mark Reference",
    zukanSub: "Répertoire des marques",
    searchPh: "Search maker, region, era (e.g. Lorraine / 1890)",
    marksListLabel: "Marks",
    emptySearch: "No makers found. Try another keyword.",
    backList: "All makers",
    desc: "Description",
    contributor: "Logged by",
    aboutPoincon: "About POINÇON",
    marchandsTitle: "Dealer Portraits",
    marchandsSub: "Portraits de marchands",
    marchandsNote: "※ Draft text. The profile will be published after the dealer's approval.",
    marchandsEmpty: "No dealer profiles are published yet. They'll appear here as approvals come in.",
    backShops: "All dealers",
    visitInstagram: "See Instagram",
  },
};
