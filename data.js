/* AnatoMind 3D — organlar haqida ma'lumotlar
   Diqqat: bu ma'lumotlar umumiy bilim uchun. Tashxis va davolash o'rnini bosmaydi. */

window.EMERGENCY_NUMBER = "103";

window.ORGANS = [
  {
    id: "brain",
    name: "Miya",
    latin: "Cerebrum",
    color: "#f4a6b8",
    focus: [0, 8.5, 0], dist: 6.5, side: "front",
    short: "Miya — butun tananing boshqaruv markazi. U fikrlash, xotira, his-tuyg'u, harakat hamda nafas va yurak urishi kabi muhim jarayonlarni boshqaradi.",
    facts: [
      "Og'irligi taxminan 1,3–1,4 kg",
      "Taxminan 86 mlrd neyron",
      "Tana og'irligining ~2% i, lekin energiyaning ~20% ini sarflaydi"
    ],
    functions: [
      "Katta yarimsharlar: fikrlash, nutq, xotira, sezgilar",
      "Miyacha: muvozanat va harakatlar uyg'unligi",
      "Miya poyasi: nafas, yurak urishi, uyg'onish va uyqu"
    ],
    care: [
      "Tinch, qorong'u xonada dam oling, imkon bo'lsa uxlang",
      "Ko'proq suv iching — suvsizlik bosh og'rig'ini kuchaytirishi mumkin",
      "Peshona yoki ensaga salqin kompress qo'ying",
      "Ekran, shovqin va yorqin yorug'likdan tanaffus qiling",
      "Kerak bo'lsa, og'riq qoldiruvchini yo'riqnomadagi dozada ichish mumkin (surunkali kasalligingiz yoki allergiyangiz bo'lsa, avval shifokor yoki farmatsevt bilan maslahatlashing)",
      "Og'riq qachon boshlangani va nimadan keyin kuchayganini yozib boring"
    ],
    doctor: [
      "Bosh og'rig'i tez-tez (haftasiga bir necha marta) takrorlansa",
      "Og'riq asta-sekin kuchayib borsa yoki xarakteri o'zgarsa",
      "Og'riq qoldiruvchi yordam bermasa",
      "Bosh jarohatidan keyin og'riq yoki bosh aylanishi boshlansa",
      "50 yoshdan keyin birinchi marta kuchli bosh og'rig'i paydo bo'lsa"
    ],
    emergency: [
      "To'satdan boshlangan, «hayotimdagi eng kuchli» bosh og'rig'i",
      "Yuzning bir tomoni qiyshayishi, qo'l yoki oyoqning bo'shashishi, nutqning buzilishi",
      "Hushdan ketish, tutqanoq, chalkashlik",
      "Yuqori isitma + qattiq bo'yin + qusish",
      "Bosh jarohatidan keyin qayta-qayta qusish yoki haddan tashqari uyquchanlik"
    ]
  },
  {
    id: "thyroid",
    name: "Qalqonsimon bez",
    latin: "Glandula thyroidea",
    color: "#ef8a4c",
    focus: [0, 6.5, 0.35], dist: 5, side: "front",
    short: "Bo'yinning old qismidagi kapalak shaklidagi bez. U modda almashinuvi (metabolizm) tezligini boshqaruvchi gormonlarni ishlab chiqaradi.",
    facts: [
      "Og'irligi taxminan 15–25 gramm",
      "Asosiy gormonlari: T3 va T4",
      "Gormon sintezi uchun yod zarur"
    ],
    functions: [
      "Energiya sarfi va tana haroratini tartibga soladi",
      "Yurak urishi va ovqat hazm qilish tezligiga ta'sir qiladi",
      "Bolalarda o'sish va miya rivojlanishida muhim"
    ],
    care: [
      "Alomatlar (bo'yinda shish, charchoq, vazn o'zgarishi) bo'lsa o'z-o'zini davolamang",
      "Yodlangan tuzdan me'yorida foydalaning (ortiqcha ham zararli)",
      "Shifokor tayinlagan tahlillarni (TSH, T4) o'z vaqtida topshiring",
      "Dorilarni faqat shifokor belgilagan dozada iching"
    ],
    doctor: [
      "Bo'yinda shish yoki tugun sezilsa",
      "Sababsiz vazn ortishi yoki kamayishi, doimiy charchoq",
      "Sovuqqa chiday olmaslik yoki aksincha haddan ortiq terlash",
      "Yurak urishi tezlashishi, qo'l titrashi, soch to'kilishi"
    ],
    emergency: [
      "Bo'yindagi shish tez kattalashib, nafas olish yoki yutish qiyinlashsa",
      "Juda tez yurak urishi + yuqori isitma + chalkashlik",
      "Kuchli bo'yin og'rig'i bilan birga yuqori isitma"
    ]
  },
  {
    id: "lungs",
    name: "O'pka",
    latin: "Pulmones",
    color: "#e99aa6",
    focus: [0, 4.6, 0], dist: 10, side: "front",
    short: "O'pka — nafas olish organi. Havodagi kislorodni qonga o'tkazadi va qondan karbonat angidridni chiqarib yuboradi.",
    facts: [
      "Kattalarda dam olish paytida minutiga ~12–20 marta nafas olinadi",
      "Taxminan 300–500 million alveola (havo pufakchalari)",
      "O'ng o'pka 3 bo'lakdan, chap o'pka 2 bo'lakdan iborat"
    ],
    functions: [
      "Kislorod va karbonat angidrid almashinuvi (gaz almashinuvi)",
      "Nafas yo'llarini changdan va mikroblardan himoya qilish",
      "Qon kislotalik darajasini tartibga solishga yordam berish"
    ],
    care: [
      "Toza havo: xonani shamollating, tutun va changdan uzoq turing",
      "Yo'tal bo'lsa, ko'proq iliq suyuqlik iching",
      "Dam oling, yarim o'tirgan holatda yotish nafasni yengillashtirishi mumkin",
      "Chekishni to'xtating — bu o'pka uchun eng muhim qadam",
      "Sekin va chuqur nafas mashqlari (diafragma bilan nafas olish) qiling"
    ],
    doctor: [
      "Yo'tal 2–3 haftadan ortiq davom etsa",
      "Balg'amda qon aralashgan bo'lsa",
      "Zinapoyaga chiqqanda nafas qisilishi paydo bo'lsa",
      "Nafas olganda ko'krak og'rig'i yoki xirillash bo'lsa",
      "Isitma bilan birga yo'tal bir haftadan ortiq davom etsa"
    ],
    emergency: [
      "Dam olish paytida ham nafas qisilishi yoki bo'g'ilish",
      "Lablar yoki barmoqlar ko'karib ketishi",
      "To'satdan boshlangan kuchli ko'krak og'rig'i va nafas qisilishi",
      "Ko'p miqdorda qon bilan yo'talish"
    ]
  },
  {
    id: "heart",
    name: "Yurak",
    latin: "Cor",
    color: "#e0283f",
    focus: [0.25, 4.2, 0.3], dist: 6.5, side: "front",
    short: "Yurak — mushakli nasos. U qonni butun tanaga haydab, hujayralarga kislorod va oziq moddalarni yetkazadi.",
    facts: [
      "Og'irligi taxminan 250–350 gramm (musht kattaligida)",
      "Dam olishda minutiga ~60–100 marta uradi",
      "Bir kunda taxminan 100 000 marta uradi"
    ],
    functions: [
      "Qonni o'pkaga (kislorodlanish uchun) va butun tanaga haydaydi",
      "4 kamerasi bor: 2 bo'lmacha va 2 qorincha",
      "Klapanlar qonning faqat bir yo'nalishda oqishini ta'minlaydi"
    ],
    care: [
      "Yengil, o'tkir bo'lmagan noqulaylik bo'lsa — to'xtab, o'tirib dam oling",
      "Qon bosimi va pulsni o'lchab ko'ring (agar tonometr bo'lsa)",
      "Qahva, energetik ichimlik, chekish va alkogoldan saqlaning",
      "Stressni kamaytiring: sekin chuqur nafas oling",
      "Kundalik 30 daqiqa yurish, tuzni kamaytirish va vazn nazorati yurak uchun foydali"
    ],
    doctor: [
      "Jismoniy zo'riqishda ko'krak noqulayligi yoki nafas qisilishi",
      "Yurak urishi tez-tez to'xtab-to'xtab turganini sezsangiz",
      "Oyoqlarda shish, tez charchash",
      "Qon bosimi doimiy ravishda yuqori bo'lsa",
      "Oilada yosh yoshda yurak kasalligi bo'lgan qarindoshlar bo'lsa"
    ],
    emergency: [
      "Ko'krak o'rtasida bosuvchi, siquvchi og'riq 10–15 daqiqadan ortiq (chap qo'l, jag', bo'yin yoki orqaga tarqalishi mumkin)",
      "Sovuq ter, ko'ngil aynishi, nafas qisilishi bilan birga ko'krak og'rig'i",
      "Hushdan ketish yoki juda tez/juda sekin yurak urishi bilan bosh aylanishi",
      "Bunday holatda darhol tez yordamga qo'ng'iroq qiling; dispetcher keyingi qadamlarni (jumladan, aspirin haqida) aytib beradi"
    ]
  },
  {
    id: "liver",
    name: "Jigar",
    latin: "Hepar",
    color: "#9a3b2f",
    focus: [-0.7, 2.95, 0.3], dist: 7, side: "front",
    short: "Jigar — tanadagi eng katta ichki bez. U zararli moddalarni zararsizlantiradi, o't ishlab chiqaradi va oziq moddalarni qayta ishlaydi.",
    facts: [
      "Og'irligi taxminan 1,4–1,6 kg",
      "Yuzdan ortiq muhim vazifani bajaradi",
      "Qisman olib tashlansa ham, o'zini qayta tiklash qobiliyatiga ega"
    ],
    functions: [
      "Qondagi zaharli moddalar va dorilarni qayta ishlash",
      "Yog'larni hazm qilish uchun o't ishlab chiqarish",
      "Qand (glikogen), oqsil va vitaminlarni saqlash va sintez qilish",
      "Qon ivishi uchun oqsillar hosil qilish"
    ],
    care: [
      "O'ng qovurg'a ostidagi sezilarli og'riqda alkogolni butunlay to'xtating",
      "Yog'li, qovurilgan va juda shirin ovqatlarni kamaytiring",
      "Dorilar va «jigar uchun» o'simlik qo'shimchalarini o'zboshimchalik bilan ko'p ichmang",
      "Ko'proq suv iching, sabzavot va tolali ovqat iste'mol qiling",
      "Paratsetamolni belgilangan dozadan oshirmang — me'yoridan ortiq jigarga zarar qiladi"
    ],
    doctor: [
      "O'ng qovurg'a ostida takrorlanuvchi og'riq yoki og'irlik",
      "Doimiy holsizlik, ishtaha yo'qolishi",
      "Siydik to'q rangga, najas esa och rangga kirsa",
      "Gepatit bo'lgan odam bilan yaqin aloqa yoki qon orqali yuqish xavfi bo'lgan bo'lsa (tahlil topshiring)"
    ],
    emergency: [
      "Teri va ko'z oqining sarg'ayishi + kuchli qorin og'rig'i yoki isitma",
      "Qon qusish yoki qora, qatronsimon najas",
      "Chalkashlik, haddan ortiq uyquchanlik",
      "Qorinning tez kattalashishi"
    ]
  },
  {
    id: "stomach",
    name: "Oshqozon",
    latin: "Ventriculus",
    color: "#f08f72",
    focus: [0.65, 2.85, 0.3], dist: 6.5, side: "front",
    short: "Oshqozon — mushakli xalta. Ovqatni xlorid kislota va fermentlar bilan aralashtirib, hazm qilishning birinchi bosqichini bajaradi.",
    facts: [
      "Hajmi bo'sh holatda ~0,1 L, to'lganda 1–1,5 L gacha kengayadi",
      "Ovqat odatda 2–4 soat davomida oshqozonda qoladi",
      "Shilliq qavat uni o'z kislotasidan himoya qiladi"
    ],
    functions: [
      "Ovqatni maydalash va aralashtirish",
      "Xlorid kislota bilan mikroblarni yo'q qilish",
      "Oqsillarni hazm qilishni boshlash (pepsin)",
      "Ovqatni ichakka asta-sekin yuborish"
    ],
    care: [
      "Kichik porsiyalarda, sekin va tez-tez ovqatlaning",
      "Achchiq, yog'li, juda sho'r ovqat, qahva, gazli ichimlik va alkogoldan voz keching",
      "Ovqatdan keyin darhol yotmang, kamida 2–3 soat kuting",
      "Kechqurun og'ir ovqat yemang",
      "Ko'ngil aynisa — mayda-mayda qultumlab suv yoki zanjabil choyi iching",
      "Chekish oshqozon shilliq qavatiga zarar qiladi — kamaytiring"
    ],
    doctor: [
      "Oshqozon og'rig'i yoki kuyish 2 haftadan ortiq davom etsa",
      "Sababsiz vazn yo'qotish yoki ishtaha yo'qolishi",
      "Yutish qiyinlashsa yoki ovqat tiqilib qolayotgandek tuyulsa",
      "Og'riq qoldiruvchilarni (ibuprofen, aspirin) ko'p ichgandan keyin oshqozon og'risa"
    ],
    emergency: [
      "Qon qusish yoki «kofe quyqasi» ko'rinishidagi qusuq",
      "Qora, yopishqoq (qatronsimon) najas",
      "To'satdan boshlangan juda kuchli qorin og'rig'i, qorin taxtadek qotib qolsa",
      "Hushdan ketish yoki keskin holsizlik"
    ]
  },
  {
    id: "pancreas",
    name: "Oshqozon osti bezi",
    latin: "Pancreas",
    color: "#f2c46d",
    focus: [0.05, 2.05, 0.05], dist: 5.5, side: "front",
    short: "Oshqozon orqasida joylashgan bez. U ovqat hazm qiluvchi fermentlarni va qand miqdorini tartibga soluvchi insulin gormonini ishlab chiqaradi.",
    facts: [
      "Uzunligi taxminan 12–15 sm",
      "Ikki vazifani bajaradi: hazm (ekzokrin) va gormonal (endokrin)",
      "Insulin qondagi qand darajasini pasaytiradi"
    ],
    functions: [
      "Yog', oqsil va uglevodlarni hazm qiluvchi fermentlar chiqarish",
      "Insulin va glyukagon gormonlari orqali qand muvozanatini ushlab turish"
    ],
    care: [
      "Yuqori qorin og'rig'ida alkogol va yog'li ovqatdan butunlay saqlaning",
      "Yengil, kam yog'li ovqat yeng, ko'proq suv iching",
      "Og'riq kuchli bo'lsa — o'zingizni davolamay, shifokorga murojaat qiling",
      "Qandli diabetda qand darajasini nazorat qiling va ovqatlanish tartibiga rioya qiling"
    ],
    doctor: [
      "Yuqori qorin og'rig'i takrorlansa, ayniqsa yog'li ovqatdan keyin",
      "Doimiy chanqash, tez-tez siydik kelishi, sababsiz vazn yo'qotish",
      "Yog'li, yuvilmaydigan, hidli najas",
      "Oilada diabet yoki pankreatit bo'lgan bo'lsa"
    ],
    emergency: [
      "Yuqori qorinda kuchli og'riq orqaga tarqalib, qusish bilan birga kelsa",
      "Og'riq bilan birga isitma, tez yurak urishi yoki sariqlik",
      "Diabetda: chalkashlik, meva hidli nafas, chuqur tez nafas olish"
    ]
  },
  {
    id: "kidneys",
    name: "Buyraklar",
    latin: "Renes",
    color: "#b8473f",
    focus: [0, 2.2, -0.45], dist: 9, side: "back",
    short: "Buyraklar — loviya shaklidagi juft organ. Qonni filtrlaydi, ortiqcha suv va chiqindilarni siydik bilan chiqaradi.",
    facts: [
      "Har biri taxminan 10–12 sm uzunlikda",
      "Kuniga ~180 litr qonni filtrlaydi",
      "Kuniga ~1–2 litr siydik hosil qiladi"
    ],
    functions: [
      "Qonni chiqindilardan tozalash",
      "Suv va tuz (elektrolit) muvozanatini saqlash",
      "Qon bosimini tartibga solish",
      "Qizil qon hujayralari hosil bo'lishiga ta'sir qiluvchi gormon (eritropoetin) ishlab chiqarish"
    ],
    care: [
      "Bel yoki yon tomon og'rig'ida iliq holatda dam oling",
      "Ko'proq suv iching (agar shifokor suyuqlikni cheklamagan bo'lsa)",
      "Tuz va juda sho'r ovqatni kamaytiring",
      "Og'riq qoldiruvchilarni (ibuprofen kabi) nazoratsiz ko'p ichmang — buyrakka zarar bo'lishi mumkin",
      "Siydikni uzoq ushlab turmang",
      "Qon bosimi va qand miqdorini nazorat qiling"
    ],
    doctor: [
      "Bel yoki yon tomonda takrorlanuvchi og'riq",
      "Siydik rangi o'zgarsa yoki ko'pik ko'p bo'lsa",
      "Yuz va oyoqlarda shish",
      "Qon bosimi yuqori yoki qandli diabet bo'lsa — yiliga kamida bir marta siydik va qon tahlili",
      "Siydik yo'lida tosh bo'lgan yoki oilada buyrak kasalligi bo'lsa"
    ],
    emergency: [
      "Bel yoki yon tomonda to'lqinsimon, o'ta kuchli og'riq (qusish bilan)",
      "Bel og'rig'i + isitma + titroq",
      "Siydikda ko'zga ko'rinadigan qon",
      "Siydik umuman chiqmasligi"
    ]
  },
  {
    id: "intestines",
    name: "Ichaklar",
    latin: "Intestinum",
    color: "#d9937d",
    focus: [0, 0.8, 0.2], dist: 8.5, side: "front",
    short: "Ichaklar ovqatni hazm qilishni yakunlaydi: ingichka ichak oziq moddalarni, yo'g'on ichak esa suvni so'radi va najasni hosil qiladi.",
    facts: [
      "Ingichka ichak uzunligi taxminan 5–6 metr",
      "Yo'g'on ichak uzunligi taxminan 1,5 metr",
      "Ichakda trillionlab foydali bakteriyalar (mikrobiom) yashaydi"
    ],
    functions: [
      "Ingichka ichak: oziq moddalar va vitaminlarni qonga so'rish",
      "Yo'g'on ichak: suvni so'rish, najas hosil qilish",
      "Immunitetning katta qismi ichakda joylashgan"
    ],
    care: [
      "Kuniga yetarli suv iching, tolali ovqat (sabzavot, yorma, meva) yeng",
      "Diareyada: tez-tez oz-ozdan suyuqlik yoki regidratsiya eritmasi iching",
      "Qabziyatda: tola, suv va harakat; ichakni «majburlamang»",
      "Ko'p yog'li, juda achchiq va qayta ishlangan oziq-ovqatni kamaytiring",
      "Qorinni iliq qo'l bilan yengil massaj qilish gaz og'rig'ini kamaytirishi mumkin",
      "Probiotik mahsulotlar (qatiq, qatiq-kefir) mikrobiomga yordam berishi mumkin"
    ],
    doctor: [
      "Qorin og'rig'i yoki ich ketishi/qotishi 1–2 haftadan ortiq davom etsa",
      "Sababsiz vazn yo'qotish",
      "Najasda shilliq yoki qon aralashmasi",
      "Qorin shishishi doimiy bo'lsa yoki tungi diareya bo'lsa"
    ],
    emergency: [
      "Qorinda juda kuchli, to'xtamaydigan og'riq",
      "Qorin og'rig'i + doimiy qusish, gaz va najas umuman chiqmasligi",
      "Ko'p qonli najas yoki qora najas",
      "O'ng pastki qorinda og'riq kuchayib, isitma yoki ko'ngil aynishi bilan birga kelsa (appenditsit shubhasi)",
      "Diareya/qusish bilan suvsizlanish: siydik deyarli yo'q, og'iz quruq, holsizlik"
    ]
  },
  {
    id: "bladder",
    name: "Siydik pufagi",
    latin: "Vesica urinaria",
    color: "#e6c23f",
    focus: [0, -0.7, 0.25], dist: 6, side: "front",
    short: "Siydik pufagi — buyraklardan kelgan siydikni vaqtincha saqlaydigan mushakli xalta.",
    facts: [
      "Hajmi taxminan 400–600 ml",
      "Siydik qilish istagi ~200–300 ml da seziladi",
      "Ayollarda siydik yo'li infeksiyalari erkaklarga qaraganda tez-tez uchraydi"
    ],
    functions: [
      "Siydikni yig'ish va saqlash",
      "Mushaklarning qisqarishi bilan siydikni chiqarish"
    ],
    care: [
      "Ko'proq suv iching — bu infeksiyani «yuvib» tashlashga yordam beradi",
      "Siydikni uzoq ushlab turmang",
      "Qahva, alkogol va achchiq ovqatni vaqtincha kamaytiring",
      "Pastki qoringa iliq grelka qo'yish og'riqni kamaytirishi mumkin",
      "Antibiotikni o'zboshimchalik bilan ichmang — avval tahlil va shifokor ko'rigi kerak",
      "Shaxsiy gigiena qoidalariga rioya qiling"
    ],
    doctor: [
      "Siydik qilganda achishish yoki og'riq",
      "Tez-tez va oz-ozdan siydik kelishi",
      "Siydik xira, qo'lansa hidli yoki qonli bo'lsa",
      "Tungi siydik qilish tez-tez bo'lsa, yoki siydikni ushlab tura olmasangiz"
    ],
    emergency: [
      "Siydik umuman chiqmasligi, pastki qorin kuchli og'riq bilan",
      "Siydik yo'li belgilari + isitma, titroq, bel og'rig'i",
      "Siydikda ko'p miqdorda qon yoki laxta"
    ]
  },
  {
    id: "spine",
    name: "Umurtqa pog'onasi",
    latin: "Columna vertebralis",
    color: "#e8dcc0",
    focus: [0, 3, -0.8], dist: 15, side: "back",
    short: "Umurtqa pog'onasi tanani tutib turadi, harakatga imkon beradi va ichidagi orqa miyani himoya qiladi.",
    facts: [
      "33 ta umurtqadan iborat (24 tasi harakatchan)",
      "Bo'yin, ko'krak, bel, dumg'aza va dum bo'limlari bor",
      "Umurtqalar orasidagi disklar zarbani yumshatadi"
    ],
    functions: [
      "Gavdani tik ushlab turish va egilish imkonini berish",
      "Orqa miyani himoya qilish",
      "Mushaklar va paylarni mahkamlash uchun tayanch bo'lish"
    ],
    care: [
      "Bel og'rig'ining aksariyati bir necha hafta ichida o'zi o'tadi — to'liq yotib qolmang, yengil yurish foydali",
      "Og'riqli joyga iliq kompress qo'yish mumkin",
      "Og'ir yuk ko'tarishdan saqlaning; ko'targanda belni emas, oyoqlarni ishlating",
      "Uzoq o'tirganda har 30–45 daqiqada turib, yengil cho'zilish mashqlarini qiling",
      "Ish joyida stul va monitor balandligini to'g'rilang",
      "Qorin va orqa mushaklarni mustahkamlovchi mashqlar (shifokor maslahati bilan) qiling"
    ],
    doctor: [
      "Bel yoki bo'yin og'rig'i 4–6 haftadan ortiq davom etsa",
      "Og'riq oyoq yoki qo'lga tarqalsa, uvishish bo'lsa",
      "Tunda uyqudan uyg'otadigan og'riq",
      "Jarohatdan keyin boshlangan og'riq"
    ],
    emergency: [
      "Bel og'rig'i + oyoqlarning bo'shashishi yoki uvishishi",
      "Siydik yoki najasni tuta olmaslik yoki ushlab tura olmaslik",
      "Yiqilish yoki avariyadan keyin bo'yin yoki bel og'rig'i (qimirlatmasdan tez yordam chaqiring)",
      "Og'riq bilan birga yuqori isitma va sababsiz vazn yo'qotish"
    ]
  }
];
