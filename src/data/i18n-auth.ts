import type { Lang } from "./types";

/* 認証・プロフィール・投稿・管理画面用の文言。図鑑閲覧(i18n.ts)とは別ファイルに分離。 */
interface AuthDict {
  navContribute: string;
  navLogin: string;
  navLogout: string;
  loginTitle: string;
  loginIntro: string;
  loginEmailPh: string;
  loginSend: string;
  loginSending: string;
  loginSent: string;
  loginError: string;

  regTitle: string;
  regIntro: string;
  regUsername: string;
  regUsernamePh: string;
  regDisplay: string;
  regDisplayPh: string;
  regRegionF: string;
  regRegionPh: string;
  regCreate: string;
  regCreating: string;
  regInvalid: string;
  regTaken: string;
  regNeedBoth: string;
  regError: string;

  contribTitle: string;
  contribSub: string;
  loginRequired: string;
  needProfile: string;
  fMaker: string;
  fMakerPh: string;
  fNew: string;
  fNewPh: string;
  fLabel: string;
  fLabelPh: string;
  fPeriod: string;
  fPeriodPh: string;
  fStyle: string;
  styles: string[];
  fDesc: string;
  fDescPh: string;
  photoMark: string;
  photoProduct: string;
  photoTap: string;
  photoChange: string;
  submit: string;
  submitting: string;
  modNote: string;
  tNeed: string;
  tSent: string;
  tSaveFail: string;
  tPhotoBig: string;
  tBackToCatalog: string;

  adminTitle: string;
  adminNoAccess: string;
  adminEmpty: string;
  adminApprove: string;
  adminReject: string;
  adminSubmittedBy: string;
  reportTitle: string;
  reportOpts: string[];
  reportSubmit: string;
  reportSent: string;
}

export const A: Record<Lang, AuthDict> = {
  ja: {
    navContribute: "投稿",
    navLogin: "ログイン",
    navLogout: "ログアウト",
    loginTitle: "メンバー登録・ログイン",
    loginIntro: "メールアドレス宛にログイン用のリンクをお送りします。パスワードは不要です。",
    loginEmailPh: "メールアドレス",
    loginSend: "ログインリンクを送る",
    loginSending: "送信中…",
    loginSent: "メールを送りました。届いたリンクを開いてログインを完了してください。",
    loginError: "送信に失敗しました。もう一度お試しください。",

    regTitle: "プロフィールを作成",
    regIntro: "投稿とコレクションに使うプロフィールを作りましょう。",
    regUsername: "ユーザー名 *(半角英数と_のみ、3文字以上)",
    regUsernamePh: "例: mimizu_brocante",
    regDisplay: "表示名 *",
    regDisplayPh: "例: ミミズ",
    regRegionF: "活動地域(任意)",
    regRegionPh: "例: オクシタニー / 日本",
    regCreate: "プロフィールを作成",
    regCreating: "作成中…",
    regInvalid: "ユーザー名は半角英数と_(3文字以上)で入力してください",
    regTaken: "このユーザー名は使われています",
    regNeedBoth: "ユーザー名と表示名は必須です",
    regError: "作成に失敗しました。もう一度お試しください",

    contribTitle: "刻印を投稿する",
    contribSub: "Contribuer au répertoire",
    loginRequired: "投稿にはメンバー登録が必要です",
    needProfile: "先にプロフィールを作成してください",
    fMaker: "窯名 *",
    fMakerPh: "選択してください",
    fNew: "その他(新しい窯)",
    fNewPh: "窯の名前を入力",
    fLabel: "刻印の名称 *",
    fLabelPh: "例: U & C 円形印",
    fPeriod: "推定年代 *",
    fPeriodPh: "例: 1880年代–1900年頃",
    fStyle: "刻印様式",
    styles: ["印刷(転写)", "手描き", "型押し", "浮き彫り", "その他"],
    fDesc: "解説・見分け方",
    fDescPh: "購入場所、年代の根拠、似た刻印との違いなど",
    photoMark: "刻印の写真 *",
    photoProduct: "品物全体の写真",
    photoTap: "タップして写真を追加",
    photoChange: "タップで変更",
    submit: "審査に送る",
    submitting: "送信中…",
    modNote: "投稿は承認制です。公開前にモデレーターが内容を確認します。",
    tNeed: "刻印写真・窯名・刻印名・年代は必須です",
    tSent: "送信しました — 承認をお待ちください",
    tSaveFail: "保存に失敗しました。もう一度お試しください",
    tPhotoBig: "画像の読み込みに失敗しました",
    tBackToCatalog: "図鑑へ戻る",

    adminTitle: "承認待ちの投稿",
    adminNoAccess: "このページを見る権限がありません",
    adminEmpty: "承認待ちの投稿はありません",
    adminApprove: "承認する",
    adminReject: "却下する",
    adminSubmittedBy: "投稿者",
    reportTitle: "この刻印情報を通報",
    reportOpts: ["情報が不正確", "画像が不適切", "著作権を侵害している", "スパム・宣伝"],
    reportSubmit: "通報する",
    reportSent: "通報を受け付けました。24時間以内に対応します",
  },
  fr: {
    navContribute: "Contribuer",
    navLogin: "Connexion",
    navLogout: "Déconnexion",
    loginTitle: "Créer un profil / Se connecter",
    loginIntro: "Nous vous enverrons un lien de connexion par e-mail. Aucun mot de passe requis.",
    loginEmailPh: "Adresse e-mail",
    loginSend: "Envoyer le lien de connexion",
    loginSending: "Envoi…",
    loginSent: "E-mail envoyé. Ouvrez le lien reçu pour terminer la connexion.",
    loginError: "Échec de l'envoi. Réessayez.",

    regTitle: "Créer un profil",
    regIntro: "Un profil pour contribuer et gérer votre collection.",
    regUsername: "Nom d'utilisateur * (lettres, chiffres, _ — 3 caractères min.)",
    regUsernamePh: "ex: odette_gaillac",
    regDisplay: "Nom affiché *",
    regDisplayPh: "ex: Odette",
    regRegionF: "Région (facultatif)",
    regRegionPh: "ex: Occitanie",
    regCreate: "Créer le profil",
    regCreating: "Création…",
    regInvalid: "Nom d'utilisateur : lettres/chiffres/_ (3 caractères min.)",
    regTaken: "Ce nom d'utilisateur est déjà pris",
    regNeedBoth: "Nom d'utilisateur et nom affiché requis",
    regError: "Échec de la création. Réessayez",

    contribTitle: "Contribuer",
    contribSub: "刻印を投稿する",
    loginRequired: "Un profil est requis pour contribuer",
    needProfile: "Créez d'abord votre profil",
    fMaker: "Manufacture *",
    fMakerPh: "Choisir…",
    fNew: "Autre (nouvelle manufacture)",
    fNewPh: "Nom de la manufacture",
    fLabel: "Nom de la marque *",
    fLabelPh: "ex: U & C, cachet rond",
    fPeriod: "Époque estimée *",
    fPeriodPh: "ex: 1880–1900 env.",
    fStyle: "Type",
    styles: ["Imprimée (transfert)", "Peinte à la main", "En creux", "En relief", "Autre"],
    fDesc: "Description",
    fDescPh: "Lieu d'achat, indices de datation, différences avec des marques proches…",
    photoMark: "Photo de la marque *",
    photoProduct: "Photo de la pièce",
    photoTap: "Toucher pour ajouter une photo",
    photoChange: "Toucher pour changer",
    submit: "Soumettre pour validation",
    submitting: "Envoi…",
    modNote: "Chaque contribution est vérifiée avant publication.",
    tNeed: "Photo de la marque, manufacture, nom et époque requis",
    tSent: "Envoyé — en attente de validation",
    tSaveFail: "Échec de l'enregistrement. Réessayez",
    tPhotoBig: "Échec du chargement de l'image",
    tBackToCatalog: "Retour au répertoire",

    adminTitle: "Contributions en attente",
    adminNoAccess: "Vous n'avez pas accès à cette page",
    adminEmpty: "Aucune contribution en attente",
    adminApprove: "Valider",
    adminReject: "Rejeter",
    adminSubmittedBy: "Contributeur",
    reportTitle: "Signaler cette fiche",
    reportOpts: ["Information inexacte", "Image inappropriée", "Atteinte au droit d'auteur", "Spam / publicité"],
    reportSubmit: "Signaler",
    reportSent: "Signalement reçu. Traitement sous 24 h",
  },
  en: {
    navContribute: "Contribute",
    navLogin: "Sign in",
    navLogout: "Sign out",
    loginTitle: "Create a profile / Sign in",
    loginIntro: "We'll email you a sign-in link. No password needed.",
    loginEmailPh: "Email address",
    loginSend: "Send sign-in link",
    loginSending: "Sending…",
    loginSent: "Email sent. Open the link to finish signing in.",
    loginError: "Failed to send. Please try again.",

    regTitle: "Create a profile",
    regIntro: "A profile to contribute and manage your collection.",
    regUsername: "Username * (letters, digits, _ — min. 3 characters)",
    regUsernamePh: "e.g. mark_hunter",
    regDisplay: "Display name *",
    regDisplayPh: "e.g. Sarah",
    regRegionF: "Region (optional)",
    regRegionPh: "e.g. Occitanie",
    regCreate: "Create profile",
    regCreating: "Creating…",
    regInvalid: "Username: letters/digits/_ (min. 3 characters)",
    regTaken: "That username is taken",
    regNeedBoth: "Username and display name are required",
    regError: "Failed to create. Please try again",

    contribTitle: "Contribute",
    contribSub: "Contribuer au répertoire",
    loginRequired: "A profile is required to contribute",
    needProfile: "Create your profile first",
    fMaker: "Maker *",
    fMakerPh: "Select…",
    fNew: "Other (new maker)",
    fNewPh: "Maker name",
    fLabel: "Mark name *",
    fLabelPh: "e.g. U & C, round stamp",
    fPeriod: "Estimated era *",
    fPeriodPh: "e.g. c. 1880–1900",
    fStyle: "Type",
    styles: ["Printed (transfer)", "Hand-painted", "Impressed", "In relief", "Other"],
    fDesc: "Description",
    fDescPh: "Where you found it, dating clues, differences from similar marks…",
    photoMark: "Photo of the mark *",
    photoProduct: "Photo of the piece",
    photoTap: "Tap to add a photo",
    photoChange: "Tap to change",
    submit: "Submit for review",
    submitting: "Submitting…",
    modNote: "All contributions are reviewed before publication.",
    tNeed: "Mark photo, maker, mark name and era are required",
    tSent: "Submitted — awaiting review",
    tSaveFail: "Save failed. Please try again",
    tPhotoBig: "Couldn't load that image",
    tBackToCatalog: "Back to the reference",

    adminTitle: "Pending contributions",
    adminNoAccess: "You don't have access to this page",
    adminEmpty: "No contributions pending",
    adminApprove: "Approve",
    adminReject: "Reject",
    adminSubmittedBy: "Contributor",
    reportTitle: "Report this entry",
    reportOpts: ["Inaccurate information", "Inappropriate image", "Copyright infringement", "Spam / advertising"],
    reportSubmit: "Report",
    reportSent: "Report received. We'll respond within 24 hours",
  },
};
