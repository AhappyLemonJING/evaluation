(function () {
  const config = window.QUIZ_CONFIG || {};
  const archetypes = config.archetypes || {
    dawn: {
      id: "dawn",
      name: "晨曦探索者",
      shortName: "晨曦",
      tagline: "永远对下一段风景保持好奇",
      image: "./assets/晨曦探索者.jpg",
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
      image: "./assets/月光守望者.jpg",
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
      image: "./assets/熔岩创造者.jpg",
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
      image: "./assets/森屿静修者.jpg",
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
    ocean: {
      id: "ocean",
      name: "深海洞察者",
      shortName: "深海",
      tagline: "看得很深，也藏得很深，安静却从不肤浅",
      image: "./assets/深海洞察者.jpg",
      color: "#3c6e8f",
      keywords: ["洞察", "内省", "理性", "低调"],
      description:
        "你不急着回应世界，因为你更想知道事情为什么发生。你的情绪不是没有，而是先沉到很深的地方，慢慢析出清晰的部分。你擅长看见别人没说的逻辑，也不喜欢用热闹证明存在；真正接近你以后，会知道那层平静下面藏着很厚的温柔。",
      strengths: ["能看见深层逻辑", "情绪稳定且自控", "有独立思考的密度"],
      challenges: ["容易过度分析", "不愿暴露脆弱", "社交后需要长时间恢复"],
      scene: "深夜的书桌、无人打扰的海边，或一间安静的美术馆。",
      match: "尊重你的沉默，也愿意陪你深聊的人。",
      coreDrive: "你被真相、深度和内在秩序驱动，宁可想清楚一点，也不想随波逐流。",
      tension: "你渴望被理解，又害怕被看穿；于是常常把重要的话留到只有自己时才说。",
      stressMode: "压力下你会更抽离、更理性，用分析代替感受，把自己封闭起来独自消化。",
      growthReminder: "说出一半，比想透全部更能连接别人。",
      growthActions: [
        "练习把结论外的一半感受也说出来",
        "给重要的人一个“我在想什么”的预告",
        "允许自己在没想明白时先寻求陪伴",
      ],
      attract: "会被有分寸、有想法、不喧哗的人吸引",
      relationWatch: "过度保留，会让对方觉得走不进你。",
      dailyRhythm: "你需要安静和深度来恢复能量，习惯把注意力长时间沉进一个问题里。你观察多、表达少，但很多判断其实已经在你心里完成，只等一个合适的时机说出口。",
      decisionStyle: "你会反复推演因果，先弄清楚变量和代价，再做决定。这让你少犯错，也容易因为“还没想透”而迟迟不动。",
      conflictStyle: "冲突时你倾向抽离和冷处理，先退回自己的秩序里分析。你怕被情绪裹挟，但对方可能把你的冷静读成疏远。",
      relationshipNeed: "你需要对方尊重你的精神空间，也愿意在沉默之后继续靠近。适度的距离不是拒绝，而是你确认安全的方式。",
    },
    echo: {
      id: "echo",
      name: "回声共鸣者",
      shortName: "回声",
      tagline: "你的心是一间共鸣室，别人的情绪到了这里才被听见",
      image: "./assets/回声共鸣者.jpg",
      color: "#9b6d8a",
      keywords: ["敏感", "艺术感", "共情", "表达细腻"],
      description:
        "你对情绪、氛围和语言有一种天生的敏感，常常别人还没说清，你已经听见了话里的那点颤抖。你喜欢美，也擅长把模糊的感受翻译成让人心头一动的句子。你的共情让你特别容易接近别人，但也容易把太多别人的情绪背到自己身上。",
      strengths: ["对情绪和文字很敏锐", "能说出别人说不出口的话", "有独特的审美"],
      challenges: ["容易被情绪感染", "容易理想化他人", "需要大量时间消化感受"],
      scene: "循环一首歌的房间，或写点什么、看部电影的深夜。",
      match: "愿意陪你交换真实感受，也尊重你的敏感的人。",
      coreDrive: "你被共鸣、美与真实表达驱动，希望生活里有能被记住的瞬间。",
      tension: "你渴望共振，又怕情绪太满会淹没自己；于是常在靠近与退回之间摆动。",
      stressMode: "压力下你会更敏感，容易把所有感受都吸收进来，最后用沉默或退避保护自己。",
      growthReminder: "敏感不是负担，但你要学会给自己装一扇能关上的门。",
      growthActions: [
        "每天留出 15 分钟，只处理和确认自己的情绪",
        "在接住别人前先问自己今天有没有余量",
        "把模糊的感受写成一个具体的名字",
      ],
      attract: "会被温柔、能听懂言外之意的人吸引",
      relationWatch: "过度共情，会让你分不清别人的情绪和自己的。",
      dailyRhythm: "你的感受像回音一样容易被触发，适合有留白、有节奏感的生活。你需要先安放好自己的情绪，才能不把外界的噪音都收进心里。",
      decisionStyle: "你跟着感受和氛围走，常常先被某件事打动，再寻找合理性。你容易在心动时决定，在冷静后犹豫。",
      conflictStyle: "冲突时你会敏锐地捕捉对方情绪，也可能因为太怕伤人而回避直接表达。你常用试探代替质问，最后委屈只能自己消化。",
      relationshipNeed: "你需要被准确回应，也需要对方能读懂你没有说出口的部分。对你来说，被理解比被夸赞更重要。",
    },
    summit: {
      id: "summit",
      name: "峰顶决断者",
      shortName: "峰顶",
      tagline: "目标清楚，方向感强，天生知道该往哪里走",
      image: "./assets/峰顶决断者.jpg",
      color: "#657a8a",
      keywords: ["目标感", "决断", "领导力", "清醒"],
      description:
        "你习惯先看见终点，再把路拆出来。面对混乱，你比大多数人更快做出判断；面对压力，你也能暂时把情绪放到一边，先把局面稳住。你不是冷漠，只是太清楚责任和时间都不等人。只是你也要记得，抵达山顶不是唯一值得过的日子。",
      strengths: ["方向明确，行动果断", "抗压，能稳住局面", "擅长拆解和推进"],
      challenges: ["容易对自己太严", "对低效和犹豫缺乏耐心", "把结果看得太重"],
      scene: "高处俯瞰城市，或一场需要拿主意的会议。",
      match: "能并肩解决问题，也敢提醒你休息的人。",
      coreDrive: "你被目标、责任和有效成果驱动，喜欢把不确定变成可执行的路径。",
      tension: "你想赢，又怕一旦慢下来就显得不够好；于是总把休息排在所有任务之后。",
      stressMode: "压力下你会更控制、更果断、更少表露情绪，但也更容易把疲惫扛成身体信号。",
      growthReminder: "允许过程不如计划，别只把抵达当成价值。",
      growthActions: [
        "每周安排一次完全不为目标的休息",
        "练习把“做得不够好”改成“我正在推进”",
        "主动向信任的人说出一个担忧",
      ],
      attract: "会被清醒、有担当、能共同成长的人吸引",
      relationWatch: "太聚焦目标，可能让对方觉得不被看见。",
      dailyRhythm: "你喜欢有明确优先级的生活，早晨先锁定最重要的任务，再把精力一块块投进去。没有方向感会让你焦虑，所以你需要阶段性的目标把一天撑起来。",
      decisionStyle: "你凭目标和风险做判断，快而果断。你容易先想“怎么做到”，再补上“我到底想不想”，所以偶尔会忽略自己的真实感受。",
      conflictStyle: "冲突时你会直接指出问题，推动解决。你怕浪费时间，但对方可能觉得你只谈事情、不谈情绪，少了被理解的缓冲。",
      relationshipNeed: "你需要对方尊重你的目标，也愿意在你疲惫时把你从任务里拉出来。对你来说，并肩前进比甜言蜜语更像承诺。",
    },
    beacon: {
      id: "beacon",
      name: "灯塔理想者",
      shortName: "灯塔",
      tagline: "相信意义会发光，也愿意为重要的人照亮",
      image: "./assets/灯塔理想者.jpg",
      color: "#c19a3f",
      keywords: ["理想主义", "温暖", "意义感", "引路"],
      description:
        "你不满足于只过好自己的日子，总想让身边的人因为你的存在而更有一点方向。你相信意义，也愿意为相信的事付出，常常在别人迷路时给出一束不刺眼的光。你的温暖很有力量，但也会让你习惯性地把别人的重量扛到自己肩上。",
      strengths: ["有长期视野，不易被短期利益带走", "能给别人方向和勇气", "对相信的事很坚持"],
      challenges: ["容易理想化现实", "会揽过多责任", "当意义感低落时容易耗竭"],
      scene: "清晨的窗口、一群人的共同理想，或一次走心的长谈。",
      match: "能珍惜你的付出，也提醒你为自己保留灯油的人。",
      coreDrive: "你被意义、价值和助人成长驱动，希望自己做的事能照亮更多人。",
      tension: "你总想照亮别人，却怕自己不够亮，于是很难开口索取支持。",
      stressMode: "压力下你会扛起更多责任，把自己的疲惫藏进“我可以”，直到某一刻突然觉得很空。",
      growthReminder: "灯塔也要靠岸维护；你不是别人的永动机。",
      growthActions: [
        "每天留出一段不服务任何人的时间",
        "练习在被需要时说“我需要先照顾自己”",
        "把大意义拆成一个今天能完成的小行动",
      ],
      attract: "会被真诚、有信念、愿意一起做点事的人吸引",
      relationWatch: "过度付出，可能让你忘了关系也需要双向照见。",
      dailyRhythm: "你的能量来自价值和连接，喜欢让一天有事可做、有人可回应。你会先照顾重要的目标，也容易把最后一点精力分给需要帮助的人。",
      decisionStyle: "你会先问“这有什么意义”“会影响到谁”，再决定要不要行动。这让你有方向，也容易因为想兼顾所有人而拖慢自己。",
      conflictStyle: "冲突时你希望守住关系，也守住在意的事。你常先讲道理、讲共同目标，但情绪被压得太快，可能让对方觉得你没有真的在意当下的委屈。",
      relationshipNeed: "你需要被理解和被珍惜，也需要对方看到你付出背后的疲惫。对你来说，关系是共同走向某个有意义的方向，而不是只靠一个人照亮。",
    },
  };

  const questions = config.questions || [
    {
      kicker: "场景 01",
      title: "周末突然空出半天，你最想做哪件事？",
      options: [
        { text: "去一个没去过的地方走走", type: "dawn" },
        { text: "在家整理房间，或给重要的人做顿饭", type: "moonlight" },
        { text: "约朋友做点能大笑的新鲜事", type: "ember" },
        { text: "一个人去自然里放空", type: "forest" },
      ],
    },
    {
      kicker: "未来 02",
      title: "如果必须给未来的自己留一句话，你会写什么？",
      options: [
        { text: "请继续相信那些让你心动的瞬间", type: "echo" },
        { text: "目标已经在那里，别绕远路", type: "summit" },
        { text: "去做对别人也有意义的事", type: "beacon" },
        { text: "先理解自己，再回应世界", type: "ocean" },
      ],
    },
    {
      kicker: "关系 03",
      title: "朋友有烦恼，你通常会怎么做？",
      options: [
        { text: "先听，然后给 TA 稳稳的陪伴", type: "moonlight" },
        { text: "帮 TA 把问题拆成可执行的小步骤", type: "dawn" },
        { text: "陪 TA 一起梳理没说出口的那部分", type: "ocean" },
        { text: "用一句准确的话让 TA 觉得被理解了", type: "echo" },
      ],
    },
    {
      kicker: "直觉 04",
      title: "面对一件不确定的事，你的第一反应更接近？",
      options: [
        { text: "相信直觉，先动手制造一个版本", type: "ember" },
        { text: "退后观察，等看清再进入", type: "forest" },
        { text: "先定目标，再安排资源", type: "summit" },
        { text: "先确认这件事值不值得投入", type: "beacon" },
      ],
    },
    {
      kicker: "能量 05",
      title: "哪种环境最能让你的电量回满？",
      options: [
        { text: "安静、有安全感的房间", type: "moonlight" },
        { text: "有人群、有表达空间的现场", type: "ember" },
        { text: "有一群共同相信某件事的人", type: "beacon" },
        { text: "有新鲜感、可以四处走动的地方", type: "dawn" },
      ],
    },
    {
      kicker: "独处 06",
      title: "你最常在心里对自己说什么？",
      options: [
        { text: "我需要一点自己的空间", type: "forest" },
        { text: "有些话不必说，先想清楚", type: "ocean" },
        { text: "我感受到的，比说出来的更多", type: "echo" },
        { text: "先把最重要的那件事做完", type: "summit" },
      ],
    },
    {
      kicker: "亲密 07",
      title: "一段理想关系里，你最看重的是？",
      options: [
        { text: "一起成长，去看更大的世界", type: "dawn" },
        { text: "有深度，能交换真实的想法", type: "ocean" },
        { text: "目标一致，能并肩前进", type: "summit" },
        { text: "稳定陪伴，彼此托底", type: "moonlight" },
      ],
    },
    {
      kicker: "画像 08",
      title: "如果生活是一幅画，你希望它更接近？",
      options: [
        { text: "浓烈、自由、有生命张力", type: "ember" },
        { text: "朦胧、抒情、有很多留白", type: "echo" },
        { text: "温暖、明亮、有远方和光", type: "beacon" },
        { text: "自然、清冷、有呼吸感", type: "forest" },
      ],
    },
    {
      kicker: "深夜 09",
      title: "半夜睡不着，你更可能在做什么？",
      options: [
        { text: "列明天要做的事", type: "dawn" },
        { text: "听夜声，看窗外发呆", type: "forest" },
        { text: "反复想起某句歌词或某段话", type: "echo" },
        { text: "想一些“人应该怎样活”的问题", type: "beacon" },
      ],
    },
    {
      kicker: "情绪 10",
      title: "面对批评，你通常会先？",
      options: [
        { text: "心里难受，先消化情绪", type: "moonlight" },
        { text: "分析对方为什么这么说", type: "ocean" },
        { text: "判断哪里有用，直接吸收或反驳", type: "summit" },
        { text: "先表达自己的感受，再讨论", type: "ember" },
      ],
    },
    {
      kicker: "计划 11",
      title: "长假前，你更期待怎样的计划？",
      options: [
        { text: "排满想去的几个地方", type: "dawn" },
        { text: "和亲近的人窝在一起", type: "moonlight" },
        { text: "留大量空白，看心情安排", type: "forest" },
        { text: "去一个能安静思考的地方", type: "ocean" },
      ],
    },
    {
      kicker: "协作 12",
      title: "如果要你临时组织一场活动，你的优势更接近？",
      options: [
        { text: "现场气氛和节奏交给你", type: "ember" },
        { text: "你能设计让人记住的细节", type: "echo" },
        { text: "你能快速分工、推进流程", type: "summit" },
        { text: "你能说清楚大家为什么要一起做", type: "beacon" },
      ],
    },
    {
      kicker: "选择 13",
      title: "你更愿意把时间投资在哪里？",
      options: [
        { text: "学习新技能、打开新领域", type: "dawn" },
        { text: "做一件能表达自己的作品", type: "ember" },
        { text: "理解自己或某个复杂问题", type: "ocean" },
        { text: "做一件长期有社会价值的事", type: "beacon" },
      ],
    },
    {
      kicker: "社交 14",
      title: "朋友约你时，你通常如何决定去不去？",
      options: [
        { text: "看对方是否真的需要你", type: "moonlight" },
        { text: "看自己当天的能量余量", type: "forest" },
        { text: "看当下有没有想见面的感觉", type: "echo" },
        { text: "看是否打乱你的安排，值得不值得", type: "summit" },
      ],
    },
    {
      kicker: "决策 15",
      title: "你认为自己的决策风格更接近？",
      options: [
        { text: "先快速试错，再调整", type: "dawn" },
        { text: "先看目标和风险，再行动", type: "summit" },
        { text: "先听直觉和情绪信号", type: "echo" },
        { text: "先考虑对关系的影响", type: "moonlight" },
      ],
    },
    {
      kicker: "价值 16",
      title: "哪一种“被浪费的时间”你最能接受？",
      options: [
        { text: "为一个突然的灵感熬夜", type: "ember" },
        { text: "为一件短期没回报但重要的事坚持", type: "beacon" },
        { text: "什么也不做，只待着", type: "forest" },
        { text: "长时间思考一个没有答案的问题", type: "ocean" },
      ],
    },
    {
      kicker: "印象 17",
      title: "你希望朋友记住你的什么？",
      options: [
        { text: "总能把事情往前推", type: "dawn" },
        { text: "总在需要时接住别人", type: "moonlight" },
        { text: "总能把普通日子点亮", type: "ember" },
        { text: "总能看到别人说不出口的情绪", type: "echo" },
      ],
    },
    {
      kicker: "团队 18",
      title: "团队讨论僵住时，你更可能做什么？",
      options: [
        { text: "退后观察，等关键信息出现", type: "forest" },
        { text: "把复杂问题重新表述清楚", type: "ocean" },
        { text: "站出来拍板，先往前走", type: "summit" },
        { text: "提醒大家回到共同目标", type: "beacon" },
      ],
    },
    {
      kicker: "难题 19",
      title: "你更喜欢怎样解决难题？",
      options: [
        { text: "拆成小步，快速推进", type: "dawn" },
        { text: "自己先安静研究一段时间", type: "forest" },
        { text: "从底层逻辑反复推敲", type: "ocean" },
        { text: "找最有经验的人对齐目标", type: "summit" },
      ],
    },
    {
      kicker: "吸引 20",
      title: "你最难抵抗哪种吸引力？",
      options: [
        { text: "温柔而稳定地记得你", type: "moonlight" },
        { text: "热烈、直接、有生命力", type: "ember" },
        { text: "懂你的沉默和没说出口的话", type: "echo" },
        { text: "让你觉得自己的存在有意义", type: "beacon" },
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

    const resultHero = document.getElementById("result-hero");
    const resultImage = document.getElementById("result-image");
    if (resultImage) {
      resultHero.style.backgroundImage = "none";
      resultImage.src = result.image;
      resultImage.alt = `${result.name} IP 形象`;
    } else {
      resultHero.style.backgroundImage = `linear-gradient(180deg, rgba(16, 19, 28, 0.05), rgba(16, 19, 28, 0.55)), url("${result.image}")`;
    }
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
