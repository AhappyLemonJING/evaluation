(function () {
  const config = window.QUIZ_CONFIG || {};
  const archetypes = config.archetypes || {
    dawn: {
      id: "dawn",
      name: "晨曦探索者",
      shortName: "晨曦",
      tagline: "永远对下一段风景保持好奇",
      image: "./assets/dawn.jpg",
      color: "#d28b3a",
      keywords: ["乐观", "行动派", "好奇"],
      description:
        "你带着一股向前走的力量，遇到未知不是退缩，而是想看看它会带来什么。你习惯用行动消化情绪，喜欢把生活切成清晰的小目标，也在不断打开新地图的过程里确认自己还活着。你的乐观很真实，但偶尔也会因为冲得太快，把需要停留的情绪一起甩在身后。",
      strengths: ["快速启动，不卡在原地", "自带能量，能带动身边人", "把复杂的事变简单"],
      challenges: ["耐心有时不够", "容易忽略休息", "对重复和拖延很敏感"],
      scene: "清晨出发的公路，或刚刚亮起来的城市。",
      match: "愿意陪你探索，也能给你落地建议的人。",
      coreDrive: "你真正被驱动的是可能性。每当生活出现新的出口，你会本能地想先走过去看看。",
      tension: "你渴望新鲜和自由，又害怕失控，于是有时会用忙碌把不确定感盖过去。",
      stressMode: "压力大时，你会变得更急、更追求效率，把情绪压下去，直到身体先提醒你该停下来。",
      growthReminder: "先把一件事做深，比不断寻找下一件事更能积累你的力量。",
      growthActions: [
        "每周留一段不被安排的空白时间",
        "开始新计划前，先写下一个可完成的收尾标准",
        "练习把情绪说出来，而不只是用行动解决",
      ],
      attract: "会被稳定、温柔，能让你慢下来的人吸引",
      relationWatch: "太追求新鲜，可能让关系变得浅而累。",
      dailyRhythm: "你习惯用行动开启一天。早晨先列出三件最重要的事，做完一件就很快想进入下一件；你的能量来自“正在推进”，一旦卡住，就会开始搜索下一个出口。",
      decisionStyle: "面对选择，你通常先列选项，再挑一条最快能验证的路。你更相信“先动起来”，而不是等所有信息都齐了再出发。",
      conflictStyle: "你会把冲突当成待解决的问题，急着给出方案。情绪上来时语速变快，倾向用“解决”代替“共情”，说完才意识到对方要的只是被听见。",
      relationshipNeed: "你需要对方既愿意一起探索，也能在你跑得太快时把你拉回地面。安全感对你来说不是静止，而是知道回头时有人还在。",
    },
    moonlight: {
      id: "moonlight",
      name: "月光守望者",
      shortName: "月光",
      tagline: "在安静里，给出最深的安全感",
      image: "./assets/moonlight.jpg",
      color: "#2b7a78",
      keywords: ["温柔可靠", "共情力强", "沉静稳定"],
      description:
        "你不急着成为焦点，却总能在别人需要时稳稳接住。你习惯先感受再回应，情绪像月光一样安静、绵长，也常常把重要的人放在心上。你的温柔不是讨好，而是你早早就看见了别人没说出口的疲惫；正因如此，你更需要有人提醒你：你也有权利被照顾。",
      strengths: ["能接住复杂的情绪", "对亲近的人忠诚", "擅长建立长期关系"],
      challenges: ["容易过度内耗", "常把需要藏起来", "不习惯主动求助"],
      scene: "一间有暖灯的房间，或深夜无人打扰的阳台。",
      match: "能看懂你的沉默，也愿意主动走向你的人。",
      coreDrive: "你被安全感和深层连接驱动，重视稳定、被需要和长期承诺。",
      tension: "你很想被理解，却常常不愿开口；越靠近，越容易担心自己成为别人的负担。",
      stressMode: "压力下你会更沉默、更照顾别人，把自己的需要排到最后，甚至用内疚推着自己走。",
      growthReminder: "你的需要同样值得被看见；主动说出一点，关系才有机会真正靠近。",
      growthActions: [
        "每天做一件只为自己、不为别人期待的事",
        "练习在求助时说清楚具体需要",
        "允许自己偶尔让别人失望",
      ],
      attract: "会被真诚、坚定，能主动靠近你的人吸引",
      relationWatch: "过度付出，会让你忽略自己也需要被接住。",
      dailyRhythm: "你喜欢低刺激、可预期的节奏，习惯先照顾环境里每个人的感受，再处理自己的事。一天结束后，你最常复盘的是关系里某个没接住的瞬间。",
      decisionStyle: "你倾向多听、多想，等别人的需要和自己的边界都清楚后再决定。你容易把决定拖到最后，因为不想让任何一方失望。",
      conflictStyle: "冲突时你表面平静，内里已经在反复解释自己。你常选择先退一步，把“算了”咽下去，但被压住的情绪会变成内疚或长久的委屈。",
      relationshipNeed: "你最需要被主动确认：一句“我在”、一次明确的回应，都比华丽的表达更能让你安心。你更在意长期稳定，而不是短期热度。",
    },
    ember: {
      id: "ember",
      name: "熔岩创造者",
      shortName: "熔岩",
      tagline: "用热烈和直觉，把世界染成自己的颜色",
      image: "./assets/ember.jpg",
      color: "#d95646",
      keywords: ["直觉", "表达欲", "生命力"],
      description:
        "你的内在有一团烧得很旺的火，情绪、想法和创造力都很难被藏住。你习惯用真实的反应把现场点亮，也不怕把别人不敢说的部分说出来。你活得热烈，但不代表不需要被接住；当情绪退潮后，你偶尔会怀疑刚才那个张扬的自己是不是太多。",
      strengths: ["感染力强，容易点燃气氛", "不按套路出牌", "能把情绪变成作品"],
      challenges: ["情绪起伏比较大", "容易三分钟热度", "不喜欢被规则束缚"],
      scene: "夜晚的创作现场，或和一群有意思的人热聊。",
      match: "能欣赏你的锋芒，又愿意陪你落地的人。",
      coreDrive: "你被真实感、创造力和表达驱动，讨厌伪装，渴望热烈地活着。",
      tension: "你一边想要自由，一边渴望被真正接纳；情绪来得快，也容易在冷静后怀疑自己。",
      stressMode: "压力下你会更冲动、更想证明自己，可能用夸张的行动掩盖心里的不安。",
      growthReminder: "热烈很好，但真正的创造力也需要收尾和耐心。",
      growthActions: [
        "把一闪而过的点子先写下来，再挑一个完成",
        "在情绪高峰时暂停 10 分钟再做决定",
        "为重要的事设置一个最小完成版本",
      ],
      attract: "会被欣赏你的独特、又能给你空间的人吸引",
      relationWatch: "情绪峰值时说出的话，可能比你以为的更难收回。",
      dailyRhythm: "你的状态有峰值和低谷，情绪来得快也走得快。灵感经常在你最忙或最不想工作时冒出来，所以你习惯把碎片想法先记下，再挑有火候的完成。",
      decisionStyle: "你靠直觉和冲动做决定，常常在说出口后才开始整理理由。好处是快，风险是容易高估当下的热情，低估后续需要补的收尾。",
      conflictStyle: "冲突时你容易先表达，再后悔。你可能用夸张的语气争取被理解，一旦情绪过了，又很快想修复关系，但未必会承认自己刚才说得太重。",
      relationshipNeed: "你需要被热烈回应，也需要对方能接住你的高低起伏。你渴望真实的共振，但最怕冷静之后被当成“太情绪化”。",
    },
    forest: {
      id: "forest",
      name: "森屿静修者",
      shortName: "森屿",
      tagline: "在自己的节奏里，长成完整的森林",
      image: "./assets/forest.jpg",
      color: "#4f7358",
      keywords: ["独立", "清醒", "慢热"],
      description:
        "你不是不关心世界，只是需要先回到自己的秩序里。你喜欢留白，习惯观察，也常常在别人看不见的地方把问题想得很深。你的边界不是拒绝，而是在确认安全之后才慢慢让人进来；一旦你真的靠近，会比看上去更有温度。",
      strengths: ["边界清晰", "观察入微", "自我修复力强"],
      challenges: ["容易显得疏离", "想得太多、做得太少", "不擅长表达需求"],
      scene: "有树、有风、能听见自己呼吸的地方。",
      match: "尊重你的空间，也愿意慢慢靠近你的人。",
      coreDrive: "你被独立、清醒和秩序驱动，需要自己的节奏，也重视对世界的深入理解。",
      tension: "你渴望亲近，又需要距离；太近会累，太远又会担心被遗忘。",
      stressMode: "压力下你会更抽离、更冷静，把情绪封存起来，独自消化。",
      growthReminder: "边界不是墙；偶尔主动打开一扇窗，亲密不会吞掉你。",
      growthActions: [
        "每周主动分享一件正在困扰你的事",
        "把想太多的部分拆成一个最小的行动",
        "练习对亲近的人表达具体的喜欢",
      ],
      attract: "会被尊重边界、又愿意耐心等待你的人吸引",
      relationWatch: "过于独立，可能让对方觉得自己不被需要。",
      dailyRhythm: "你需要独处给自己充电，习惯把外界的噪音先放进心里慢慢过滤。你观察多、回应少，很多判断已经在沉默里完成，只是很少主动说出来。",
      decisionStyle: "你会收集足够信息，先在心里模拟几种可能，再选一个最不打扰自己的方案。你容易想得太远，把还没发生的问题提前解决一遍。",
      conflictStyle: "冲突时你更倾向抽离和冷处理。你怕被情绪裹挟，所以先退回自己的秩序，但对方可能把你的冷静读成不在乎。",
      relationshipNeed: "你需要空间，也需要对方明确表达“尊重你但不离开”。适度的距离不是疏远，而是你确认关系安全的方式。",
    },
  };

  const questions = config.questions || [
    {
      kicker: "场景 01",
      title: "周末突然空出半天，你最想做哪件事？",
      options: [
        { text: "去一个没去过的地方走走", type: "dawn" },
        { text: "窝在熟悉的地方整理思绪", type: "moonlight" },
        { text: "约朋友一起做点新鲜事", type: "ember" },
        { text: "一个人去自然里放空", type: "forest" },
      ],
    },
    {
      kicker: "关系 02",
      title: "朋友有烦恼，你通常会怎么做？",
      options: [
        { text: "先听，然后给 TA 稳稳的陪伴", type: "moonlight" },
        { text: "帮 TA 想出几条可行的办法", type: "dawn" },
        { text: "用行动让 TA 的心情好起来", type: "ember" },
        { text: "安静陪着，等 TA 想说再说", type: "forest" },
      ],
    },
    {
      kicker: "直觉 03",
      title: "面对一件不确定的事，你的第一反应更接近？",
      options: [
        { text: "先列计划，然后快速试一下", type: "dawn" },
        { text: "先观察，收集足够信息", type: "forest" },
        { text: "相信直觉，先行动起来", type: "ember" },
        { text: "退回自己的节奏，慢慢消化", type: "moonlight" },
      ],
    },
    {
      kicker: "能量 04",
      title: "哪种环境最能让你的电量回满？",
      options: [
        { text: "热闹、有新鲜感的城市", type: "dawn" },
        { text: "安静、有安全感的角落", type: "moonlight" },
        { text: "人群里，但能自由表达", type: "ember" },
        { text: "山野、海边、树木之间", type: "forest" },
      ],
    },
    {
      kicker: "反馈 05",
      title: "你更常听到的夸奖更接近哪一句？",
      options: [
        { text: "执行力强，很有方向感", type: "dawn" },
        { text: "温柔可靠，让人很安心", type: "moonlight" },
        { text: "有感染力，总能点燃气氛", type: "ember" },
        { text: "独立清醒，看问题很深", type: "forest" },
      ],
    },
    {
      kicker: "深夜 06",
      title: "半夜睡不着，你更可能在做什么？",
      options: [
        { text: "想明天要做的事", type: "dawn" },
        { text: "复盘某段关系或情绪", type: "moonlight" },
        { text: "冒出各种疯狂的新点子", type: "ember" },
        { text: "听风声，或看窗外发呆", type: "forest" },
      ],
    },
    {
      kicker: "亲密 07",
      title: "一段理想关系里，你最看重的是？",
      options: [
        { text: "一起成长，去看更大的世界", type: "dawn" },
        { text: "稳定陪伴，彼此托底", type: "moonlight" },
        { text: "真诚热烈，灵魂共振", type: "ember" },
        { text: "尊重边界，各自独立", type: "forest" },
      ],
    },
    {
      kicker: "画像 08",
      title: "如果生活是一幅画，你希望它更接近？",
      options: [
        { text: "明亮、开阔、有前进感", type: "dawn" },
        { text: "幽静、温柔、有微光", type: "moonlight" },
        { text: "浓烈、自由、有生命张力", type: "ember" },
        { text: "自然、留白、有呼吸感", type: "forest" },
      ],
    },
  ];

  const shareTitle = config.shareTitle || "隐藏人格画像";
  const sharePrefix = config.sharePrefix || "我的隐藏人格是";
  const resultKicker = config.resultKicker || "你的隐藏人格画像";

  const letterMap = ["A", "B", "C", "D"];
  const screens = document.querySelectorAll(".screen");
  const startButton = document.getElementById("start-button");
  const backButton = document.getElementById("back-button");
  const shareButton = document.getElementById("share-button");
  const restartButton = document.getElementById("restart-button");
  const progressFill = document.getElementById("progress-fill");
  const questionCount = document.getElementById("question-count");
  const questionStage = document.getElementById("question-stage");
  const questionKicker = document.getElementById("question-kicker");
  const questionTitle = document.getElementById("quiz-title");
  const optionsEl = document.getElementById("options");
  const toast = document.getElementById("toast");

  let currentQuestion = 0;
  let answers = new Array(questions.length).fill(null);
  let isLocked = false;
  let toastTimer = null;

  function activateScreen(name) {
    screens.forEach((screen) => {
      screen.classList.toggle("is-active", screen.dataset.screen === name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuestion(index) {
    const question = questions[index];
    if (!question) return;

    questionKicker.textContent = question.kicker;
    questionTitle.textContent = question.title;
    questionCount.textContent = `${index + 1} / ${questions.length}`;
    progressFill.style.width = `${(index / questions.length) * 100}%`;

    optionsEl.innerHTML = "";
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.dataset.type = option.type;
      button.setAttribute("aria-pressed", "false");

      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = letterMap[optionIndex];

      const text = document.createElement("span");
      text.className = "option-text";
      text.textContent = option.text;

      button.append(letter, text);
      button.addEventListener("click", () => handleAnswer(option.type, button));
      optionsEl.appendChild(button);
    });

    questionStage.style.animation = "none";
    void questionStage.offsetWidth;
    questionStage.style.animation = "fade-up 360ms ease both";
  }

  function handleAnswer(type, button) {
    if (isLocked) return;
    isLocked = true;

    answers[currentQuestion] = type;
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
    progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

    window.setTimeout(() => {
      isLocked = false;
      if (currentQuestion < questions.length - 1) {
        currentQuestion += 1;
        renderQuestion(currentQuestion);
      } else {
        showResult();
      }
    }, 260);
  }

  function calculateResult() {
    const counts = {};
    Object.keys(archetypes).forEach((id) => {
      counts[id] = 0;
    });
    answers.forEach((type) => {
      if (type && counts[type] !== undefined) counts[type] += 1;
    });

    const maxCount = Math.max(...Object.values(counts));
    const tiedTypes = Object.keys(counts).filter((type) => counts[type] === maxCount);

    let matchedType = tiedTypes[0];
    if (tiedTypes.length > 1) {
      matchedType = tiedTypes.reduce((latest, type) => {
        const latestIndex = answers.lastIndexOf(latest);
        const typeIndex = answers.lastIndexOf(type);
        return typeIndex > latestIndex ? type : latest;
      });
    }

    return { type: matchedType, counts };
  }

  function showResult() {
    const { type, counts } = calculateResult();
    const result = archetypes[type];

    document.getElementById("result-hero").style.backgroundImage = `linear-gradient(180deg, rgba(16, 19, 28, 0.05), rgba(16, 19, 28, 0.55)), url("${result.image}")`;
    document.getElementById("result-kicker").textContent = resultKicker;
    document.getElementById("result-kicker").style.color = result.color;
    document.getElementById("result-title").textContent = result.name;
    document.getElementById("result-tagline").textContent = result.tagline;
    document.getElementById("result-description").textContent = result.description;

    const keywords = document.getElementById("result-keywords");
    keywords.innerHTML = "";
    result.keywords.forEach((keyword) => {
      const span = document.createElement("span");
      span.className = "keyword";
      span.textContent = keyword;
      keywords.appendChild(span);
    });

    renderMeter(counts);
    renderSecondary(type, counts);
    renderDeepDive(result);
    renderBehaviorDive(result);
    renderGrowthList(result.growthActions);
    renderList("strength-list", result.strengths);
    renderList("challenge-list", result.challenges);
    document.getElementById("result-scene").textContent = result.scene;
    document.getElementById("result-match").textContent = result.match;
    document.getElementById("result-attract").textContent = result.attract;
    document.getElementById("result-watch").textContent = result.relationWatch;

    activateScreen("result");
  }

  function renderMeter(counts) {
    const meter = document.getElementById("personality-meter");
    meter.innerHTML = "";

    Object.values(archetypes).forEach((archetype) => {
      const row = document.createElement("div");
      row.className = "meter-row";

      const label = document.createElement("span");
      label.className = "meter-label";
      label.textContent = archetype.shortName;

      const track = document.createElement("div");
      track.className = "meter-track";

      const fill = document.createElement("div");
      fill.className = "meter-fill";
      fill.style.backgroundColor = archetype.color;

      const value = document.createElement("span");
      value.className = "meter-value";
      value.textContent = `${counts[archetype.id]} / ${questions.length}`;

      track.appendChild(fill);
      row.append(label, track, value);
      meter.appendChild(row);

      requestAnimationFrame(() => {
        const percentage = (counts[archetype.id] / questions.length) * 100;
        fill.style.width = `${Math.max(percentage, 3)}%`;
      });
    });
  }

  function getSecondaryType(primaryType, counts) {
    return Object.keys(counts)
      .filter((type) => type !== primaryType)
      .sort((a, b) => counts[b] - counts[a])[0];
  }

  function renderSecondary(primaryType, counts) {
    const secondaryType = getSecondaryType(primaryType, counts);
    const secondary = archetypes[secondaryType];
    const card = document.getElementById("secondary-card");

    document.getElementById("secondary-name").textContent = secondary.name;
    document.getElementById("secondary-text").textContent =
      `你的主型是「${archetypes[primaryType].name}」，而「${secondary.name}」会在压力、亲密关系或创作时悄悄出现。前者决定你的默认应对方式，后者是你更容易忽略的另一张脸。`;
    card.style.borderLeftColor = secondary.color;
  }

  function renderDeepDive(result) {
    document.getElementById("result-core-drive").textContent = result.coreDrive;
    document.getElementById("result-tension").textContent = result.tension;
    document.getElementById("result-stress").textContent = result.stressMode;
    document.getElementById("result-reminder").textContent = result.growthReminder;
  }

  function renderBehaviorDive(result) {
    document.getElementById("result-daily-rhythm").textContent = result.dailyRhythm || "";
    document.getElementById("result-decision-style").textContent = result.decisionStyle || "";
    document.getElementById("result-conflict-style").textContent = result.conflictStyle || "";
    document.getElementById("result-relationship-need").textContent = result.relationshipNeed || "";
  }

  function renderGrowthList(actions) {
    const list = document.getElementById("growth-list");
    list.innerHTML = "";
    actions.forEach((action) => {
      const li = document.createElement("li");
      li.textContent = action;
      list.appendChild(li);
    });
  }

  function renderList(id, items) {
    const list = document.getElementById(id);
    list.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2400);
  }

  async function shareResult() {
    const result = archetypes[calculateResult().type];
    const shareText = `${sharePrefix}「${result.name}」：${result.tagline}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        if (error && error.name !== "AbortError") {
          showToast("分享被取消了");
        }
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      showToast("结果已复制，去发给朋友吧");
    } catch (error) {
      showToast("复制失败，请手动分享页面");
    }
  }

  function resetQuiz() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    isLocked = false;
  }

  startButton.addEventListener("click", () => {
    resetQuiz();
    activateScreen("quiz");
    renderQuestion(0);
  });

  backButton.addEventListener("click", () => {
    if (isLocked) return;
    if (currentQuestion === 0) {
      resetQuiz();
      activateScreen("intro");
      return;
    }
    currentQuestion -= 1;
    renderQuestion(currentQuestion);
  });

  shareButton.addEventListener("click", shareResult);

  restartButton.addEventListener("click", () => {
    resetQuiz();
    activateScreen("quiz");
    renderQuestion(0);
  });

  document.addEventListener("keydown", (event) => {
    if (!document.querySelector('[data-screen="quiz"]').classList.contains("is-active")) return;
    if (isLocked) return;

    const keyIndex = ["1", "2", "3", "4"].indexOf(event.key);
    if (keyIndex !== -1) {
      const option = optionsEl.children[keyIndex];
      if (option) option.click();
    }

    if (event.key === "ArrowLeft" && currentQuestion > 0) {
      currentQuestion -= 1;
      renderQuestion(currentQuestion);
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
})();
