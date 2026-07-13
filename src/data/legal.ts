import type { Lang } from "./types";

export interface LegalSection {
  title: string;
  body: string[];
}

export interface LegalContent {
  pageTitle: string;
  draftNotice: string;
  terms: LegalSection;
  privacy: LegalSection;
  mentions: LegalSection;
}

/* MVP向けの草案。公開前にミミズさんの確認と、屋号・住所等の実データ反映が必要。 */
export const LEGAL: Record<Lang, LegalContent> = {
  ja: {
    pageTitle: "利用規約・プライバシー・法的情報",
    draftNotice:
      "このページは草案です。公開前に運営者本人の確認と、必要な身元情報(屋号・所在地等)の反映が必要です。",
    terms: {
      title: "利用規約(要旨)",
      body: [
        "投稿された刻印情報・写真は承認制で公開されます。公開前にモデレーターが内容を確認します。",
        "投稿者は、投稿する写真がご自身で撮影したものであることを保証し、POINÇON上での掲載に必要な範囲でライセンスを許諾するものとします。他サイトの画像・文章の転載は禁止です。",
        "通報を受けた内容には、原則として24時間以内に対応します。",
        "図鑑の閲覧・投稿は現時点ではすべて無料です。将来的に一部機能を有料化する可能性があります。実施の際は事前に告知します。",
      ],
    },
    privacy: {
      title: "プライバシーポリシー",
      body: [
        "登録時にお預かりする情報は、メールアドレス・ユーザー名・表示名など、投稿とプロフィール表示に必要な最小限のものに限られます。",
        "データベース・認証・画像ストレージにはSupabase(EUリージョン)を利用し、EU一般データ保護規則(RGPD)に準拠した取り扱いを行います。",
        "取得した情報を、本サービスの提供・改善以外の目的で第三者に販売・提供することはありません。",
        "ご自身の情報の開示・訂正・削除をご希望の場合は、下記お問い合わせ先までご連絡ください。",
      ],
    },
    mentions: {
      title: "Mentions légales(発行者情報)",
      body: [
        "【草案】本サービスはフランス在住の個人により運営されています。フランス法で義務付けられる発行者名・所在地・ホスティング事業者名等の記載は、正式公開前に追記します。",
        "お問い合わせ: contact@poincon.app(仮)",
      ],
    },
  },
  fr: {
    pageTitle: "CGU, confidentialité & mentions légales",
    draftNotice:
      "Cette page est un brouillon. Avant publication, elle doit être validée par l'exploitante et complétée avec les informations d'identité requises (nom, adresse, etc.).",
    terms: {
      title: "Conditions générales (résumé)",
      body: [
        "Les fiches et photos de marques sont publiées après validation par une modératrice.",
        "En publiant, la personne contributrice garantit être l'auteure de la photo et accorde la licence nécessaire à son affichage sur POINÇON. La copie d'images ou de textes provenant d'autres sites est interdite.",
        "Tout signalement est traité en principe sous 24 heures.",
        "La consultation et la contribution au répertoire sont actuellement gratuites. Certaines fonctionnalités pourront devenir payantes à l'avenir ; toute évolution sera annoncée au préalable.",
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      body: [
        "Les données recueillies à l'inscription se limitent au strict nécessaire : adresse e-mail, nom d'utilisateur, nom affiché.",
        "La base de données, l'authentification et le stockage des images sont hébergés chez Supabase, région UE, conformément au RGPD.",
        "Aucune donnée n'est vendue ni transmise à des tiers à des fins autres que le fonctionnement du service.",
        "Pour toute demande d'accès, de rectification ou de suppression de vos données, contactez-nous à l'adresse ci-dessous.",
      ],
    },
    mentions: {
      title: "Mentions légales",
      body: [
        "[Brouillon] Ce service est exploité à titre individuel par une personne résidant en France. Les mentions obligatoires (identité de l'éditeur, adresse, hébergeur) seront complétées avant la mise en ligne publique.",
        "Contact : contact@poincon.app (provisoire)",
      ],
    },
  },
  en: {
    pageTitle: "Terms, Privacy & Legal Notice",
    draftNotice:
      "This page is a draft. Before going live it must be reviewed by the operator and completed with the required identity details (name, address, etc.).",
    terms: {
      title: "Terms of use (summary)",
      body: [
        "Submitted mark entries and photos are published after review by a moderator.",
        "By contributing, you warrant that you took the photo yourself and grant the licence needed to display it on POINÇON. Copying images or text from other sites is prohibited.",
        "Reported content is handled within 24 hours as a rule.",
        "Browsing and contributing to the reference are currently free. Some features may become paid in the future; any such change will be announced in advance.",
      ],
    },
    privacy: {
      title: "Privacy policy",
      body: [
        "Information collected at sign-up is limited to what's needed for posting and profile display: email address, username, display name.",
        "The database, authentication and image storage run on Supabase (EU region), handled in line with the GDPR.",
        "Your data is never sold or shared with third parties beyond what's needed to run the service.",
        "To access, correct or delete your data, please contact us at the address below.",
      ],
    },
    mentions: {
      title: "Legal notice",
      body: [
        "[Draft] This service is operated by an individual based in France. The publisher identity, address and hosting provider required by French law will be added before public launch.",
        "Contact: contact@poincon.app (placeholder)",
      ],
    },
  },
};

export interface AboutContent {
  pageTitle: string;
  body: string[];
}

export const ABOUT: Record<Lang, AboutContent> = {
  ja: {
    pageTitle: "POINÇONについて",
    body: [
      "POINÇONは、フランスアンティークの刻印(ポワンソン)を、みんなで読み解いていく図鑑です。",
      "運営しているのは、フランス在住の日本人・ミミズ(Instagram @mimizu_france)。ブロカントやヴィッド・グルニエで買い付けたアンティークの背面に押された刻印から、窯元や年代を読み解く楽しさを、もっと多くの人と分かち合いたいという思いから生まれました。",
      "図鑑の閲覧はいつでも無料、ログインも不要です。あなたが見つけた刻印も、投稿から図鑑に加えることができます(承認制)。",
    ],
  },
  fr: {
    pageTitle: "À propos de POINÇON",
    body: [
      "POINÇON est un répertoire collaboratif des marques des antiquités françaises, construit avec sa communauté.",
      "Le projet est porté par Mimizu (Instagram @mimizu_france), une Japonaise installée en France. Née du plaisir de déchiffrer, au dos d'une pièce chinée en brocante ou en vide-grenier, la manufacture et l'époque à partir d'une simple marque — un plaisir que ce répertoire souhaite partager avec le plus grand nombre.",
      "La consultation du répertoire est gratuite et ne nécessite aucune inscription. Vous pouvez également contribuer une marque que vous possédez (publication après validation).",
    ],
  },
  en: {
    pageTitle: "About POINÇON",
    body: [
      "POINÇON is a collaborative reference for the marks found on French antiques, built together with its community.",
      "It's run by Mimizu (Instagram @mimizu_france), a Japanese woman living in France. The project grew out of the simple joy of reading a maker's mark on the back of a brocante or flea-market find and working out where and when it was made — a joy this reference hopes to share more widely.",
      "Browsing the reference is free and needs no sign-up. You can also contribute a mark you own (published after review).",
    ],
  },
};
