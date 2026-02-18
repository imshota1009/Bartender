// DEBUG: Global Error Handler
window.onerror = function (msg, url, line, col, error) {
    alert("Error: " + msg + "\nLine: " + line + "\nCol: " + col);
    return false;
};

document.addEventListener('DOMContentLoaded', () => {
    try {
        // --- Language Data ---
        const translations = {
            ja: {
                dayLabel: "Day", moneyLabel: "所持金", salesLabel: "本日の売上", timeLabel: "時間", orderLabel: "注文:",
                addIce: "氷を入れる", shake: "シェイク", stir: "ステア", build: "ビルド", talk: "話す", reset: "リセット", cameraMode: "📷 カメラモード",
                glassLabel: "グラス選択:", glassShort: "ショート", glassRocks: "ロック", glassCollins: "ロング", glassCocktail: "カクテル",
                dayEndTitle: "Day End", dayEndSubtitle: "営業終了", dailyEarningsLabel: "本日の売上", totalAssetsLabel: "総資産",
                upgradesTitle: "アップグレード", nextDayButton: "次の日へ", startButton: "ゲーム開始",
                gameStartBtn: "開始",
                purchased: "購入済", recipe: "レシピ", ice: "氷", garnishPrompt: "仕上げは？",
                helpTitle: "📖 遊び方",
                resultSuccess: "成功！ 😋", resultFail: "失敗... 😖", resultSecret: "シークレット！ 🍸",
                reasonRecipe: "（レシピ）", reasonIce: "（氷）", reasonGlass: "（グラス）",
                bossIncoming: "【特別客 来店】",
                ingredientsLabel: "材料",
                // Menu items
                menuTitle: "📋 メニュー",
                menuCocktails: "🍸 カクテル図鑑",
                menuCustomers: "👥 お客さん図鑑",
                menuTitles: "🏆 称号一覧",
                menuInterior: "🏠 内装変更",
                menuSettings: "⚙️ 設定",
                menuClose: "✖ 閉じる",
                // Interior Shop
                interiorTitle: "🏠 内装カスタマイズ",
                interiorMoney: "所持金",
                wallpaperLabel: "🖼️ 壁紙",
                lightingLabel: "💡 照明",
                bgmLabel: "🎵 BGM",
                interiorEquipped: "✓ 使用中",
                interiorOwned: "所持",
                interiorBuy: "購入",
                // Settings
                settingsTitle: "⚙️ 設定",
                languageLabel: "🌐 言語 / Language",
                languageNote: "※ 言語変更は再起動後に反映されます",
                menuSave: "💾 セーブ",
                saveAndRestart: "💾 保存して再起動",
                // Help
                helpTitle: "📖 遊び方",
                helpViewBtn: "📖 遊び方を見る",
                helpClose: "✖ 閉じる &amp; ゲーム開始",
                helpBasicsTitle: "🎮 基本ルール",
                helpBasicsText: "お客さんが注文したカクテルを作って、たくさん稼ごう！",
                helpMakingTitle: "🍸 カクテルの作り方",
                helpStep1: "お客さんの注文を確認（右上にレシピが表示される）",
                helpStep2: "「材料」ボタンをタップして、必要な材料を選ぶ",
                helpStep3: "レシピに氷が書いてあったら「氷を入れる」ボタンをタップ",
                helpStep4: "グラスをタップして、正しいグラスを選ぶ",
                helpStep5: "「シェイク」ボタンでカクテル完成！",
                helpButtonsTitle: "🔘 ボタンの説明",
                helpButtonsText: "<ul><li><strong>材料</strong> - カクテルの材料を選ぶ</li><li><strong>氷を入れる</strong> - 氷を追加する</li><li><strong>グラス</strong> - グラスの種類を選ぶ</li><li><strong>シェイク</strong> - カクテルを完成させる</li><li><strong>話す</strong> - お客さんと話す（ボーナスポイント！）</li><li><strong>リセット</strong> - 作り直す</li><li><strong>紹介する</strong> - お客さんをマッチング</li></ul>",
                helpTipsTitle: "⭐ コツ",
                helpTipsText: "<ul><li>レシピ通りに作ると<strong>連続ボーナス</strong>がもらえる！</li><li>お客さんと<strong>話す</strong>とチップがもらえる</li><li>1日の終わりに<strong>アップグレード</strong>を買おう</li><li>時間内にたくさん作れば高得点！</li></ul>",
                helpHint: "<strong>💡 ヒント</strong> いつでもこの画面を見たいときは、右上の「？」ボタンをタップしてね！",
                helpCloseBtn: "わかった！ゲームに戻る",
                INGREDIENTS: {
                    vodka: { name: 'ウォッカ', color: '#e0f7fa', glow: '#80deea', alcohol: 40 },
                    gin: { name: 'ジン', color: '#e8f5e9', glow: '#a5d6a7', alcohol: 40 },
                    rum: { name: 'ラム', color: '#ffecb3', glow: '#ffe082', alcohol: 40 },
                    tequila: { name: 'テキーラ', color: '#fff9c4', glow: '#fff59d', alcohol: 40 },
                    brandy: { name: 'ブランデー', color: '#d84315', glow: '#ff5722', alcohol: 40 },
                    beer: { name: 'ビール', color: '#ffeb3b', glow: '#fff176', alcohol: 5 },
                    cassis: { name: 'カシス', color: '#4a148c', glow: '#ce93d8', alcohol: 20 },
                    lime: { name: 'ライム', color: '#d4e157', glow: '#e6ee9c', alcohol: 0 },
                    orangeJuice: { name: 'オレンジJ', color: '#ff9800', glow: '#ffb74d', alcohol: 0 },
                    tomatoJuice: { name: 'トマトJ', color: '#d32f2f', glow: '#e57373', alcohol: 0 },
                    pineappleJuice: { name: 'パインJ', color: '#fdd835', glow: '#fff176', alcohol: 0 },
                    tonic: { name: 'トニック', color: '#cfd8dc', glow: '#eceff1', alcohol: 0 },
                    cola: { name: 'コーラ', color: '#3e2723', glow: '#a1887f', alcohol: 0 },
                    gingerAle: { name: 'ジンジャー', color: '#fbc02d', glow: '#fff176', alcohol: 0 },
                    whiskey: { name: 'ウイスキー', color: '#d4a017', glow: '#ffca28', alcohol: 40 },
                    soda: { name: 'ソーダ', color: '#e0f2f1', glow: '#b2dfdb', alcohol: 0 },
                    kahlua: { name: 'カルーア', color: '#3e2723', glow: '#5d4037', alcohol: 20 },
                    milk: { name: 'ミルク', color: '#ffffff', glow: '#f5f5f5', alcohol: 0 },
                    tripleSec: { name: 'トリプルセック', color: '#ffffff', glow: '#e0f7fa', alcohol: 40 },
                    grenadine: { name: 'グレナデン', color: '#b71c1c', glow: '#e53935', alcohol: 0 }
                },
                COCKTAILS: [
                    { name: 'スクリュードライバー', ingredients: ['vodka', 'orangeJuice'], needsIce: true, garnish: 'orange', glass: 'collins', method: 'build' },
                    { name: 'ジントニック', ingredients: ['gin', 'tonic', 'lime'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'キューバリブレ', ingredients: ['rum', 'cola', 'lime'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'モスコミュール', ingredients: ['vodka', 'gingerAle', 'lime'], needsIce: true, garnish: 'lime', glass: 'rocks', method: 'build' },
                    { name: 'カシスオレンジ', ingredients: ['cassis', 'orangeJuice'], needsIce: true, garnish: 'orange', glass: 'collins', method: 'build' },
                    { name: 'ラムコーク', ingredients: ['rum', 'cola'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'ジンバック', ingredients: ['gin', 'gingerAle', 'lime'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'ハイボール', ingredients: ['whiskey', 'soda'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'コークハイ', ingredients: ['whiskey', 'cola'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'カルーアミルク', ingredients: ['kahlua', 'milk'], needsIce: true, garnish: 'cherry', glass: 'rocks', method: 'stir' },
                    { name: 'ブラックルシアン', ingredients: ['vodka', 'kahlua'], needsIce: true, garnish: 'cherry', glass: 'rocks', method: 'stir' },
                    { name: 'ホワイトルシアン', ingredients: ['vodka', 'kahlua', 'milk'], needsIce: true, garnish: 'cherry', glass: 'rocks', method: 'stir' },
                    { name: 'マルガリータ', ingredients: ['tequila', 'tripleSec', 'lime'], needsIce: false, garnish: 'lime', glass: 'cocktail', method: 'shake' },
                    { name: 'テキーラサンライズ', ingredients: ['tequila', 'orangeJuice', 'grenadine'], needsIce: true, garnish: 'orange', glass: 'collins', method: 'build' },
                    { name: 'サイドカー', ingredients: ['brandy', 'tripleSec', 'lime'], needsIce: false, garnish: 'lime', glass: 'cocktail', method: 'shake' },
                    { name: 'レッドアイ', ingredients: ['beer', 'tomatoJuice'], needsIce: false, garnish: 'lime', glass: 'collins', method: 'stir' },
                    { name: 'ブラッディメアリー', ingredients: ['vodka', 'tomatoJuice', 'lime'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'stir' },
                    { name: 'マタドール', ingredients: ['tequila', 'pineappleJuice', 'lime'], needsIce: false, garnish: 'lime', glass: 'cocktail', method: 'shake' }
                ],
                SECRET_COCKTAILS: [
                    { name: 'ギムレット', ingredients: ['gin', 'lime'], needsIce: true, bonus: 500 },
                    { name: 'カウボーイ', ingredients: ['whiskey', 'milk'], needsIce: false, bonus: 600 }
                ],
                CUSTOMERS: [
                    // --- MORNING ---
                    {
                        time: "morning", name: "若い農民", image: 'images/morning/young_farmer_man.png',
                        lookingForPartner: true, // Example
                        worries: { question: "最近、野菜の値段が下がってて…どうすればいい？", choices: [{ text: "新しい野菜を育ててみれば？", outcome: "good" }, { text: "諦めて都会に出よう", outcome: "bad" }, { text: "天候のせいだよ", outcome: "neutral" }] },
                        quotes: { order: ["仕事前に精が出るやつを！"], success: ["うめぇ！これで畑仕事も捗る！"], fail: ["うっ…腹が…"], wrongGlass: ["ん？このコップじゃ飲みにくいな。"], chat: { any: ["今年は雨が少なくて心配だ。", "朝飯前の酒は格別だな！"], morning: ["鶏より早く起きたぜ。", "畑の土の匂いがするだろう？"] } }
                    },
                    {
                        time: "morning", name: "年配の農婦", image: 'images/morning/old_farmer_woman.png',
                        quotes: { order: ["あったかいミルクとかあるかい？"], success: ["あらあら、美味しいわねぇ。"], fail: ["これ、古くないかい？"], wrongGlass: ["あら、このコップじゃ手から滑り落ちそうだよ。"], chat: { any: ["腰が痛くてねぇ。", "孫が可愛くて仕方ないのよ。"], morning: ["早起きは三文の得ってね。", "新鮮な野菜を持ってきたわよ。"] } }
                    },
                    {
                        time: "morning", name: "農民の娘", image: 'images/morning/farmer_girl.png',
                        lookingForPartner: true,
                        worries: { question: "都会に出たいけど、お父さんが反対するの。", choices: [{ text: "夢を追いかけるべきだよ！", outcome: "good" }, { text: "家族を大切にしなよ。", outcome: "neutral" }, { text: "家出しかないね！", outcome: "bad" }] },
                        quotes: { order: ["甘いジュースみたいなのくれる？"], success: ["わぁ！お花畑みたい！"], fail: ["苦い…ぺっ！"], wrongGlass: ["えー、このグラス可愛くない！"], chat: { any: ["将来はお店を持ちたいな。", "お父さんの手伝いは大変。"], morning: ["朝の空気って気持ちいい！", "小鳥さんとお話してきたの。"] } }
                    },
                    { time: "morning", name: "村の若者", image: 'images/morning/village_boy.png', quotes: { order: ["なんかカッコイイやつ！"], success: ["おれ、強くなった気がする！"], fail: ["うえぇ…大人の味だ…"], wrongGlass: ["なんかこれ、持ちにくいな…"], chat: { any: ["冒険者になりたいんだ。", "剣の稽古をしてきたんだぜ。"], morning: ["朝飯食い損ねたんだ。", "今日も特訓だ！"] } } },
                    { time: "morning", name: "麦わら帽子の農夫", image: 'images/morning/straw_farmer.png', quotes: { order: ["喉が渇いた、水代わりの頼む。"], success: ["ふぅ、生き返るわい。"], fail: ["なんだこりゃ、泥水か？"], wrongGlass: ["ん？いつものコップじゃないのかい？"], chat: { any: ["明日は市場に行く日だ。", "カラスが多くて困るわい。"], morning: ["今日も暑くなりそうだ。", "鍬の手入れは欠かせん。"] } } },
                    { time: "morning", name: "花売りの女性", image: 'images/morning/flower_woman.png', quotes: { order: ["お花のように綺麗な一杯を。"], success: ["素敵…香りも素晴らしいわ。"], fail: ["これ、枯れてるわよ。"], wrongGlass: ["あら、器が合っていないわ。お花も花瓶が大事よ。"], chat: { any: ["お花はいかがですか？", "この街は花が似合うわ。"], morning: ["朝露に濡れた花が一番よ。", "今日もいい香りね。"] } } },
                    { time: "morning", name: "パン屋の女性", image: 'images/morning/baker_woman.png', quotes: { order: ["仕事終わりの一杯、頼むわ！"], success: ["焼きたてパンより最高！"], fail: ["粉っぽい味がするわね。"], wrongGlass: ["ちょっと、これじゃあこぼれちゃうわよ。"], chat: { any: ["パンの焼き加減は難しいの。", "小麦粉が値上がりしてて…"], morning: ["夜明け前から働いてクタクタよ。", "朝の仕込みが終わったの。"] } } },

                    // --- NOON ---
                    { time: "noon", name: "ハゲた商人", image: 'images/noon/bald_merchant.png', quotes: { order: ["儲かりそうな黄金色の酒を。"], success: ["これは金運が上がりそうだ！"], fail: ["安酒の味がするな。"], wrongGlass: ["中身はいいが、器が安っぽいな。"], chat: { any: ["金こそが力だ。", "いい商談があったんだ。"], day: ["昼飯時の商談はうまくいく。", "市場の相場を見てきた。"] } } },
                    { time: "noon", name: "そばかすの町娘", image: 'images/noon/freckle_girl.png', quotes: { order: ["さっぱりしたのがいいな。"], success: ["スッキリして美味しい！"], fail: ["なんか変な味…"], wrongGlass: ["あれ？このグラスじゃない気がする…"], chat: { any: ["最近、新しい服を買ったの。", "隣の家の犬が可愛いのよ。"], day: ["お買い物に行ってきたの。", "お天気よくて最高！"] } } },
                    { time: "noon", name: "学者", image: 'images/noon/scholar_man.png', quotes: { order: ["知性を刺激する一杯を所望する。"], success: ["ふむ、論理的な味わいだ。"], fail: ["非科学的な味だ。"], wrongGlass: ["ふむ、容器の選択に誤謬があるようだ。"], chat: { any: ["この世界の理を解明したい。", "古い文献を探している。"], day: ["図書館の帰りでね。", "昼下がりの読書は至福だ。"] } } },
                    { time: "noon", name: "貴婦人", image: 'images/noon/pink_lady.png', quotes: { order: ["わたくしに相応しい上品なものを。"], success: ["オホホ、悪くなくてよ。"], fail: ["なんて下品な味！"], wrongGlass: ["あら、グラスの趣味が悪くてよ。"], chat: { any: ["今度の舞踏会、楽しみですわ。", "このドレス、特注品なのよ。"], day: ["お茶会も飽きましたわ。", "日差しが肌によくないわ。"] } } },
                    { time: "noon", name: "町娘", image: 'images/noon/town_girl.png', quotes: { order: ["可愛い色のカクテルお願い！"], success: ["映える～！最高！"], fail: ["可愛くないしマズい…"], wrongGlass: ["このグラスじゃ映えないよ～"], chat: { any: ["あの兵士さん、カッコいいよね。", "流行りのスイーツ食べた？"], day: ["ランチの後のデザート代わり。", "友達と待ち合わせなの。"] } } },
                    { time: "noon", name: "商人の妻", image: 'images/noon/merchant_wife.png', quotes: { order: ["夫には内緒で…強いのを。"], success: ["あら、酔っちゃいそう。"], fail: ["夫の稼ぎの方がマシね。"], wrongGlass: ["あら、もっといいグラスはないの？"], chat: { any: ["うちの人は働きすぎなの。", "へそくり、貯まってるわよ。"], day: ["昼下がりの情事…なんてね。", "買い物ついでに寄ったの。"] } } },
                    { time: "noon", name: "鍛冶屋", image: 'images/noon/blacksmith_man.png', quotes: { order: ["火照った体を冷やすやつをくれ！"], success: ["くぅ～！染み渡る！"], fail: ["ぬるい！鉄を打つ気になれん！"], wrongGlass: ["おっと、俺の手には小さすぎるぜ。"], chat: { any: ["鉄は嘘をつかねぇ。", "いい剣はいい鉄からだ。"], day: ["炉の火が熱すぎてな。", "昼飯の後の休憩だ。"] } } },
                    { time: "noon", name: "バンダナの町娘", image: 'images/noon/bandana_girl.png', quotes: { order: ["元気がでるやつ！"], success: ["元気100倍！"], fail: ["テンション下がるわ～"], wrongGlass: ["ん～雰囲気でないなぁ。"], chat: { any: ["掃除洗濯、終わらせなきゃ。", "バンダナ、可愛いでしょ？"], day: ["井戸端会議も疲れるわ。", "天気がいいから洗濯日和！"] } } },
                    { time: "noon", name: "メイド", image: 'images/noon/maid_woman.png', quotes: { order: ["ご主人様には内緒で…甘いのを。"], success: ["夢のような味ですぅ…"], fail: ["お仕置きレベルです…"], wrongGlass: ["あ、グラスがいつもと違いますね…"], chat: { any: ["お皿割っちゃって…。", "ご主人様、厳しいんです。"], day: ["お屋敷の買い出し中です。", "少しだけサボり…休憩です。"] } } },
                    { time: "noon", name: "芸術家", image: 'images/noon/artist_man.png', quotes: { order: ["インスピレーションが湧く色を。"], success: ["見えた！傑作が見えたぞ！"], fail: ["凡庸な色だ…"], wrongGlass: ["このグラスでは美が損なわれる。"], chat: { any: ["芸術は爆発ではない、調和だ。", "君の顔、絵になるね。"], day: ["光の加減が良い時間だ。", "スケッチに出かけるところさ。"] } } },
                    { time: "noon", name: "職人", image: 'images/noon/craftsman_man.png', quotes: { order: ["いつもの、シンプルなので。"], success: ["いい仕事してますねぇ。"], fail: ["手抜きはいかんよ。"], wrongGlass: ["ふん、器選びも修行のうちだぞ。"], chat: { any: ["職人の魂は細部に宿る。", "道具は大切にな。"], day: ["午後の仕事前に気合を入れる。", "良い素材が入ったんだ。"] } } },
                    { time: "noon", name: "宝石商", image: 'images/noon/jeweler_woman.png', quotes: { order: ["宝石のように輝く一杯を。"], success: ["ダイヤモンド級の輝きね！"], fail: ["曇った石ころね。"], wrongGlass: ["輝きは良いのに、台座がダメね。"], chat: { any: ["輝きは永遠よ。", "鑑定してあげましょうか？"], day: ["商談の前に景気付けよ。", "金は裏切らないわ。"] } } },
                    { time: "noon", name: "ピンク髪の町娘", image: 'images/noon/pink_town_girl.png', quotes: { order: ["シュワシュワするやつ！"], success: ["パチパチして楽しい！"], fail: ["気が抜けてる…"], wrongGlass: ["んー、なんか違うのよねー。"], chat: { any: ["髪色、変えたの気づいた？", "リボン集めてるんだ。"], day: ["お散歩って楽しいな。", "街は賑やかで好き。"] } } },

                    // --- NIGHT ---
                    { time: "night", name: "老賢者", image: 'images/night/old_wise_man.png', quotes: { order: ["悠久の時を感じる酒を。"], success: ["…素晴らしい。歴史の味がする。"], fail: ["…歴史を知らぬ若造め。"], wrongGlass: ["中身は良いが、器がこれではな…"], chat: { any: ["世界は広い、若者よ。", "星の動きが不穏じゃ…"], night: ["夜は考え事には最適じゃ。", "昔の冒険を思い出すのぅ。"] } } },
                    { time: "night", name: "緑服の貴族", image: 'images/night/green_noble_man.png', quotes: { order: ["気品あふれる一杯を頼む。"], success: ["我が領地にも欲しい味だ。"], fail: ["庶民の味だな。"], wrongGlass: ["我が家ではこのようなグラスは使わん。"], chat: { any: ["領民の生活も楽ではない。", "税率をどうするか…"], night: ["夜会など退屈だ。", "ここで飲む方が落ち着く。"] } } },
                    { time: "night", name: "金髪の貴婦人", image: 'images/night/blonde_noble_woman.png', quotes: { order: ["美しさを保つ秘薬のようなものを。"], success: ["肌に艶が出そうね！"], fail: ["シワが増えそう…"], wrongGlass: ["あら、美しくないグラスだこと。"], chat: { any: ["若さとは儚いものね。", "あの男、しつこいのよ。"], night: ["月明かりは肌を綺麗に見せるの。", "内緒の話をしてあげる。"] } } },
                    { time: "night", name: "執事", image: 'images/night/butler_man.png', quotes: { order: ["主人の好みを確かめたくて。"], success: ["これなら旦那様も満足でしょう。"], fail: ["お粗末でございます。"], wrongGlass: ["器の選定に配慮が足りませんな。"], chat: { any: ["全ては主人のために。", "完璧であれ、それが執事です。"], night: ["主人が寝静まった後の休息です。", "屋敷の管理も大変でして。"] } } },
                    { time: "night", name: "踊り子", image: 'images/night/dancer_woman.png', quotes: { order: ["情熱的な赤いやつ！"], success: ["踊りだしたくなるわ！"], fail: ["リズムが狂うわ。"], wrongGlass: ["グラスのセンス、イマイチね。"], chat: { any: ["ダンスは魂の会話よ。", "足がパンパンだわ。"], night: ["今夜のステージは最高だった。", "月夜に踊るのが好きなの。"] } } },
                    { time: "night", name: "旅人", image: 'images/night/traveler_man.png', quotes: { order: ["旅の疲れを癒やす一杯を。"], success: ["故郷の味を思い出す…"], fail: ["旅の空の方がマシだ。"], wrongGlass: ["野宿でももっとマシな器を使うぞ。"], chat: { any: ["次の街までどれくらいだ？", "地図にない道を行くのが好きだ。"], night: ["野宿もいいが、酒場はいいね。", "星を頼りに歩いてきた。"] } } },
                    { time: "night", name: "巻き髪の令嬢", image: 'images/night/curly_lady.png', quotes: { order: ["甘くてとろけるようなのを。"], success: ["王子様のキスみたい！"], fail: ["子供だましね。"], wrongGlass: ["お父様に言いつけるわよ！"], chat: { any: ["お父様に内緒できちゃった。", "早く大人になりたいわ。"], night: ["夜遊びなんて初めて。", "ドキドキしちゃう。"] } } },
                    { time: "night", name: "衛兵", image: 'images/night/guard_man.png', quotes: { order: ["巡回終わりの一杯だ！"], success: ["これで明日も守れる！"], fail: ["まずっ！目が覚めるわ！"], wrongGlass: ["なんだこのグラス、持ちにくいぞ！"], chat: { any: ["街の平和は俺が守る。", "怪しい奴を見なかったか？"], night: ["夜警は冷えるんだ。", "非番なんだ、ゆっくりさせてくれ。"] } } },
                    { time: "night", name: "吟遊詩人", image: 'images/night/bard_man.png', quotes: { order: ["詩想が湧くような一杯を"], success: ["素晴らしい！詩が書けそうだ！"], fail: ["これでは詩が書けない"], wrongGlass: ["器が詩的ではないね。"], chat: { any: ["次の英雄譚の主役は君にしようか。", "このグラスの輝き...宝石のようだ。"], night: ["夜の静寂は詩人の友だ。", "星空のメロディが聞こえるかい？"] } } },
                    { time: "night", name: "陽気な女将", image: 'images/night/tavern_lady.png', quotes: { order: ["同業者の腕前、見せてもらおうか！"], success: ["やるねえ！うちにも欲しい！"], fail: ["まだまだだねっ！"], wrongGlass: ["器選びも大事な仕事だよ！"], chat: { any: ["客商売は笑顔が一番さ。", "酔払いには水をぶっかけるんだよ。"], night: ["繁盛してるじゃないか。", "今度うちの酒も飲みに来な。"] } } },
                    { time: "night", name: "魔法使い", image: 'images/night/wizard_man.png', quotes: { order: ["マナが回復するポーションを。"], success: ["魔力が満ちてくる…！"], fail: ["ただの水か？"], wrongGlass: ["この器では魔力が霧散してしまう。"], chat: { any: ["魔法は便利だが代償がある。", "火の精霊が騒いでいる。"], night: ["夜は魔力が強まる。", "星の配置が不吉だ…"] } } },
                    { time: "night", name: "ピンク髪の踊り子", image: 'images/night/pink_dancer.png', quotes: { order: ["キラキラして可愛いの！"], success: ["ステージ映えしそう！"], fail: ["地味ね～"], wrongGlass: ["もっとカワイイのないの～？"], chat: { any: ["ファンレターもらったの。", "新しいステップ見て！"], night: ["打ち上げよ！", "夜はこれからね！"] } } },
                    { time: "night", name: "船乗り", image: 'images/night/sailor_man.png', quotes: { order: ["海のように塩辛い酒を！"], success: ["潮風を感じるぜ！"], fail: ["真水みてぇだ！"], wrongGlass: ["船なら波でこぼれちまうぞ！"], chat: { any: ["海の男は陸には馴染めねぇ。", "クラーケンを見たことあるか？"], night: ["港の女に振られちまってな。", "今夜は月が綺麗だ、出航日和だ。"] } } },
                    { time: "night", name: "傭兵", image: 'images/night/mercenary_man.png', quotes: { order: ["血が滾る強い酒を。"], success: ["戦場に戻りたくなってきたぜ。"], fail: ["気が抜けるな。"], wrongGlass: ["戦場でもこんな器は使わん。"], chat: { any: ["金さえ貰えば誰とでも戦う。", "背中は誰にも見せるな。"], night: ["死んだ仲間に乾杯。", "夜風が傷に沁みる。"] } } },
                    { time: "night", name: "鉄兜の騎士", image: 'images/night/knight_helmet.png', quotes: { order: ["王への忠誠を示す一杯を。"], success: ["我が生涯、王に捧ぐ！"], fail: ["不敬であるぞ！"], wrongGlass: ["作法がなっておらんな。"], chat: { any: ["兜で前が見えにくいのだが。", "騎士道とは…"], night: ["夜警も騎士の務め。", "錆びないように手入れせねば。"] } } },
                    { time: "night", name: "兵士", image: 'images/night/chain_soldier.png', quotes: { order: ["安くて酔えるやつ！"], success: ["うひょー！効くぅ！"], fail: ["薄めてないか？"], wrongGlass: ["細かいことは気にしねぇけど、なんか違わね？"], chat: { any: ["鎖帷子は重いんだよ。", "給料日前で金がねぇ。"], night: ["明日は演習なんだ。", "一杯だけ、一杯だけ…"] } } },
                    { time: "night", name: "船長", image: 'images/night/captain_man.png', quotes: { order: ["世界一のラム酒を出せ！"], success: ["ヨーホー！最高だ！"], fail: ["甲板掃除させるぞ！"], wrongGlass: ["海賊王に相応しくない器だ！"], chat: { any: ["俺の船に乗らないか？", "財宝の地図を持ってるんだ。"], night: ["陸の夜は静かすぎる。", "羅針盤が狂ってここに辿り着いた。"] } } },
                    { time: "night", name: "赤マフラーの騎士", image: 'images/night/red_scarf_knight.png', quotes: { order: ["情熱の赤いやつを頼む。"], success: ["燃えてきたぞ！"], fail: ["冷めてしまった…"], wrongGlass: ["正義の心は良いが、器がこれではな。"], chat: { any: ["このマフラーは母の形見だ。", "正義のために戦う！"], night: ["夜のパトロールだ。", "悪は夜に動く。"] } } },
                    { time: "night", name: "太めの貴族", image: 'images/night/fat_noble_man.png', quotes: { order: ["一番高いものを所望する。"], success: ["金に糸目はつけんぞ！"], fail: ["安っぽい味だ。"], wrongGlass: ["私の手に合うグラスではないな。"], chat: { any: ["最近、腹回りが…。", "美食こそ我が人生。"], night: ["夜食に何を食べようか。", "晩餐会の帰りなのだ。"] } } },
                    { time: "night", name: "酒場主人", image: 'images/night/red_beard_man.png', quotes: { order: ["同業者の手並み拝見。"], success: ["悔しいが美味い！"], fail: ["修行し直せ！"], wrongGlass: ["そのカクテルにそのグラスはないだろ。"], chat: { any: ["酒場経営は大変だろう？", "客あしらいが大事だ。"], night: ["たまには客になるのもいい。", "店を閉めてきたところだ。"] } } },
                    { time: "night", name: "司祭", image: 'images/night/priest_man.png', quotes: { order: ["神に感謝する清らかな水を…いや酒を。"], success: ["アーメン…素晴らしい。"], fail: ["罰当たりな味です。"], wrongGlass: ["聖なる器ではありませんね。"], chat: { any: ["迷える子羊よ…。", "寄付をお願いします。"], night: ["夜の祈りを捧げねば。", "神は見ておられます。"] } } },
                    { time: "night", name: "魔女", image: 'images/night/witch_woman.png', quotes: { order: ["トカゲの尻尾を入れた…冗談よ。"], success: ["ヒヒッ、良い魔力ね。"], fail: ["呪ってあげる。"], wrongGlass: ["あら、調合皿を間違えたのかい？"], chat: { any: ["大鍋で煮込むのがコツよ。", "私の猫を知らない？"], night: ["サバトの時間よ。", "月夜はほうきが飛びやすいの。"] } } },
                    { time: "night", name: "緑の魔法使い", image: 'images/night/green_mage_woman.png', quotes: { order: ["森の恵みを感じる一杯を。"], success: ["森が喜んでいるわ。"], fail: ["人工的な味ね。"], wrongGlass: ["自然な形ではないわね。"], chat: { any: ["自然と共に生きるの。", "薬草のことなら任せて。"], night: ["森のざわめきが聞こえる。", "今夜は月が綺麗ね。"] } } },
                    { time: "night", name: "王様", image: 'images/night/king_man.png', quotes: { order: ["余を満足させてみよ。"], success: ["国宝級の味である！"], fail: ["地下牢行きだ！"], wrongGlass: ["余にこのような器を出すとは！"], chat: { any: ["国を治めるのは疲れる。", "お忍びである、声が高い！"], night: ["城を抜け出してきた。", "民の暮らしを見るのも王の務め。"] } } },
                    { time: "night", name: "王女", image: 'images/night/princess_woman.png', quotes: { order: ["お城では飲めない刺激的なのを！"], success: ["これが下界の味…素敵！"], fail: ["お城の水の方が美味しいわ。"], wrongGlass: ["お城ではこんなグラス使わないわ。"], chat: { any: ["お父様には内緒よ。", "冒険に憧れるわ。"], night: ["門限を破っちゃった。", "ガラスの靴はどこかしら？"] } } },
                    { time: "night", name: "赤い王様", image: 'images/night/red_king.png', quotes: { order: ["覇王に相応しい激しい酒を！"], success: ["世界を征服できそうだ！"], fail: ["首をはねよ！"], wrongGlass: ["この器で余に飲めと言うのか！"], chat: { any: ["隣国をどう攻めるか…", "強きことが正義だ。"], night: ["夜襲の計画を練る。", "余の辞書に敗北はない。"] } } },
                    { time: "night", name: "女王", image: 'images/night/queen_woman.png', quotes: { order: ["優雅で、かつ力強い一杯を。"], success: ["跪きなさい、褒美をやろう。"], fail: ["退屈な味ね。"], wrongGlass: ["美意識が足りなくてよ。"], chat: { any: ["王を操るのは私よ。", "美しさこそ権力。"], night: ["夜会は私の独壇場よ。", "愚かな民たちね…"] } } }
                ],

                MILLIONAIRE_CUSTOMER: { name: "古の大富豪", image: 'images/night/fat_noble_man.png', quotes: { order: ["王城で飲むような最高級品を"], success: ["素晴らしい！金貨を弾もう"], fail: ["豚に食わせる酒か？"], wrongGlass: ["器が安っぽいぞ！"], chat: ["王とも対等に渡り合う、それが商人だ。", "孤独だよ、富の頂というのは。", "君の腕を見込んで、新しい店を持たせてやろうか。"] } },
                DEATH_CUSTOMER: { name: "森の魔女", image: 'images/night/witch_woman.png', quotes: { order: ["…魔力が満ちるような一杯を"], success: ["…ふふ、力が湧いてくるわ"], fail: ["…これはただの泥水ね"], wrongGlass: ["…器が違うようだね"], chat: ["...森の奥は静かでいいわよ。", "...永遠の命に興味はある？", "...黒猫を見なかった？"] } },
                UPGRADES: {
                    shaker: { name: 'ミスリルのシェイカー', description: 'コンボボーナスが1.2倍になる' },
                    iceMachine: { name: '氷の魔道具', description: '氷を使うカクテルの評価が少し上がる' },
                    barManual: { name: '古のレシピ古文書', description: '失敗時のペナルティが半減する' }
                },
                STORY: {
                    1: { title: "Day 1: 冒険の始まり", text: "念願の自分の酒場をついに開店した。\nこの国の人々の止まり木のような場所。\n戦士や魔法使いたちが羽を休める、そんな場所にしたい。" },
                    3: { title: "Day 3: 王宮の美食家", text: "「この街に面白い酒場主がいる」\nそんな噂を聞きつけて、王宮に仕える美食家が\n今夜来店するという情報が入った。", boss: { name: "王宮の美食家", image: 'images/night/green_noble_man.png', quotes: { order: ["ジンのショートカクテルを。王の舌を満足させられるかな？"], success: ["...認める。王宮料理長にも劣らぬ腕だ。"], fail: ["期待外れだ。二度と来ない。"], chat: ["味だけではない。礼儀も評価対象だ。", "多くの店をとり潰してきた...君はどうかな？", "素材の良さを活かしたまえ。"] }, constraints: { includes: ['gin'], glass: 'cocktail' } } },
                    5: { title: "Day 5: 衛兵隊長の悩み", text: "雨の降る夜。\n疲れ切った様子の衛兵隊長が、何かを探して歩き回っている。\n彼は今夜、答えを見つけることができるだろうか。", boss: { name: "衛兵隊長", image: 'images/night/mercenary_man.png', quotes: { order: ["頭が冴えるような、とびきり強い酒をロックでくれ。"], success: ["...頭が晴れた。これで魔物の正体が掴めそうだ。"], fail: ["...ダメだ、霧が晴れない。"], chat: ["この街の闇は深い...", "君は何も見ていない。いいね？", "昨夜のアリバイを聞かせてもらおうか。"] }, constraints: { minAlcohol: 80, glass: 'rocks' } } },
                    7: { title: "Day 7: 伝説の魔女", text: "一週間の営業を経て、あなたの名は国中に知れ渡った。\nそして今夜、全ての魔女が恐れ敬う\n「伝説の魔女」が、あなたの店を訪れる。", boss: { name: "伝説の魔女", image: 'images/night/witch_woman.png', quotes: { order: ["私の魔力を高める、至高の5素材の秘薬を。"], success: ["見事だ...魔法のような味わいだ。"], fail: ["まだ修行が足りないようだね。"], chat: ["カクテル作りは調合に似ている。", "魔力だけでは不十分だ。", "君の「魂」を見せてくれ。"] }, constraints: { exactCount: 5 } } }
                }
            },
            en: {
                dayLabel: "Day", moneyLabel: "Money", salesLabel: "Today's Sales", timeLabel: "Time", orderLabel: "Order:",
                addIce: "Add Ice", shake: "Shake", stir: "Stir", build: "Build", talk: "Talk", reset: "Reset", cameraMode: "📷 Camera Mode",
                glassLabel: "Glass:", glassShort: "Short", glassRocks: "Rocks", glassCollins: "Collins", glassCocktail: "Cocktail",
                dayEndTitle: "Day End", dayEndSubtitle: "Business Closed", dailyEarningsLabel: "Today's Earnings", totalAssetsLabel: "Total Assets",
                upgradesTitle: "Upgrades", nextDayButton: "Next Day", startButton: "Start Game",
                gameStartBtn: "START",
                purchased: "Purchased", recipe: "Recipe", ice: "Ice", garnishPrompt: "Garnish?",
                resultSuccess: "Success! 😋", resultFail: "Failure... 😖", resultSecret: "Secret! 🍸",
                reasonRecipe: " (Recipe)", reasonIce: " (Ice)", reasonGlass: " (Glass)",
                bossIncoming: "[SPECIAL GUEST]",
                ingredientsLabel: "Ingredients",
                // Menu items
                menuTitle: "📋 Menu",
                menuCocktails: "🍸 Cocktail Encyclopedia",
                menuCustomers: "👥 Customer Encyclopedia",
                menuTitles: "🏆 Titles",
                menuInterior: "🏠 Interior",
                menuSettings: "⚙️ Settings",
                menuClose: "✖ Close",
                // Interior Shop
                interiorTitle: "🏠 Interior Customization",
                interiorMoney: "Money",
                wallpaperLabel: "🖼️ Wallpaper",
                lightingLabel: "💡 Lighting",
                bgmLabel: "🎵 BGM",
                interiorEquipped: "✓ Equipped",
                interiorOwned: "Owned",
                interiorBuy: "Buy",
                // Settings
                settingsTitle: "⚙️ Settings",
                languageLabel: "🌐 Language / 言語",
                languageNote: "* Language change takes effect after restart",
                saveAndRestart: "💾 Save & Restart",
                // Help
                helpTitle: "📖 How to Play",
                helpViewBtn: "📖 View How to Play",
                helpClose: "✖ Close & Start Game",
                helpBasicsTitle: "🎮 Basic Rules",
                helpBasicsText: "Make the cocktails your customers order and earn money!",
                helpMakingTitle: "🍸 How to Make Cocktails",
                helpStep1: "Check the customer's order (recipe shown in top right)",
                helpStep2: "Tap 'Ingredients' button and select the required ingredients",
                helpStep3: "If the recipe needs ice, tap 'Add Ice' button",
                helpStep4: "Tap the glass to select the correct glass type",
                helpStep5: "Tap 'Shake' button to complete the cocktail!",
                helpCameraTitle: "📷 Camera Mode (Shake with a real glass!)",
                helpCameraStep1: "Tap the '📷 Camera Mode' button",
                helpCameraStep2: "Allow camera access",
                helpCameraStep3: "Hold a real glass and shake in front of the camera 5 times!",
                helpButtonsTitle: "🔘 Button Guide",
                helpButtonsText: "<ul><li><strong>Ingredients</strong> - Select cocktail ingredients</li><li><strong>Add Ice</strong> - Add ice to the shaker</li><li><strong>Glass</strong> - Choose the glass type</li><li><strong>Shake</strong> - Complete the cocktail</li><li><strong>Talk</strong> - Chat with customers (Bonus points!)</li><li><strong>Reset</strong> - Start over</li><li><strong>📷 Camera Mode</strong> - Shake with camera</li></ul>",
                helpTipsTitle: "⭐ Tips",
                helpTipsText: "<ul><li>Follow the recipe to get <strong>combo bonuses</strong>!</li><li><strong>Talk</strong> to customers for tips</li><li>Buy <strong>upgrades</strong> at the end of each day</li><li>Make as many cocktails as you can for high scores!</li></ul>",
                helpHint: "<strong>💡 Hint</strong> Tap the '?' button in the top right to see this screen anytime!",
                helpCloseBtn: "Got it! Back to Game",
                INGREDIENTS: {
                    vodka: { name: 'Vodka', color: '#e0f7fa', glow: '#80deea' },
                    gin: { name: 'Gin', color: '#e8f5e9', glow: '#a5d6a7' },
                    rum: { name: 'Rum', color: '#ffecb3', glow: '#ffe082' },
                    tequila: { name: 'Tequila', color: '#fff9c4', glow: '#fff59d' },
                    brandy: { name: 'Brandy', color: '#d84315', glow: '#ff5722' },
                    beer: { name: 'Beer', color: '#ffeb3b', glow: '#fff176' },
                    cassis: { name: 'Cassis', color: '#4a148c', glow: '#ce93d8' },
                    lime: { name: 'Lime', color: '#d4e157', glow: '#e6ee9c' }, // Matched JA color
                    lemon: { name: 'Lemon', color: '#ffeb3b', glow: '#fff59d' },
                    orangeJuice: { name: 'Orange J', color: '#ff9800', glow: '#ffb74d' },
                    tomatoJuice: { name: 'Tomato J', color: '#d32f2f', glow: '#e57373' },
                    pineappleJuice: { name: 'Pineapple J', color: '#fdd835', glow: '#fff176' },
                    tonic: { name: 'Tonic', color: '#cfd8dc', glow: '#eceff1' },
                    cola: { name: 'Cola', color: '#3e2723', glow: '#a1887f' },
                    gingerAle: { name: 'Ginger Ale', color: '#fbc02d', glow: '#fff176' },
                    whiskey: { name: 'Whiskey', color: '#d4a017', glow: '#ffca28' },
                    soda: { name: 'Soda', color: '#e0f2f1', glow: '#b2dfdb' },
                    kahlua: { name: 'Kahlua', color: '#3e2723', glow: '#5d4037' },
                    milk: { name: 'Milk', color: '#ffffff', glow: '#f5f5f5' },
                    tripleSec: { name: 'Triple Sec', color: '#ffffff', glow: '#e0f7fa' },
                    grenadine: { name: 'Grenadine', color: '#b71c1c', glow: '#e53935' }
                },
                COCKTAILS: [
                    { name: 'Screwdriver', ingredients: ['vodka', 'orangeJuice'], needsIce: true, garnish: 'orange', glass: 'collins', method: 'build' },
                    { name: 'Gin and Tonic', ingredients: ['gin', 'tonic', 'lime'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'Cuba Libre', ingredients: ['rum', 'cola', 'lime'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'Moscow Mule', ingredients: ['vodka', 'gingerAle', 'lime'], needsIce: true, garnish: 'lime', glass: 'rocks', method: 'build' },
                    { name: 'Cassis Orange', ingredients: ['cassis', 'orangeJuice'], needsIce: true, garnish: 'orange', glass: 'collins', method: 'build' },
                    { name: 'Rum and Coke', ingredients: ['rum', 'cola'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'Gin Buck', ingredients: ['gin', 'gingerAle', 'lime'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'Highball', ingredients: ['whiskey', 'soda'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'Whiskey Coke', ingredients: ['whiskey', 'cola'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'build' },
                    { name: 'Kahlua Milk', ingredients: ['kahlua', 'milk'], needsIce: true, garnish: 'cherry', glass: 'rocks', method: 'stir' },
                    { name: 'Black Russian', ingredients: ['vodka', 'kahlua'], needsIce: true, garnish: 'cherry', glass: 'rocks', method: 'stir' },
                    { name: 'White Russian', ingredients: ['vodka', 'kahlua', 'milk'], needsIce: true, garnish: 'cherry', glass: 'rocks', method: 'stir' },
                    { name: 'Margarita', ingredients: ['tequila', 'tripleSec', 'lime'], needsIce: false, garnish: 'lime', glass: 'cocktail', method: 'shake' },
                    { name: 'Tequila Sunrise', ingredients: ['tequila', 'orangeJuice', 'grenadine'], needsIce: true, garnish: 'orange', glass: 'collins', method: 'build' },
                    { name: 'Sidecar', ingredients: ['brandy', 'tripleSec', 'lime'], needsIce: false, garnish: 'lime', glass: 'cocktail', method: 'shake' }, // Using lime instead of lemon for simplicity unless lemon added
                    { name: 'Red Eye', ingredients: ['beer', 'tomatoJuice'], needsIce: false, garnish: 'lime', glass: 'collins', method: 'stir' },
                    { name: 'Bloody Mary', ingredients: ['vodka', 'tomatoJuice', 'lime'], needsIce: true, garnish: 'lime', glass: 'collins', method: 'stir' },
                    { name: 'Matador', ingredients: ['tequila', 'pineappleJuice', 'lime'], needsIce: false, garnish: 'lime', glass: 'cocktail', method: 'shake' }
                ],
                SECRET_COCKTAILS: [
                    { name: 'Gimlet', ingredients: ['gin', 'lime'], needsIce: true, bonus: 500 },
                    { name: 'Cowboy', ingredients: ['whiskey', 'milk'], needsIce: false, bonus: 600 }
                ],
                CUSTOMERS: [
                    { name: "Tavern Regular", time: "night", image: 'images/night/red_beard_man.png', quotes: { order: ["The usual, please."], success: ["That's the stuff!"], fail: ["Hmm, tastes different..."], chat: ["Monsters on the road lately.", "The fire here is warm.", "Any new adventure tales, master?"] } },
                    { name: "Alchemist", time: "noon", image: 'images/noon/scholar_man.png', quotes: { order: ["A perfect golden ratio blend."], success: ["Calculated perfection."], fail: ["Failed concoction."], chat: ["My lab exploded yesterday...", "Elixir research is slow.", "Your mixing skills are intriguing."] } },
                    { name: "Bard", time: "night", image: 'images/night/bard_man.png', quotes: { order: ["Something to inspire a song."], success: ["Magnificent! I feel a poem coming!"], fail: ["I cannot write with this."], chat: ["You shall be in my next saga.", "This glass shines like a gem.", "I've traveled far, but this taste is new."] } },
                    { name: "The Widow", time: "night", image: 'images/night/blonde_noble_woman.png', quotes: { order: ["...Something strong. To forget..."], success: ["...Thank you. The pain fades slightly."], fail: ["...The memories return."], chat: ["He never returned from the war...", "Rain sounds like hooves.", "Don't be kind... it hurts."] } },
                    { name: "Young Merchant", time: "noon", image: 'images/noon/bald_merchant.png', quotes: { order: ["To celebrate a deal! The best you have!"], success: ["Tastes like gold! Cheers!"], fail: ["Not fit for a celebration."], chat: ["Spices from the East are selling high!", "Gold makes the world turn, eh?", "I could invest in this tavern."] } },
                    { name: "Weary Farmer", time: "morning", image: 'images/morning/young_farmer_man.png', quotes: { order: ["Just... give me something strong..."], success: ["...Ah. Life returns."], fail: ["...Tastes like mud."], chat: ["The harvest is bad this year...", "The Lord's taxes are heavy.", "Work starts at dawn again."] } }
                ],
                MILLIONAIRE_CUSTOMER: { name: "Elder Tycoon", image: 'images/night/fat_noble_man.png', quotes: { order: ["Something fit for a King."], success: ["Splendid! Here is gold."], fail: ["Swill for pigs."], chat: ["Merchants rival Kings.", "It is lonely at the top.", "I might buy you a new shop."] } },
                DEATH_CUSTOMER: { name: "The Witch", image: 'images/night/witch_woman.png', quotes: { order: ["...I need a potion to restore my mana."], success: ["...Hehe, power flows through me."], fail: ["...This is just muddy water."], chat: ["...The deep forest is peaceful.", "...Interested in eternal life?", "...Have you seen my black cat?"] } },
                UPGRADES: {
                    shaker: { name: 'Mithril Shaker', description: 'Combo bonus increases to 1.2x' },
                    iceMachine: { name: 'Ice Magic Tool', description: 'Slightly improves score for cocktails with ice' },
                    barManual: { name: 'Ancient Recipe Scroll', description: 'Halves the penalty for mistakes' }
                },
                STORY: {
                    1: { title: "Day 1: A New Adventure", text: "Finally, my own tavern is open.\nA haven for the weary souls of the kingdom.\nWhere warriors and mages rest their wings." },
                    3: { title: "Day 3: The Royal Gourmet", text: "\"There's an interesting tavern keeper here.\"\nHearing the rumors, the Royal Gourmet\nis visiting tonight.", boss: { name: "Royal Gourmet", image: 'images/night/green_noble_man.png', quotes: { order: ["A Gin Short Cocktail. Fit for a King?"], success: ["...I admit it. Rivals the Royal Chef."], fail: ["Disappointing. I shall not return."], chat: ["Manners matter too.", "I've closed many taverns.", "Show me quality."] }, constraints: { includes: ['gin'], glass: 'cocktail' } } },
                    5: { title: "Day 5: The Captain's Worry", text: "A rainy night.\nA tired Guard Captain seeks answers.\nWill he find them at the bottom of a glass?", boss: { name: "Guard Captain", image: 'images/night/mercenary_man.png', quotes: { order: ["Strong, on the rocks. Clear my head."], success: ["...The fog lifts. I see the beast now."], fail: ["...No use. The mist remains."], chat: ["The darkness is deep...", "You saw nothing. Understood?", "Where were you last night?"] }, constraints: { minAlcohol: 80, glass: 'rocks' } } },
                    7: { title: "Day 7: The Legendary Witch", text: "After a week, your name is known across the land.\nTonight, the legendary \"Great Witch\"\ncomes to test your soul.", boss: { name: "Legendary Witch", image: 'images/night/witch_woman.png', quotes: { order: ["A supreme 5-ingredient potion to boost my magic."], success: ["Magnificent... Tastes like magic."], fail: ["You lack discipline."], chat: ["Mixing cocktails is like alchemy.", "Magic alone is not enough.", "Show me your 'soul'."] }, constraints: { exactCount: 5 } } }
                }
            }
        };

        const UPGRADES_DATA = {
            shaker: { cost: 2000, purchased: false },
            iceMachine: { cost: 1500, purchased: false },
            barManual: { cost: 3000, purchased: false }
        };

        const GARNISHES = { lime: '🍋', orange: '🍊', cherry: '🍒' };

        // SVG Paths for Glass Types
        // Cocktail: V-shape with stem
        const PATH_COCKTAIL_GLASS = "M 10 10 L 50 70 L 90 10 Z";
        const PATH_COCKTAIL_STEM = "M 50 70 L 50 110 M 30 115 L 70 115";

        // Collins: Tall straight
        const PATH_COLLINS = "M 20 10 L 25 115 L 75 115 L 80 10";

        // Rocks: Short wide
        const PATH_ROCKS = "M 15 40 L 20 115 L 80 115 L 85 40";

        // --- DOM Elements ---
        const dom = {};

        // --- Ingredient Prices ---
        const INGREDIENT_PRICES = {
            vodka: 300, gin: 350, rum: 300, tequila: 400, brandy: 500,
            beer: 150, cassis: 250, lime: 50, orangeJuice: 80, tomatoJuice: 100,
            pineappleJuice: 120, tonic: 60, cola: 50, gingerAle: 60,
            whiskey: 450, soda: 40, kahlua: 350, milk: 40, tripleSec: 300, grenadine: 150
        };

        // --- Starter Ingredients ---
        const STARTER_INGREDIENTS = ['vodka', 'gin', 'rum', 'lime', 'orangeJuice', 'tonic', 'cola', 'soda'];

        // --- Title Definitions ---
        const TITLES = [
            { id: 'beginner', name: '見習いバーテンダー', nameEn: 'Apprentice Bartender', icon: '🌱', condition: () => true },
            { id: 'mixologist', name: 'カクテル職人', nameEn: 'Mixologist', icon: '🍸', condition: () => state.discoveredCocktails.length >= 10 },
            { id: 'socialite', name: '社交家', nameEn: 'Socialite', icon: '💬', condition: () => state.totalTalks >= 20 },
            { id: 'wealthy', name: '金持ち', nameEn: 'Wealthy', icon: '💰', condition: () => state.totalMoney >= 50000 },
            { id: 'collector', name: 'コレクター', nameEn: 'Collector', icon: '📚', condition: () => state.metCustomers.length >= 30 },
            { id: 'master', name: '伝説のバーテンダー', nameEn: 'Legendary Bartender', icon: '👑', condition: () => state.discoveredCocktails.length >= translations.ja.COCKTAILS.length }
        ];

        // --- Interior Customization Items ---
        const INTERIOR_ITEMS = {
            wallpaper: [
                { id: 'classic', name: 'クラシック', nameEn: 'Classic', price: 0, description: '落ち着いた木目調', descEn: 'Calm wood grain', customerBonus: [] },
                { id: 'modern', name: 'モダン', nameEn: 'Modern', price: 5000, description: '都会的な白壁', descEn: 'Urban white walls', customerBonus: ['noble', 'merchant'] },
                { id: 'fantasy', name: 'ファンタジー', nameEn: 'Fantasy', price: 8000, description: '魔法的な紫の壁', descEn: 'Magical purple walls', customerBonus: ['wizard', 'witch'] }
            ],
            lighting: [
                { id: 'warm', name: '暖色', nameEn: 'Warm', price: 0, description: '温かみのある照明', descEn: 'Warm lighting', customerBonus: [] },
                { id: 'cool', name: '寒色', nameEn: 'Cool', price: 3000, description: '洗練された青白い光', descEn: 'Refined cool light', customerBonus: ['knight', 'guard'] },
                { id: 'neon', name: 'ネオン', nameEn: 'Neon', price: 6000, description: 'パーティー向けカラフル', descEn: 'Colorful party lights', customerBonus: ['dancer', 'bard'] }
            ],
            bgm: [
                { id: 'skyline_serenity', name: 'スカイライン', nameEn: 'Skyline', price: 0, description: '都会の静寂', descEn: 'Urban Serenity', customerBonus: [] },
                { id: 'jazz', name: 'ジャズ', nameEn: 'Jazz', price: 0, description: '落ち着いたジャズ', descEn: 'Relaxing jazz', customerBonus: [] },
                { id: 'medieval', name: '中世風', nameEn: 'Medieval', price: 4000, description: 'リュートの調べ', descEn: 'Lute melodies', customerBonus: ['knight', 'princess'] },
                { id: 'tavern', name: '酒場風', nameEn: 'Tavern', price: 4000, description: '賑やかな酒場BGM', descEn: 'Lively tavern music', customerBonus: ['sailor', 'mercenary'] }
            ]
        };

        // --- Game State ---
        let state = {
            score: 0, timeLeft: 300, timerInterval: null,
            shakerContents: [], shakerHasIce: false, isGameRunning: false,
            canInteract: true, combo: 0, isHappyHour: false,
            happyHourTimeout: null, garnishTimeout: null,
            day: 1, totalMoney: 0,
            upgrades: JSON.parse(JSON.stringify(UPGRADES_DATA)),
            currentCustomer: null, currentOrder: null,
            language: 'ja',
            isBossActive: false,
            hasTalked: false,
            selectedGlass: null,
            discoveredSecrets: [],
            timeOfDay: 'morning',
            // === NEW FEATURES ===
            ownedIngredients: [...STARTER_INGREDIENTS],
            discoveredCocktails: [],
            metCustomers: [],
            currentTitle: 'beginner',
            totalTalks: 0,
            // === PHASE 2: Weather, Drunk, Events ===
            currentWeather: 'sunny', // sunny, rainy, snowy
            currentEvent: null, // null, 'summer', 'christmas'
            customerDrunkLevel: 0, // 0-100, 100+ = passed out
            unlockedTitles: ['beginner'],
            // === PHASE 3: Interior Customization ===
            interior: {
                wallpaper: 'classic',
                lighting: 'warm',
                bgm: 'skyline_serenity'
            },
            ownedInterior: {
                wallpaper: ['classic'],
                lighting: ['warm'],
                bgm: ['skyline_serenity', 'jazz']
            },
            isMysteryMode: false,
            // === SOCIAL FEATURES ===
            hasMatchmade: false,
            // === SAVE SLOTS ===
            currentSaveSlot: 1,
            currentSaveSlot: 1,
            avatar: 'images/night/bartender_man.png',
            settings: {
                volume: { bgm: 50, se: 80 },
                performanceMode: false
            }
        };

        // --- Sound Engine ---
        let sounds = {};
        let isAudioReady = false;
        function setupSounds() { try { sounds = { pour: new Tone.Synth({ oscillator: { type: 'fmsine' }, envelope: { attack: 0.01, decay: 0.1, sustain: 0.05, release: 0.2 } }).toDestination(), shake: new Tone.NoiseSynth({ noise: { type: 'white' }, envelope: { attack: 0.01, decay: 0.15, sustain: 0, release: 0.1 } }).toDestination(), ice: new Tone.MetalSynth({ frequency: 200, envelope: { attack: 0.001, decay: 0.1, release: 0.01 }, harmonicity: 5.1, modulationIndex: 32, resonance: 4000, octaves: 1.5 }).toDestination(), success: new Tone.PolySynth(Tone.Synth, { oscillator: { type: "sine" }, envelope: { attack: 0.01, decay: 0.2, sustain: 0.1, release: 0.2 } }).toDestination(), fail: new Tone.PolySynth(Tone.Synth, { oscillator: { type: "square" }, envelope: { attack: 0.01, decay: 0.4, sustain: 0, release: 0.2 } }).toDestination(), tip: new Tone.PolySynth(Tone.Synth, { oscillator: { type: "sine" }, envelope: { attack: 0.01, decay: 0.4, sustain: 0.2, release: 0.3 } }).toDestination(), combo: new Tone.PolySynth(Tone.Synth, { oscillator: { type: 'fmsquare' }, envelope: { attack: 0.01, decay: 0.1, release: 0.1 } }).toDestination(), happyHour: new Tone.PolySynth(Tone.Synth, { oscillator: { type: 'pulse' }, envelope: { attack: 0.01, decay: 0.5, release: 0.2 } }).toDestination(), cash: new Tone.PolySynth(Tone.Synth, { oscillator: { type: 'triangle' }, envelope: { attack: 0.01, decay: 0.2, release: 0.1 } }).toDestination() }; isAudioReady = true; } catch (e) { console.error("Sound engine failed to initialize:", e); } }
        async function startAudio() {
            if (isAudioReady && Tone.context.state !== 'running') { await Tone.start(); }

            const savedSettings = localStorage.getItem('bartenderSettings');
            let bgmVol = 0.3;
            if (savedSettings) {
                const s = JSON.parse(savedSettings);
                if (s.volume && s.volume.bgm !== undefined) {
                    bgmVol = (s.volume.bgm / 100) * 0.3; // Scale to max 0.3
                }
            }

            if (dom.bgmAudioEl) {
                dom.bgmAudioEl.volume = bgmVol;
                dom.bgmAudioEl.play().catch(e => { });
            }
        }

        function stopAudio() {
            if (dom.bgmAudioEl) {
                dom.bgmAudioEl.pause();
                dom.bgmAudioEl.currentTime = 0;
            }
        }
        function playSound(sound, ...args) {
            if (!isAudioReady) return;

            // SE Volume Check
            const seVol = (state.settings && state.settings.volume) ? state.settings.volume.se / 100 : 1.0;
            if (seVol <= 0) return;

            // Apply volume to Tone.Destination temporarily or adjust velocity
            // Tone.js synths usually have a volume property in decibels. 
            // Simple approach: map 0-100 linear to -60 to 0 dB, but Tone.Destination.volume is easiest for global mix
            // but we want separate BGM/SE.
            // Since all SEs use 'toDestination()', they go to the master.
            // We should ideally set the volume of each synth.
            // Since we can't easily refactor all synths now, let's assume standard volume and just gate it 
            // or maybe set Tone.Destination.volume.value if BGM is separate (BGM is an Audio element, so it IS separate!)

            // So we can control Tone.Destination volume for SE!
            // Map 0-100 to range -Infinity to 0
            // 100 -> 0 dB, 50 -> -6 dB, 0 -> Mute

            const db = seVol > 0 ? 20 * Math.log10(seVol) : -Infinity;
            Tone.Destination.volume.value = db; // This affects ALL Tone.js sounds (our SEs)

            try { if (sound === 'success') sounds.success.triggerAttackRelease(['C4', 'E4', 'G4'], '8n'); else if (sound === 'fail') sounds.fail.triggerAttackRelease(['C3', 'C#3'], '4n'); else if (sound === 'ice') sounds.ice.triggerAttackRelease('C3', '8n', Tone.now() + 0.05); else if (sound === 'tip') sounds.tip.triggerAttackRelease(['C5', 'E5', 'G5', 'C6'], '4n'); else if (sound === 'happyHour') sounds.happyHour.triggerAttackRelease(['C4', 'E4', 'G4', 'C5'], '2n'); else if (sound === 'cash') sounds.cash.triggerAttackRelease(['E5', 'G5', 'C6'], '8n'); else if (sound === 'combo' && sounds.combo) { const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']; sounds.combo.triggerAttackRelease(notes[Math.min(state.combo - 1, notes.length - 1)], '8n'); } else if (sounds[sound]) sounds[sound].triggerAttackRelease(...args); } catch (e) { }
        }
        // --- Language & View Management ---
        // --- Language & View Management ---
        // Language switching removed - locked to Japanese
        function setLanguage(lang) {
            // Deprecated functionality - keeping stub if called, but does nothing or minimal
            // We'll enforce 'ja' just in case
            state.language = 'ja';
            document.documentElement.lang = 'ja';

            // Initial setup might call this, so let's just use it to init simple things
            // but skip the heavy translation logic since we used the raw Japanese text
            // We need to ensure dynamic updates still happen if needed

            // Update dynamic content
            generateIngredients();
            renderUpgrades();
        }


    }

        function showView(view) {
        dom.gameContainerEl.style.display = 'none';
        dom.roomContainerEl.style.display = 'none';
        if (view === 'game') {
            dom.gameContainerEl.style.display = 'flex';
        } else if (view === 'room') {
            dom.roomContainerEl.style.display = 'flex';
        }
    }

    // Get time of day based on real world time
    function getRealTimeOfDay() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 18) return 'noon';
        return 'night';
    }

    function startDay() {
        const realTimeOfDay = getRealTimeOfDay();
        Object.assign(state, { score: 0, timer: 300, isGameRunning: false, canInteract: false, combo: 0, isHappyHour: false, currentCustomer: null, currentOrder: null, isBossActive: false, hasTalked: false, timeOfDay: realTimeOfDay });
        dom.gameContainerEl.classList.remove('boss-mode');

        showView('game');
        dom.gameOverlayEl.style.opacity = '0';
        dom.gameOverlayEl.style.pointerEvents = 'none';

        // === NEW: Show menu button and update title display ===
        showMenuButton();
        updateTitleDisplay();

        // === PHASE 2: Weather, Events, Reset Drunk ===
        setRandomWeather(); // Now async but we don't await strictly
        checkMysteryTime(); // New Mystery Mode check
        checkSeasonalEvent();
        resetDrunkLevel();

        updateEnvironmentVisuals(); // Initial visual update

        const currentLangData = translations[state.language];
        const storyEvent = currentLangData.STORY && currentLangData.STORY[state.day];

        if (storyEvent) {
            showStoryOverlay(storyEvent, () => {
                initGameLoop();
            });
        } else {
            initGameLoop();
        }
    }

    function updateTimer() {
        if (!state.isGameRunning || state.bossEncounterActive) return; // Only update timer if game is running and not in boss encounter
        if (state.timer > 0) {
            state.timer--;
            dom.timerEl.textContent = state.timer;

            // Real-time based visuals - timeOfDay is set at startDay based on real time
            // No in-game time progression needed
        } else {
            endDay();
        }
    }

    // --- Time Logic ---
    function updateEnvironmentVisuals() {
        const windowEl = document.getElementById('bg-window');
        // Remove all time classes (including old ones if any)
        windowEl.classList.remove('time-morning', 'time-day', 'time-evening', 'time-night', 'time-midnight');

        // Map game time to CSS classes
        let cssClass = 'time-morning';
        if (state.timeOfDay === 'noon') cssClass = 'time-day'; // Use time-day for noon
        if (state.timeOfDay === 'night') cssClass = 'time-night';

        windowEl.classList.add(cssClass);
    }

    function showStoryOverlay(eventData, callback) {
        const overlay = document.getElementById('story-overlay');
        const title = document.getElementById('story-title');
        const text = document.getElementById('story-text');
        const cont = document.querySelector('.story-continue');

        title.textContent = eventData.title;
        text.innerText = eventData.text;

        overlay.classList.add('active');

        const clickHandler = () => {
            overlay.classList.remove('active');
            cont.removeEventListener('click', clickHandler);
            setTimeout(callback, 1000);
        };
        cont.addEventListener('click', clickHandler);
    }

    function initGameLoop() {
        state.isGameRunning = true;
        updateScore();
        resetShaker();
        updateComboDisplay();
        updateUIDisplays();
        generateOrder();
        state.timerInterval = setInterval(updateTimer, 1000);
        scheduleHappyHour();
        startAudio();
        updateEnvironmentVisuals(); // Initial call for environment
    }

    function endDay() {
        state.isGameRunning = false;
        clearInterval(state.timerInterval);
        clearTimeout(state.happyHourTimeout);
        clearTimeout(state.garnishTimeout);
        stopAudio();
        if (dom.bgmAudioEl) dom.bgmAudioEl.playbackRate = 1.0;

        state.totalMoney += state.score;

        // === NEW: Save progress, check titles, hide menu button ===
        state.day++; // Auto-increment day
        saveGameData();
        checkTitles();
        hideMenuButton();

        if (dom.timerDisplayEl) dom.timerDisplayEl.classList.remove('timer-danger');

        if (state.day >= 8) { // Checked against 8 because 7 days are done
            showEndingScreen();
        } else {
            showView('room');
            updateRoomUI();
        }
    }

    function showEndingScreen() {
        const overlay = document.getElementById('ending-overlay');
        const rankEl = document.getElementById('ending-rank');
        const moneyEl = document.getElementById('ending-money');
        const msgEl = document.getElementById('ending-message');

        document.getElementById('game-container').classList.add('hidden'); // Hide game
        document.getElementById('room-container').classList.add('hidden');

        let rank = "C";
        let title = "Apprentice Bartender";
        let msg = "";

        if (state.totalMoney >= 50000) {
            rank = "S"; title = "Legendary Bartender";
            msg = state.language === 'ja' ? "あなたの名は伝説となり、世界中のバーテンダーが目標とするだろう。" : "Your name has become a legend, a goal for bartenders worldwide.";
        } else if (state.totalMoney >= 30000) {
            rank = "A"; title = "Master Bartender";
            msg = state.language === 'ja' ? "素晴らしい技術と接客で、多くの常連客に愛される店となった。" : "With great skill and service, your bar is loved by many.";
        } else if (state.totalMoney >= 10000) {
            rank = "B"; title = "Professional Bartender";
            msg = state.language === 'ja' ? "安定した経営を続けている。この街に馴染んだようだ。" : "You continue stable operations. You fit right into this city.";
        } else {
            title = "Novice Bartender";
            msg = state.language === 'ja' ? "まだまだ修行が必要だ。明日も頑張ろう。" : "Still need more training. Let's try again tomorrow.";
        }

        rankEl.textContent = `Rank ${rank}: ${title}`;
        moneyEl.textContent = state.totalMoney.toLocaleString();
        msgEl.textContent = msg;

        overlay.classList.remove('hidden');
        playSound('success');
    }

    function updateRoomUI() {
        dom.roomDayDisplayEl.textContent = state.day - 1; // Show completed day
        dom.dailyEarningsDisplayEl.textContent = state.score.toLocaleString();
        dom.roomMoneyDisplayEl.textContent = state.totalMoney.toLocaleString();
        renderUpgrades();
    }

    function startNextDay() {
        // state.day is already incremented in endDay
        startDay();
    }

    // Removed duplicate renderUpgrades and buyUpgrade functions

    // --- Game Logic ---
    // updateTimer function moved above showStoryOverlay

    function startBossEncounter(bossData) {
        clearInterval(state.timerInterval);
        state.bossEncounterActive = true; // Set boss encounter active
        state.isBossActive = true; // Keep for general boss state
        dom.gameContainerEl.classList.add('boss-mode');
        if (dom.bgmAudioEl) dom.bgmAudioEl.playbackRate = 0.7; // Slow down music
        showFloatingText(translations[state.language].bossIncoming, '#dc2626', dom.gameContainerEl);
        playSound('fail');

        // Wait for current customer to finish or force clear (if idle)
        // For simplicity, we just force generate after a delay
        setTimeout(() => {
            generateOrder(bossData); // Pass bossData to generateOrder
        }, 2000);
    }
    // Removed obsolete populateShelf and addIngredient functions
    function addIce() { if (!state.isGameRunning || !state.canInteract || state.shakerHasIce) return; state.shakerHasIce = true; updateShakerVisual(); playSound('ice'); }
    function talk() {
        if (!state.isGameRunning || !state.canInteract || !state.currentCustomer || state.hasTalked) return;
        state.hasTalked = true;
        if (dom.talkButtonEl) dom.talkButtonEl.classList.add('opacity-50', 'cursor-not-allowed');

        // Check for serious counseling opportunity (30% chance or specific customer trait)
        if (state.currentCustomer.worries && (Math.random() < 0.3 || state.currentCustomer.alwaysWorry)) {
            startCounseling();
            return;
        }

        // Normal Talk
        // Time-based Chat Logic
        let chats = [];
        const rawChat = state.currentCustomer.quotes.chat;

        if (Array.isArray(rawChat)) {
            chats = rawChat;
        } else if (typeof rawChat === 'object') {
            const phase = state.timeOfDay;
            if (rawChat.any) chats = chats.concat(rawChat.any);
            if (rawChat[phase]) chats = chats.concat(rawChat[phase]);
            if (chats.length === 0) chats = ["..."];
        } else {
            chats = ["..."];
        }

        showDialogue(chats);

        // Bonus for talking
        let points = 50 * (state.isHappyHour ? 2 : 1);
        state.score += points;
        updateScore();
        showFloatingText(`+¥${points} (Talk)`, "#60a5fa", dom.customerEl.parentElement);
        playSound('pop', '8n');

        // Record talk
        recordTalk();

        // Check Matchmaking
        if (state.currentCustomer.lookingForPartner && !state.hasMatchmade) {
            const btn = document.getElementById('matchmake-button');
            if (btn) btn.classList.remove('hidden');
        }
    }

    // === COUNSELING MODE ===
    function startCounseling() {
        const worryData = state.currentCustomer.worries;
        if (!worryData) return;

        const overlay = document.getElementById('counseling-overlay');
        const img = document.getElementById('counseling-customer-img');
        const question = document.getElementById('counseling-question');
        const choicesDiv = document.getElementById('counseling-choices');

        if (img) img.src = state.currentCustomer.image;
        if (question) question.textContent = `「${worryData.question}」`;

        if (choicesDiv) {
            choicesDiv.innerHTML = '';
            worryData.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = "w-full bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-lg font-jp text-left border border-slate-500 hover:border-pink-400 transition-colors";
                btn.textContent = choice.text;
                btn.onclick = () => resolveCounseling(choice);
                choicesDiv.appendChild(btn);
            });
        }

        if (overlay) overlay.classList.remove('hidden');
    }

    function resolveCounseling(choice) {
        document.getElementById('counseling-overlay').classList.add('hidden');
        const outcome = choice.outcome; // 'good', 'bad', 'neutral'

        let points = 0;
        let color = '#fff';
        let response = "";

        if (outcome === 'good') {
            points = 150;
            color = '#f472b6'; // pink
            response = "ありがとう！心が軽くなったよ！";
            playSound('success');
            createHearts(dom.customerEl);
        } else if (outcome === 'bad') {
            points = -20;
            color = '#94a3b8';
            response = "そうかなぁ…余計に落ち込んできた。";
            playSound('fail');
        } else {
            points = 50;
            color = '#60a5fa';
            response = "なるほど、一理あるね。";
            playSound('pop');
        }

        if (state.isHappyHour) points *= 2;
        state.score += points;
        updateScore();
        showFloatingText(`${points > 0 ? '+' : ''}${points}`, color, dom.scoreDisplayEl);
        showDialogue([response]);

        // Check Matchmaking opportunity even after counseling
        if (state.currentCustomer.lookingForPartner && !state.hasMatchmade) {
            const btn = document.getElementById('matchmake-button');
            if (btn) btn.classList.remove('hidden');
        }
    }

    function createHearts(targetEl) {
        if (!targetEl) return;
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.textContent = '💖';
            heart.style.position = 'absolute';
            const rect = targetEl.getBoundingClientRect();
            // Position relative to parent container usually, but let's try fixed or simple offset
            // Simpler: append to parent of customerEl
            heart.style.left = (targetEl.offsetLeft + targetEl.offsetWidth / 2) + 'px';
            heart.style.top = (targetEl.offsetTop + targetEl.offsetHeight / 2) + 'px';
            heart.style.fontSize = '24px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '100';
            heart.animate([
                { transform: 'translate(0,0) scale(0)', opacity: 1 },
                { transform: `translate(${Math.random() * 100 - 50}px, -100px) scale(1.5)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 500,
                easing: 'ease-out'
            });
            targetEl.parentElement.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }
    }

    // === MATCHMAKING SYSTEM ===
    function openMatchmaking() {
        if (!state.isGameRunning || !state.canInteract) return;
        const overlay = document.getElementById('matchmaking-overlay');
        const list = document.getElementById('matchmaking-list');
        if (!list) return;

        list.innerHTML = '';

        // Filter valid candidates (met customers excluding current one and special chars)
        const candidates = state.metCustomers.filter(name =>
            name !== state.currentCustomer.name &&
            !['???', 'Death', 'Millionaire', 'Boss'].some(x => name.includes(x))
        );

        if (candidates.length === 0) {
            list.innerHTML = '<div class="text-white font-jp text-center p-4">まだ紹介できる人がいないようだ…</div>';
        } else {
            candidates.forEach(name => {
                // Find image URL from CUSTOMERS data
                const langData = translations[state.language];
                const customerData = [...langData.CUSTOMERS].find(c => c.name === name);
                const img = customerData ? customerData.image : 'images/icon.png'; // Fallback

                const btn = document.createElement('div');
                btn.className = "flex items-center gap-3 bg-slate-800 p-2 rounded cursor-pointer hover:bg-slate-700 border border-slate-600 shrink-0";
                btn.innerHTML = `
                                <img src="${img}" class="w-10 h-10 rounded-full bg-slate-900 object-cover">
                                <span class="text-white font-jp font-bold">${name}</span>
                             `;
                btn.onclick = () => resolveMatchmaking(name);
                list.appendChild(btn);
            });
        }

        if (overlay) overlay.classList.remove('hidden');
    }

    function closeMatchmaking() {
        const overlay = document.getElementById('matchmaking-overlay');
        if (overlay) overlay.classList.add('hidden');
    }

    function resolveMatchmaking(partnerName) {
        closeMatchmaking();
        state.hasMatchmade = true;
        const btn = document.getElementById('matchmake-button');
        if (btn) btn.classList.add('hidden');

        // Compatibility Logic (Simple Mockup)
        // In future, use compatibility tags. For now, 50% chance.
        const isSuccess = Math.random() > 0.5;

        if (isSuccess) {
            showDialogue([`えっ、${partnerName}さん？ 気になってたんだ！紹介して！`]);
            createHearts(dom.customerEl);
            state.score += 300;
            updateScore();
            showFloatingText("+300 Match!", "#ec4899", dom.scoreDisplayEl);
            playSound('success');
        } else {
            showDialogue([`うーん、${partnerName}さんはちょっとタイプじゃないかな…`]);
            state.score += 50;
            updateScore();
            showFloatingText("+50", "#94a3b8", dom.scoreDisplayEl);
        }
    }

    window.openMatchmaking = openMatchmaking;
    window.closeMatchmaking = closeMatchmaking;
    window.startCounseling = startCounseling;
    window.resolveCounseling = resolveCounseling;
    window.resolveMatchmaking = resolveMatchmaking;
    // Removed unused shake function

    function resetShaker() { state.shakerContents = []; state.shakerHasIce = false; updateShakerVisual(); dom.finalCocktailEl.classList.remove('animate-fill'); dom.finalCocktailEl.style.height = '0%'; dom.resultTextEl.textContent = ''; }

    function updateGlassVisuals(type) {
        let pathD = '';
        if (type === 'collins') pathD = PATH_COLLINS;
        else if (type === 'rocks') pathD = PATH_ROCKS;
        else if (type === 'cocktail') pathD = PATH_COCKTAIL_GLASS + " " + PATH_COCKTAIL_STEM;
        else pathD = PATH_COLLINS;

        const svg = dom.cocktailGlassEl.querySelector('svg');
        if (svg) {
            svg.innerHTML = `<path d="${pathD}" fill="none" stroke="white" stroke-width="2" filter="drop-shadow(0 0 2px rgba(255,255,255,0.5))" />`;
        }

        // Adjust glass visuals container if needed (width/height are managed by CSS classes or existing style)
    }

    function updateShakerVisual() { const liquidHeight = (state.shakerContents.length / 5) * 100; const currentIngredients = translations[state.language].INGREDIENTS; const mixedColor = state.shakerContents.length > 0 ? '#' + state.shakerContents.reduce((avg, key) => { let c = currentIngredients[key].color.substring(1); avg[0] += parseInt(c.substring(0, 2), 16); avg[1] += parseInt(c.substring(2, 4), 16); avg[2] += parseInt(c.substring(4, 6), 16); return avg; }, [0, 0, 0]).map(c => Math.round(c / state.shakerContents.length).toString(16).padStart(2, '0')).join('') : 'transparent'; dom.shakerContentsEl.style.background = `linear-gradient(to top, ${mixedColor} 0%, ${mixedColor} ${liquidHeight}%, transparent ${liquidHeight}%)`; dom.shakerIceCubesEl.innerHTML = ''; if (state.shakerHasIce) { for (let i = 0; i < 5; i++) { const ice = document.createElement('div'); ice.className = 'ice-cube'; ice.style.cssText = `width:${Math.random() * 10 + 15}px; height:${Math.random() * 10 + 15}px; left:${Math.random() * 70}%; bottom:${Math.random() * (liquidHeight > 20 ? liquidHeight - 20 : 0)}%; transform:rotate(${Math.random() * 90}deg);`; dom.shakerIceCubesEl.appendChild(ice); } } }
    function showFloatingText(text, color, element) { const el = document.createElement('div'); el.className = 'floating-text'; el.textContent = text; el.style.color = color; element.appendChild(el); setTimeout(() => el.remove(), 1500); }
    function showDialogue(lines) { dom.customerDialogueEl.textContent = lines[Math.floor(Math.random() * lines.length)]; dom.customerDialogueEl.classList.add('show'); }
    function updateScore() { if (state.score < 0) state.score = 0; dom.scoreEl.textContent = state.score.toLocaleString(); }
    function updateUIDisplays() { dom.dayDisplayEl.textContent = state.day; dom.moneyDisplayEl.textContent = state.totalMoney.toLocaleString(); }

    function renderUpgrades() {
        const upgradesContainer = dom.upgradesSectionEl;
        if (!upgradesContainer) return;

        const currentLangData = translations[state.language];
        upgradesContainer.innerHTML = `<h2 class="font-jp text-2xl font-bold text-center mb-4">${currentLangData.upgradesTitle}</h2>`;
        const list = document.createElement('div');
        list.className = 'space-y-3';

        Object.keys(currentLangData.UPGRADES).forEach(key => {
            // Use static data for cost, state for purchased status
            const staticData = UPGRADES_DATA[key];
            // Ensure state object exists for this key (seamlessly handle new upgrades)
            const userState = state.upgrades[key] || { purchased: false };
            const info = currentLangData.UPGRADES[key];

            if (!staticData) return; // Skip if no data found

            const div = document.createElement('div');
            div.className = 'bg-gray-800 p-4 rounded flex justify-between items-center';

            let btnText = `¥${staticData.cost}`;
            let btnClass = 'bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded font-jp';
            let disabled = false;

            if (!staticData.consumable && userState.purchased) {
                btnText = currentLangData.purchased;
                btnClass = 'bg-gray-600 text-gray-400 cursor-not-allowed py-2 px-4 rounded font-jp';
                disabled = true;
            } else if (state.totalMoney < staticData.cost) {
                btnClass = 'bg-gray-600 text-gray-400 cursor-not-allowed py-2 px-4 rounded font-jp';
                disabled = true;
            }

            div.innerHTML = `
                        <div>
                            <h3 class="font-bold text-lg font-jp text-yellow-300">${info.name}</h3>
                            <p class="text-sm text-gray-300 font-jp">${info.description}</p>
                        </div>
                        <button class="${btnClass}" ${disabled ? 'disabled' : ''} onclick="buyUpgrade('${key}')">${btnText}</button>
                    `;
            list.appendChild(div);
        });
        dom.upgradesSectionEl.appendChild(list);
    }

    window.buyUpgrade = function (key) {
        const staticData = UPGRADES_DATA[key];
        // Ensure state exists if it was missing
        if (!state.upgrades) state.upgrades = {};
        if (!state.upgrades[key]) state.upgrades[key] = { purchased: false };
        const userState = state.upgrades[key];

        if (state.totalMoney >= staticData.cost) {
            if (!staticData.consumable && userState.purchased) return;
            state.totalMoney -= staticData.cost;
            if (!staticData.consumable) {
                userState.purchased = true;
            }
            playSound('cash');
            updateRoomUI(); // Use updateRoomUI to refresh room money
            saveGameData(); // Save immediately after purchase
        }
    };
    function updateComboDisplay() { if (state.combo > 1) { dom.comboDisplayEl.textContent = `${state.combo} COMBO!`; dom.comboDisplayEl.style.opacity = '1'; dom.comboDisplayEl.style.transform = 'translateX(-50%) scale(1)'; } else { dom.comboDisplayEl.style.opacity = '0'; dom.comboDisplayEl.style.transform = 'translateX(-50%) scale(0.5)'; } }
    function scheduleHappyHour() { const delay = Math.random() * 20000 + 15000; state.happyHourTimeout = setTimeout(startHappyHour, delay); }
    function startHappyHour() { if (!state.isGameRunning) return; state.isHappyHour = true; dom.happyHourBannerEl.classList.remove('hidden'); playSound('happyHour'); }

    function generateOrder(forcedCustomer = null) { // Added forcedCustomer parameter back for boss logic
        state.canInteract = false;
        if (state.currentCustomer) {
            dom.customerEl.classList.remove('slide-in', 'angry');
            dom.customerEl.classList.add('slide-out');
            dom.orderBubbleEl.style.opacity = '0';
            dom.customerDialogueEl.classList.remove('show');
            dom.recipeDisplayEl.style.opacity = '0';
        }
        setTimeout(() => {
            state.hasTalked = false; // Reset talk status for new customer
            if (!state.isGameRunning && !state.bossEncounterActive) return; // Check bossEncounterActive instead of isBossActive

            const currentLangData = translations[state.language];

            // Boss Encounter Override
            const dayStory = currentLangData.STORY[state.day];
            if (dayStory && dayStory.boss && !state.bossDefeated && !state.bossEncounterActive) {
                // Boss appears if time is low (e.g., last 15 seconds) or if forced
                if (state.timer <= 15 || forcedCustomer) { // Trigger boss if time is low or explicitly forced
                    startBossEncounter(dayStory.boss);
                    return; // Stop normal customer generation
                }
            }

            // --- Time-based Customer Selection ---
            let potentialCustomers = currentLangData.CUSTOMERS.filter(c => c.time === state.timeOfDay);

            // Fallback
            if (potentialCustomers.length === 0) potentialCustomers = currentLangData.CUSTOMERS;

            // Special Customers Chance
            if (forcedCustomer) { // If a boss is forced
                state.currentCustomer = forcedCustomer;
                state.bossEncounterActive = true; // Ensure boss mode is active
            } else if (Math.random() < 0.10 && state.timeOfDay === 'night') { // Millionaire (Night only)
                state.currentCustomer = JSON.parse(JSON.stringify(currentLangData.MILLIONAIRE_CUSTOMER));
            } else if (Math.random() < 0.05 && state.timeOfDay === 'night') { // Death/Witch (Night only)
                state.currentCustomer = JSON.parse(JSON.stringify(currentLangData.DEATH_CUSTOMER));
            } else {
                // Prevent consecutive same customer
                let template;
                let attempts = 0;
                const maxAttempts = 5;
                do {
                    template = potentialCustomers[Math.floor(Math.random() * potentialCustomers.length)];
                    attempts++;
                } while (
                    potentialCustomers.length > 1 &&
                    state.lastCustomerId &&
                    template.name === state.lastCustomerId &&
                    attempts < maxAttempts
                );
                state.lastCustomerId = template.name; // Store for next check
                state.currentCustomer = JSON.parse(JSON.stringify(template));
            }

            // Update Window immediately
            updateEnvironmentVisuals();

            dom.customerDialogueEl.classList.remove('show');
            dom.customerEl.src = state.currentCustomer.image;
            dom.customerNameEl.textContent = state.currentCustomer.name;
            dom.customerEl.classList.remove('slide-out');
            dom.customerEl.classList.add('slide-in');
            dom.customerEl.style.opacity = '1'; // Ensure visible

            // Generate Cocktail Order
            if (state.currentCustomer.constraints) {
                // Boss logic handled in startBossEncounter, this block might be redundant or for debug custom boss injection
                // If we assigned a boss template to currentCustomer manually:
                state.currentOrder = {
                    isConstraint: true,
                    constraints: state.currentCustomer.constraints,
                    text: state.currentCustomer.quotes.order[0] // Use first quote as order text
                };
            } else {
                // Normal Customer order generation
                const randomCocktail = currentLangData.COCKTAILS[Math.floor(Math.random() * currentLangData.COCKTAILS.length)];
                state.currentOrder = { ...randomCocktail, isConstraint: false };
            }

            // === MYSTERY MODE OVERRIDE ===
            if (state.isMysteryMode) {
                state.currentCustomer.name = "???";
                // Scramble quotes
                state.currentCustomer.quotes = {
                    order: ["..."],
                    success: ["...フフ..."],
                    fail: ["...チッ..."],
                    chat: ["..."]
                };
            }

            setTimeout(() => {
                dom.orderTextEl.textContent = state.currentOrder.isConstraint
                    ? state.currentOrder.text
                    : state.currentOrder.name;

                dom.orderIngredientsEl.innerHTML = '';
                // For constraints, we might want to hint ingredients or show "?"
                if (state.currentOrder.isConstraint) {
                    // Show nothing or hint? Bosses usually don't show ingredients list directly
                } else {
                    state.currentOrder.ingredients.forEach(ingKey => {
                        const ingredient = currentLangData.INGREDIENTS[ingKey];
                        if (ingredient) {
                            const div = document.createElement('div');
                            div.style.backgroundColor = ingredient.color;
                            div.style.boxShadow = `0 0 5px ${ingredient.glow}`;
                            div.className = 'w-4 h-4 md:w-6 md:h-6 rounded-full border border-gray-400';
                            div.title = ingredient.name;
                            dom.orderIngredientsEl.appendChild(div);
                        }
                    });
                }

                dom.orderBubbleEl.style.opacity = '1';
                showDialogue(state.currentCustomer.quotes.order);
                updateRecipeDisplay();

                // Glass Selection: Default to Collins, user can change it
                state.selectedGlass = 'collins';
                updateGlassVisuals('collins');
                state.canInteract = true;
            }, 700); // Wait for slide-in animation
        }, state.currentCustomer ? 700 : 0); // Wait for slide-out animation (if exiting)
    }

    function updateRecipeDisplay() {
        const currentLangData = translations[state.language];
        if (state.currentOrder) {
            if (state.currentOrder.isConstraint) {
                // Special Order Display
                const constraints = state.currentOrder.constraints;
                let desc = [];
                if (constraints.includes) desc.push(`${currentLangData.recipe}: ${constraints.includes.join(', ')}`);
                if (constraints.minAlcohol) desc.push(`Alcohol >= ${constraints.minAlcohol}`);
                if (constraints.exactCount) desc.push(`${currentLangData.recipe} x ${constraints.exactCount}`);

                let glassName = constraints.glass ? currentLangData['glass' + constraints.glass.charAt(0).toUpperCase() + constraints.glass.slice(1)] : "Any";

                dom.recipeDisplayEl.innerHTML = `
                                <p class="font-bold font-jp text-center text-amber-300 border-b border-amber-300/50 mb-1">SPECIAL ORDER</p>
                                <p class="text-xs font-jp text-gray-400 mb-1">${currentLangData.glassLabel} ${glassName}</p>
                                <p class="text-sm font-jp text-red-300 animate-pulse">${desc.join('<br>')}</p>
                            `;
            } else {
                const recipeItems = state.currentOrder.ingredients.map(key => {
                    const ing = currentLangData.INGREDIENTS[key];
                    return ing ? ing.name.replace('\n', '') : key;
                });
                if (state.currentOrder.needsIce) recipeItems.push(currentLangData.ice);

                // Show Glass Type
                let glassName = currentLangData.glassCollins;
                if (state.currentOrder.glass === 'cocktail') glassName = currentLangData.glassCocktail;
                else if (state.currentOrder.glass === 'rocks') glassName = currentLangData.glassRocks;
                else if (state.currentOrder.glass === 'short') glassName = currentLangData.glassShort;

                dom.recipeDisplayEl.innerHTML = `
                            <p class="font-bold font-jp text-center text-amber-300 border-b border-amber-300/50 mb-1">${currentLangData.recipe}</p>
                            <p class="text-xs font-jp text-gray-400 mb-1">${currentLangData.glassLabel} ${glassName}</p>
                            <p class="text-sm font-jp">${recipeItems.join(', ')}</p>
                        `;
            }
            dom.recipeDisplayEl.style.opacity = '1';
        } else {
            dom.recipeDisplayEl.style.opacity = '0';
        }
    }

    window.finishCocktail = function (method) {
        if (!state.isGameRunning || !state.canInteract || (state.shakerContents.length === 0 && !state.shakerHasIce)) return;

        // Animation - always shake for now since it's the "Finish" button
        let sound = 'shake';
        state.canInteract = false;
        dom.customerDialogueEl.classList.remove('show');

        // === PHASE 2: Add liquid wave effect during shake ===
        addLiquidWaveEffect();

        dom.shakerAreaEl.classList.add('shake-animation');
        // Play sound multiple times for effect
        for (let i = 0; i < 5; i++) setTimeout(() => playSound('shake'), i * 80);

        setTimeout(() => {
            dom.shakerAreaEl.classList.remove('shake-animation');
            removeLiquidWaveEffect(); // Remove wave after shake
            validateCocktail();
        }, 800);
    };

    function proceedToNextCustomer() {
        resetShaker();
        generateOrder();
    }

    function proceedAfterCustomer() {
        if (state.bossEncounterActive) {
            state.bossEncounterActive = false;
            setTimeout(endDay, 1000);
        } else {
            proceedToNextCustomer();
        }
    }

    function startGarnishMiniGame() {
        // Simplified Garnish: Auto-apply for now to unblock
        // Future: Add garnish selection UI similar to glass/ingredients
        const currentLangData = translations[state.language];
        let garnish = state.currentOrder.garnish;
        if (!garnish) garnish = 'lime'; // Default

        // Just show success immediately for this phase
        setTimeout(() => {
            showFloatingText(`${GARNISHES[garnish] || '👌'} Perfect!`, '#22c55e', dom.cocktailGlassEl);
            setTimeout(proceedAfterCustomer, 1500);
        }, 500);
    }

    function validateCocktail() {

        const currentLangData = translations[state.language];
        dom.finalCocktailEl.style.background = dom.shakerContentsEl.style.background;
        dom.finalCocktailEl.style.setProperty('--fill-height', '80%');
        dom.finalCocktailEl.classList.add('animate-fill');

        // Alcohol Calculation (Moved up for logic)
        let totalAlcohol = 0;
        state.shakerContents.forEach(key => {
            const ing = currentLangData.INGREDIENTS[key];
            if (ing && ing.alcohol) totalAlcohol += ing.alcohol;
        });

        let isCorrect = false;
        let ingredientMatch = false;
        let iceMatch = false;
        let glassMatch = false;

        if (state.currentOrder.isConstraint) {
            const c = state.currentOrder.constraints;
            glassMatch = (!c.glass) || (state.selectedGlass === c.glass);

            let includesMatch = true;
            if (c.includes) includesMatch = c.includes.every(req => state.shakerContents.includes(req));

            let alcoholMatch = true;
            if (c.minAlcohol) alcoholMatch = totalAlcohol >= c.minAlcohol;

            let countMatch = true;
            if (c.exactCount) countMatch = state.shakerContents.length === c.exactCount;

            iceMatch = true;
            if (state.currentOrder.needsIce) iceMatch = state.shakerHasIce;

            ingredientMatch = includesMatch && alcoholMatch && countMatch;
            isCorrect = glassMatch && ingredientMatch && iceMatch;
        } else {
            const madeRecipeSorted = JSON.stringify([...state.shakerContents].sort());
            const targetRecipeSorted = JSON.stringify([...state.currentOrder.ingredients].sort());

            ingredientMatch = madeRecipeSorted === targetRecipeSorted;
            iceMatch = state.currentOrder.needsIce === state.shakerHasIce;
            glassMatch = state.selectedGlass === state.currentOrder.glass;

            isCorrect = ingredientMatch && iceMatch && glassMatch;
        }

        // Secret check (Only applies if not already correct and NOT a special order - simplified)
        let foundSecret = (!isCorrect && !state.currentOrder.isConstraint) ? currentLangData.SECRET_COCKTAILS.find(c => JSON.stringify([...c.ingredients].sort()) === JSON.stringify([...state.shakerContents].sort()) && c.needsIce === state.shakerHasIce) : null;

        // Drunkenness (Simple Text Effect) - Future expansion: scramble text
        if (totalAlcohol >= 50 && isCorrect) {
            showFloatingText("STRONG!", "#dc2626", dom.scoreDisplayEl);
        }

        if (isCorrect) {
            state.combo++;
            let comboBonus = state.combo * 10 * (state.upgrades.shaker.purchased ? 1.2 : 1);
            let points = 100 + comboBonus;
            if (state.currentCustomer.name === currentLangData.DEATH_CUSTOMER.name) points = 300;
            if (state.isHappyHour) points *= 2;
            if (state.currentOrder.needsIce && state.upgrades.iceMachine.purchased) points += 20;

            // === PHASE 2: Event multiplier ===
            points *= getEventMultiplier();

            state.score += Math.round(points);
            showFloatingText(`+¥${Math.round(points)}`, '#84cc16', dom.scoreDisplayEl);

            // === PHASE 2: Weather tip multiplier ===
            if (state.currentCustomer.name === currentLangData.MILLIONAIRE_CUSTOMER.name) {
                const tip = Math.round(200 * (state.isHappyHour ? 2 : 1) * getWeatherTipMultiplier());
                state.score += tip;
                setTimeout(() => { showFloatingText(`Tip +¥${tip}!`, '#ffd700', dom.scoreDisplayEl); playSound('tip'); }, 300);
            }

            showDialogue(state.currentCustomer.quotes.success);
            dom.resultTextEl.textContent = currentLangData.resultSuccess;
            dom.resultTextEl.style.color = '#65a30d';
            playSound('success'); playSound('combo');
            if (state.bossEncounterActive && isCorrect) {
                state.bossDefeated = true;
            }

            // === NEW: Record cocktail and customer for encyclopedias ===
            if (state.currentOrder.name) {
                recordCocktailDiscovery(state.currentOrder.name);
            }
            if (state.currentCustomer.name) {
                recordCustomerMet(state.currentCustomer.name);
            }

            // === PHASE 2: Add drunk level and sparkle effect ===
            addDrunkLevel(totalAlcohol);
            createSparkles(dom.cocktailGlassEl);

            startGarnishMiniGame();
        } else if (foundSecret) {
            let bonus = foundSecret.bonus * (state.isHappyHour ? 2 : 1);
            state.score += bonus;
            showFloatingText(`SECRET! +¥${bonus}`, '#f0abfc', dom.scoreDisplayEl);
            dom.resultTextEl.textContent = currentLangData.resultSecret;
            dom.resultTextEl.style.color = '#c026d3';
            playSound('tip');

            // Add to discovered secrets
            if (!state.discoveredSecrets.includes(foundSecret.name)) {
                state.discoveredSecrets.push(foundSecret.name);
                setTimeout(() => showFloatingText("New Recipe Discovered!", "#fff", dom.scoreDisplayEl), 1000);
            }

            setTimeout(proceedAfterCustomer, 2000);
        } else if (ingredientMatch && iceMatch && !glassMatch) {
            // === WRONG GLASS SCENARIO ===
            // Feedback on Wrong Glass (Custom Quote + Gentler Penalty)
            state.combo = 0;
            let points = -10; // Smaler penalty than full fail
            if (state.upgrades.barManual.purchased) points /= 2;
            state.score += Math.round(points);

            showFloatingText(`Glass? ¥${Math.round(points)}`, '#f59e0b', dom.scoreDisplayEl);

            // Try to get specific wrongGlass quote
            const glassQuote = state.currentCustomer.quotes.wrongGlass || state.currentCustomer.quotes.fail;
            showDialogue(glassQuote);

            dom.resultTextEl.textContent = currentLangData.reasonGlass; // Just show "Glass" or similar
            dom.resultTextEl.style.color = '#f59e0b';

            // Neutral expression if possible, or keep normal
            // dom.customerEl.classList.add('angry'); // Maybe don't make them angry for just glass?
            playSound('fail'); // Or maybe a different sound? 'fail' is okay for now.
            setTimeout(proceedAfterCustomer, 2000);

        } else {
            // Feedback on failure (Total Fail)
            let failMsg = currentLangData.resultFail;
            if (!ingredientMatch) failMsg += currentLangData.reasonRecipe;
            else if (!iceMatch) failMsg += currentLangData.reasonIce;
            else if (!glassMatch) failMsg += currentLangData.reasonGlass;

            state.combo = 0;
            let points = (state.currentCustomer.name === currentLangData.DEATH_CUSTOMER.name ? -50 : -20);
            if (state.upgrades.barManual.purchased) points /= 2;
            state.score += Math.round(points);

            showFloatingText(`¥${Math.round(points)}`, '#ef4444', dom.scoreDisplayEl);
            showDialogue(state.currentCustomer.quotes.fail);
            dom.resultTextEl.textContent = failMsg;
            dom.resultTextEl.style.color = '#dc2626';
            if (state.currentCustomer.name !== currentLangData.DEATH_CUSTOMER.name) dom.customerEl.classList.add('angry');
            playSound('fail');
            setTimeout(proceedAfterCustomer, 2000);
        }
        updateScore();
        updateComboDisplay();
    }

    function updateGlassVisuals(type) {
        let pathD = '';
        let maskClip = '';
        let liquidBottom = '';

        // Define Glass Data: path, clipPath (for liquid mask), liquidBottom (position)
        if (type === 'rocks') {
            pathD = PATH_ROCKS;
            maskClip = 'polygon(15% 33.3%, 85% 33.3%, 80% 95.8%, 20% 95.8%)';
            liquidBottom = '4.2%'; // 115/120 from top
        } else if (type === 'cocktail') {
            pathD = PATH_COCKTAIL_GLASS + " " + PATH_COCKTAIL_STEM;
            maskClip = 'polygon(10% 8.3%, 90% 8.3%, 50% 58.3%)';
            liquidBottom = '41.7%'; // 70/120 from top
        } else { // Collins (Default)
            pathD = PATH_COLLINS;
            maskClip = 'polygon(20% 8.3%, 80% 8.3%, 75% 95.8%, 25% 95.8%)';
            liquidBottom = '4.2%';
        }

        const svg = dom.cocktailGlassEl.querySelector('svg');
        if (svg) {
            svg.innerHTML = `<path d="${pathD}" fill="none" stroke="white" stroke-width="2" filter="drop-shadow(0 0 2px rgba(255,255,255,0.5))" />`;
        }

        // Update Liquid Mask and Position
        const mask = document.getElementById('liquid-mask');
        const liquid = document.getElementById('final-cocktail');

        if (mask) mask.style.clipPath = maskClip;
        if (liquid) liquid.style.bottom = liquidBottom;
    }

    // --- Glass Selection Logic ---
    window.selectGlass = function (type) {
        state.selectedGlass = type;
        state.canInteract = true;
        updateGlassVisuals(type);
        document.getElementById('glass-selection-overlay').classList.add('hidden');
        playSound('ice');
    };

    function openGlassSelection() {
        if (!state.isGameRunning || (dom.shakerAreaEl.classList.contains('shake-animation'))) return;
        document.getElementById('glass-selection-overlay').classList.remove('hidden');
    }

    // New: Ingredient Overlay Logic
    function openIngredientSelection() {
        if (!state.isGameRunning || !state.canInteract) return;
        document.getElementById('ingredient-selection-overlay').classList.remove('hidden');
    }

    document.getElementById('close-ingredient-overlay').onclick = () => {
        document.getElementById('ingredient-selection-overlay').classList.add('hidden');
    };

    function generateIngredients() {
        const grid = document.getElementById('ingredient-grid');
        grid.innerHTML = '';
        const currentLangData = translations[state.language];
        Object.keys(currentLangData.INGREDIENTS).forEach(key => {
            const ing = currentLangData.INGREDIENTS[key];
            const btn = document.createElement('button');
            btn.className = 'w-full aspect-square rounded shadow-md flex items-center justify-center text-xs md:text-sm font-bold font-jp break-words p-1 md:p-2 hover:scale-105 transition-transform border-2 border-transparent hover:border-white';
            btn.style.backgroundColor = ing.color;
            btn.style.color = '#333';
            if (['cassis', 'cola', 'kahlua', 'coffee'].includes(key)) btn.style.color = '#fff';
            btn.textContent = ing.name;
            btn.onclick = () => {
                if (state.canInteract && state.shakerContents.length < 5) {
                    state.shakerContents.push(key);
                    updateShakerVisual();
                    playSound('pour');
                }
            };
            grid.appendChild(btn);
        });
    }

    // ... (initialSetup) ...
    function initialSetup() {
        // ... (existing definitions) ...
        const allElementIds = [
            'game-overlay', 'game-container', 'room-container', 'room-day-display',
            'room-money-display', 'daily-earnings-display', 'next-day-button', 'return-title-button', 'upgrades-section',
            'bgm-audio', 'day-display', 'money-display', 'combo-display', 'timer-display', 'timer',
            'score-display', 'score', 'happy-hour-banner', 'customer-area', 'customer-dialogue', 'customer',
            'order-bubble', 'customer-name', 'order-text', 'order-ingredients', 'bar-counter',
            'shaker-area', 'shaker-ice-cubes', 'shaker-contents', 'add-ice-button',
            'shake-button', 'glass-button',
            'talk-button',
            'reset-button', 'cocktail-glass', 'final-cocktail', 'result-text', 'ingredient-shelf',
            'garnish-container', 'recipe-display', 'language-switch'
        ];
        allElementIds.forEach(id => {
            const camelCaseId = id.replace(/-(\w)/g, (_, c) => c.toUpperCase());
            dom[camelCaseId + 'El'] = document.getElementById(id);
        });

        setupSounds();

        // Bind all buttons
        dom.nextDayButtonEl.addEventListener('click', startNextDay);
        if (dom.returnTitleButtonEl) dom.returnTitleButtonEl.addEventListener('click', () => location.reload());
        dom.addIceButtonEl.addEventListener('click', () => { if (state.canInteract) addIce(); });

        // New Bindings
        dom.shakeButtonEl.addEventListener('click', () => finishCocktail('shake'));

        dom.talkButtonEl.addEventListener('click', talk);
        dom.resetButtonEl.addEventListener('click', () => { if (state.canInteract) resetShaker(); });

        // Allow clicking glass to change it
        dom.cocktailGlassEl.addEventListener('click', openGlassSelection);
        dom.cocktailGlassEl.style.cursor = 'pointer'; // Make it look clickable

        // Language switch listener removed
        // dom.languageSwitchEl.addEventListener('click', () => { ... });

        dom.glassButtonEl.addEventListener('click', () => { if (state.canInteract) openGlassSelection(); });
        // Add ingredient button listener
        document.getElementById('ingredient-button').addEventListener('click', () => { if (state.canInteract) openIngredientSelection(); });

        // Initialize Ingredients
        generateIngredients();

        // Set initial language (load from localStorage or default to Japanese)
        // Load Settings
        const savedSettings = localStorage.getItem('bartenderSettings');
        if (savedSettings) {
            try {
                state.settings = JSON.parse(savedSettings);
                // Apply Performance Mode immediately
                if (state.settings.performanceMode) {
                    document.body.classList.add('low-quality');
                }
            } catch (e) { console.error('Settings load error', e); }
        }

        setLanguage('ja'); // Force Japanese


        // Force hide old shelf logic if any
        if (dom.ingredientShelfEl) dom.ingredientShelfEl.style.display = 'none';



        // Help Button Logic
        const helpButton = document.getElementById('help-button');
        const helpOverlay = document.getElementById('help-overlay');
        const helpCloseBtn = document.getElementById('help-close-btn');
        const helpStartBtn = document.getElementById('help-start-btn');

        function openHelp() {
            helpOverlay.classList.add('active');
        }

        function closeHelp() {
            helpOverlay.classList.remove('active');
        }

        helpButton.addEventListener('click', openHelp);
        helpCloseBtn.addEventListener('click', closeHelp);
        helpStartBtn.addEventListener('click', openHelp);

        window.openHelp = openHelp; // Expose globally

        // Show help button when game is running
        const originalStartDay = startDay;
        startDay = function () {
            helpButton.classList.add('visible');
            originalStartDay();
        };

        // FETCH MUSIC
        fetchMusicList();
        applyInteriorVisuals();
    }



    // =============================================
    // ===== NEW FEATURES: MENU & ENCYCLOPEDIAS =====
    // =============================================

    // --- Menu Functions ---
    function openMenu() {
        document.getElementById('menu-overlay').classList.add('active');
    }
    function closeMenu() {
        document.getElementById('menu-overlay').classList.remove('active');
    }

    // --- Settings Functions ---
    function openSettings() {
        closeMenu();
        const overlay = document.getElementById('settings-overlay');
        const content = document.getElementById('settings-content'); // Assuming a content container exists or we create one

        // If content container doesn't exist, use the overlay directly (simplification for existing structure)
        // We need to inject the HTML into the settings overlay. 
        // Looking at index.html (not fully visible but inferred), settings-overlay likely has some inner HTML.
        // We will completely replace the inner HTML of the settings modal to suit our needs.

        const modalInner = overlay.querySelector('.bg-gray-800') || overlay.firstElementChild;
        if (!modalInner) return;

        modalInner.innerHTML = `
                <h2 class="text-2xl font-bold font-jp text-white mb-6 text-center">⚙️ 設定</h2>
                
                <div class="space-y-6">
                    <!-- BGM Volume -->
                    <div>
                        <div class="flex justify-between text-white font-jp mb-2">
                            <span>🎵 BGM音量</span>
                            <span id="bgm-val">${state.settings.volume.bgm}%</span>
                        </div>
                        <input type="range" min="0" max="100" value="${state.settings.volume.bgm}" 
                               oninput="updateVolume('bgm', this.value)" class="w-full">
                    </div>

                    <!-- SE Volume -->
                    <div>
                        <div class="flex justify-between text-white font-jp mb-2">
                            <span>🔊 効果音音量</span>
                            <span id="se-val">${state.settings.volume.se}%</span>
                        </div>
                        <input type="range" min="0" max="100" value="${state.settings.volume.se}" 
                               oninput="updateVolume('se', this.value)" class="w-full">
                    </div>

                    <!-- Performance Mode -->
                    <div class="flex items-center justify-between">
                        <span class="text-white font-jp">🚀 軽量モード (Performance)</span>
                        <button id="perf-toggle" onclick="togglePerformanceMode()" 
                                class="px-4 py-2 rounded font-bold font-jp transition-colors ${state.settings.performanceMode ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'}">
                            ${state.settings.performanceMode ? 'ON' : 'OFF'}
                        </button>
                    </div>
                </div>

                <div class="mt-8 flex justify-center">
                    <button onclick="closeSettings()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full font-jp">
                        閉じる
                    </button>
                </div>
             `;

        overlay.classList.add('active');
    }

    function closeSettings() {
        document.getElementById('settings-overlay').classList.remove('active');
        saveSettings(); // Auto-save on close
    }

    function updateVolume(type, value) {
        state.settings.volume[type] = parseInt(value);
        document.getElementById(`${type}-val`).textContent = `${value}%`;

        // Apply immediately
        if (type === 'bgm') {
            if (dom.bgmAudioEl) dom.bgmAudioEl.volume = (state.settings.volume.bgm / 100) * 0.3; // Max 0.3 for balance
        }
        // SE is applied in playSound
    }

    function togglePerformanceMode() {
        state.settings.performanceMode = !state.settings.performanceMode;
        const btn = document.getElementById('perf-toggle');
        if (state.settings.performanceMode) {
            btn.className = 'px-4 py-2 rounded font-bold font-jp transition-colors bg-green-600 text-white';
            btn.textContent = 'ON';
            document.body.classList.add('low-quality');
        } else {
            btn.className = 'px-4 py-2 rounded font-bold font-jp transition-colors bg-gray-600 text-gray-300';
            btn.textContent = 'OFF';
            document.body.classList.remove('low-quality');
        }
    }

    function saveSettings() {
        localStorage.setItem('bartenderSettings', JSON.stringify(state.settings));
    }

    // Make functions global
    window.openSettings = openSettings;
    window.closeSettings = closeSettings;
    window.updateVolume = updateVolume;
    window.togglePerformanceMode = togglePerformanceMode;


    // --- Interior Shop Functions ---
    function openInteriorShop() {
        closeMenu();
        const overlay = document.getElementById('interior-shop-overlay');
        const content = document.getElementById('interior-shop-content');
        const moneyDisplay = document.getElementById('interior-money');
        const lang = translations[state.language];

        moneyDisplay.textContent = `${lang.interiorMoney}: ¥${state.totalMoney.toLocaleString()}`;
        content.innerHTML = '';

        const categories = [
            { key: 'wallpaper', label: lang.wallpaperLabel },
            { key: 'lighting', label: lang.lightingLabel },
            { key: 'bgm', label: lang.bgmLabel }
        ];

        categories.forEach(cat => {
            const section = document.createElement('div');
            section.innerHTML = `<h3 class="text-lg font-bold text-white mb-2 font-jp">${cat.label}</h3>`;
            const grid = document.createElement('div');
            grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;';

            INTERIOR_ITEMS[cat.key].forEach(item => {
                const isOwned = state.ownedInterior[cat.key].includes(item.id);
                const isEquipped = state.interior[cat.key] === item.id;
                const canAfford = state.totalMoney >= item.price;
                const itemName = state.language === 'ja' ? item.name : item.nameEn;
                const itemDesc = state.language === 'ja' ? item.description : item.descEn;

                const card = document.createElement('div');
                card.className = 'interior-item';
                card.style.cssText = `
                                background: ${isEquipped ? 'linear-gradient(135deg, #065f46, #059669)' : '#374151'};
                                border-radius: 10px; padding: 12px; cursor: pointer;
                                border: 2px solid ${isEquipped ? '#10b981' : isOwned ? '#6b7280' : canAfford ? '#fbbf24' : '#4b5563'};
                                transition: all 0.2s;
                            `;

                let buttonText = '';
                if (isEquipped) {
                    buttonText = `<span class="text-green-300">${lang.interiorEquipped}</span>`;
                } else if (isOwned) {
                    buttonText = `<button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-jp">使用</button>`;
                } else if (item.price === 0) {
                    buttonText = `<span class="text-gray-400">${lang.interiorOwned}</span>`;
                } else {
                    buttonText = `<button class="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-jp ${!canAfford ? 'opacity-50' : ''}">${lang.interiorBuy} ¥${item.price.toLocaleString()}</button>`;
                }

                card.innerHTML = `
                                <div class="font-bold text-white font-jp">${itemName}</div>
                                <div class="text-xs text-gray-300 font-jp mb-2">${itemDesc}</div>
                                ${buttonText}
                            `;

                if (!isEquipped) {
                    card.onclick = () => {
                        if (isOwned) {
                            equipInterior(cat.key, item.id);
                        } else if (canAfford && item.price > 0) {
                            buyInterior(cat.key, item);
                        }
                    };
                }

                grid.appendChild(card);
            });

            section.appendChild(grid);
            content.appendChild(section);
        });

        overlay.classList.add('active');
    }

    function closeInteriorShop() {
        document.getElementById('interior-shop-overlay').classList.remove('active');
    }

    function buyInterior(category, item) {
        if (state.totalMoney >= item.price) {
            state.totalMoney -= item.price;
            state.ownedInterior[category].push(item.id);
            equipInterior(category, item.id);
            saveGameData();
            openInteriorShop(); // Refresh
            playSound('cash');
        }
    }

    function equipInterior(category, itemId) {
        state.interior[category] = itemId;
        applyInteriorVisuals();
        saveGameData();
        openInteriorShop(); // Refresh
    }

    function applyInteriorVisuals() {
        const gameContainer = document.getElementById('game-container');
        const roomContainer = document.getElementById('room-container');

        // Apply wallpaper class
        ['classic', 'modern', 'fantasy'].forEach(w => {
            gameContainer?.classList.remove(`wall-${w}`);
            roomContainer?.classList.remove(`wall-${w}`);
        });
        gameContainer?.classList.add(`wall-${state.interior.wallpaper}`);
        roomContainer?.classList.add(`wall-${state.interior.wallpaper}`);

        // Apply lighting class
        ['warm', 'cool', 'neon'].forEach(l => {
            gameContainer?.classList.remove(`light-${l}`);
            roomContainer?.classList.remove(`light-${l}`);
        });
        gameContainer?.classList.add(`light-${state.interior.lighting}`);
        roomContainer?.classList.add(`light-${state.interior.lighting}`);
    }

    // --- Save/Load Game Data ---
    function saveGameData() {
        const slotId = state.currentSaveSlot || 1;
        const saveData = {
            day: state.day,
            totalMoney: state.totalMoney,
            upgrades: state.upgrades,
            ownedIngredients: state.ownedIngredients,
            discoveredCocktails: state.discoveredCocktails,
            metCustomers: state.metCustomers,
            currentTitle: state.currentTitle,
            unlockedTitles: state.unlockedTitles,
            totalTalks: state.totalTalks,
            interior: state.interior,
            ownedInterior: state.ownedInterior,
            avatar: state.avatar,
            language: state.language,
            savedAt: new Date().toISOString()
        };
        try {
            localStorage.setItem(`bartenderSave_${slotId}`, JSON.stringify(saveData));
            console.log(`Game saved to slot ${slotId}`);
        } catch (e) {
            console.error('Failed to save game:', e);
        }
    }

    function loadGameData(slotId) {
        const key = `bartenderSave_${slotId}`;
        const savedData = localStorage.getItem(key);
        if (!savedData) {
            console.log(`No save data found in slot ${slotId}`);
            return false;
        }
        try {
            const data = JSON.parse(savedData);
            // Restore state from saved data
            state.day = data.day || 1;
            state.totalMoney = data.totalMoney || 0;
            state.upgrades = data.upgrades || JSON.parse(JSON.stringify(UPGRADES_DATA));
            state.ownedIngredients = data.ownedIngredients || [...STARTER_INGREDIENTS];
            state.discoveredCocktails = data.discoveredCocktails || [];
            state.metCustomers = data.metCustomers || [];
            state.currentTitle = data.currentTitle || 'beginner';
            state.unlockedTitles = data.unlockedTitles || ['beginner'];
            state.totalTalks = data.totalTalks || 0;
            state.interior = data.interior || { wallpaper: 'classic', lighting: 'warm', bgm: 'skyline_serenity' };
            state.ownedInterior = data.ownedInterior || { wallpaper: ['classic'], lighting: ['warm'], bgm: ['skyline_serenity', 'jazz'] };
            state.avatar = data.avatar || 'images/night/bartender_man.png';
            state.language = data.language || 'ja';
            state.currentSaveSlot = slotId;
            console.log(`Game loaded from slot ${slotId}`);
            return true;
        } catch (e) {
            console.error('Failed to load game:', e);
            return false;
        }
    }

    // --- Slot System Functions ---
    function renderSaveSlots() {
        const container = document.getElementById('save-slots-container');
        container.innerHTML = '';

        for (let i = 1; i <= 3; i++) {
            const key = `bartenderSave_${i}`;
            const savedParams = localStorage.getItem(key);
            let data = null;
            if (savedParams) {
                try { data = JSON.parse(savedParams); } catch (e) { console.error(e); }
            }

            const card = document.createElement('div');
            card.className = 'save-slot-card';

            if (data) {
                // Active Slot
                card.innerHTML = `
                                <button class="delete-slot-btn" onclick="event.stopPropagation(); deleteSave(${i})">🗑️</button>
                                <img src="${data.avatar || 'images/night/bartender_man.png'}" class="slot-avatar" alt="Avatar">
                                <div class="slot-info font-jp">
                                    <div class="slot-day">${state.language === 'ja' ? '営業 ' + (data.day || 1) + '日目' : 'Day ' + (data.day || 1)}</div>
                                    <div class="slot-money">${state.language === 'ja' ? '資産: ' : 'Assets: '}¥${(data.totalMoney || 0).toLocaleString()}</div>
                                </div>
                                <button onclick="loadAndStart(${i})" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full font-jp shadow-lg hover:scale-105 transition-transform">
                                    再開 (Load)
                                </button>
                            `;
            } else {
                // Empty Slot
                card.innerHTML = `
                                <div class="slot-empty-text">Empty Slot ${i}</div>
                                <button onclick="openCharacterSelection(${i})" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full font-jp shadow-lg hover:scale-105 transition-transform">
                                    はじめから
                                </button>
                            `;
            }
            container.appendChild(card);
        }
    }

    function deleteSave(slotId) {
        if (confirm(`スロット${slotId}のデータを削除しますか？\nAre you sure you want to delete Slot ${slotId}?`)) {
            localStorage.removeItem(`bartenderSave_${slotId}`);
            renderSaveSlots();
        }
    }

    function loadAndStart(slotId) {
        loadGameData(slotId);
        startAudio();
        startDay();
    }

    // --- New Game & Character Selection ---
    let pendingSlotId = null;

    function openCharacterSelection(slotId) {
        // Show the character selection UI instead of skipping
        document.getElementById('title-screen-content').classList.add('hidden');
        document.getElementById('character-selection-content').classList.remove('hidden');
    }

    function startNewGame(slotId, avatarImage) {
        // Reset State for New Game
        state.currentSaveSlot = slotId;
        state.totalMoney = 1000;
        state.day = 1;
        state.ownedIngredients = [...STARTER_INGREDIENTS];
        state.discoveredCocktails = [];
        state.metCustomers = [];
        state.currentTitle = 'beginner';
        state.unlockedTitles = ['beginner'];
        state.ownedInterior = { wallpaper: ['classic'], lighting: ['warm'], bgm: ['skyline_serenity', 'jazz'] };
        state.interior = { wallpaper: 'classic', lighting: 'warm', bgm: 'skyline_serenity' };
        state.upgrades = { iceMachine: { purchased: false }, shaker: { purchased: false }, barManual: { purchased: false } };
        state.avatar = avatarImage;

        // Save Initial State
        saveGameData();

        document.getElementById('character-select-modal').classList.add('hidden');
        startAudio();
        startDay();
    }

    function saveGameManually() {
        // Check if we are in the "Room" view (Day End screen / Upgrade Screen)
        const roomContainer = document.getElementById('room-container');
        const isRoomVisible = roomContainer && !roomContainer.classList.contains('hidden');

        if (isRoomVisible) {
            // Perform Save
            saveGameData();

            // Success Notification
            const msg = state.language === 'ja' ? "セーブしました！" : "Game Saved!";
            playSound('success');

            // Show a clear notification
            const notifyEl = document.createElement('div');
            notifyEl.textContent = msg;
            notifyEl.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(34, 197, 94, 0.95); /* Green */
                    color: white;
                    padding: 20px 40px;
                    border-radius: 12px;
                    font-weight: bold;
                    font-size: 1.5rem;
                    z-index: 9999;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                    pointer-events: none;
                    animation: fadeOut 2s forwards;
                    font-family: 'Noto Serif JP', serif;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                `;
            // Add icon
            const icon = document.createElement('span');
            icon.textContent = "💾";
            notifyEl.prepend(icon);

            document.body.appendChild(notifyEl);
            setTimeout(() => notifyEl.remove(), 2500);

        } else {
            // Error: Cannot save right now
            const msg = state.language === 'ja' ? "営業中はセーブできません！\n(一日の終わりの部屋でセーブできます)" : "Cannot save now!\n(Save from the Day End screen)";
            playSound('fail');

            const notifyEl = document.createElement('div');
            notifyEl.innerText = msg;
            notifyEl.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(220, 38, 38, 0.95); /* Red */
                    color: white;
                    padding: 20px 40px;
                    border-radius: 12px;
                    font-weight: bold;
                    font-size: 1.2rem;
                    text-align: center;
                    z-index: 9999;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                    pointer-events: none;
                    animation: fadeOut 3s forwards;
                    font-family: 'Noto Serif JP', serif;
                `;
            document.body.appendChild(notifyEl);
            setTimeout(() => notifyEl.remove(), 3500);
        }
    }

    // Make interior functions globally accessible
    window.openInteriorShop = openInteriorShop;
    window.closeInteriorShop = closeInteriorShop;
    window.saveGameManually = saveGameManually;

    // --- Photo Mode Functions ---
    let photoData = null;

    function openPhotoMode() {
        const shakerArea = document.getElementById('shaker-area');
        const gameContainer = document.getElementById('game-container');

        // Capture the shaker area as screenshot
        html2canvas(gameContainer, {
            backgroundColor: '#1a1a2e',
            scale: 2,
            logging: false,
            useCORS: true
        }).then(canvas => {
            const photoCanvas = document.getElementById('photo-canvas');
            const ctx = photoCanvas.getContext('2d');

            // Set canvas size
            photoCanvas.width = canvas.width;
            photoCanvas.height = canvas.height;

            // Draw captured image
            ctx.drawImage(canvas, 0, 0);

            // Add watermark/branding
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '24px "M PLUS Rounded 1c", sans-serif';
            ctx.fillText('🍸 Bartender Game', 20, canvas.height - 20);

            // Store for download
            photoData = photoCanvas.toDataURL('image/png');

            // Show overlay
            document.getElementById('photo-mode-overlay').classList.remove('hidden');
        });
    }

    function closePhotoMode() {
        document.getElementById('photo-mode-overlay').classList.add('hidden');
    }

    function downloadPhoto() {
        if (!photoData) return;
        const link = document.createElement('a');
        link.download = `cocktail_${Date.now()}.png`;
        link.href = photoData;
        link.click();
    }

    function shareToTwitter() {
        const cocktailName = state.currentOrder ? state.currentOrder.name : 'カクテル';
        const text = encodeURIComponent(`${cocktailName}を作りました！ #バーテンダーゲーム #カクテル`);
        const url = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }

    function shareToLINE() {
        const cocktailName = state.currentOrder ? state.currentOrder.name : 'カクテル';
        const text = encodeURIComponent(`${cocktailName}を作りました！ バーテンダーゲーム`);
        window.open(`https://social-plugins.line.me/lineit/share?text=${text}`, '_blank');
    }

    // Make photo functions globally accessible
    window.openPhotoMode = openPhotoMode;
    window.closePhotoMode = closePhotoMode;
    window.downloadPhoto = downloadPhoto;
    window.shareToTwitter = shareToTwitter;
    window.shareToLINE = shareToLINE;

    // --- Gesture Shake Functions ---
    let gestureState = {
        isActive: false,
        shakeCount: 0,
        shakesRequired: 5,
        lastAcceleration: { x: 0, y: 0, z: 0 },
        shakeThreshold: 15,
        lastShakeTime: 0,
        shakeCooldown: 300 // ms between shakes
    };

    async function toggleGestureShake() {
        if (gestureState.isActive) {
            stopGestureShake();
        } else {
            await startGestureShake();
        }
    }

    async function startGestureShake() {
        // Request permission for iOS 13+
        if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
            try {
                const permission = await DeviceMotionEvent.requestPermission();
                if (permission !== 'granted') {
                    alert(state.language === 'ja'
                        ? 'モーションセンサーの許可が必要です'
                        : 'Motion sensor permission required');
                    return;
                }
            } catch (e) {
                console.error('DeviceMotion permission error:', e);
                alert(state.language === 'ja'
                    ? 'このブラウザでは使用できません'
                    : 'Not supported in this browser');
                return;
            }
        }

        gestureState.isActive = true;
        gestureState.shakeCount = 0;

        // Update button appearance
        const btn = document.getElementById('gesture-shake-btn');
        btn.classList.remove('bg-pink-500', 'hover:bg-pink-600');
        btn.classList.add('bg-green-500', 'hover:bg-green-600', 'animate-pulse');
        btn.innerHTML = `📱 振って！ (${gestureState.shakeCount}/${gestureState.shakesRequired})`;

        // Start listening to device motion
        window.addEventListener('devicemotion', handleDeviceMotion);

        // Show instruction
        showFloatingText(state.language === 'ja' ? '📱 スマホを振ろう！' : '📱 Shake your phone!', '#ec4899', document.getElementById('shaker-area'));
    }

    function stopGestureShake() {
        gestureState.isActive = false;
        window.removeEventListener('devicemotion', handleDeviceMotion);

        // Reset button
        const btn = document.getElementById('gesture-shake-btn');
        btn.classList.remove('bg-green-500', 'hover:bg-green-600', 'animate-pulse');
        btn.classList.add('bg-pink-500', 'hover:bg-pink-600');
        btn.innerHTML = '📱 ジェスチャー';
    }

    function handleDeviceMotion(event) {
        if (!gestureState.isActive || !state.isGameRunning || !state.canInteract) return;

        const acceleration = event.accelerationIncludingGravity;
        if (!acceleration) return;

        const now = Date.now();
        if (now - gestureState.lastShakeTime < gestureState.shakeCooldown) return;

        // Calculate acceleration change
        const deltaX = Math.abs(acceleration.x - gestureState.lastAcceleration.x);
        const deltaY = Math.abs(acceleration.y - gestureState.lastAcceleration.y);
        const deltaZ = Math.abs(acceleration.z - gestureState.lastAcceleration.z);
        const totalDelta = deltaX + deltaY + deltaZ;

        // Update last acceleration
        gestureState.lastAcceleration = {
            x: acceleration.x || 0,
            y: acceleration.y || 0,
            z: acceleration.z || 0
        };

        // Detect shake
        if (totalDelta > gestureState.shakeThreshold) {
            gestureState.shakeCount++;
            gestureState.lastShakeTime = now;

            // Update UI
            const btn = document.getElementById('gesture-shake-btn');
            btn.innerHTML = `📱 振って！ (${gestureState.shakeCount}/${gestureState.shakesRequired})`;

            // Trigger shaker animation
            const shakerArea = document.getElementById('shaker-area');
            shakerArea.classList.add('shake-animation');
            setTimeout(() => shakerArea.classList.remove('shake-animation'), 200);

            // Play sound
            playSound('shake');

            // Check completion
            if (gestureState.shakeCount >= gestureState.shakesRequired) {
                stopGestureShake();
                showFloatingText('🎉 シェイク完了！', '#22c55e', shakerArea);
                setTimeout(() => validateCocktail(), 500);
            }
        }
    }

    // Make gesture functions globally accessible
    window.toggleGestureShake = toggleGestureShake;

    // --- Cocktail Encyclopedia ---
    function openCocktailEncyclopedia() {
        closeMenu();
        const overlay = document.getElementById('cocktail-encyclopedia');
        const grid = document.getElementById('cocktail-grid');
        const progress = document.getElementById('cocktail-progress');
        const currentLangData = translations[state.language];
        const cocktails = currentLangData.COCKTAILS;

        grid.innerHTML = '';
        cocktails.forEach(cocktail => {
            const isDiscovered = state.discoveredCocktails.includes(cocktail.name);
            const item = document.createElement('div');
            item.className = `encyclopedia-item ${isDiscovered ? '' : 'locked'}`;
            item.innerHTML = `
                            <div class="encyclopedia-item-image" style="background: ${isDiscovered ? getCocktailColor(cocktail.ingredients) : '#333'}">
                                ${isDiscovered ? '🍸' : '❓'}
                            </div>
                            <div class="encyclopedia-item-name">${isDiscovered ? cocktail.name : '？？？'}</div>
                        `;
            if (isDiscovered) {
                item.onclick = () => showCocktailDetail(cocktail);
            }
            grid.appendChild(item);
        });

        progress.textContent = `発見: ${state.discoveredCocktails.length} / ${cocktails.length}`;
        overlay.classList.add('active');
    }
    function closeCocktailEncyclopedia() {
        document.getElementById('cocktail-encyclopedia').classList.remove('active');
    }
    function getCocktailColor(ingredients) {
        const currentLangData = translations[state.language];
        if (ingredients.length > 0) {
            const ing = currentLangData.INGREDIENTS[ingredients[0]];
            return ing ? ing.color : '#666';
        }
        return '#666';
    }
    function showCocktailDetail(cocktail) {
        const modal = document.getElementById('detail-modal');
        const currentLangData = translations[state.language];
        document.getElementById('detail-image').style.display = 'none';
        document.getElementById('detail-name').textContent = cocktail.name;
        const ingredientNames = cocktail.ingredients.map(i => currentLangData.INGREDIENTS[i]?.name || i).join('、');
        const glassName = cocktail.glass === 'collins' ? 'ロンググラス' : cocktail.glass === 'rocks' ? 'ロックグラス' : 'カクテルグラス';
        document.getElementById('detail-info').innerHTML = `
                        <p><strong>材料:</strong> ${ingredientNames}</p>
                        <p><strong>グラス:</strong> ${glassName}</p>
                        <p><strong>氷:</strong> ${cocktail.needsIce ? '必要' : '不要'}</p>
                    `;
        modal.classList.add('active');
    }

    // --- Customer Encyclopedia ---
    function openCustomerEncyclopedia() {
        closeMenu();
        const overlay = document.getElementById('customer-encyclopedia');
        const grid = document.getElementById('customer-grid');
        const progress = document.getElementById('customer-progress');
        const currentLangData = translations[state.language];
        const allCustomers = currentLangData.CUSTOMERS;

        grid.innerHTML = '';
        allCustomers.forEach(customer => {
            const isMet = state.metCustomers.includes(customer.name);
            const item = document.createElement('div');
            item.className = `encyclopedia-item ${isMet ? '' : 'locked'}`;
            item.innerHTML = `
                            <img class="encyclopedia-item-image" src="${isMet ? customer.image : ''}" 
                                 style="${isMet ? '' : 'background:#333'}" 
                                 onerror="this.style.background='#333';this.src=''">
                            <div class="encyclopedia-item-name">${isMet ? customer.name : '？？？'}</div>
                        `;
            if (isMet) {
                item.onclick = () => showCustomerDetail(customer);
            }
            grid.appendChild(item);
        });

        progress.textContent = `出会い: ${state.metCustomers.length} / ${allCustomers.length}`;
        overlay.classList.add('active');
    }
    function closeCustomerEncyclopedia() {
        document.getElementById('customer-encyclopedia').classList.remove('active');
    }
    function showCustomerDetail(customer) {
        const modal = document.getElementById('detail-modal');
        document.getElementById('detail-image').src = customer.image;
        document.getElementById('detail-image').style.display = 'block';
        document.getElementById('detail-name').textContent = customer.name;
        const quote = customer.quotes.order[0] || '';
        document.getElementById('detail-info').innerHTML = `
                        <p>「${quote}」</p>
                    `;
        modal.classList.add('active');
    }
    function closeDetailModal() {
        document.getElementById('detail-modal').classList.remove('active');
    }

    // --- Title System ---
    function openTitleList() {
        closeMenu();
        const overlay = document.getElementById('title-overlay');
        const grid = document.getElementById('title-grid');
        const currentDisplay = document.getElementById('title-current');

        const currentTitleObj = TITLES.find(t => t.id === state.currentTitle);
        const titleName = state.language === 'ja' ? (currentTitleObj?.name || '見習いバーテンダー') : (currentTitleObj?.nameEn || 'Apprentice Bartender');
        const labelText = state.language === 'ja' ? '現在の称号:' : 'Current Title:';
        currentDisplay.textContent = `${labelText} ${titleName}`;

        grid.innerHTML = '';
        TITLES.forEach(title => {
            const isUnlocked = state.unlockedTitles?.includes(title.id) || title.id === 'beginner';
            const isCurrent = state.currentTitle === title.id;
            const displayName = state.language === 'ja' ? title.name : title.nameEn;
            const item = document.createElement('div');
            item.className = `encyclopedia-item ${isUnlocked ? '' : 'locked'}`;
            item.style.border = isCurrent ? '2px solid #ec4899' : '';
            item.innerHTML = `
                            <div class="encyclopedia-item-image" style="font-size:3rem">
                                ${isUnlocked ? title.icon : '🔒'}
                            </div>
                            <div class="encyclopedia-item-name">${isUnlocked ? displayName : '？？？'}</div>
                        `;
            grid.appendChild(item);
        });

        overlay.classList.add('active');
    }
    function closeTitleList() {
        document.getElementById('title-overlay').classList.remove('active');
    }
    function checkTitles() {
        if (!state.unlockedTitles) state.unlockedTitles = ['beginner'];
        let newTitle = null;
        TITLES.forEach(title => {
            if (!state.unlockedTitles.includes(title.id) && title.condition()) {
                state.unlockedTitles.push(title.id);
                newTitle = title;
                state.currentTitle = title.id;
            }
        });
        if (newTitle) {
            showTitleCelebration(newTitle);
        }
        updateTitleDisplay();
    }
    function showTitleCelebration(title) {
        const displayName = state.language === 'ja' ? title.name : title.nameEn;
        document.getElementById('celebration-title-name').textContent = title.icon + ' ' + displayName;
        document.getElementById('title-celebration').classList.add('active');
    }
    function closeTitleCelebration() {
        document.getElementById('title-celebration').classList.remove('active');
    }
    function updateTitleDisplay() {
        const titleEl = document.getElementById('title-display');
        if (titleEl) {
            const currentTitleObj = TITLES.find(t => t.id === state.currentTitle);
            const displayName = state.language === 'ja' ? (currentTitleObj?.name || '見習いバーテンダー') : (currentTitleObj?.nameEn || 'Apprentice Bartender');
            titleEl.textContent = currentTitleObj ? currentTitleObj.icon + ' ' + displayName : '🌱 ' + (state.language === 'ja' ? '見習いバーテンダー' : 'Apprentice Bartender');
        }
    }

    // --- Market System ---
    function openMarket() {
        const overlay = document.getElementById('market-overlay');
        const grid = document.getElementById('market-grid');
        const moneyDisplay = document.getElementById('market-money');
        const currentLangData = translations[state.language];
        const ingredients = currentLangData.INGREDIENTS;

        moneyDisplay.textContent = state.totalMoney;
        grid.innerHTML = '';

        Object.keys(ingredients).forEach(key => {
            const ing = ingredients[key];
            const price = INGREDIENT_PRICES[key] || 100;
            const isOwned = state.ownedIngredients.includes(key);
            const canAfford = state.totalMoney >= price;

            const item = document.createElement('div');
            item.className = `market-item ${isOwned ? 'owned' : canAfford ? 'affordable' : 'too-expensive'}`;
            const ownedText = state.language === 'ja' ? '✓ 所持' : '✓ Owned';
            item.innerHTML = `
                            <div class="market-item-color" style="background: ${ing.color}"></div>
                            <div class="market-item-name">${ing.name}</div>
                            ${isOwned ? `<div class="market-item-owned">${ownedText}</div>` : `<div class="market-item-price">¥${price}</div>`}
                        `;
            if (!isOwned && canAfford) {
                item.onclick = () => buyIngredient(key, price);
            }
            grid.appendChild(item);
        });

        overlay.classList.add('active');
    }
    function closeMarket() {
        document.getElementById('market-overlay').classList.remove('active');
    }
    function buyIngredient(key, price) {
        if (state.totalMoney >= price && !state.ownedIngredients.includes(key)) {
            state.totalMoney -= price;
            state.ownedIngredients.push(key);
            playSound('cash');
            openMarket(); // Refresh
            saveGameData();
        }
    }

    // --- Save/Load System ---
    // --- Save/Load System ---
    function saveGameData() {
        const slotId = state.currentSaveSlot;
        if (!slotId) return; // Don't save if no slot selected

        const saveData = {
            totalMoney: state.totalMoney,
            day: state.day,
            ownedIngredients: state.ownedIngredients,
            discoveredCocktails: state.discoveredCocktails,
            metCustomers: state.metCustomers,
            currentTitle: state.currentTitle,
            unlockedTitles: state.unlockedTitles || ['beginner'],
            totalTalks: state.totalTalks,
            upgrades: state.upgrades,
            interior: state.interior,
            ownedInterior: state.ownedInterior,
            avatar: state.avatar
        };
        localStorage.setItem(`bartenderSave_${slotId}`, JSON.stringify(saveData));
    }

    function loadGameData(slotId) {
        if (!slotId) return;
        const saved = localStorage.getItem(`bartenderSave_${slotId}`);
        if (saved) {
            try {
                const data = JSON.parse(saved);
                state.totalMoney = data.totalMoney || 0;
                state.day = data.day || 1;
                state.ownedIngredients = data.ownedIngredients || [...STARTER_INGREDIENTS];
                state.discoveredCocktails = data.discoveredCocktails || [];
                state.metCustomers = data.metCustomers || [];
                state.currentTitle = data.currentTitle || 'beginner';
                state.unlockedTitles = data.unlockedTitles || ['beginner'];
                state.totalTalks = data.totalTalks || 0;
                if (data.upgrades) state.upgrades = data.upgrades;

                // Load interior data
                if (data.interior) state.interior = { ...state.interior, ...data.interior };
                if (data.ownedInterior) state.ownedInterior = { ...state.ownedInterior, ...data.ownedInterior };

                state.avatar = data.avatar || 'images/night/bartender_man.png';
                state.currentSaveSlot = slotId;

                // Re-apply interior visuals
                applyInteriorVisuals();
            } catch (e) { console.error('Load error:', e); }
        }
    }

    // --- Record Functions (called during gameplay) ---
    function recordCocktailDiscovery(cocktailName) {
        if (!state.discoveredCocktails.includes(cocktailName)) {
            state.discoveredCocktails.push(cocktailName);
            saveGameData();
        }
    }
    function recordCustomerMet(customerName) {
        if (!state.metCustomers.includes(customerName)) {
            state.metCustomers.push(customerName);
            saveGameData();
        }
    }
    function recordTalk() {
        state.totalTalks++;
        saveGameData();
    }

    // --- Menu Button Visibility ---
    function showMenuButton() {
        document.getElementById('menu-button').classList.add('visible');
    }
    function hideMenuButton() {
        document.getElementById('menu-button').classList.remove('visible');
    }

    // --- Bind Menu Button ---
    document.getElementById('menu-button').addEventListener('click', openMenu);

    // --- Make functions globally accessible ---
    window.openCocktailEncyclopedia = openCocktailEncyclopedia;
    window.closeCocktailEncyclopedia = closeCocktailEncyclopedia;
    window.openCustomerEncyclopedia = openCustomerEncyclopedia;
    window.closeCustomerEncyclopedia = closeCustomerEncyclopedia;
    window.openTitleList = openTitleList;
    window.closeTitleList = closeTitleList;
    window.closeMenu = closeMenu;
    window.openMarket = openMarket;
    window.closeMarket = closeMarket;
    window.closeDetailModal = closeDetailModal;
    window.closeTitleCelebration = closeTitleCelebration;

    // Load saved data on init
    loadGameData();

    // ===== PHASE 2: WEATHER, DRUNK, ANIMATIONS =====

    // --- Weather System ---
    // --- Weather System (Real API Integration) ---
    async function fetchRealWeather() {
        try {
            // Default to Tokyo if geolocation fails
            let lat = 35.6895;
            let lon = 139.6917;

            // Try to get user location
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 3000 });
                });
                lat = position.coords.latitude;
                lon = position.coords.longitude;
            } catch (e) {
                console.log("Location access denied or timeout, using default (Tokyo).");
            }

            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const data = await response.json();
            const code = data.current_weather.weathercode;

            // Map WMO codes to game weather
            // 0-3: Sunny/Cloudy, 45-48: Fog, 51-67: Rain, 71-77: Snow, 80-82: Rain Showers, 85-86: Snow Showers, 95-99: Thunderstorm
            if (code >= 71 && code <= 77 || code === 85 || code === 86) {
                return 'snowy';
            } else if (code >= 51 || code >= 80 || code >= 95) {
                return 'rainy';
            } else {
                return 'sunny';
            }
        } catch (e) {
            console.error("Weather API failed:", e);
            return null; // Fallback to random
        }
    }

    async function setRandomWeather() {
        // 1. Try Real Weather first
        const realWeather = await fetchRealWeather();

        if (realWeather) {
            state.currentWeather = realWeather;
            // Notification for Real Weather
            const msg = state.language === 'ja'
                ? `現在の天気(${state.currentWeather === 'sunny' ? '晴れ' : state.currentWeather === 'rainy' ? '雨' : '雪'})を反映しました`
                : `Synced with local weather: ${state.currentWeather}`;
            showFloatingText(msg, '#60a5fa', dom.gameContainerEl);
        } else {
            // 2. Fallback to Random
            const weathers = ['sunny', 'sunny', 'sunny', 'rainy', 'snowy'];
            state.currentWeather = weathers[Math.floor(Math.random() * weathers.length)];
        }

        updateWeatherDisplay();
        createWeatherEffects();
    }

    function updateWeatherDisplay() {
        const indicator = document.getElementById('weather-indicator');
        if (!indicator) return;
        const weatherData = {
            sunny: { icon: '☀️', ja: '晴れ', en: 'Sunny' },
            rainy: { icon: '🌧️', ja: '雨', en: 'Rainy' },
            snowy: { icon: '❄️', ja: '雪', en: 'Snowy' }
        };
        const w = weatherData[state.currentWeather] || weatherData.sunny;
        const name = state.language === 'ja' ? w.ja : w.en;
        indicator.textContent = `${w.icon} ${name}`;
    }

    function createWeatherEffects() {
        const overlay = document.getElementById('weather-overlay');
        if (!overlay) return;
        overlay.innerHTML = '';
        overlay.className = '';

        if (state.currentWeather === 'rainy') {
            overlay.classList.add('weather-rain');
            for (let i = 0; i < 50; i++) {
                const drop = document.createElement('div');
                drop.className = 'rain-drop';
                drop.style.left = Math.random() * 100 + '%';
                drop.style.animationDuration = (0.5 + Math.random() * 0.5) + 's';
                drop.style.animationDelay = Math.random() * 2 + 's';
                overlay.appendChild(drop);
            }
        } else if (state.currentWeather === 'snowy') {
            overlay.classList.add('weather-snow');
            for (let i = 0; i < 30; i++) {
                const flake = document.createElement('div');
                flake.className = 'snow-flake';
                flake.style.left = Math.random() * 100 + '%';
                flake.style.animationDuration = (3 + Math.random() * 4) + 's';
                flake.style.animationDelay = Math.random() * 5 + 's';
                flake.style.width = (4 + Math.random() * 6) + 'px';
                flake.style.height = flake.style.width;
                overlay.appendChild(flake);
            }
        }
    }

    function getWeatherTipMultiplier() {
        if (state.currentWeather === 'rainy') return 1.5;
        return 1;
    }

    // --- Seasonal Events ---
    function checkSeasonalEvent() {
        const banner = document.getElementById('event-banner');
        const container = document.getElementById('game-container');
        if (!banner || !container) return;

        state.currentEvent = null;
        banner.classList.remove('active');
        container.classList.remove('event-summer', 'event-christmas');

        if (state.day === 4) {
            state.currentEvent = 'summer';
            banner.textContent = state.language === 'ja' ? '🎆 夏祭り開催中！' : '🎆 Summer Festival!';
            banner.classList.add('active');
            container.classList.add('event-summer');
        } else if (state.day === 6) {
            state.currentEvent = 'christmas';
            banner.textContent = state.language === 'ja' ? '🎄 クリスマスイベント！' : '🎄 Christmas Event!';
            banner.classList.add('active');
            container.classList.add('event-christmas');
        }
    }

    function getEventMultiplier() {
        if (state.currentEvent === 'christmas') return 2;
        return 1;
    }

    // --- Drunk System ---
    function addDrunkLevel(alcoholAmount) {
        state.customerDrunkLevel += alcoholAmount * 2; // Alcohol adds to drunk level
        updateDrunkMeter();
        updateDrunkVisuals();
    }

    function updateDrunkMeter() {
        const fill = document.getElementById('drunk-meter-fill');
        if (!fill) return;
        fill.style.width = Math.min(state.customerDrunkLevel, 100) + '%';
    }

    function updateDrunkVisuals() {
        const dialogue = document.getElementById('customer-dialogue');
        const customer = document.getElementById('customer');
        if (!dialogue || !customer) return;

        dialogue.classList.remove('drunk-text');
        customer.classList.remove('customer-passed-out', 'drunk-heavy');

        if (state.customerDrunkLevel >= 100) {
            customer.classList.add('customer-passed-out');
        } else if (state.customerDrunkLevel >= 60) {
            dialogue.classList.add('drunk-text');
            customer.parentElement.classList.add('drunk-heavy');
        } else if (state.customerDrunkLevel >= 30) {
            dialogue.classList.add('drunk-text');
        }
    }

    function slurText(text) {
        if (state.customerDrunkLevel < 30) return text;

        // Light drunk: some character replacements
        let result = text;
        if (state.customerDrunkLevel >= 30) {
            result = result.replace(/す/g, 'しゅ').replace(/さ/g, 'しゃ');
        }
        if (state.customerDrunkLevel >= 60) {
            result = result.replace(/[。！？]/g, '～').replace(/です/g, 'でしゅ');
            result = result.replace(/ます/g, 'ましゅ');
        }
        if (state.customerDrunkLevel >= 80) {
            result = 'ふぁぁ…' + result + '…ひっく';
        }
        return result;
    }

    function isCustomerPassedOut() {
        return state.customerDrunkLevel >= 100;
    }

    function resetDrunkLevel() {
        state.customerDrunkLevel = 0;
        updateDrunkMeter();
        updateDrunkVisuals();
    }

    function checkMysteryTime() {
        const hour = new Date().getHours();
        // Mystery Hour: 0:00 to 3:59
        const isMystery = (hour >= 0 && hour < 4);

        state.isMysteryMode = isMystery;
        const body = document.body;

        if (isMystery) {
            body.classList.add('mystery-mode');
            if (dom.bgmAudioEl) dom.bgmAudioEl.pause(); // Stop BGM
            showFloatingText(state.language === 'ja' ? "丑三つ時..." : "The Witching Hour...", "#ff0000", dom.gameContainerEl);
        } else {
            body.classList.remove('mystery-mode');
            // BGM will be handled by regular logic
        }
    }



    // --- Sparkle Animation ---
    function createSparkles(targetElement) {
        if (!targetElement) return;

        const container = document.createElement('div');
        container.className = 'sparkle-container';
        targetElement.appendChild(container);

        for (let i = 0; i < 12; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            const angle = (i / 12) * Math.PI * 2;
            const distance = 30 + Math.random() * 30;
            sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
            sparkle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
            sparkle.style.left = '50%';
            sparkle.style.top = '50%';
            sparkle.style.animationDelay = (i * 0.05) + 's';
            container.appendChild(sparkle);
        }

        // Remove after animation
        setTimeout(() => container.remove(), 1500);
    }

    // --- Liquid Wave Animation ---
    function addLiquidWaveEffect() {
        const contents = document.getElementById('shaker-contents');
        if (!contents || !contents.querySelector('.shaker-liquid-wave')) {
            const wave = document.createElement('div');
            wave.className = 'shaker-liquid-wave';
            if (contents) contents.appendChild(wave);
        }
    }

    function removeLiquidWaveEffect() {
        const wave = document.querySelector('.shaker-liquid-wave');
        if (wave) wave.remove();
    }

    // ===========================================
    // GESTURE & PHOTO FEATURES (Restored)
    // ===========================================
    // (Gesture logic exists around line 3800)

    // --- Photo Mode Functions ---
    window.openPhotoMode = function () {
        document.body.classList.add('photo-mode');
        setTimeout(() => {
            html2canvas(document.getElementById('game-container'), {
                backgroundColor: null,
                scale: 2
            }).then(canvas => {
                document.body.classList.remove('photo-mode');
                const photoCanvas = document.getElementById('photo-canvas');
                const ctx = photoCanvas.getContext('2d');
                photoCanvas.width = canvas.width;
                photoCanvas.height = canvas.height;
                ctx.drawImage(canvas, 0, 0);

                // Watermark
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.font = '24px "Noto Serif JP", serif';
                ctx.fillText('🍸 Bartender Game', 20, canvas.height - 20);

                document.getElementById('photo-mode-overlay').classList.remove('hidden');
            }).catch(err => {
                document.body.classList.remove('photo-mode');
                console.error(err);
                alert('Photo capture failed');
            });
        }, 200);
    };

    window.closePhotoMode = function () {
        document.getElementById('photo-mode-overlay').classList.add('hidden');
    };

    window.downloadPhoto = function () {
        const canvas = document.getElementById('photo-canvas');
        const link = document.createElement('a');
        link.download = `bartender-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };

    window.shareToTwitter = function () {
        const text = encodeURIComponent("バーテンダーゲームでカクテルを作りました！ 🍸 #BartenderGame");
        window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    };

    // ===========================================
    // JUKEBOX FEATURE
    // ===========================================
    let BGM_TRACKS = [
        { id: 'skyline_serenity', name: '🏙️ Skyline Serenity', src: 'jukebox/Skyline_Serenity.mp3', icon: '🏙️' },
        { id: 'standard_jazz', name: '🍸 Standard Jazz', src: 'jukebox/standard_jazz.mp3', icon: '🎷' },
        { id: 'barcarolle', name: '🌙 Barcarolle of the Blue Moonlit Night', src: 'jukebox/Barcarolle of the Blue Moonlit Night.mp3', icon: '🎻' },

        { id: 'coffee_break', name: '☕ Coffee Break', src: 'jukebox/Coffee_Break.mp3', icon: '☕' },
        { id: 'whisky_nights', name: '🥃 Whisky Nights', src: 'jukebox/Whisky_Nights.mp3', icon: '🥃' },
        { id: 'winter_night', name: '❄️ Winter Night Street', src: 'jukebox/Winter_Night_Street.mp3', icon: '❄️' }
    ];

    // Automatic fetch disabled by user request. Using hardcoded list.
    async function fetchMusicList() {
        /*
        try {
            const res = await fetch('http://localhost:3000/api/music');
            if (!res.ok) throw new Error('Failed to fetch music');
            const tracks = await res.json();

            // Only override if we got tracks
            if (tracks && tracks.length > 0) {
                BGM_TRACKS = tracks.map(t => ({
                    id: t.id,
                    name: `🎵 ${t.name}`,
                    src: t.src, // 'jukebox/filename.mp3'
                    icon: '💿'
                }));
            }
        } catch (e) {
            console.error("Music Fetch Error (Using Offline Tracks):", e);
        }
        */

        // We use the hardcoded BGM_TRACKS above.

        // Set default BGM if not set
        if (!state.interior.bgm) {
            const defaultTrack = BGM_TRACKS.find(t => t.id === 'skyline_serenity') || BGM_TRACKS[0];
            if (defaultTrack) {
                state.interior.bgm = defaultTrack.id;
            }
        }

        // Ensure the audio element has the correct src
        const currentId = state.interior.bgm;
        const currentTrack = BGM_TRACKS.find(t => t.id === currentId);
        // Use dom.bgmAudioEl if possible, but fallback to direct ID if not yet assigned
        const audioEl = (dom && dom.bgmAudioEl) ? dom.bgmAudioEl : document.getElementById('bgm-audio');

        if (audioEl && currentTrack) {
            // If audio has no src or is just a placeholder, update it
            const currentSrc = audioEl.getAttribute('src');
            if (!currentSrc || currentSrc === 'background.mp3' || currentSrc !== currentTrack.src) {
                audioEl.src = currentTrack.src;

                // Show valid visual feedback that BGM is updated
                if (state.isGameRunning) {
                    const msg = state.language === 'ja' ? `♪ BGM: ${currentTrack.name}` : `♪ Now Playing: ${currentTrack.name}`;
                    if (typeof showFloatingText === 'function' && dom.gameContainerEl) {
                        showFloatingText(msg, '#8b5cf6', dom.gameContainerEl);
                    }
                }
            }
        }
    }

    function openJukebox() {
        const listEl = document.getElementById('jukebox-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        const currentId = state.interior.bgm || 'skyline_serenity';

        BGM_TRACKS.forEach(track => {
            const div = document.createElement('div');
            div.className = `jukebox-track ${track.id === currentId ? 'active' : ''}`;
            div.onclick = () => changeBGM(track.id);
            div.innerHTML = `
                            <span class="icon">${track.icon}</span>
                            <div class="info">
                                <div class="title">${track.name}</div>
                            </div>
                            ${track.id === currentId ? '<span class="text-indigo-400 text-xl">▶</span>' : ''}
                        `;
            listEl.appendChild(div);
        });

        const currentTrack = BGM_TRACKS.find(t => t.id === currentId);
        const nameEl = document.getElementById('current-bgm-name');
        if (nameEl) nameEl.textContent = currentTrack ? currentTrack.name : 'Unknown';

        document.getElementById('jukebox-overlay').classList.remove('hidden');
    }

    function closeJukebox() {
        document.getElementById('jukebox-overlay').classList.add('hidden');
    }

    window.openJukebox = openJukebox;
    window.closeJukebox = closeJukebox;

    function changeBGM(trackId) {
        const track = BGM_TRACKS.find(t => t.id === trackId);
        if (!track) return;

        state.interior.bgm = trackId;
        state.ownedInterior.bgm = [trackId];
        saveGameData();

        const audioEl = dom.bgmAudioEl;
        if (audioEl) {
            const isPlaying = !audioEl.paused;
            audioEl.src = track.src;
            audioEl.loop = true;

            // Handle play/pause if needed, or just auto-play if it was playing
            if (state.isMysteryMode) {
                // Don't play in mystery mode
            } else {
                audioEl.play().catch(e => console.log('Playback failed:', e));
            }
        }

        openJukebox();
        showFloatingText(`🎵 BGM: ${track.name}`, '#8b5cf6', dom.gameContainerEl);
    }


    function saveGameData() {
        if (state.currentSaveSlot) {
            const key = `bartenderSave_${state.currentSaveSlot}`;
            const data = {
                totalMoney: state.totalMoney,
                day: state.day,
                ownedIngredients: state.ownedIngredients,
                discoveredCocktails: state.discoveredCocktails,
                metCustomers: state.metCustomers,
                currentTitle: state.currentTitle,
                unlockedTitles: state.unlockedTitles,
                ownedInterior: state.ownedInterior,
                interior: state.interior,
                upgrades: state.upgrades,
                avatar: state.avatar,
                language: state.language,
                timestamp: Date.now()
            };
            localStorage.setItem(key, JSON.stringify(data));
        }
    }

    function loadGameData(slotId) {
        const key = `bartenderSave_${slotId}`;
        const saved = localStorage.getItem(key);
        if (saved) {
            const data = JSON.parse(saved);
            state.currentSaveSlot = slotId;
            state.totalMoney = data.totalMoney || 1000;
            state.day = data.day || 1;
            state.ownedIngredients = data.ownedIngredients || [...STARTER_INGREDIENTS];
            state.discoveredCocktails = data.discoveredCocktails || [];
            state.metCustomers = data.metCustomers || [];
            state.currentTitle = data.currentTitle || 'beginner';
            state.unlockedTitles = data.unlockedTitles || ['beginner'];
            state.ownedInterior = data.ownedInterior || { wallpaper: ['classic'], lighting: ['warm'], bgm: ['skyline_serenity', 'jazz'] };
            state.interior = data.interior || { wallpaper: 'classic', lighting: 'warm', bgm: 'skyline_serenity' };
            state.upgrades = data.upgrades || { iceMachine: { purchased: false }, shaker: { purchased: false }, barManual: { purchased: false } };
            state.avatar = data.avatar || 'images/avatar/man.png';
            state.language = data.language || 'ja';
            state.currentSaveSlot = slotId;

            // --- MIGRATION: Ensure new BGM is available ---
            if (state.ownedInterior && state.ownedInterior.bgm) {
                if (!state.ownedInterior.bgm.includes('skyline_serenity')) {
                    state.ownedInterior.bgm.unshift('skyline_serenity');
                }
            }
            // Determine if we should force update the current BGM
            // If current BGM is 'jazz' (old default) or invalid, switch to skyline_serenity
            if (state.interior.bgm === 'jazz' || !state.interior.bgm) {
                state.interior.bgm = 'skyline_serenity';
            }

            updateUI();
            fetchMusicList(); // Ensure BGM src is set based on loaded data
            return true;
        }
        return false;
    }

    function initialSetup() {
        // 「続きから」ボタンを常に有効化
        const continueBtn = document.getElementById('continue-game-btn');
        if (continueBtn) {
            continueBtn.disabled = false;
            continueBtn.onclick = function () {
                loadAndStart(1);
            };
            console.log('Continue button ready');
        }

        // Other init logic...
        // Other init logic...
        updateUI();
        fetchMusicList(); // Initial fetch
    }

    function loadAndStart(slotId) {
        // セーブデータがあれば読み込む、なければ初期状態で開始
        const hasData = loadGameData(slotId);
        if (!hasData) {
            // 初期状態をセット
            state.currentSaveSlot = slotId;
            state.day = 1;
            state.totalMoney = 0;
            state.score = 0;
            console.log('No save data found, starting new game');
            fetchMusicList(); // Ensure default BGM is set
        }

        startAudio();
        const overlay = document.getElementById('game-overlay');
        if (overlay) overlay.classList.add('opacity-0');
        setTimeout(() => {
            if (overlay) overlay.style.display = 'none';
            startDay();
        }, 500);
    }

    function openCharacterSelection(slotId) {
        document.getElementById('title-screen-content').classList.add('hidden');
        document.getElementById('character-selection-content').classList.remove('hidden');
    }

    function showSaveSlots() {
        document.getElementById('title-screen-content').classList.add('hidden');
        document.getElementById('slot-selection-content').classList.remove('hidden');
        renderSaveSlots();
    }

    function hideSaveSlots() {
        document.getElementById('title-screen-content').classList.remove('hidden');
        document.getElementById('slot-selection-content').classList.add('hidden');
    }


    window.openCharacterSelection = openCharacterSelection;
    window.deleteSave = deleteSave;
    window.loadAndStart = loadAndStart;
    window.saveGameManually = saveGameManually;

    initialSetup();
} catch (e) {
    console.error("Critical Init Error:", e);
}
});
