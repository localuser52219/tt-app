
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const symbols = [
  "📱", "🍔", "🎤", "🎬", "🎧", "🧠", "🗺", "📚", "🎭"
];

const topics = [
  { topic: "有地鐵的城市", answer: "東京、倫敦、巴黎、香港" },
  { topic: "有沙漠的地方", answer: "撒哈拉、杜拜、內蒙古" },
  { topic: "出名購物地點", answer: "銅鑼灣、首爾、新宿、米蘭" },
  { topic: "說英文的國家", answer: "英國、美國、澳洲、新加坡" },
  { topic: "有火山的地方", answer: "夏威夷、冰島、印尼" },
  { topic: "適合滑雪的地點", answer: "札幌、阿爾卑斯、長野、韓國江原道" },
  { topic: "有古城的城市", answer: "西安、京都、布拉格、伊斯坦堡" },
  { topic: "看極光的地方", answer: "芬蘭、特羅姆瑟、阿拉斯加" },
  { topic: "靠海的城市", answer: "悉尼、巴塞隆納、青島、基隆" },
  { topic: "浪漫的城市", answer: "巴黎、威尼斯、布拉格、布宜諾斯艾利斯" },
  { topic: "有皇宮的城市", answer: "曼谷、倫敦、首爾、北京" },
  { topic: "沙灘旅遊熱點", answer: "布吉、峇里、馬爾代夫、長灘島" },
  { topic: "熱氣球旅遊地", answer: "卡帕多奇亞、土耳其、納米比亞" },
  { topic: "有瀑布的國家", answer: "加拿大、巴西、辛巴威" },
  { topic: "世界文化遺產地", answer: "故宮、萬里長城、吳哥窟、佩特拉" },
  { topic: "機票貴的地方", answer: "瑞士、紐西蘭、冰島、挪威" },
  { topic: "交通混亂的城市", answer: "曼谷、雅加達、孟買、胡志明市" },
  { topic: "有古蹟的地方", answer: "埃及、羅馬、吳哥、墨西哥城" },
  { topic: "華人聚居的城市", answer: "溫哥華、多倫多、墨爾本、新加坡" },
  { topic: "有熱帶雨林的國家", answer: "巴西、印尼、馬來西亞" },
  { topic: "以咖啡聞名的國家", answer: "哥倫比亞、衣索比亞、越南" },
  { topic: "適合爬山的地方", answer: "玉山、富士山、阿爾卑斯、黃山" },
  { topic: "以夜景著稱的城市", answer: "香港、函館、首爾、拉斯維加斯" },
  { topic: "世界博覽會城市", answer: "大阪、上海、米蘭、迪拜" },
  { topic: "能搭熱氣球的地點", answer: "卡帕多奇亞、清邁、納米比亞" },
  { topic: "適合開露營車的國家", answer: "紐西蘭、澳洲、美國、加拿大" },
  { topic: "有古代神廟的地點", answer: "吳哥窟、雅典、佩特拉、盧克索" },
  { topic: "冬天會下雪的城市", answer: "札幌、漢城、長野、莫斯科" },
  { topic: "以音樂聞名的城市", answer: "維也納、紐奧良、利物浦" },
  { topic: "看日出的地點", answer: "富士山、太魯閣、吳哥窟、東海岸" },
  { topic: "酸性物質", answer: "醋、檸檬、鹽酸" },
  { topic: "鹼性物質", answer: "肥皂、蘇打、氫氧化鈉" },
  { topic: "舉一種金屬元素", answer: "鐵、銅、鋁、銀" },
  { topic: "舉一種非金屬元素", answer: "氫、氧、碳、氮" },
  { topic: "舉一種常見燃料", answer: "煤、油、天然氣" },
  { topic: "人體器官", answer: "心、肝、腦、腎" },
  { topic: "哺乳動物", answer: "人、狗、貓、馬" },
  { topic: "舉一種昆蟲類動物", answer: "蟻、蝴蝶、蜜蜂、蟑螂" },
  { topic: "舉一種冷血動物", answer: "蛇、蜥蜴、青蛙、鱷魚" },
  { topic: "舉一種行星名稱", answer: "地球、火星、木星、水星" },
  { topic: "舉一種恆星名稱", answer: "太陽、天狼星、織女星" },
  { topic: "天文現象", answer: "日蝕、月蝕、極光、流星雨" },
  { topic: "舉一種能量形式", answer: "熱能、光能、動能、電能" },
  { topic: "舉一種常見力的類型", answer: "重力、摩擦力、推力、張力" },
  { topic: "光學工具", answer: "望遠鏡、顯微鏡、放大鏡" },
  { topic: "舉一種聲音單位", answer: "分貝、赫茲" },
  { topic: "常見電器元件", answer: "電阻、電容、線圈、開關" },
  { topic: "舉一種常見塑膠類型", answer: "PE、PVC、PET、PU" },
  { topic: "可再生能源", answer: "太陽能、風能、水力" },
  { topic: "不可再生能源", answer: "煤、石油、天然氣" },
  { topic: "地球層次名稱", answer: "地殼、地幔、地核、大氣層" },
  { topic: "舉一種天氣現象", answer: "雨、雪、雷、霧" },
  { topic: "舉一種疾病病原體", answer: "病毒、細菌、真菌、寄生蟲" },
  { topic: "人體感官", answer: "視覺、聽覺、嗅覺、味覺" },
  { topic: "舉一種細胞構造", answer: "細胞膜、細胞核、線粒體" },
  { topic: "化學變化例子", answer: "生鏽、燃燒、發酵、腐敗" },
  { topic: "舉一種遺傳單位名稱", answer: "基因、DNA、染色體" },
  { topic: "時間單位", answer: "秒、分、時、天" },
  { topic: "舉一種測量工具", answer: "尺、溫度計、磅秤、卡尺" },
  { topic: "自然界循環", answer: "水循環、碳循環、氮循環" },
  { topic: "中國古代名人", answer: "孔子、秦始皇、李白、蘇軾" },
  { topic: "歷史朝代名稱", answer: "唐、宋、元、明、清" },
  { topic: "舉一場世界大戰名稱", answer: "一戰、二戰、冷戰、越戰" },
  { topic: "香港歷史人物", answer: "孫中山、林則徐、何東" },
  { topic: "古代兵器名稱", answer: "劍、矛、戟、弓" },
  { topic: "世界遺產建築", answer: "金字塔、萬里長城、自由神像" },
  { topic: "舉一項中國四大發明", answer: "火藥、指南針、造紙術、印刷術" },
  { topic: "中國古代國號", answer: "燕、楚、齊、魏" },
  { topic: "古代著作名稱", answer: "詩經、論語、三國志、資治通鑑" },
  { topic: "世界知名帝國", answer: "羅馬、奧斯曼、蒙古、英國" },
  { topic: "古文明地點", answer: "埃及、巴比倫、瑪雅、印度河" },
  { topic: "考古文物名稱", answer: "兵馬俑、青銅器、甲骨文、銅鼓" },
  { topic: "傳統節日名稱", answer: "春節、清明、端午、中秋" },
  { topic: "傳統戲劇類型", answer: "粵劇、京劇、崑曲、越劇" },
  { topic: "古代官職名稱", answer: "丞相、太守、御史、縣令" },
  { topic: "歷史建築類型", answer: "城牆、皇宮、神廟、塔樓" },
  { topic: "舉一種傳統服飾名稱", answer: "漢服、唐裝、長衫、肚兜" },
  { topic: "舉一種歷史通用貨幣", answer: "文、錢、銀兩、貝殼" },
  { topic: "文藝復興人物", answer: "達文西、米開朗、拉斐爾" },
  { topic: "古代發明家", answer: "墨子、祖沖之、張衡、畢昇" },
  { topic: "舉一場中國重大戰役", answer: "官渡、赤壁、長平、淝水" },
  { topic: "歷史小說作品", answer: "水滸、三國、西遊、紅樓" },
  { topic: "古代學術流派", answer: "儒家、道家、法家、墨家" },
  { topic: "近代革命領袖", answer: "孫中山、毛澤東、甘地、林肯" },
  { topic: "舉一種傳統技藝", answer: "刺繡、雕刻、編織、書法" },
  { topic: "舉一種傳統樂器名稱", answer: "琵琶、古箏、二胡、笛子" },
  { topic: "舉一種民族舞蹈名稱", answer: "龍舞、獅舞、秧歌、傣舞" },
  { topic: "世界文學人物", answer: "莎士比亞、雨果、托爾斯泰" },
  { topic: "文化地標名稱", answer: "故宮、天壇、凱旋門、大本鐘" },
  { topic: "歷史時代名稱", answer: "石器、青銅、鐵器、中古" },
  { topic: "舉一首傷感廣東歌", answer: "喜歡你、孤雛、舊歡如夢" },
  { topic: "舉一首快節奏廣東歌", answer: "半斤八兩、追、講不出再見" },
  { topic: "舉一首戀愛主題廣東歌", answer: "明年今日、小幸運、情人" },
  { topic: "舉一首K場必唱廣東歌", answer: "千千闋歌、愛是永恆、海闊天空" },
  { topic: "舉一首90年代廣東歌", answer: "一生何求、友情歲月、無需要太多" },
  { topic: "舉一首出自電影的廣東歌", answer: "演員、歲月神偷、風再起時" },
  { topic: "男廣東歌手", answer: "張學友、陳奕迅、許志安" },
  { topic: "女廣東歌手", answer: "鄭秀文、楊千嬅、容祖兒" },
  { topic: "舉一首Beyond作品", answer: "喜歡你、海闊天空、光輝歲月" },
  { topic: "舉一首陳奕迅名曲", answer: "K歌之王、好久不見、單車" },
  { topic: "舉一首關於時間的歌", answer: "明年今日、歲月如歌、明愛暗戀補習社" },
  { topic: "舉一首講朋友的歌", answer: "朋友、舊朋友、新的朋友" },
  { topic: "舉一首講分手的歌", answer: "分手總要在雨天、講不出再見" },
  { topic: "舉一首講青春的歌", answer: "青春常駐、初戀、同班同學" },
  { topic: "舉一首有英文名的歌", answer: "Elva、Love Song、Addicted" },
  { topic: "舉一首開頭是鋼琴的歌", answer: "明年今日、K歌之王、好心分手" },
  { topic: "舉一首來自選秀節目", answer: "全民造星、追光者、大熱" },
  { topic: "舉一首和「海」有關的歌", answer: "海闊天空、海枯石爛、海上花" },
  { topic: "舉一首雙人合唱廣東歌", answer: "明明、合久必婚、相愛很難" },
  { topic: "舉一首名為三個字的歌", answer: "小幸運、愛是…、喜歡你" },
  { topic: "古典作曲家", answer: "貝多芬、莫札特、巴哈" },
  { topic: "舉一首鋼琴名曲", answer: "給愛麗絲、月光、夢幻即興曲" },
  { topic: "交響樂作品", answer: "命運、田園、新世界" },
  { topic: "舉一首小提琴名曲", answer: "四季、查爾達斯、愛之喜" },
  { topic: "芭蕾音樂作品", answer: "天鵝湖、胡桃夾子、睡美人" },
  { topic: "舉一首慢板名曲", answer: "月光、悲愴、慢板協奏曲" },
  { topic: "音樂術語", answer: "和聲、節奏、旋律、奏鳴曲" },
  { topic: "古典樂派名稱", answer: "浪漫派、古典派、巴洛克" },
  { topic: "古典演奏樂器", answer: "小提琴、長笛、豎琴、鋼琴" },
  { topic: "女性演奏家", answer: "阿格麗希、克拉拉、陳薩" },
  { topic: "香港男演員", answer: "周星馳、劉德華、張家輝" },
  { topic: "香港女演員", answer: "鄭秀文、袁詠儀、張栢芝" },
  { topic: "港產喜劇電影", answer: "家有喜事、賭神、逃學威龍" },
  { topic: "港產警匪電影", answer: "無間道、暗戰、掃毒" },
  { topic: "周星馳電影", answer: "功夫、西遊、食神" },
  { topic: "鄭秀文主演電影", answer: "忘不了、瘦身男女、孤男寡女" },
  { topic: "改編漫畫電影", answer: "蜘蛛俠、鋼鐵人、死侍" },
  { topic: "奧斯卡得獎電影", answer: "龍紋身、寄生上流、泰坦尼克" },
  { topic: "動畫電影", answer: "玩具總動員、冰雪奇緣、心靈奇旅" },
  { topic: "迪士尼經典動畫", answer: "小美人魚、獅子王、阿拉丁" },
  { topic: "日本動畫電影", answer: "千與千尋、風之谷、你的名字" },
  { topic: "卡通角色", answer: "哆啦A夢、皮卡丘、蠟筆小新" },
  { topic: "校園題材電影", answer: "女校男生、那些年、早熟" },
  { topic: "青春戀愛電影", answer: "初戀那件小事、比悲傷更悲傷的故事" },
  { topic: "驚悚懸疑電影", answer: "看不見的客人、控方證人、電鋸驚魂" },
  { topic: "經典鬼片", answer: "回魂夜、陰陽路、見鬼" },
  { topic: "美劇名稱", answer: "絕命毒師、紙房子、紙牌屋" },
  { topic: "韓劇名稱", answer: "愛的迫降、來自星星的你、信號" },
  { topic: "荷里活男星", answer: "李奧納多、畢彼特、強尼戴普" },
  { topic: "荷里活女星", answer: "娜塔莉、安祖蓮娜、艾瑪史東" },
  { topic: "電視節目名稱", answer: "全民造星、開心無敵獎門人" },
  { topic: "綜藝節目類型", answer: "遊戲、訪談、旅遊、料理" },
  { topic: "古裝劇名稱", answer: "金枝慾孽、宮心計、延禧攻略" },
  { topic: "宮廷劇角色", answer: "皇后、嬪妃、太監、尚宮" },
  { topic: "電視台名稱", answer: "無綫、ViuTV、J2、亞視" },
  { topic: "影展名稱", answer: "金像獎、金馬獎、坎城影展" },
  { topic: "賀歲片", answer: "家有囍事、八星報喜、行運一條龍" },
  { topic: "漫畫改編劇集", answer: "漫長的季節、航海王、咒術迴戰" },
  { topic: "搞笑角色", answer: "石榴姐、周星星、肥嘟嘟左衛門" },
  { topic: "有動作場面的電影", answer: "著數婆婆、葉問、特警新人類" },
  { topic: "四字成語", answer: "畫蛇添足、對牛彈琴、一箭雙鵰" },
  { topic: "舉一種詩詞格式", answer: "五言、七言、絕句、律詩" },
  { topic: "舉一種修辭手法", answer: "比喻、擬人、排比、誇張" },
  { topic: "常見助詞", answer: "的、了、嗎、啊" },
  { topic: "舉一種句子類型", answer: "疑問、祈使、感嘆、陳述" },
  { topic: "舉一種詞語詞性", answer: "名詞、動詞、形容詞、副詞" },
  { topic: "舉一種語氣詞", answer: "呢、吧、嘛、啦" },
  { topic: "舉一種書信結尾用語", answer: "此致、敬禮、順頌、敬安" },
  { topic: "常用俗語", answer: "食腦、耍手、冇癮、唔啱聽" },
  { topic: "港式用語", answer: "搏懵、老點、冇癮、黐線" },
  { topic: "常用外來語", answer: "卡通、沙律、漢堡、朱古力" },
  { topic: "舉一種中文標點符號", answer: "句號、逗號、冒號、問號" },
  { topic: "小說文體", answer: "傳記、愛情、偵探、奇幻" },
  { topic: "世界文學作家", answer: "莎士比亞、雨果、魯迅、托爾斯泰" },
  { topic: "中國古文作者", answer: "李白、杜甫、蘇軾、韓愈" },
  { topic: "唐詩三百首詩題", answer: "靜夜思、春曉、登鶴樓、送元二" },
  { topic: "舉一首描寫春天的詩", answer: "春曉、早春、春日、春望" },
  { topic: "舉一首描寫月亮的詩", answer: "靜夜思、水調歌頭、望月懷遠" },
  { topic: "四書或五經名", answer: "論語、孟子、詩經、易經" },
  { topic: "中國古典小說", answer: "三國、水滸、西遊、紅樓" },
  { topic: "現代詩人姓名", answer: "徐志摩、余光中、洛夫、戴望舒" },
  { topic: "台灣作家", answer: "九把刀、吳念真、白先勇、侯文詠" },
  { topic: "香港作家", answer: "西西、董啟章、黃碧雲、也斯" },
  { topic: "金庸小說角色", answer: "楊過、令狐沖、張無忌、韋小寶" },
  { topic: "舉一種翻譯方法", answer: "直譯、意譯、音譯、增譯" },
  { topic: "舉一種常見錯別字", answer: "髮→發、訊→訓、捨→捨（用錯語境）" },
  { topic: "語言類遊戲", answer: "成語接龍、諧音詞、順口溜" },
  { topic: "描寫人物的詞語", answer: "勤奮、溫柔、奸詐、滑稽" },
  { topic: "描寫動作的詞語", answer: "走、跑、跳、坐" },
  { topic: "文學獎名稱", answer: "諾貝爾、金鼎、聯合文學、紅樓夢獎" },
];

export default function TTAppDrawer() {
  const [currentSymbol, setCurrentSymbol] = useState("");
  const [currentTopic, setCurrentTopic] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const drawCard = () => {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const randomPair = topics[Math.floor(Math.random() * topics.length)];
    setCurrentSymbol(randomSymbol);
    setCurrentTopic(randomPair.topic);
    setCurrentAnswer(randomPair.answer);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-6 text-center space-y-4">
          <div className="text-6xl">{currentSymbol || "🎲"}</div>
          <h2 className="text-xl font-bold min-h-[3rem]">
            {currentTopic || "請點擊下方抽卡"}
          </h2>
          {showAnswer && (
            <div className="text-gray-600 text-base">建議答案：{currentAnswer}</div>
          )}
          <div className="space-y-2">
            <Button onClick={drawCard} className="w-full text-lg">
              抽一張卡牌
            </Button>
            <Button
              onClick={() => setShowAnswer(true)}
              className="w-full text-sm text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
            >
              顯示建議答案
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
