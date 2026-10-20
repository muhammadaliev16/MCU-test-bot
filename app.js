
const questions = [
  {question:"Iron Manning haqiqiy ismi nima?",options:["Steve Rogers","Tony Stark","Bruce Banner","Peter Parker"],correct:1},
  {question:"Thorning ukasi kim?",options:["Loki","Heimdall","Odin","Hulk"],correct:0},
  {question:"Thanos nechta Infinity Stone yig‘gan?",options:["4 ta","5 ta","6 ta","7 ta"],correct:2},
  {question:"Captain America qalqoni qaysi metalldan yasalgan?",options:["Temir","Oltin","Uru","Vibranium"],correct:3},
  {question:"MCUda Spider-Man rolini kim ijro etadi?",options:["Tom Holland","Chris Evans","Tom Hiddleston","Chris Hemsworth"],correct:0},
  {question:"Black Pantherning vatani qayer?",options:["Asgard","Wakanda","Sokovia","Titan"],correct:1},
  {question:"Hulkning asl ismi nima?",options:["Clint Barton","James Rhodes","Bruce Banner","Sam Wilson"],correct:2},
  {question:"Doctor Strange avval qanday kasb egasi bo‘lgan?",options:["Muhandis","O‘qituvchi","Uchuvchi","Jarroh"],correct:3},
  {question:"Guardians of the Galaxy jamoasidagi daraxtsimon qahramon kim?",options:["Groot","Rocket","Drax","Mantis"],correct:0},
  {question:"Avengers: Endgame filmida Thanosni mag‘lub etishda hal qiluvchi ishni kim qiladi?",options:["Hawkeye","Tony Stark","Loki","Nick Fury"],correct:1},
  {question:"Iron Man birinchi MCU filmida qaysi yilda paydo bo‘lgan?",options:["2005","2006","2008","2012"],correct:2},
  {question:"Avengers jamoasi birinchi marta qaysi filmda birlashadi?",options:["Iron Man 2","Thor","Civil War","The Avengers (2012)"],correct:3},
  {question:"Natasha Romanoff qaysi qahramon nomi bilan tanilgan?",options:["Black Widow","Scarlet Witch","Wasp","Captain Marvel"],correct:0},
  {question:"Hawkeye qaysi quroldan foydalanadi?",options:["Bolg‘a","Kamon","Qalqon","Sehrli uzuk"],correct:1},
  {question:"Captain America nomi bilan tanilgan qahramon kim?",options:["Bucky Barnes","Sam Wilson","Steve Rogers","Tony Stark"],correct:2},
  {question:"Infinity Stones soni nechta?",options:["3","4","5","6"],correct:3},
  {question:"Tesseract ichida qaysi tosh bor?",options:["Space Stone","Time Stone","Mind Stone","Soul Stone"],correct:0},
  {question:"Visionning peshonasida qaysi tosh bo‘lgan?",options:["Reality Stone","Mind Stone","Power Stone","Time Stone"],correct:1},
  {question:"Time Stone qaysi buyum ichida saqlangan?",options:["Tesseract","Orb","Eye of Agamotto","Loki tayoqchasi"],correct:2},
  {question:"Soul Stone qayerda joylashgan edi?",options:["Asgard","Wakanda","Knowhere","Vormir"],correct:3},
  {question:"Black Pantherning haqiqiy ismi nima?",options:["T’Challa","M’Baku","N’Jadaka","T’Chaka"],correct:0},
  {question:"Wakandaning mashhur metali nima?",options:["Adamantium","Vibranium","Titan","Palladiy"],correct:1},
  {question:"Ant-Manning haqiqiy ismi nima?",options:["Hank Pym har doim","Darren Cross","Scott Lang","Luis"],correct:2},
  {question:"Wasp rolini MCUda kim ijro etadi?",options:["Janet Van Dyne faqat","Natasha Romanoff","Shuri","Hope van Dyne"],correct:3},
  {question:"War Machine kim?",options:["James Rhodes","Bucky Barnes","Sam Wilson","Happy Hogan"],correct:0},
  {question:"Falconning haqiqiy ismi nima?",options:["Clint Barton","Sam Wilson","Scott Lang","Peter Quill"],correct:1},
  {question:"Winter Soldierning asl ismi nima?",options:["Steve Rogers","Tony Stark","Bucky Barnes","Phil Coulson"],correct:2},
  {question:"Nick Fury qaysi tashkilot bilan bog‘liq?",options:["Hydra","TVA","Ten Rings","S.H.I.E.L.D."],correct:3},
  {question:"Ultronni yaratishda qaysi ikki qahramon muhim rol o‘ynagan?",options:["Tony Stark va Bruce Banner","Thor va Loki","Peter Parker va Strange","Natasha va Clint"],correct:0},
  {question:"Wanda Maximoffning superqahramon nomi nima?",options:["Photon","Scarlet Witch","Wasp","Echo"],correct:1},
  {question:"Captain Marvelning haqiqiy ismi nima?",options:["Monica Rambeau","Jane Foster","Carol Danvers","Kamala Khan"],correct:2},
  {question:"Shang-Chi qaysi qurollar bilan bog‘liq?",options:["Mjolnir","Vibranium qalqoni","Web-Shooters","Ten Rings"],correct:3},
  {question:"Loki serialida TVA nima bilan shug‘ullanadi?",options:["Vaqt chiziqlarini nazorat qiladi","Wakandani boshqaradi","Asgardni himoya qiladi","Infinity Stones yasaydi"],correct:0},
  {question:"WandaVision serialida voqealar qaysi shaharda kechadi?",options:["New York","Westview","London","Sokovia"],correct:1},
  {question:"Moon Knightning asl ismi nima?",options:["Matt Murdock","Marc Spector","Frank Castle","Luke Cage"],correct:1},
  {question:"Daredevilning asosiy kasbi nima?",options:["Shifokor","Olim","Advokat","Uchuvchi"],correct:2},
  {question:"Ms. Marvelning haqiqiy ismi nima?",options:["Kate Bishop","Yelena Belova","Monica Rambeau","Kamala Khan"],correct:3},
  {question:"She-Hulkning asl ismi nima?",options:["Jennifer Walters","Pepper Potts","Jane Foster","Maria Hill"],correct:0},
  {question:"What If...? serialida asosan nima ko‘rsatiladi?",options:["Faqat tarixiy voqealar","Muqobil voqealar","Faqat Thanos tarixi","Faqat Yer janglari"],correct:1},
  {question:"Star-Lordning haqiqiy ismi nima?",options:["Peter Parker","Peter Wisdom","Peter Quill","Pietro Maximoff"],correct:2},
  {question:"Gamoraning asrab olgan otasi kim?",options:["Ego","Odin","The Collector","Thanos"],correct:3},
  {question:"Nebula kimning singlisi?",options:["Gamora","Wanda","Natasha","Shuri"],correct:0},
  {question:"Rocketning eng yaqin do‘stlaridan biri kim?",options:["Drax","Groot","Loki","Thor"],correct:1},
  {question:"Thor: Ragnarok filmida Hela kim?",options:["Thorning onasi","Loki qizi","Thorning opasi","Thorning turmush o‘rtog‘i"],correct:2},
  {question:"Asgardning hukmdori sifatida tanilgan Thorning otasi kim?",options:["Heimdall","Valkyrie","Frigga","Odin"],correct:3},
  {question:"Doctor Strangega sehrni kim o‘rgatadi?",options:["The Ancient One","Nick Fury","Wongning o‘zi boshidan","Loki"],correct:0},
  {question:"Dormammu qaysi filmda paydo bo‘ladi?",options:["Thor","Doctor Strange","Ant-Man","Iron Man"],correct:1},
  {question:"Spider-Man: Far From Home filmidagi yovuz qahramon kim?",options:["Vulture","Green Goblin","Mysterio","Kingpin"],correct:2},
  {question:"Peter Parkerning maktabdagi yaqin do‘sti kim?",options:["Flash Thompson","Happy Hogan","Nedning otasi","Ned Leeds"],correct:3},
  {question:"Spider-Man: Homecoming filmida Vulture kim?",options:["Adrian Toomes","Quentin Beck","Norman Osborn","Otto Octavius"],correct:0},
  {question:"Iron Man 3 filmidagi asosiy dushman kim?",options:["Justin Hammer","Aldrich Killian","Obadiah Stane","Whiplash"],correct:1},
  {question:"Black Panther filmidagi Killmongerning haqiqiy ismi nima?",options:["T’Challa","M’Baku","Erik Stevens","T’Chaka"],correct:2},
  {question:"Shuri kimning singlisi?",options:["M’Baku","Okoye","Nakia","T’Challa"],correct:3},
  {question:"T’Challaning otasi kim?",options:["T’Chaka","Zuri","N’Jobu","Odin"],correct:0},
  {question:"Captain America: Civil War filmidagi mojaro nimaga bog‘liq?",options:["Asgard taxti","Sokovia kelishuvlari","Wakanda urushi","TVA qarori"],correct:1},
  {question:"Tony Starkning ota-onasi kimlar?",options:["Hank va Janet Pym","Odin va Frigga","Howard va Maria Stark","Ego va Meredith"],correct:2},
  {question:"Avengers: Infinity War filmida Thanosning maqsadi nima?",options:["Yerga hukmronlik qilish","Asgardni yo‘q qilish","Wakandani egallash","Koinotdagi hayotning yarmini yo‘q qilish"],correct:3},
  {question:"Endgame filmida Mjolnirni kim ko‘taradi?",options:["Steve Rogers","Tony Stark","Clint Barton","Bruce Banner"],correct:0},
  {question:"Endgame filmida Tony Stark qanday ish qiladi?",options:["Thanos bilan ittifoq tuzadi","Infinity Stonesdan foydalanadi","Asgardga ketadi","TVAni boshqaradi"],correct:1},
  {question:"Iron Manning birinchi zirhi qayerda yaratilgan?",options:["Stark Towerda","Wakandada","Asirlikdagi g‘orda","Asgardda"],correct:2},
  {question:"JARVIS kim?",options:["Asgard askari","Wakanda olimi","Avengers rahbari","Tony Starkning sun’iy intellekt yordamchisi"],correct:3},
  {question:"Bifrost nima?",options:["Olamlar orasida sayohat qilish ko‘prigi","Infinity Stone","Iron Man zirhi","Wakanda metali"],correct:0},
  {question:"Loki qanday xususiyati bilan mashhur?",options:["Nishonga olish","Ayyorlik va sehr","Vibranium yaratish","Hulkka aylanish"],correct:1},
  {question:"The Marvels filmida Carol Danvers bilan kimlar qatnashadi?",options:["Wanda va Natasha","Shuri va Okoye","Monica Rambeau va Kamala Khan","Yelena va Kate Bishop"],correct:2},
  {question:"Black Widow filmida Yelena Belova kim?",options:["Tony Starkning qizi","Wanda shogirdi","Peter Parkerning do‘sti","Natashaning singlidek ulg‘aygan hamkasbi"],correct:3},
  {question:"Ant-Man rolini kim ijro etadi?",options:["Paul Rudd","Chris Pratt","Paul Bettany","Mark Ruffalo"],correct:0},
  {question:"Quantumania filmida Ant-Man qayerga boradi?",options:["Asgardga","Quantum Realmga","Titan sayyorasiga","Knowherega"],correct:1},
  {question:"Kang bilan bog‘liq asosiy mavzu nima?",options:["Vibranium","Ten Rings","Vaqt va muqobil olamlar","Sehrli bolg‘a"],correct:2},
  {question:"Captain America: The Winter Soldier filmida yashirin tashkilot qaysi?",options:["TVA","Ravagers","Ten Rings","Hydra"],correct:3},
  {question:"Captain Marvel filmidagi kosmik irq qaysi?",options:["Kree","Asgardliklar","Eternals","Chitauri"],correct:0},
  {question:"Skrullar qanday qobiliyatga ega?",options:["Vaqtni to‘xtatish","Boshqalarning qiyofasiga kirish","Infinity Stones yaratish","Fikr o‘qishning mutlaq qobiliyati"],correct:1},
  {question:"Guardians of the Galaxy Vol. 2 filmida Peter Quillning otasi kim?",options:["Thanos","Odin","Ego","The Collector"],correct:2},
  {question:"Thor: Love and Thunder filmida Mjolnirni kim ko‘taradi?",options:["Valkyrie","Sif","Hela","Jane Foster"],correct:3},
  {question:"Black Panther: Wakanda Forever filmida Namor qaysi xalqning yetakchisi?",options:["Talokan","Kree","Chitauri","Ravagers"],correct:0},
  {question:"The Falcon and the Winter Soldier serialida Sam Wilson qaysi rolni qabul qiladi?",options:["Iron Man","Captain America","Black Panther","Hawkeye"],correct:1},
  {question:"Agatha All Along serialida asosiy qahramon kim?",options:["Natasha Romanoff","Carol Danvers","Agatha Harkness","Jane Foster"],correct:2},
  {question:"Fantastic Four jamoasining olim yetakchisi kim?",options:["Johnny Storm","Ben Grimm","Victor von Doom","Reed Richards"],correct:3},
  {question:"Deadpool & Wolverine filmidagi ikki asosiy qahramon kim?",options:["Deadpool va Wolverine","Iron Man va Hulk","Thor va Loki","Peter Parker va Venom"],correct:0},
  {question:"Wolverine qaysi qobiliyati bilan mashhur?",options:["Sehrli bolg‘a","Tez tiklanish va tirnoqlar","Vaqt toshini boshqarish","Ko‘rinmaslik"],correct:1},
  {question:"Avengers: Doomsday filmida Doctor Doom rolini kim ijro etishi e’lon qilingan?",options:["Chris Evans","Tom Holland","Robert Downey Jr.","Mark Ruffalo"],correct:2},
  {question:"Thorning mashhur bolg‘asi nima deb ataladi?",options:["Storm","Gungnir","Ten Rings","Mjolnir"],correct:3},
  {question:"Avengers: Age of Ultron filmida yangi android qahramon kim?",options:["Vision","Drax","Falcon","Mysterio"],correct:0},
  {question:"Peter Quill qaysi taxallus bilan tanilgan?",options:["Rocket","Star-Lord","Daredevil","War Machine"],correct:1},
  {question:"Thanosning tug‘ilgan dunyosi nima?",options:["Vormir","Asgard","Titan","Xandar"],correct:2},
  {question:"Loki asosan qaysi xalqdan?",options:["Kree","Skrull","Celestial","Frost Giant"],correct:3},
  {question:"Avengers filmida Yerga hujum qilgan begona qo‘shin kimlarga tegishli?",options:["Chitauri","Kree","Skrull","Ravagers"],correct:0},
  {question:"Guardians of the Galaxy filmidagi Drax qanday xususiyati bilan tanilgan?",options:["Sehrgar","Jangchi","Shifokor","Robot"],correct:1},
  {question:"Wong kim?",options:["Wakanda qiroli","Asgard shahzodasi","Sehrgar va Doctor Strangening ittifoqchisi","Hydra rahbari"],correct:2},
  {question:"Peggy Carter kim bilan yaqin munosabatda bo‘lgan?",options:["Tony Stark","Bruce Banner","Thor","Steve Rogers"],correct:3},
  {question:"Shang-Chining otasi kim?",options:["Wenwu","Odin","Ego","Thanos"],correct:0},
  {question:"Eternalsni yaratgan ulkan kosmik mavjudotlar kim?",options:["Chitauri","Celestials","Kree","Frost Giants"],correct:1},
  {question:"Hawkeye serialida Kate Bishopning asosiy mahorati nima?",options:["Sehr","Zirh yasash","Kamonchilik","Vaqt sayohati"],correct:2},
  {question:"Spider-Man: No Way Home filmida Peterning maxfiy kimligini kimlar eslab qoladi?",options:["Butun dunyo","Faqat Avengers","Faqat maktabdoshlari","Oddiy dunyodagi hech kim, sehrdan keyin"],correct:3},
  {question:"Avengers jamoasining birinchi filmidagi asosiy dushman kim?",options:["Loki","Ultron","Thanosning o‘zi","Hela"],correct:0},
  {question:"Thor: Ragnarok filmida Hulk qayerda jang qiladi?",options:["Wakanda","Sakaar","Titan","Vormir"],correct:1},
  {question:"Black Widowning otish va josuslik bo‘yicha tayyorgarligi qayerda o‘tgan?",options:["Avengers Tower","Wakanda","Red Room","Kamar-Taj"],correct:2},
  {question:"Infinity Gauntlet nima uchun ishlatiladi?",options:["Bifrostni ochish","Zirh yasash","Vaqt chizig‘ini kuzatish","Infinity Stonesni birlashtirish"],correct:3},
  {question:"MCUdagi birinchi Iron Man filmining rejissyori kim?",options:["Jon Favreau","James Gunn","Joss Whedon","Taika Waititi"],correct:0},
  {question:"Avengers: Endgame filmida vaqt bo‘ylab sayohat rejasi kimning g‘oyasi bilan muvaffaqiyatli rivojlanadi?",options:["Nick Fury","Tony Stark","Loki","Mysterio"],correct:1},
  {question:"Doctor Strange qaysi joyda sehr o‘rganadi?",options:["Avengers Tower","Stark Industries","Kamar-Taj","Vormir"],correct:2},
  {question:"MCUda Red Skull qaysi toshni qo‘riqlaydi?",options:["Space Stone","Mind Stone","Power Stone","Soul Stone"],correct:3}
];

const $ = id => document.getElementById(id);

let current = 0;
let score = 0;
let selected = false;
let finished = false;

const telegram = window.Telegram?.WebApp;
telegram?.ready();
telegram?.expand();

function renderQuestion() {
  selected = false;
  const q = questions[current];

  $("questionNumber").textContent =
    `${current + 1}-savol / ${questions.length}`;

  $("progressText").textContent =
    `${score} / ${questions.length} ball`;

  $("progressBar").style.width =
    `${current / questions.length * 100}%`;

  $("question").textContent = q.question;
  $("feedback").textContent = "";
  $("nextBtn").disabled = true;
  $("nextBtn").textContent =
    current === questions.length - 1
      ? "Natijani ko‘rish"
      : "Keyingi savol →";

  const answers = $("answers");
  answers.replaceChildren();

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent =
      `${String.fromCharCode(65 + index)}) ${option}`;

    button.addEventListener("click", () => chooseAnswer(index));
    answers.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (selected || finished) return;
  selected = true;

  const q = questions[current];
  const buttons = [...$("answers").children];

  buttons.forEach(button => button.disabled = true);
  buttons[q.correct].classList.add("correct");

  if (index === q.correct) {
    score++;
    $("feedback").textContent = "✅ To‘g‘ri javob! +1 ball";
  } else {
    buttons[index].classList.add("wrong");
    $("feedback").textContent =
      `❌ Noto‘g‘ri. To‘g‘ri javob: ${String.fromCharCode(65 + q.correct)}) ${q.options[q.correct]}`;
  }

  $("progressText").textContent =
    `${score} / ${questions.length} ball`;

  $("nextBtn").disabled = false;
}

function showResult() {
  finished = true;
  $("quiz").classList.add("hidden");
  $("result").classList.remove("hidden");

  const percent = Math.round(score / questions.length * 100);

  $("score").textContent =
    `Natijangiz: ${score} / ${questions.length} ball`;

  $("percent").textContent =
    `To‘g‘ri javoblar: ${percent}%`;

  $("progressBar").style.width = "100%";
}

$("nextBtn").addEventListener("click", () => {
  if (!selected || finished) return;

  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
});

$("restartBtn").addEventListener("click", () => {
  current = 0;
  score = 0;
  selected = false;
  finished = false;

  $("result").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  renderQuestion();
});

$("sendBtn").addEventListener("click", () => {
  if (!finished) return;

  if (telegram?.initData) {
    telegram.sendData(JSON.stringify({
      type: "quiz_result",
      score,
      total: questions.length,
      percent: Math.round(score / questions.length * 100)
    }));
  } else {
    alert("Natijani yuborish uchun testni Telegram ichida oching.");
  }
});

renderQuestion();
