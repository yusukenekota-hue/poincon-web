-- POINÇON シードデータ（scripts/gen-seed.ts で自動生成。手編集しないこと）
-- schema.sql 実行後にこのファイルを実行してください。

begin;

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'sarreguemines', 'Sarreguemines', 'サルグミンヌ',
  'ロレーヌ / モゼル県', 'Lorraine / Moselle', 'Lorraine / Moselle', '1790–2007',
  'ウッチュナイダー家が育てた東部フランス最大級の窯。転写プリントのテーブルウェアからマジョリカまで幅広く、ブロカントで最も出会う確率が高い窯のひとつ。', 'L''une des plus grandes faïenceries de l''Est, portée par la famille Utzschneider. Des services imprimés aux majoliques — la manufacture que l''on croise le plus souvent en brocante.', 'One of eastern France''s largest potteries, built up by the Utzschneider family. From transfer-printed tableware to majolica — the maker you''re most likely to meet at any brocante.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'sarreguemines'), 'sg-uc', 'U & C', 'circle', '1860–1890',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  'Utzschneider & Cie の頭文字。円形の中にU&Cと工場名が入る形式は19世紀後半の量産期の定番。', 'Initiales d''Utzschneider & Cie. Le cachet rond avec U&C et le nom de la fabrique est typique de la grande production de la fin du XIXe.', 'Initials of Utzschneider & Cie. The round stamp with U&C and the factory name is typical of late-19th-century mass production.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'sarreguemines'), 'sg-obernai', 'OBERNAI', 'oval', '1920–1950',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  'アルザスの村オベルネの風景を描いた人気シリーズのバックスタンプ。シリーズ名がそのまま刻印に入る。', 'Cachet de la célèbre série aux scènes villageoises d''Obernai. Le nom du décor figure dans la marque elle-même.', 'Backstamp of the beloved series showing Alsatian village scenes of Obernai. The pattern name appears in the mark itself.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'sarreguemines'), 'sg-digoin', 'DIGOIN & SARREGUEMINES', 'ribbon', '1920–1950',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  'ディゴワン工場との併記期。二拠点名が並ぶ刻印は戦間期〜戦後の製造を示す手がかり。', 'Période de la double mention avec l''usine de Digoin. Les deux noms côte à côte signalent une production de l''entre-deux-guerres ou d''après-guerre.', 'The double-name period with the Digoin factory. Both names side by side point to interwar or postwar production.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'longwy', 'Longwy', 'ロンウィ',
  'ロレーヌ / ムルト＝エ＝モゼル県', 'Lorraine / Meurthe-et-Moselle', 'Lorraine / Meurthe-et-Moselle', '1798–',
  'エマイユ(七宝風の盛り上げ彩色)で世界的に知られる窯。深い青のクラックル地に極彩色の花鳥文が象徴。', 'Mondialement connue pour ses émaux cloisonnés. Fonds bleus craquelés et décors floraux éclatants en sont la signature.', 'World-famous for its cloisonné-style enamels. Crackled deep-blue grounds with vivid floral decoration are its signature.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'longwy'), 'lw-octo', 'LONGWY', 'octagon', '1890–1930',
  '印刷 + 手描き併用', 'Imprimée + main', 'Printed + hand-added',
  '八角形の枠にLONGWYと入る代表的スタンプ。エマイユ作品にはデコレーター番号が手描きで添えられることが多い。', 'Le cachet octogonal emblématique. Sur les émaux, un numéro de décorateur peint à la main l''accompagne souvent.', 'The emblematic octagonal stamp. On enamel pieces, a hand-painted decorator number often accompanies it.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'longwy'), 'lw-primavera', 'PRIMAVERA LONGWY', 'circle', '1920–1930',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '百貨店プランタンの工房「プリマヴェラ」向け製造品。アール・デコ期のコラボ刻印で人気が高い。', 'Production pour l''atelier Primavera du Printemps. Marque de collaboration très recherchée de la période Art déco.', 'Made for Primavera, the design studio of the Printemps department store. A much sought-after Art Deco collaboration mark.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'gien', 'Gien', 'ジアン',
  'サントル / ロワレ県', 'Centre / Loiret', 'Centre / Loiret', '1821–',
  'ロワール河畔の名窯。城館(シャトー)を描いた刻印が時代ごとに変化するため、刻印だけでかなり正確な年代判定ができる希少な窯。', 'Grande faïencerie des bords de Loire. Sa marque au château évolue à chaque époque — l''une des rares manufactures datables avec précision par la seule marque.', 'The great pottery of the Loire. Its château mark evolves era by era — one of the rare makers you can date precisely from the mark alone.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'gien'), 'gn-chateau1', 'GIEN (château I)', 'shield', '1860–1875',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '塔のある城館図案の初期型。輪郭が簡素で、下部の文字が小さい。', 'Première version du château à tours. Contours simples, lettrage inférieur discret.', 'The first version of the towered château. Simple outlines, small lettering below.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'gien'), 'gn-chateau2', 'GIEN FRANCE (château II)', 'shield', '1938–1960',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '「GIEN FRANCE」表記が加わった近代型。輸出対応でFRANCEが入るのは1891年マッキンリー関税法以降の一般則。', 'Version moderne avec la mention « GIEN FRANCE ». L''ajout du pays répond aux règles d''exportation postérieures au tarif McKinley (1891).', 'The modern version adding “GIEN FRANCE”. Country names on export wares follow the McKinley Tariff of 1891 as a general rule.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'quimper', 'Quimper (HB / Henriot)', 'カンペール',
  'ブルターニュ / フィニステール県', 'Bretagne / Finistère', 'Brittany / Finistère', '±1690–',
  'ブルトン人物文で愛される西の名窯。HB系とHenriot系の刻印が並立し、統合・分離の歴史がそのまま刻印に現れる。', 'La grande faïencerie bretonne, aimée pour ses personnages en costume. Les marques HB et Henriot coexistent — leur histoire de fusions se lit dans les marques.', 'Brittany''s beloved pottery, famous for its costumed figures. HB and Henriot marks coexist — their history of mergers reads directly in the marks.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'quimper'), 'qp-hb', 'HB QUIMPER', 'mono', '1883–',
  '手描き', 'Peinte à la main', 'Hand-painted',
  'HBモノグラム。手描きゆえ個体差が大きく、筆致そのものが工房の証。', 'Monogramme HB peint à la main. Chaque pièce diffère — le geste du peintre est la signature de l''atelier.', 'The hand-painted HB monogram. Every piece differs — the painter''s hand is the workshop''s signature.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'quimper'), 'qp-henriot', 'HENRIOT QUIMPER', 'mono', '1922–',
  '手描き', 'Peinte à la main', 'Hand-painted',
  'アンリオ工房が自社名を冠した時期以降の刻印。数字の添え書きは絵付師コード。', 'Marque au nom complet de l''atelier Henriot. Les chiffres accompagnants codent le peintre.', 'The mark carrying the Henriot workshop''s full name. Accompanying numbers code the painter.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'luneville', 'Lunéville (K&G)', 'リュネヴィル',
  'ロレーヌ / ムルト＝エ＝モゼル県', 'Lorraine / Meurthe-et-Moselle', 'Lorraine / Meurthe-et-Moselle', '±1730–',
  'ケレール&ゲラン(K&G)体制で知られる古窯。バラ文様「レヴェイユ」は日本の蚤の市ファンにも人気。', 'Faïencerie ancienne, célèbre sous Keller & Guérin. Le décor à la rose « Réveil » est adoré jusqu''au Japon.', 'An old pottery best known under Keller & Guérin. Its rose pattern “Réveil” is adored as far away as Japan.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'luneville'), 'lv-kg', 'K & G LUNÉVILLE', 'oval', '1890–1920',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '楕円枠にK&Gと地名。量産食器に広く使われ、状態の良い個体が今も大量に流通する。', 'Cadre ovale avec K&G et le nom de la ville. Marque de la grande production — encore très courante en bel état.', 'Oval frame with K&G and the town name. A mass-production mark — still very common in fine condition.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'creil', 'Creil et Montereau', 'クレイユ・エ・モントロー',
  'オー＝ド＝フランス / ウアーズ県ほか', 'Hauts-de-France / Oise et Seine-et-Marne', 'Hauts-de-France / Oise & Seine-et-Marne', '1840(合併)–1955',
  '二つの窯の合併で生まれた大生産地。「テール・ド・フェール(鉄の土)」の商標で知られる硬質陶器が代表。経営会社が時代ごとに替わったため、刻印に入る社名がそのまま年代の物差しになる、収集家泣かせで収集家孝行な窯。', 'Née de la fusion de deux manufactures, célèbre pour sa faïence fine « Terre de Fer ». Les sociétés exploitantes se succèdent : le nom porté par la marque devient ainsi une véritable échelle de datation.', 'Born from the merger of two potteries, famous for its “Terre de Fer” ironstone-type ware. Successive operating companies mean the name in the mark doubles as a dating scale.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'creil'), 'cm-llt', 'LL & T', 'mono', '1825–1833',
  '型押し / 印刷', 'En creux / imprimée', 'Impressed / printed',
  'ルイ・ルブフとエティエンヌ・ティボー(Louis Lebeuf et Étienne Thibault)の頭文字。19世紀初頭、合併以前のモントロー期を示す最初期の刻印。', 'Initiales de Louis Lebeuf et Étienne Thibault. Marque du début du XIXe, antérieure à la fusion — la plus précoce de la série.', 'Initials of Louis Lebeuf and Étienne Thibault. An early-19th-century mark predating the merger — the earliest of the series.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'creil'), 'cm-lmc', 'LM & Cie', 'circle', '1840–1876',
  '型押し + 印刷', 'En creux + imprimée', 'Impressed + printed',
  'ルブフ・ミリエ商会(Lebeuf, Milliet & Cie)期の刻印。クレイユとモントローが合併した最盛期にあたり、型押しと転写印の二段構えが多い。', 'Marque de la période Lebeuf, Milliet & Cie — l''apogée de la maison fusionnée. Souvent doublée : cachet en creux dans la pâte + transfert.', 'Mark of the Lebeuf, Milliet & Cie era — the height of the merged firm. Often doubled: an impressed stamp in the body plus a transfer.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'creil'), 'cm-barluet', 'BARLUET & Cie', 'oval', '1876–1884',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  'バルリュエ商会期の刻印。ルブフ・ミリエ商会の後、株式会社化の前という短い過渡期にあたる。モントローでの製造を示す。', 'Marque de la période Barluet & Cie : bref intermède entre Lebeuf-Milliet et la société anonyme. Production de Montereau.', 'Mark of the Barluet & Cie period: a brief interlude between Lebeuf-Milliet and the joint-stock company. Montereau production.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'creil'), 'cm-sa', 'CREIL & MONTEREAU (S.A.)', 'ribbon', '1884–1920',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '株式会社クレイユ・エ・モントロー(Société Anonyme)期の刻印。二都市名を並べた形式で、メダル図案やTERRE DE FER表記と組み合わさることが多い。', 'Marque de la Société Anonyme Creil & Montereau. Les deux villes y figurent côte à côte, souvent avec médailles ou mention TERRE DE FER.', 'Mark of the Société Anonyme Creil & Montereau. Both towns appear side by side, often with medals or a TERRE DE FER mention.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'creil'), 'cm-tdf', 'TERRE DE FER', 'ribbon', '1870–1920',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '硬質陶器の商標名がそのまま刻印に。メダル図案と組み合わさることが多い。', 'Le nom commercial de la faïence fine, souvent associé aux médailles d''exposition.', 'The trade name of the ironstone-type ware, often paired with exhibition medal devices.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'digoin', 'Digoin', 'ディゴワン',
  'ブルゴーニュ / ソーヌ＝エ＝ロワール県', 'Bourgogne / Saône-et-Loire', 'Burgundy / Saône-et-Loire', '1875–',
  'ソーヌ川流域の量産窯。19世紀末からサルグミンヌ傘下に入り、日常食器の大生産地として20世紀のフランスの食卓を支えた。カフェオレボウルの定番。', 'Grande manufacture de la vallée de la Saône, passée dans le giron de Sarreguemines à la fin du XIXe. Elle a nourri les tables françaises du XXe siècle — le bol de café au lait par excellence.', 'A high-volume pottery on the Saône, absorbed into the Sarreguemines group in the late 19th century. It supplied 20th-century French tables — the classic café-au-lait bowl maker.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'digoin'), 'dg-digoin', 'DIGOIN', 'circle', '1875–1920頃',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  'ディゴワン単独名の刻印。サルグミンヌとの併記が始まる前、および並行期の製造を示す。', 'Marque au seul nom de Digoin, antérieure ou parallèle à la double mention avec Sarreguemines.', 'The Digoin-only mark, used before and alongside the double mention with Sarreguemines.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'badonviller', 'Badonviller', 'バドンヴィレー',
  'ロレーヌ / ムルト＝エ＝モゼル県', 'Lorraine / Meurthe-et-Moselle', 'Lorraine / Meurthe-et-Moselle', '1897–1990頃',
  '1897年、テオフィル・フェナル創業のロレーヌの窯。アール・デコ期の幾何学的で大胆な絵付けで人気が高く、後にサン・クレマンと同じフェナル家グループを形成した。', 'Fondée en 1897 par Théophile Fenal. Très recherchée pour ses décors géométriques Art déco, elle rejoindra Saint-Clément au sein du groupe familial Fenal.', 'Founded in 1897 by Théophile Fenal. Prized for its bold geometric Art Deco decoration, it later joined Saint-Clément within the Fenal family group.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'badonviller'), 'bv-badon', 'BADONVILLER', 'oval', '1900頃–1930年代',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '地名入りの標準刻印。フェナル家経営期の量産食器に広く使われた。', 'Marque courante au nom de la ville, largement utilisée sur la production Fenal.', 'The standard place-name mark, widely used on the Fenal-era production.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'stclement', 'Saint-Clément', 'サン・クレマン',
  'ロレーヌ / ムルト＝エ＝モゼル県', 'Lorraine / Meurthe-et-Moselle', 'Lorraine / Meurthe-et-Moselle', '1758–',
  '1758年創業の古窯。18世紀のロカイユ装飾から、19世紀末エミール・ガレゆかりの動物置物まで幅広い。現在も雄鶏やカエルのフィギュアで知られる。', 'Manufacture fondée en 1758. Du décor rocaille du XVIIIe aux animaux liés à Émile Gallé à la fin du XIXe — encore célèbre pour ses coqs et grenouilles.', 'Founded in 1758. From 18th-century rocaille decoration to the animal figures linked to Émile Gallé — still famous for its roosters and frogs.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'stclement'), 'sc-script', 'St. Clément', 'oval', '19世紀末–20世紀',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '筆記体風の地名刻印。近代量産期の食器・置物に使われた。', 'Marque au nom de la ville en écriture cursive, sur la production moderne.', 'The cursive place-name mark used on the modern production.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'niderviller', 'Niderviller', 'ニデルヴィレー',
  'ロレーヌ / モゼル県', 'Lorraine / Moselle', 'Lorraine / Moselle', '1735–',
  '1735年創業。ボワイエルレ男爵、次いでキュスティーヌ伯の時代に最盛期を迎えたロレーヌの名窯。18世紀創業で今も操業する数少ない窯のひとつ。', 'Fondée en 1735, à son apogée sous le baron de Beyerlé puis le comte de Custine. L''une des rares manufactures du XVIIIe encore en activité.', 'Founded in 1735, at its height under Baron de Beyerlé and then the Comte de Custine. One of the few 18th-century potteries still in operation.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'niderviller'), 'nv-cc', 'CC', 'mono', '1770頃–1793',
  '手描き', 'Peinte à la main', 'Hand-painted',
  'キュスティーヌ伯の頭文字を組んだ二重Cのモノグラム。手描きで釉下に入る。', 'Monogramme aux deux C entrelacés du comte de Custine, peint sous glaçure.', 'The interlaced double-C monogram of the Comte de Custine, painted under the glaze.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'orchies', 'Orchies', 'オルシー',
  'オー＝ド＝フランス / ノール県', 'Hauts-de-France / Nord', 'Hauts-de-France / Nord', '1886–1960年代',
  '北フランス・ノール県の窯。「ムーラン・デ・ルー(狼の風車)」の商標で知られ、アール・デコ期のバルボティーヌや鮮やかな絵付けが人気。', 'Manufacture du Nord, connue sous la marque « Moulin des Loups ». Ses barbotines et décors éclatants de la période Art déco sont très recherchés.', 'A pottery of the Nord, known under the “Moulin des Loups” brand. Its Art Deco barbotine wares and vivid decoration are much sought after.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'orchies'), 'or-moulin', 'ORCHIES', 'circle', '1920年代–1950年代',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '風車の図案と地名を組み合わせた商標刻印。北仏デコ様式の代表格。', 'Marque associant le moulin et le nom de la ville — emblème du style déco du Nord.', 'The mark combining the windmill device with the town name — emblematic of northern Deco style.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'stamand', 'Saint-Amand (Céranord)', 'サン・タマン',
  'オー＝ド＝フランス / ノール県', 'Hauts-de-France / Nord', 'Hauts-de-France / Nord', '1896頃–1960年代',
  'ノール県サン・タマン＝レ＝ゾーの窯業地。19世紀末から硬質陶器を量産し、20世紀には「セラノール」ブランドでアール・デコ食器を展開した。', 'Centre faïencier de Saint-Amand-les-Eaux. Grande production de faïence fine dès la fin du XIXe, puis services Art déco sous la marque « Céranord ».', 'The pottery centre of Saint-Amand-les-Eaux. Mass-produced ironstone-type ware from the late 19th century, then Art Deco services under the “Céranord” brand.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'stamand'), 'sa-stamand', 'ST AMAND', 'ribbon', '1896–1930年代',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '地名入りの量産期刻印。テーブルウェア全般に広く使われた。', 'Marque courante de la grande production, sur toute la gamme de table.', 'The common mass-production mark, used across the tableware range.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'moustiers', 'Moustiers', 'ムスティエ',
  'プロヴァンス / アルプ＝ド＝オート＝プロヴァンス県', 'Provence / Alpes-de-Haute-Provence', 'Provence / Alpes-de-Haute-Provence', '17世紀末–',
  'プロヴァンスの山あいで17世紀末に花開いた高級ファイアンスの聖地。クレリッシー家のグロテスク文や、オレリス期の多彩色で知られる。', 'Haut lieu de la grande faïence, épanoui à la fin du XVIIe dans les Alpes provençales. Célèbre pour les grotesques des Clérissy et la polychromie de l''époque Olérys.', 'The Provençal shrine of fine faïence, flowering in the late 17th century. Famous for the Clérissy grotesques and the polychromy of the Olérys era.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'moustiers'), 'mo-ol', 'OL', 'mono', '1738頃–1790頃',
  '手描き', 'Peinte à la main', 'Hand-painted',
  '工房主オレリスらの組み文字を手描きした刻印。無印の個体も非常に多い。', 'Monogramme peint des ateliers d''Olérys. De très nombreuses pièces restent non marquées.', 'The painted monogram of the Olérys workshops. A great many pieces remain unmarked.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'choisy', 'Choisy-le-Roi (HB & Cie)', 'ショワジー＝ル＝ロワ',
  'イル＝ド＝フランス / ヴァル＝ド＝マルヌ県', 'Île-de-France / Val-de-Marne', 'Île-de-France / Val-de-Marne', '1804–1938',
  'パリ南郊の窯。オタン・ブーランジェ商会(HB & Cie)の時代に建築陶器から食器まで手がけ、ジャポニスム期の意匠でも知られる。', 'Manufacture du sud parisien. Sous Hautin Boulenger & Cie, elle produit du carreau architectural à la vaisselle, avec de beaux décors japonisants.', 'A pottery south of Paris. Under Hautin Boulenger & Cie it made everything from architectural ceramics to tableware, with notable Japoniste designs.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'choisy'), 'ch-hb', 'HB & Cie', 'shield', '1880頃–1930年代',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '商会の頭文字と地名を組み合わせた刻印。近代量産期の主力マーク。', 'Marque aux initiales de la maison avec le nom de la ville — la marque phare de l''ère industrielle.', 'The mark pairing the firm''s initials with the town name — the flagship mark of the industrial era.'
);

insert into makers (slug, name, kana, region_ja, region_fr, region_en, period, blurb_ja, blurb_fr, blurb_en) values (
  'longchamp', 'Longchamp', 'ロンシャン',
  'ブルゴーニュ / コート＝ドール県', 'Bourgogne / Côte-d''Or', 'Burgundy / Côte-d''Or', '1868–',
  'ブルゴーニュの窯。テール・ド・フェールとバルボティーヌ(貼花装飾)のデザート皿で知られ、葉文様の皿は日本の蚤の市ファンにも人気が高い。', 'Manufacture bourguignonne, connue pour sa terre de fer et ses barbotines. Ses assiettes à feuillages sont adorées jusque sur les puces japonaises.', 'A Burgundian pottery known for its ironstone-type ware and barbotine dessert plates. Its leaf-pattern plates are beloved as far as Japanese flea-market circles.'
);
insert into marks (maker_id, slug, label, shape, period, style_ja, style_fr, style_en, desc_ja, desc_fr, desc_en) values (
  (select id from makers where slug = 'longchamp'), 'lc-longchamp', 'LONGCHAMP', 'oval', '1875頃–1930年代',
  '印刷(転写)', 'Imprimée (transfert)', 'Printed (transfer)',
  '地名入りの標準刻印。TERRE DE FER表記を伴うことが多い。', 'Marque courante au nom de la ville, souvent accompagnée de la mention TERRE DE FER.', 'The standard place-name mark, often accompanied by a TERRE DE FER mention.'
);

insert into shops (slug, name, place_ja, place_fr, place_en, genre_ja, genre_fr, genre_en, owner_ja, owner_fr, owner_en, note_ja, note_fr, note_en, instagram_url, published) values (
  'entre-cour-et-jardin', 'Entre Cour et Jardin',
  'タルヌ＝エ＝ガロンヌ県 サン・アントナン・ノーブル・ヴァル(教会通り5番地)', '5 rue de l''Église, Saint-Antonin-Noble-Val (Tarn-et-Garonne)', '5 rue de l''Église, Saint-Antonin-Noble-Val (Tarn-et-Garonne)',
  'アンティーク小物 / 古いファブリック / ヴィンテージモード', 'Objets de charme / tissus anciens / mode vintage', 'Charming objects / antique textiles / vintage fashion',
  '店主: クリスティーヌさん', 'Tenu par Christine', 'Run by Christine',
  '中世の面影が残るサン・アントナンの旧市街、教会のすぐそば。趣ある小物、アンティークのリネンや布もの、ヴィンテージのモード小物が並ぶ。', 'Au cœur du village médiéval, à deux pas de l''église : objets de charme, tissus anciens et accessoires de mode vintage.', 'In the heart of the medieval village, steps from the church: charming objects, antique textiles and vintage fashion accessories.',
  'https://www.instagram.com/entrecouretjardin_3/', false
);

commit;
