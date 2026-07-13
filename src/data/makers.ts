import type { Maker } from "./types";

/* v4プロトタイプ(poincon_app_v4.jsx)から移植したシードデータ。15窯24刻印。 */
export const MAKERS: Maker[] = [
  {
    id: "sarreguemines", name: "Sarreguemines", kana: "サルグミンヌ",
    region: { ja: "ロレーヌ / モゼル県", fr: "Lorraine / Moselle", en: "Lorraine / Moselle" },
    period: "1790–2007",
    blurb: {
      ja: "ウッチュナイダー家が育てた東部フランス最大級の窯。転写プリントのテーブルウェアからマジョリカまで幅広く、ブロカントで最も出会う確率が高い窯のひとつ。",
      fr: "L'une des plus grandes faïenceries de l'Est, portée par la famille Utzschneider. Des services imprimés aux majoliques — la manufacture que l'on croise le plus souvent en brocante.",
      en: "One of eastern France's largest potteries, built up by the Utzschneider family. From transfer-printed tableware to majolica — the maker you're most likely to meet at any brocante.",
    },
    marks: [
      {
        id: "sg-uc", label: "U & C", shape: "circle", period: "1860–1890",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "Utzschneider & Cie の頭文字。円形の中にU&Cと工場名が入る形式は19世紀後半の量産期の定番。",
          fr: "Initiales d'Utzschneider & Cie. Le cachet rond avec U&C et le nom de la fabrique est typique de la grande production de la fin du XIXe.",
          en: "Initials of Utzschneider & Cie. The round stamp with U&C and the factory name is typical of late-19th-century mass production.",
        },
        by: "mimizu", trust: 98,
      },
      {
        id: "sg-obernai", label: "OBERNAI", shape: "oval", period: "1920–1950",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "アルザスの村オベルネの風景を描いた人気シリーズのバックスタンプ。シリーズ名がそのまま刻印に入る。",
          fr: "Cachet de la célèbre série aux scènes villageoises d'Obernai. Le nom du décor figure dans la marque elle-même.",
          en: "Backstamp of the beloved series showing Alsatian village scenes of Obernai. The pattern name appears in the mark itself.",
        },
        by: "colette_81", trust: 91,
      },
      {
        id: "sg-digoin", label: "DIGOIN & SARREGUEMINES", shape: "ribbon", period: "1920–1950",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "ディゴワン工場との併記期。二拠点名が並ぶ刻印は戦間期〜戦後の製造を示す手がかり。",
          fr: "Période de la double mention avec l'usine de Digoin. Les deux noms côte à côte signalent une production de l'entre-deux-guerres ou d'après-guerre.",
          en: "The double-name period with the Digoin factory. Both names side by side point to interwar or postwar production.",
        },
        by: "mimizu", trust: 98,
      },
    ],
  },
  {
    id: "longwy", name: "Longwy", kana: "ロンウィ",
    region: { ja: "ロレーヌ / ムルト＝エ＝モゼル県", fr: "Lorraine / Meurthe-et-Moselle", en: "Lorraine / Meurthe-et-Moselle" },
    period: "1798–",
    blurb: {
      ja: "エマイユ(七宝風の盛り上げ彩色)で世界的に知られる窯。深い青のクラックル地に極彩色の花鳥文が象徴。",
      fr: "Mondialement connue pour ses émaux cloisonnés. Fonds bleus craquelés et décors floraux éclatants en sont la signature.",
      en: "World-famous for its cloisonné-style enamels. Crackled deep-blue grounds with vivid floral decoration are its signature.",
    },
    marks: [
      {
        id: "lw-octo", label: "LONGWY", shape: "octagon", period: "1890–1930",
        style: { ja: "印刷 + 手描き併用", fr: "Imprimée + main", en: "Printed + hand-added" },
        desc: {
          ja: "八角形の枠にLONGWYと入る代表的スタンプ。エマイユ作品にはデコレーター番号が手描きで添えられることが多い。",
          fr: "Le cachet octogonal emblématique. Sur les émaux, un numéro de décorateur peint à la main l'accompagne souvent.",
          en: "The emblematic octagonal stamp. On enamel pieces, a hand-painted decorator number often accompanies it.",
        },
        by: "antiqua_jp", trust: 76,
      },
      {
        id: "lw-primavera", label: "PRIMAVERA LONGWY", shape: "circle", period: "1920–1930",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "百貨店プランタンの工房「プリマヴェラ」向け製造品。アール・デコ期のコラボ刻印で人気が高い。",
          fr: "Production pour l'atelier Primavera du Printemps. Marque de collaboration très recherchée de la période Art déco.",
          en: "Made for Primavera, the design studio of the Printemps department store. A much sought-after Art Deco collaboration mark.",
        },
        by: "colette_81", trust: 91,
      },
    ],
  },
  {
    id: "gien", name: "Gien", kana: "ジアン",
    region: { ja: "サントル / ロワレ県", fr: "Centre / Loiret", en: "Centre / Loiret" },
    period: "1821–",
    blurb: {
      ja: "ロワール河畔の名窯。城館(シャトー)を描いた刻印が時代ごとに変化するため、刻印だけでかなり正確な年代判定ができる希少な窯。",
      fr: "Grande faïencerie des bords de Loire. Sa marque au château évolue à chaque époque — l'une des rares manufactures datables avec précision par la seule marque.",
      en: "The great pottery of the Loire. Its château mark evolves era by era — one of the rare makers you can date precisely from the mark alone.",
    },
    marks: [
      {
        id: "gn-chateau1", label: "GIEN (château I)", shape: "shield", period: "1860–1875",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "塔のある城館図案の初期型。輪郭が簡素で、下部の文字が小さい。",
          fr: "Première version du château à tours. Contours simples, lettrage inférieur discret.",
          en: "The first version of the towered château. Simple outlines, small lettering below.",
        },
        by: "mimizu", trust: 98,
      },
      {
        id: "gn-chateau2", label: "GIEN FRANCE (château II)", shape: "shield", period: "1938–1960",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "「GIEN FRANCE」表記が加わった近代型。輸出対応でFRANCEが入るのは1891年マッキンリー関税法以降の一般則。",
          fr: "Version moderne avec la mention « GIEN FRANCE ». L'ajout du pays répond aux règles d'exportation postérieures au tarif McKinley (1891).",
          en: "The modern version adding “GIEN FRANCE”. Country names on export wares follow the McKinley Tariff of 1891 as a general rule.",
        },
        by: "antiqua_jp", trust: 76,
      },
    ],
  },
  {
    id: "quimper", name: "Quimper (HB / Henriot)", kana: "カンペール",
    region: { ja: "ブルターニュ / フィニステール県", fr: "Bretagne / Finistère", en: "Brittany / Finistère" },
    period: "±1690–",
    blurb: {
      ja: "ブルトン人物文で愛される西の名窯。HB系とHenriot系の刻印が並立し、統合・分離の歴史がそのまま刻印に現れる。",
      fr: "La grande faïencerie bretonne, aimée pour ses personnages en costume. Les marques HB et Henriot coexistent — leur histoire de fusions se lit dans les marques.",
      en: "Brittany's beloved pottery, famous for its costumed figures. HB and Henriot marks coexist — their history of mergers reads directly in the marks.",
    },
    marks: [
      {
        id: "qp-hb", label: "HB QUIMPER", shape: "mono", period: "1883–",
        style: { ja: "手描き", fr: "Peinte à la main", en: "Hand-painted" },
        desc: {
          ja: "HBモノグラム。手描きゆえ個体差が大きく、筆致そのものが工房の証。",
          fr: "Monogramme HB peint à la main. Chaque pièce diffère — le geste du peintre est la signature de l'atelier.",
          en: "The hand-painted HB monogram. Every piece differs — the painter's hand is the workshop's signature.",
        },
        by: "breizh_ko", trust: 84,
      },
      {
        id: "qp-henriot", label: "HENRIOT QUIMPER", shape: "mono", period: "1922–",
        style: { ja: "手描き", fr: "Peinte à la main", en: "Hand-painted" },
        desc: {
          ja: "アンリオ工房が自社名を冠した時期以降の刻印。数字の添え書きは絵付師コード。",
          fr: "Marque au nom complet de l'atelier Henriot. Les chiffres accompagnants codent le peintre.",
          en: "The mark carrying the Henriot workshop's full name. Accompanying numbers code the painter.",
        },
        by: "breizh_ko", trust: 84,
      },
    ],
  },
  {
    id: "luneville", name: "Lunéville (K&G)", kana: "リュネヴィル",
    region: { ja: "ロレーヌ / ムルト＝エ＝モゼル県", fr: "Lorraine / Meurthe-et-Moselle", en: "Lorraine / Meurthe-et-Moselle" },
    period: "±1730–",
    blurb: {
      ja: "ケレール&ゲラン(K&G)体制で知られる古窯。バラ文様「レヴェイユ」は日本の蚤の市ファンにも人気。",
      fr: "Faïencerie ancienne, célèbre sous Keller & Guérin. Le décor à la rose « Réveil » est adoré jusqu'au Japon.",
      en: "An old pottery best known under Keller & Guérin. Its rose pattern “Réveil” is adored as far away as Japan.",
    },
    marks: [
      {
        id: "lv-kg", label: "K & G LUNÉVILLE", shape: "oval", period: "1890–1920",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "楕円枠にK&Gと地名。量産食器に広く使われ、状態の良い個体が今も大量に流通する。",
          fr: "Cadre ovale avec K&G et le nom de la ville. Marque de la grande production — encore très courante en bel état.",
          en: "Oval frame with K&G and the town name. A mass-production mark — still very common in fine condition.",
        },
        by: "mimizu", trust: 98,
      },
    ],
  },
  {
    id: "creil", name: "Creil et Montereau", kana: "クレイユ・エ・モントロー",
    region: { ja: "オー＝ド＝フランス / ウアーズ県ほか", fr: "Hauts-de-France / Oise et Seine-et-Marne", en: "Hauts-de-France / Oise & Seine-et-Marne" },
    period: "1840(合併)–1955",
    blurb: {
      ja: "二つの窯の合併で生まれた大生産地。「テール・ド・フェール(鉄の土)」の商標で知られる硬質陶器が代表。経営会社が時代ごとに替わったため、刻印に入る社名がそのまま年代の物差しになる、収集家泣かせで収集家孝行な窯。",
      fr: "Née de la fusion de deux manufactures, célèbre pour sa faïence fine « Terre de Fer ». Les sociétés exploitantes se succèdent : le nom porté par la marque devient ainsi une véritable échelle de datation.",
      en: "Born from the merger of two potteries, famous for its “Terre de Fer” ironstone-type ware. Successive operating companies mean the name in the mark doubles as a dating scale.",
    },
    marks: [
      {
        id: "cm-llt", label: "LL & T", shape: "mono", period: "1825–1833",
        style: { ja: "型押し / 印刷", fr: "En creux / imprimée", en: "Impressed / printed" },
        desc: {
          ja: "ルイ・ルブフとエティエンヌ・ティボー(Louis Lebeuf et Étienne Thibault)の頭文字。19世紀初頭、合併以前のモントロー期を示す最初期の刻印。",
          fr: "Initiales de Louis Lebeuf et Étienne Thibault. Marque du début du XIXe, antérieure à la fusion — la plus précoce de la série.",
          en: "Initials of Louis Lebeuf and Étienne Thibault. An early-19th-century mark predating the merger — the earliest of the series.",
        },
        by: "mimizu", trust: 98,
      },
      {
        id: "cm-lmc", label: "LM & Cie", shape: "circle", period: "1840–1876",
        style: { ja: "型押し + 印刷", fr: "En creux + imprimée", en: "Impressed + printed" },
        desc: {
          ja: "ルブフ・ミリエ商会(Lebeuf, Milliet & Cie)期の刻印。クレイユとモントローが合併した最盛期にあたり、型押しと転写印の二段構えが多い。",
          fr: "Marque de la période Lebeuf, Milliet & Cie — l'apogée de la maison fusionnée. Souvent doublée : cachet en creux dans la pâte + transfert.",
          en: "Mark of the Lebeuf, Milliet & Cie era — the height of the merged firm. Often doubled: an impressed stamp in the body plus a transfer.",
        },
        by: "colette_81", trust: 91,
      },
      {
        id: "cm-barluet", label: "BARLUET & Cie", shape: "oval", period: "1876–1884",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "バルリュエ商会期の刻印。ルブフ・ミリエ商会の後、株式会社化の前という短い過渡期にあたる。モントローでの製造を示す。",
          fr: "Marque de la période Barluet & Cie : bref intermède entre Lebeuf-Milliet et la société anonyme. Production de Montereau.",
          en: "Mark of the Barluet & Cie period: a brief interlude between Lebeuf-Milliet and the joint-stock company. Montereau production.",
        },
        by: "antiqua_jp", trust: 76,
      },
      {
        id: "cm-sa", label: "CREIL & MONTEREAU (S.A.)", shape: "ribbon", period: "1884–1920",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "株式会社クレイユ・エ・モントロー(Société Anonyme)期の刻印。二都市名を並べた形式で、メダル図案やTERRE DE FER表記と組み合わさることが多い。",
          fr: "Marque de la Société Anonyme Creil & Montereau. Les deux villes y figurent côte à côte, souvent avec médailles ou mention TERRE DE FER.",
          en: "Mark of the Société Anonyme Creil & Montereau. Both towns appear side by side, often with medals or a TERRE DE FER mention.",
        },
        by: "mimizu", trust: 98,
      },
      {
        id: "cm-tdf", label: "TERRE DE FER", shape: "ribbon", period: "1870–1920",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "硬質陶器の商標名がそのまま刻印に。メダル図案と組み合わさることが多い。",
          fr: "Le nom commercial de la faïence fine, souvent associé aux médailles d'exposition.",
          en: "The trade name of the ironstone-type ware, often paired with exhibition medal devices.",
        },
        by: "antiqua_jp", trust: 76,
      },
    ],
  },
  {
    id: "digoin", name: "Digoin", kana: "ディゴワン",
    region: { ja: "ブルゴーニュ / ソーヌ＝エ＝ロワール県", fr: "Bourgogne / Saône-et-Loire", en: "Burgundy / Saône-et-Loire" },
    period: "1875–",
    blurb: {
      ja: "ソーヌ川流域の量産窯。19世紀末からサルグミンヌ傘下に入り、日常食器の大生産地として20世紀のフランスの食卓を支えた。カフェオレボウルの定番。",
      fr: "Grande manufacture de la vallée de la Saône, passée dans le giron de Sarreguemines à la fin du XIXe. Elle a nourri les tables françaises du XXe siècle — le bol de café au lait par excellence.",
      en: "A high-volume pottery on the Saône, absorbed into the Sarreguemines group in the late 19th century. It supplied 20th-century French tables — the classic café-au-lait bowl maker.",
    },
    marks: [
      {
        id: "dg-digoin", label: "DIGOIN", shape: "circle", period: "1875–1920頃",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "ディゴワン単独名の刻印。サルグミンヌとの併記が始まる前、および並行期の製造を示す。",
          fr: "Marque au seul nom de Digoin, antérieure ou parallèle à la double mention avec Sarreguemines.",
          en: "The Digoin-only mark, used before and alongside the double mention with Sarreguemines.",
        },
        by: "mimizu", trust: 98,
      },
    ],
  },
  {
    id: "badonviller", name: "Badonviller", kana: "バドンヴィレー",
    region: { ja: "ロレーヌ / ムルト＝エ＝モゼル県", fr: "Lorraine / Meurthe-et-Moselle", en: "Lorraine / Meurthe-et-Moselle" },
    period: "1897–1990頃",
    blurb: {
      ja: "1897年、テオフィル・フェナル創業のロレーヌの窯。アール・デコ期の幾何学的で大胆な絵付けで人気が高く、後にサン・クレマンと同じフェナル家グループを形成した。",
      fr: "Fondée en 1897 par Théophile Fenal. Très recherchée pour ses décors géométriques Art déco, elle rejoindra Saint-Clément au sein du groupe familial Fenal.",
      en: "Founded in 1897 by Théophile Fenal. Prized for its bold geometric Art Deco decoration, it later joined Saint-Clément within the Fenal family group.",
    },
    marks: [
      {
        id: "bv-badon", label: "BADONVILLER", shape: "oval", period: "1900頃–1930年代",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "地名入りの標準刻印。フェナル家経営期の量産食器に広く使われた。",
          fr: "Marque courante au nom de la ville, largement utilisée sur la production Fenal.",
          en: "The standard place-name mark, widely used on the Fenal-era production.",
        },
        by: "colette_81", trust: 91,
      },
    ],
  },
  {
    id: "stclement", name: "Saint-Clément", kana: "サン・クレマン",
    region: { ja: "ロレーヌ / ムルト＝エ＝モゼル県", fr: "Lorraine / Meurthe-et-Moselle", en: "Lorraine / Meurthe-et-Moselle" },
    period: "1758–",
    blurb: {
      ja: "1758年創業の古窯。18世紀のロカイユ装飾から、19世紀末エミール・ガレゆかりの動物置物まで幅広い。現在も雄鶏やカエルのフィギュアで知られる。",
      fr: "Manufacture fondée en 1758. Du décor rocaille du XVIIIe aux animaux liés à Émile Gallé à la fin du XIXe — encore célèbre pour ses coqs et grenouilles.",
      en: "Founded in 1758. From 18th-century rocaille decoration to the animal figures linked to Émile Gallé — still famous for its roosters and frogs.",
    },
    marks: [
      {
        id: "sc-script", label: "St. Clément", shape: "oval", period: "19世紀末–20世紀",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "筆記体風の地名刻印。近代量産期の食器・置物に使われた。",
          fr: "Marque au nom de la ville en écriture cursive, sur la production moderne.",
          en: "The cursive place-name mark used on the modern production.",
        },
        by: "breizh_ko", trust: 84,
      },
    ],
  },
  {
    id: "niderviller", name: "Niderviller", kana: "ニデルヴィレー",
    region: { ja: "ロレーヌ / モゼル県", fr: "Lorraine / Moselle", en: "Lorraine / Moselle" },
    period: "1735–",
    blurb: {
      ja: "1735年創業。ボワイエルレ男爵、次いでキュスティーヌ伯の時代に最盛期を迎えたロレーヌの名窯。18世紀創業で今も操業する数少ない窯のひとつ。",
      fr: "Fondée en 1735, à son apogée sous le baron de Beyerlé puis le comte de Custine. L'une des rares manufactures du XVIIIe encore en activité.",
      en: "Founded in 1735, at its height under Baron de Beyerlé and then the Comte de Custine. One of the few 18th-century potteries still in operation.",
    },
    marks: [
      {
        id: "nv-cc", label: "CC", shape: "mono", period: "1770頃–1793",
        style: { ja: "手描き", fr: "Peinte à la main", en: "Hand-painted" },
        desc: {
          ja: "キュスティーヌ伯の頭文字を組んだ二重Cのモノグラム。手描きで釉下に入る。",
          fr: "Monogramme aux deux C entrelacés du comte de Custine, peint sous glaçure.",
          en: "The interlaced double-C monogram of the Comte de Custine, painted under the glaze.",
        },
        by: "antiqua_jp", trust: 76,
      },
    ],
  },
  {
    id: "orchies", name: "Orchies", kana: "オルシー",
    region: { ja: "オー＝ド＝フランス / ノール県", fr: "Hauts-de-France / Nord", en: "Hauts-de-France / Nord" },
    period: "1886–1960年代",
    blurb: {
      ja: "北フランス・ノール県の窯。「ムーラン・デ・ルー(狼の風車)」の商標で知られ、アール・デコ期のバルボティーヌや鮮やかな絵付けが人気。",
      fr: "Manufacture du Nord, connue sous la marque « Moulin des Loups ». Ses barbotines et décors éclatants de la période Art déco sont très recherchés.",
      en: "A pottery of the Nord, known under the “Moulin des Loups” brand. Its Art Deco barbotine wares and vivid decoration are much sought after.",
    },
    marks: [
      {
        id: "or-moulin", label: "ORCHIES", shape: "circle", period: "1920年代–1950年代",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "風車の図案と地名を組み合わせた商標刻印。北仏デコ様式の代表格。",
          fr: "Marque associant le moulin et le nom de la ville — emblème du style déco du Nord.",
          en: "The mark combining the windmill device with the town name — emblematic of northern Deco style.",
        },
        by: "puce_hunter", trust: 62,
      },
    ],
  },
  {
    id: "stamand", name: "Saint-Amand (Céranord)", kana: "サン・タマン",
    region: { ja: "オー＝ド＝フランス / ノール県", fr: "Hauts-de-France / Nord", en: "Hauts-de-France / Nord" },
    period: "1896頃–1960年代",
    blurb: {
      ja: "ノール県サン・タマン＝レ＝ゾーの窯業地。19世紀末から硬質陶器を量産し、20世紀には「セラノール」ブランドでアール・デコ食器を展開した。",
      fr: "Centre faïencier de Saint-Amand-les-Eaux. Grande production de faïence fine dès la fin du XIXe, puis services Art déco sous la marque « Céranord ».",
      en: "The pottery centre of Saint-Amand-les-Eaux. Mass-produced ironstone-type ware from the late 19th century, then Art Deco services under the “Céranord” brand.",
    },
    marks: [
      {
        id: "sa-stamand", label: "ST AMAND", shape: "ribbon", period: "1896–1930年代",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "地名入りの量産期刻印。テーブルウェア全般に広く使われた。",
          fr: "Marque courante de la grande production, sur toute la gamme de table.",
          en: "The common mass-production mark, used across the tableware range.",
        },
        by: "colette_81", trust: 91,
      },
    ],
  },
  {
    id: "moustiers", name: "Moustiers", kana: "ムスティエ",
    region: { ja: "プロヴァンス / アルプ＝ド＝オート＝プロヴァンス県", fr: "Provence / Alpes-de-Haute-Provence", en: "Provence / Alpes-de-Haute-Provence" },
    period: "17世紀末–",
    blurb: {
      ja: "プロヴァンスの山あいで17世紀末に花開いた高級ファイアンスの聖地。クレリッシー家のグロテスク文や、オレリス期の多彩色で知られる。",
      fr: "Haut lieu de la grande faïence, épanoui à la fin du XVIIe dans les Alpes provençales. Célèbre pour les grotesques des Clérissy et la polychromie de l'époque Olérys.",
      en: "The Provençal shrine of fine faïence, flowering in the late 17th century. Famous for the Clérissy grotesques and the polychromy of the Olérys era.",
    },
    marks: [
      {
        id: "mo-ol", label: "OL", shape: "mono", period: "1738頃–1790頃",
        style: { ja: "手描き", fr: "Peinte à la main", en: "Hand-painted" },
        desc: {
          ja: "工房主オレリスらの組み文字を手描きした刻印。無印の個体も非常に多い。",
          fr: "Monogramme peint des ateliers d'Olérys. De très nombreuses pièces restent non marquées.",
          en: "The painted monogram of the Olérys workshops. A great many pieces remain unmarked.",
        },
        by: "breizh_ko", trust: 84,
      },
    ],
  },
  {
    id: "choisy", name: "Choisy-le-Roi (HB & Cie)", kana: "ショワジー＝ル＝ロワ",
    region: { ja: "イル＝ド＝フランス / ヴァル＝ド＝マルヌ県", fr: "Île-de-France / Val-de-Marne", en: "Île-de-France / Val-de-Marne" },
    period: "1804–1938",
    blurb: {
      ja: "パリ南郊の窯。オタン・ブーランジェ商会(HB & Cie)の時代に建築陶器から食器まで手がけ、ジャポニスム期の意匠でも知られる。",
      fr: "Manufacture du sud parisien. Sous Hautin Boulenger & Cie, elle produit du carreau architectural à la vaisselle, avec de beaux décors japonisants.",
      en: "A pottery south of Paris. Under Hautin Boulenger & Cie it made everything from architectural ceramics to tableware, with notable Japoniste designs.",
    },
    marks: [
      {
        id: "ch-hb", label: "HB & Cie", shape: "shield", period: "1880頃–1930年代",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "商会の頭文字と地名を組み合わせた刻印。近代量産期の主力マーク。",
          fr: "Marque aux initiales de la maison avec le nom de la ville — la marque phare de l'ère industrielle.",
          en: "The mark pairing the firm's initials with the town name — the flagship mark of the industrial era.",
        },
        by: "mimizu", trust: 98,
      },
    ],
  },
  {
    id: "longchamp", name: "Longchamp", kana: "ロンシャン",
    region: { ja: "ブルゴーニュ / コート＝ドール県", fr: "Bourgogne / Côte-d'Or", en: "Burgundy / Côte-d'Or" },
    period: "1868–",
    blurb: {
      ja: "ブルゴーニュの窯。テール・ド・フェールとバルボティーヌ(貼花装飾)のデザート皿で知られ、葉文様の皿は日本の蚤の市ファンにも人気が高い。",
      fr: "Manufacture bourguignonne, connue pour sa terre de fer et ses barbotines. Ses assiettes à feuillages sont adorées jusque sur les puces japonaises.",
      en: "A Burgundian pottery known for its ironstone-type ware and barbotine dessert plates. Its leaf-pattern plates are beloved as far as Japanese flea-market circles.",
    },
    marks: [
      {
        id: "lc-longchamp", label: "LONGCHAMP", shape: "oval", period: "1875頃–1930年代",
        style: { ja: "印刷(転写)", fr: "Imprimée (transfert)", en: "Printed (transfer)" },
        desc: {
          ja: "地名入りの標準刻印。TERRE DE FER表記を伴うことが多い。",
          fr: "Marque courante au nom de la ville, souvent accompagnée de la mention TERRE DE FER.",
          en: "The standard place-name mark, often accompanied by a TERRE DE FER mention.",
        },
        by: "puce_hunter", trust: 62,
      },
    ],
  },
];

export function getMaker(id: string) {
  return MAKERS.find((m) => m.id === id);
}

export function getMark(makerId: string, markId: string) {
  const maker = getMaker(makerId);
  const mark = maker?.marks.find((m) => m.id === markId);
  return maker && mark ? { maker, mark } : undefined;
}
