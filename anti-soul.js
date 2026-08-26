(function () {
  const traits = {
    control: {
      id: "control",
      name: "隐性控制者",
      shortName: "控制",
      color: "#ff5f5f",
      description:
        "你最不愿承认的是，你想要事情按你的方式来。你嘴上说“都可以”，心里已经排好了一套秩序；当事情偏离，你会先把它拉回可控，再用冷静或照顾来包装自己的坚持。",
      signal: "遇到不确定时，你会更快给出判断、安排或建议，用“我是在帮你”来降低失控感。",
      relation: "你越不承认想掌控，越容易让对方觉得不被信任，甚至用配合你的方式换取平静。",
      practice: "练习说一次“这次由你决定，我不改”，并真的不去提醒或纠正。",
    },
    please: {
      id: "please",
      name: "隐性讨好者",
      shortName: "讨好",
      color: "#ff9a4d",
      description:
        "你一直以为自己早就学会做自己，但别人的一句模糊反馈，就能让你在心里重播一整天。你把很多真实需要藏进“没关系”里，然后用配合换取不被讨厌的安全。",
      signal: "你会先确认别人脸色，再决定自己能不能放松；被误会时先解释，而不是先生气。",
      relation: "你越装作不在乎别人的评价，越容易在关系里退让，最后把委屈攒成一次突然的冷掉。",
      practice: "下次别人问你意见时，先说“我想要”，而不是“我都可以”。",
    },
    cold: {
      id: "cold",
      name: "隐性冷感者",
      shortName: "冷感",
      color: "#53d6c7",
      description:
        "你不是没有感受，只是先把感受关掉。你习惯用抽离、延迟回应和“我不需要”来保护自己，可真正冷掉的不是别人，而是你允许自己被靠近的那条路。",
      signal: "你常常在情绪升起的第一秒按下静音，用“先冷静”“没所谓”把心门关上。",
      relation: "你越不承认自己在回避，越容易让对方觉得走不进你，最后关系变成礼貌而遥远的平行线。",
      practice: "下次想回“没事”时，试着说出一句具体感受，哪怕只是“我有点不开心”。",
    },
    avoid: {
      id: "avoid",
      name: "隐性逃避者",
      shortName: "逃避",
      color: "#8d9cb6",
      description:
        "你以为自己扛得住，其实真正难的时候，你会先躲开。你擅长用忙碌、沉默或“我想想”来延后面对，但那些没处理的瞬间没有消失，只是变成了夜里突然涌上来的疲惫。",
      signal: "越重要的事，你越容易先做别的小事；越在乎的人，你越难主动开口。",
      relation: "你越强调“我不想麻烦别人”，越会在需要连接时突然消失，让对方误以为你并不在意。",
      practice: "把一件拖了很久的重要对话，拆成一句今天就能说出口的开场白。",
    },
    narcissist: {
      id: "narcissist",
      name: "隐性自恋者",
      shortName: "自恋",
      color: "#e9b94c",
      description:
        "你并不张牙舞爪，但很需要被看见、被记住，也害怕自己最终只是一个普通人。你会在别人没有回应时反复确认自己的位置，在掌声缺席时怀疑自己的意义。",
      signal: "你会不自觉地复盘“我表现得怎么样”，并希望重要的瞬间有人记得。",
      relation: "你越不承认需要被关注，越容易在关系里索取隐形的确认，让对方感到总要证明你的重要。",
      practice: "一天之内，刻意不检查自己是否被回应，只问自己“我做了什么”。",
    },
    dependent: {
      id: "dependent",
      name: "隐性依赖者",
      shortName: "依赖",
      color: "#7e9bff",
      description:
        "你总把独立说得很响，其实很怕被丢下。你希望有人能读懂你的不说，也希望在撑不住时有人主动接住；但你很少直接请求，只会用试探和等待确认自己还被需要。",
      signal: "手机安静时，你会怀疑关系是不是出了什么问题，甚至用主动付出来换回一点回应。",
      relation: "你越强调自己一个人可以，越容易把对陪伴的需要变成沉默的期待，最后觉得自己总是不被接住。",
      practice: "直接告诉一个信任的人：“我今天有点需要你。”不用说更多理由。",
    },
    perfect: {
      id: "perfect",
      name: "隐性完美主义者",
      shortName: "完美",
      color: "#a7d95b",
      description:
        "你嘴上说“差不多就行”，心里却连一个错别字都不放过自己。你习惯把标准拉到别人看不见的地方，再用“我没事”盖住完成之后仍然不满意的那点空。",
      signal: "你很难庆祝完成，总是先看到哪里还不够好；被夸时会先否定，再偷偷高兴。",
      relation: "你越不承认要求高，越容易把同样的标准架到关系里，让对方感到总达不到你的期待。",
      practice: "今天完成一件事后，不做任何修补，直接告诉自己：“这样已经够了。”",
    },
    envy: {
      id: "envy",
      name: "隐性嫉妒者",
      shortName: "嫉妒",
      color: "#c07bd8",
      description:
        "你不是不愿祝福别人，只是祝福里总夹着一丝比较。你会在别人成功时先替 TA 高兴，再默默看向自己：我是不是被落下了？这让你比谁都努力，也比谁都难真正满意。",
      signal: "看到别人的好消息，你会先笑着说恭喜，然后很快开始想“那我呢”。",
      relation: "你越不承认自己在比较，越容易把对方的成功读成自己的失败，关系里也多了暗暗的较劲。",
      practice: "为别人高兴时，只高兴 30 秒，不立刻拿自己和对方比较。",
    },
    aggressor: {
      id: "aggressor",
      name: "隐性攻击者",
      shortName: "攻击",
      color: "#c05a5a",
      description:
        "你表面温和，心里却有很多没说出口的火。你把愤怒包装成玩笑、阴阳怪气和突然的冷，别人只看到你不好惹，没看到你其实不想承认自己也有攻击性。",
      signal: "被冒犯时，你会先笑着说“没事”，然后心里已经预演了好几轮反击。",
      relation: "你越不承认生气，越容易用冷嘲热讽或突然抽离表达，让对方猜你到底怎么了。",
      practice: "下次生气时，直接说“我现在有点生气”，先不解释谁对谁错。",
    },
    victim: {
      id: "victim",
      name: "隐性受害者",
      shortName: "受害者",
      color: "#c78fc9",
      description:
        "你习惯把自己放在“被亏欠”的位置，不是因为你不努力，而是承认自己能负责会让你更不安。你把委屈收集起来，等一个终于有人看见你的时刻。",
      signal: "你常想“为什么总是我”“我已经做得够多了”，并用回忆里的委屈解释现在。",
      relation: "你越不承认自己也有一部分责任，越容易让对方感到不管怎么做都会亏欠你。",
      practice: "下次说“总是我”之前，先找出这件事里你能改的一步。",
    },
    skeptic: {
      id: "skeptic",
      name: "隐性怀疑者",
      shortName: "怀疑",
      color: "#6f7d93",
      description:
        "你不轻易相信好意，因为相信之后可能被辜负。你先把人往坏处想，不是冷漠，而是想提前准备好受伤；结果常常是你先关上了别人靠近的门。",
      signal: "收到突然的关心，你第一反应是“他是不是有事要我帮忙”。",
      relation: "你越不承认自己想相信，越容易反复试探、求证和预设最坏结果，让真诚的人感到被审问。",
      practice: "下次先接受一个善意，不追问动机，只回一句“谢谢”。",
    },
    numb: {
      id: "numb",
      name: "隐性麻木者",
      shortName: "麻木",
      color: "#9ca8a0",
      description:
        "你不是没有感受，只是已经累到把感受调到最小。你常把“无所谓”挂在嘴边，连开心都不敢太用力，因为怕情绪一旦打开就收不住。",
      signal: "遇到好事和坏事都先淡淡地说“还好”，然后把自己关回没感觉的状态。",
      relation: "你越不承认自己麻木，越容易让关系变得没有回音；对方感受不到你的反应，也不知道你还想不想要。",
      practice: "每天给一种感受打分，哪怕只有 1 分，也把它说出口。",
    },
  };

  const richProfiles = {
    control: {
      keywords: ["掌控", "秩序", "不安"],
      tagline: "把失控感藏进“我都是为你好”里",
      coreConflict: "你渴望事情稳稳地按你的方式展开，又害怕被人看穿自己的坚持，于是常常用冷静、效率或照顾来包装控制。",
      trigger: "计划被打乱、别人临时改主意，或重要的事没有给你一个清楚交代时，你最容易把不安转成控制。",
      stressMode: "压力下你会更果断、更少解释，先把局面拉回可控；也容易把对方的迟疑读成不配合，语气变得像在发指令。",
      reminder: "让人安心的不是一切都在你手里，而是你愿意偶尔放开一点，让事情自己长成另一个样子。",
      dailyMask: "你习惯先确认下一步，再用“这样更有效率”来推进；很多时候你已经在安排别人，却还觉得自己只是给建议。",
      decisionStyle: "你会很快评估风险并拍板，也喜欢把选择拆成步骤。你需要练习在“我认为最好”之外，真的听见别人要什么。",
      conflictStyle: "冲突时你会直接指出问题，把情绪压下去先解决事情。对方往往只感到被安排，没看到你其实是想保护关系不失控。",
      relationshipNeed: "你需要被信任，也需要对方清楚表达自己的边界。安全感对你来说，是知道事情有方向，而不是一切都得由你决定。",
      strengths: ["能快速稳定混乱", "擅长提前预判", "在压力下仍能推进"],
      challenges: ["容易把安排当成唯一答案", "用照顾掩盖控制", "对不可控的耐心偏低"],
      scene: "需要有人拿主意的会议室，或一个你能把计划理清楚的安静清晨。",
      match: "能清楚表达边界，也愿意与你共同拿主意的人。",
      attract: "会被独立、果断、不让你事事操心的人吸引",
      watch: "太想掌控，会让对方觉得不被信任，甚至用配合换平静。",
    },
    please: {
      keywords: ["讨好", "敏感", "被认可"],
      tagline: "把真实需要藏进“没关系”里",
      coreConflict: "你很想被喜欢，又怕显得太在意；于是用退让和配合换取安全，最后却发现自己没有被真正看见。",
      trigger: "别人语气变冷、只回一个字，或你的付出没有获得回应时，你会立刻开始检讨自己。",
      stressMode: "压力下你会更努力照顾所有人，把自己的需要排到最后，甚至用“我没事”盖住已经快到极限的疲惫。",
      reminder: "你不必用委屈自己来证明值得被喜欢；先照顾好自己的需要，关系才不会变成单方面的消耗。",
      dailyMask: "你习惯先看脸色再说话，也常常用“都可以”代替真实想法，直到某天突然觉得谁都没把你放在心上。",
      decisionStyle: "你会优先考虑别人会不会失望，再决定要不要行动。好处是体贴，代价是你很难分清哪些是你真正想要的选择。",
      conflictStyle: "冲突时你常先退一步，把“算了”咽下去，表面和解，其实委屈留到了深夜。你更需要练习把不舒服说出来。",
      relationshipNeed: "你需要被主动确认和回应，也需要对方看见你付出背后的期待。对你来说，被认真对待比被夸赞更重要。",
      strengths: ["敏锐察觉他人情绪", "愿意维持关系", "容易让人感到被照顾"],
      challenges: ["边界偏软", "习惯委屈自己", "把拒绝等同于伤害"],
      scene: "一个可以不说客套话、也不必担心被讨厌的安全关系。",
      match: "能读懂你的沉默，也鼓励你直接表达需要的人。",
      attract: "会被坚定、温柔，又不会利用你退让的人吸引",
      watch: "过度讨好，会让你在关系里越来越透明，最后连自己都不确定还想要什么。",
    },
    cold: {
      keywords: ["冷感", "抽离", "自保"],
      tagline: "不是没感受，只是先把感受关掉",
      coreConflict: "你渴望靠近，又害怕被看穿；于是先抽离、先冷静，把情绪按下去，结果让自己变成一座别人不敢靠近的孤岛。",
      trigger: "被人追问真实感受、关系突然升温，或别人情绪太满时，你会本能地后退。",
      stressMode: "压力下你会更沉默、更理性，用“先解决问题”推开情绪，甚至把关心读成打扰。",
      reminder: "你可以保留距离，但别让重要的人一直猜。偶尔说一句“我现在有点难”，不会让你失控。",
      dailyMask: "你习惯用“没所谓”“我不需要”来快速结束话题，其实那些被关掉的情绪没有消失，只是变成了独自消化的重量。",
      decisionStyle: "你会用逻辑和利弊做判断，尽量不让自己被情绪影响。你容易把“需要回应”误判成“没必要”，错失连接的时机。",
      conflictStyle: "冲突时你倾向冷处理，退回自己的秩序里。你怕被情绪裹挟，但对方可能把你的冷静读成不在乎。",
      relationshipNeed: "你需要空间，也需要对方在你不说时仍愿意靠近。适度的距离不是拒绝，而是你确认安全的方式。",
      strengths: ["情绪稳定", "能保持清醒", "不轻易被带节奏"],
      challenges: ["容易显得疏离", "把需要藏得太深", "把关心误当成负担"],
      scene: "一个安静、不必被迫热络的角落，或能自然交换想法的深夜。",
      match: "尊重你的节奏，也愿意在你后退后仍然留下来的那个人。",
      attract: "会被有分寸、不喧哗，又能读懂沉默的人吸引",
      watch: "过度抽离，会让真诚的人误以为你不想被靠近。",
    },
    avoid: {
      keywords: ["逃避", "拖延", "独扛"],
      tagline: "重要的事越近，你越想先躲开",
      coreConflict: "你害怕面对可能失控或受伤的时刻，于是用忙碌和延后来保护自己；但没处理的问题不会消失，只会在深夜变成疲惫。",
      trigger: "一场必须说开的对话、一个没有把握的结果，或有人突然戳中你的软肋时，你会先想怎么逃。",
      stressMode: "压力下你会先做无关的小事，或干脆消失一会儿，用“我在忙”来拖延真正的决定。",
      reminder: "面对不是一次性崩溃；把重要的事拆成最小一步，你就有能力一步步走进去。",
      dailyMask: "你看起来在推进很多事，却常把最关键的对话放到最后。你越说“我再想想”，越说明那件事真的很重要。",
      decisionStyle: "你会收集信息、反复权衡，把决定拖到必须做为止。你需要一个“今天就完成最小一步”的出口，而不是继续等完美时机。",
      conflictStyle: "冲突时你容易离开现场、已读不回，或把问题淡化。你不是不在乎，只是害怕说出口之后局面更糟。",
      relationshipNeed: "你需要被温柔地追问，也需要对方不因你的退避而放弃。对你来说，被稳稳接住，比逼你立刻回答更有用。",
      strengths: ["擅长保留自己的节奏", "能在压力中暂停", "对风险有警觉"],
      challenges: ["习惯延后面对", "把沉默当成安全", "重要连接容易断在半路"],
      scene: "一个让你觉得即使说错也没关系的、足够安全的对话。",
      match: "愿意等你准备好，也不把你的回避误读成拒绝的人。",
      attract: "会被稳定、有耐心，又不会逼你立刻开口的人吸引",
      watch: "总把重要的事延后，会让真正在乎的人越来越难等到你。",
    },
    narcissist: {
      keywords: ["被看见", "意义感", "自证"],
      tagline: "怕自己最终只是一个普通人",
      coreConflict: "你很需要被看见、被记住，也害怕自己平庸；于是把价值绑在别人的回应上，掌声一停就开始怀疑自己。",
      trigger: "没人回应你的表达、功劳被忽视，或有人比你更出风头时，你会不自觉地想证明自己。",
      stressMode: "压力下你会更想表现，也更在意评价；可能用夸张的讲述或抢先行动，来掩饰心里那点“我不够好”。",
      reminder: "你的价值不取决于被多少人记住。做一件没人鼓掌也愿意做下去的事，反而能把你从证明里放出来。",
      dailyMask: "你会复盘自己有没有被看见，也会在社交后反复确认别人的反应。你不是爱出风头，只是很难接受没有回应。",
      decisionStyle: "你倾向选择那些能证明自己、留下痕迹的事。你需要练习把“我表现得好不好”换成“我有没有认真做”。",
      conflictStyle: "冲突时你容易先捍卫自己的形象，把问题理解成被否定。对方可能只想要沟通，你却已经在解释和证明。",
      relationshipNeed: "你需要被认真回应，也需要对方看见你光鲜之外的真实。你害怕被遗忘，但真正的靠近恰恰来自不必表演的部分。",
      strengths: ["有表达力", "希望把事情做好", "在意自己的成长"],
      challenges: ["过度依赖外部回应", "容易把批评读成否定", "在关系里索取隐性确认"],
      scene: "一个允许你不那么出色、也能被好好对待的关系。",
      match: "欣赏你的独特，也愿意告诉你“普通也可以被爱”的人。",
      attract: "会被能给你回应、又不会用评价控制你的人吸引",
      watch: "太需要被看见，会让你在关系里不断确认自己的重要，忽略对方也需要被回应。",
    },
    dependent: {
      keywords: ["依赖", "怕被丢下", "试探"],
      tagline: "把独立说得很响，其实很怕被丢下",
      coreConflict: "你希望被接住，又不肯直接开口；于是用试探和等待确认自己还被需要，最后常常觉得委屈。",
      trigger: "手机安静、对方没有及时回消息，或你需要帮助却不知怎么开口时，你会先怀疑关系。",
      stressMode: "压力下你会更想抓住一个人，也可能用主动付出来换回一点回应，把自己累到边界模糊。",
      reminder: "依赖不是负担，真正的负担是让别人永远猜。直接说“我需要你”，比独自难过更能靠近人。",
      dailyMask: "你总强调一个人可以，却在无人回应时反复看手机。你不是不独立，而是把依赖藏成了沉默的期待。",
      decisionStyle: "你常想听别人的意见，再决定自己怎么做。你需要练习先说出自己的倾向，而不是等对方替你确认。",
      conflictStyle: "冲突时你会先担心关系会不会结束，可能用追问、委屈或讨好来留住对方，反而让对方感到压力。",
      relationshipNeed: "你需要稳定的回应，也需要对方接住你的不安。对你来说，明确地被选择，比华丽的表达更能带来安全感。",
      strengths: ["重视关系", "愿意为在意的人投入", "能敏锐感知连接"],
      challenges: ["把需要说成暗示", "容易被回应牵动", "独自难过多过直接请求"],
      scene: "一段让你可以放心说“我今天有点需要你”的关系。",
      match: "愿意主动确认你，也能在你求助时给你具体回应的人。",
      attract: "会被稳定、温柔，又不会嫌你黏人的人吸引",
      watch: "过度依赖回应，会让你把对方正常的生活节奏读成冷淡。",
    },
    perfect: {
      keywords: ["完美", "高标准", "内耗"],
      tagline: "嘴上说差不多，心里连错别字都不放过",
      coreConflict: "你害怕自己不够好，于是用看不见的高标准逼自己，也常在完成之后仍然觉得不够。",
      trigger: "一个小错误、一次公开评价，或看到别人做得更完整时，你会立刻开始挑自己的刺。",
      stressMode: "压力下你会更紧绷、更追求控制细节，也可能拖延，因为太想做好反而不敢开始。",
      reminder: "完成比完美更能积累力量。允许一件事以“足够好”结束，你才有力气继续下一件。",
      dailyMask: "你常把标准说成“差不多就行”，却花了大量时间修补别人看不出的细节。你不是不放松，只是还没允许自己停下来。",
      decisionStyle: "你会反复比较选项，想找到最不会出错的答案。你需要给选择设一个截止点，而不是追求永远正确的方案。",
      conflictStyle: "冲突时你容易先复盘自己哪里没做好，也可能把对自己的高要求转移到对方身上，让关系变得紧张。",
      relationshipNeed: "你需要被肯定，也需要对方理解你的标准来自不安，而不是挑剔。对你来说，被允许不完美，比被夸完美更重要。",
      strengths: ["认真细致", "交付质量稳定", "能看见细节"],
      challenges: ["很难庆祝完成", "容易自我批评", "把标准架到关系里"],
      scene: "一个做完就停下、不需要反复修改的下午。",
      match: "能肯定你的努力，也提醒你“已经够了”的人。",
      attract: "会被真诚、包容，又不会用完美来要求你的人吸引",
      watch: "过度追求完美，会让你错过完成，也让关系里的人总感觉达不到你的期待。",
    },
    envy: {
      keywords: ["比较", "不安", "追赶"],
      tagline: "先替别人高兴，再默默问“那我呢”",
      coreConflict: "你并不是不愿意祝福别人，只是祝福里总夹着比较。别人的好消息，很容易被你读成自己还不够好的证据。",
      trigger: "看到别人先取得成绩、朋友分享了你不曾拥有的机会，或你发现自己落下一截时，你会开始较劲。",
      stressMode: "压力下你会更努力追赶，也可能在别人成功时先笑着说恭喜，转头却把自己逼得更紧。",
      reminder: "别人的光不会遮住你的路。把比较换成一个关于自己的下一步，你会比追赶别人走得更远。",
      dailyMask: "你会在恭喜别人之后，立刻想“那我呢”。你不是嫉妒心重，只是太习惯用别人当尺子量自己。",
      decisionStyle: "你常根据“别人做到了什么”来决定自己要什么。你需要练习把目标从比较里拿出来，问自己真正想不想。",
      conflictStyle: "冲突时你容易把对方的成功或优势读成攻击，暗暗较劲；表面不争，心里却已经比了很多轮。",
      relationshipNeed: "你需要被肯定，也需要关系中少一点暗中比较。对你来说，真正的安心来自知道自己的价值不靠赢过谁。",
      strengths: ["有上进心", "能看见差距", "愿意为想要的生活努力"],
      challenges: ["容易把自己和别人绑在一起", "把成功读成失败", "难真正为别人高兴"],
      scene: "一个只属于你自己的目标，不和任何人比较。",
      match: "能欣赏你、也提醒你别把自己放在别人的赛道上的人。",
      attract: "会被自信、稳定，又不会用比较来证明自己的人吸引",
      watch: "过度比较，会让你把别人的好消息变成自己的压力，关系里也多了暗暗较劲。",
    },
    aggressor: {
      keywords: ["愤怒", "防御", "冷嘲"],
      tagline: "把火气包装成玩笑和突然的冷",
      coreConflict: "你很想被尊重，又害怕承认自己会生气；于是把攻击藏在讽刺、冷脸和“随便你”里，结果伤人伤己。",
      trigger: "被人否定、被忽略，或有人越过你的边界却装作无事发生时，你会迅速竖起攻击性的防御。",
      stressMode: "压力下你会更容易挑刺、阴阳怪气，也可能突然不说话；你不是想破坏关系，只是太想保护自己不再受伤。",
      reminder: "生气不是你的错，被生气也不是关系的末日。把火说清楚，比让火在心里烧更安全。",
      dailyMask: "你习惯用“我没事”挡开冲突，再用冷淡或玩笑提醒对方你不舒服。别人只看到你的刺，没看到刺下面是在意。",
      decisionStyle: "你会快速判断谁该为问题负责，也容易被愤怒推着做决定。你需要先把“谁错了”放一放，先说你想要什么。",
      conflictStyle: "冲突时你会先反击，或先撤退到冷处理。你怕自己说出太狠的话，于是干脆用沉默和嘲讽让对方难受。",
      relationshipNeed: "你需要被尊重，也需要对方在你生气时不逃跑。对你来说，能安全表达愤怒，比永远不吵架更重要。",
      strengths: ["有很强的自我保护", "能快速识别冒犯", "不愿被欺负"],
      challenges: ["容易把在意说成指责", "用冷暴力代替表达", "愤怒积压到突然爆发"],
      scene: "一段允许你直接说“我现在生气了”，却不会因此被丢下的关系。",
      match: "能接住你的情绪，也能提醒你“你刚刚有点伤人”的人。",
      attract: "会被真诚、稳定，又不会用冷处理惩罚你的人吸引",
      watch: "过度防御，会让你把别人的无心之失也读成攻击。",
    },
    victim: {
      keywords: ["委屈", "无力", "被亏欠"],
      tagline: "把委屈收起来，等一个终于被看见的时刻",
      coreConflict: "你害怕承认自己也能负责，因为那会让你更累；于是把很多事解释成“别人亏欠我”，用委屈换回一点安全。",
      trigger: "付出没有被看见、事情不如预期，或有人把你该负责的部分推回给你时，你会先觉得不公平。",
      stressMode: "压力下你会更容易自怜，反复说“我已经尽力了”“为什么总是我”，也可能用疲惫和低落让周围人内疚。",
      reminder: "被亏欠的感觉很真实，但它不一定等于事实。先找回一点主动权，你的委屈才会变成力气。",
      dailyMask: "你习惯用“没办法”“都是因为我”来解释不顺，也常常在关系里扮演付出很多却没人珍惜的那一方。",
      decisionStyle: "你容易先看谁有责任，再决定自己要不要行动。你需要练习从“我能改什么”开始，而不是停在“谁对不起我”。",
      conflictStyle: "冲突时你会先陈述自己受了多少委屈，希望对方愧疚。对方可能只感到被指责，没看到你其实是需要被安慰。",
      relationshipNeed: "你需要被看见、被心疼，也需要对方不用愧疚来回应你。对你来说，被认真倾听，比被认错更有用。",
      strengths: ["能敏锐感知不公平", "会照顾被忽略的人", "愿意表达受伤"],
      challenges: ["容易把自己放成受害者", "用委屈换取关注", "把自己的力量交出去"],
      scene: "一个允许你承认“这件事我也有一点责任”的安全空间。",
      match: "愿意听你委屈，也温柔提醒你找回主动权的人。",
      attract: "会被有担当、不推卸责任，也不过度补偿你的人吸引",
      watch: "长期把自己放在受害者位置，会让你越来越难相信行动能改变处境。",
    },
    skeptic: {
      keywords: ["怀疑", "防备", "预设"],
      tagline: "不是不想信，只是先准备好受伤",
      coreConflict: "你渴望被真诚对待，又害怕信错人；于是先把好意读成目的，把靠近读成风险，结果把真诚也挡在门外。",
      trigger: "别人突然热情、承诺太快，或一段关系发展得比预期顺利时，你会开始找破绽。",
      stressMode: "压力下你会更警觉、更抠细节，把对方的一句话反复分析，甚至用试探来证明自己的怀疑是对的。",
      reminder: "不是所有善意都需要等价交换。偶尔先相信一次，关系才有机会证明它值得。",
      dailyMask: "你习惯问“然后呢”“他到底想怎样”，即使对方只是单纯对你好，你也要先确认没有隐藏条件。",
      decisionStyle: "你会花很多时间验证风险，再决定要不要投入。你需要给信任设一个最小尝试，而不是等所有证据都完美。",
      conflictStyle: "冲突时你会追问动机、翻旧账，试图证明对方早有预谋。对方往往觉得不被信任，而不是问题本身有多大。",
      relationshipNeed: "你需要稳定、透明的回应，也需要对方不因你的怀疑而离开。对你来说，反复被确认安全，才能真正放松。",
      strengths: ["有风险意识", "不容易被利用", "会认真验证重要决定"],
      challenges: ["把善意读成目的", "反复试探", "很难让关系真正靠近"],
      scene: "一段经得起慢慢确认、不需要你时刻提防的关系。",
      match: "愿意耐心回应你的怀疑，也帮你看见善意的确存在的人。",
      attract: "会被坦荡、言行一致，又不会让你猜来猜去的人吸引",
      watch: "过度防备，会让你先预设别人会伤害你，最后真的错过值得信任的人。",
    },
    numb: {
      keywords: ["麻木", "低耗", "无所谓"],
      tagline: "把感受调到最小，才敢继续过日子",
      coreConflict: "你怕情绪一打开就收不住，于是把所有感受都调成“还好”；但这让你既不痛，也很难真正快乐。",
      trigger: "太多情绪同时涌来、连续透支之后，或有人非要你“开心一点”时，你会更想把自己关掉。",
      stressMode: "压力下你会更迟钝、更无所谓，用“随便”“都行”切断连接，可能连自己累不累都感觉不到。",
      reminder: "麻木不是坚强，是身体在替你按暂停。允许自己有一点感受，恢复才有入口。",
      dailyMask: "你习惯对大事小事都回一句“还好”，也常分不清自己到底想要什么。你不是不在乎，只是太久没听自己的声音。",
      decisionStyle: "你会选最不费力、最不麻烦的选项，因为感觉不到差别。你需要先从“哪个让我更不舒服”开始，慢慢找回偏好。",
      conflictStyle: "冲突时你会很快说“算了”，把自己抽离出来。对方以为你无所谓，其实你是已经累到不想再有任何情绪波动。",
      relationshipNeed: "你需要被耐心等待，也需要对方不逼你立刻热情。对你来说，被允许慢慢醒过来，比被要求回应更温柔。",
      strengths: ["能在高压中保持表面稳定", "不轻易被情绪带走", "擅长降低内耗"],
      challenges: ["与真实感受断连", "容易把麻木当成休息", "让关系缺少回应"],
      scene: "一个不需要你表现得很好，也能让你慢慢恢复感受的安静空间。",
      match: "愿意陪你慢慢找回情绪，也不把你的安静读成冷漠的人。",
      attract: "会被温柔、有耐心，又不会强迫你立刻回应的人吸引",
      watch: "长期麻木，会让你错过真正重要的人和事，也让自己越来越难感觉到活着。",
    },
  };

  const questions = [
    {
      kicker: "第一眼 01",
      title: "看到一张自己站在人群中央、却笑得不太像自己的照片，你第一反应是？",
      options: [
        { text: "删掉它，假装没看到", traits: ["avoid", "cold"] },
        { text: "重拍一遍，直到看起来刚刚好", traits: ["perfect", "narcissist"] },
        { text: "反复放大，找哪里不对劲", traits: ["control", "perfect"] },
        { text: "觉得照片里的自己像个局外人", traits: ["dependent", "avoid"] },
      ],
    },
    {
      kicker: "深夜 02",
      title: "一条消息只有五个字：“我有点失望。”你最先想到的是？",
      options: [
        { text: "我是不是哪里没做好", traits: ["please", "dependent"] },
        { text: "他凭什么让我不舒服", traits: ["narcissist", "control"] },
        { text: "先别回，等对方说清楚", traits: ["cold", "avoid"] },
        { text: "我想知道他是失望我，还是失望这件事", traits: ["control", "perfect"] },
      ],
    },
    {
      kicker: "社交 03",
      title: "聚会上有人拿你开了个有点过的玩笑，大家都笑了。你会？",
      options: [
        { text: "跟着笑，回家后反复重播", traits: ["please", "avoid"] },
        { text: "马上回一个更狠的玩笑", traits: ["narcissist", "control"] },
        { text: "觉得他们其实都不懂我", traits: ["narcissist", "cold"] },
        { text: "笑着过去，然后慢慢远离", traits: ["cold", "avoid"] },
      ],
    },
    {
      kicker: "比较 04",
      title: "一个你一直觉得不如自己的人，突然做得比你好。你第一秒是？",
      options: [
        { text: "替他高兴，但心里有点酸", traits: ["envy"] },
        { text: "马上盘算自己的优势在哪里", traits: ["perfect", "narcissist"] },
        { text: "怀疑他是不是走了捷径", traits: ["control", "envy"] },
        { text: "觉得自己是不是已经落后了", traits: ["dependent", "perfect"] },
      ],
    },
    {
      kicker: "独处 05",
      title: "一个人待着，手机很久没有消息，你更接近？",
      options: [
        { text: "主动找人，怕被忘记", traits: ["dependent"] },
        { text: "享受没人打扰，甚至不想回", traits: ["cold", "avoid"] },
        { text: "翻聊天记录，确认自己没被讨厌", traits: ["please", "dependent"] },
        { text: "把手机静音，跟自己较劲", traits: ["control", "avoid"] },
      ],
    },
    {
      kicker: "被指出 06",
      title: "有人当众指出你的错误，你脑子里最先冒出的是？",
      options: [
        { text: "他是不是早就看我不顺眼", traits: ["envy", "narcissist"] },
        { text: "我必须马上证明自己没有错", traits: ["perfect", "narcissist"] },
        { text: "他凭什么用这种语气跟我说话", traits: ["control", "cold"] },
        { text: "先承认，但心里把他拉黑", traits: ["please", "avoid"] },
      ],
    },
    {
      kicker: "关系 07",
      title: "好朋友没有第一时间告诉你一件重要的事，你会？",
      options: [
        { text: "假装不知道，等对方主动解释", traits: ["control"] },
        { text: "很生气，但也不问，慢慢疏远", traits: ["avoid", "cold"] },
        { text: "直接问：为什么最后才告诉我？", traits: ["dependent", "control"] },
        { text: "先怀疑自己是不是哪里没做好", traits: ["please", "perfect"] },
      ],
    },
    {
      kicker: "意义 08",
      title: "如果所有人明天都会忘记你做过的所有好事，你还会做吗？",
      options: [
        { text: "会，但希望有人能记住", traits: ["narcissist"] },
        { text: "不会，没意义的事不想做", traits: ["cold", "envy"] },
        { text: "会，反正也不是为了别人", traits: ["control", "avoid"] },
        { text: "不知道，突然觉得很空", traits: ["dependent", "avoid"] },
      ],
    },
    {
      kicker: "反击 09",
      title: "有人打断你说话，并且很快把话题抢走。你第一反应？",
      options: [
        { text: "笑着不说话，回家越想越气", traits: ["aggressor", "please"] },
        { text: "直接说：我还没说完", traits: ["control", "aggressor"] },
        { text: "觉得反正没人想听我说", traits: ["victim", "numb"] },
        { text: "不再参与，等他发现我沉默", traits: ["avoid", "aggressor"] },
      ],
    },
    {
      kicker: "委屈 10",
      title: "你连续加班帮了大家，但最后没人在意，你会？",
      options: [
        { text: "无所谓，反正习惯了", traits: ["numb", "victim"] },
        { text: "以后不会再这样了", traits: ["aggressor", "skeptic"] },
        { text: "想找人说说，但怕被嫌矫情", traits: ["dependent", "please"] },
        { text: "先怀疑是不是自己做得还不够", traits: ["perfect", "victim"] },
      ],
    },
    {
      kicker: "信任 11",
      title: "一个不熟的人突然对你特别好，你最先想？",
      options: [
        { text: "他是不是有事要我帮忙", traits: ["skeptic", "cold"] },
        { text: "先接受，但保持距离", traits: ["cold", "avoid"] },
        { text: "有点开心，但怕自己会错意", traits: ["dependent", "please"] },
        { text: "这种好维持不了多久", traits: ["victim", "skeptic"] },
      ],
    },
    {
      kicker: "情绪 12",
      title: "你其实很难受，但有人问你“你还好吗”，你会？",
      options: [
        { text: "说“还好”，然后不再提", traits: ["numb", "avoid"] },
        { text: "讲一半，又觉得算了", traits: ["dependent", "victim"] },
        { text: "笑着说“没事”，心里却更委屈", traits: ["please", "victim"] },
        { text: "不想被追问，干脆说自己累了", traits: ["cold", "numb"] },
      ],
    },
    {
      kicker: "被拒绝 13",
      title: "你主动约一个人，对方说“下次吧”。你第一秒？",
      options: [
        { text: "是我太主动了吗", traits: ["please", "dependent"] },
        { text: "他根本不想和我约", traits: ["skeptic", "victim"] },
        { text: "好，那我也不再主动了", traits: ["avoid", "aggressor"] },
        { text: "没所谓，本来也不是非要见", traits: ["numb", "cold"] },
      ],
    },
    {
      kicker: "功劳 14",
      title: "你的想法被同事抢先说成他的，你？",
      options: [
        { text: "当场指出来", traits: ["aggressor", "control"] },
        { text: "表面没事，后面找机会让他难堪", traits: ["aggressor", "skeptic"] },
        { text: "觉得自己就是容易被抢", traits: ["victim", "numb"] },
        { text: "以后不再说自己的想法", traits: ["avoid", "cold"] },
      ],
    },
    {
      kicker: "期待 15",
      title: "你期待很久的事突然取消，你更可能？",
      options: [
        { text: "说“没事”，然后一个人闷着", traits: ["numb", "avoid"] },
        { text: "越想越气，觉得全世界都在针对我", traits: ["victim", "aggressor"] },
        { text: "立刻找备选方案，别让自己空着", traits: ["control", "perfect"] },
        { text: "不断怀疑是不是自己哪里没做好", traits: ["please", "skeptic"] },
      ],
    },
    {
      kicker: "评价 16",
      title: "你看到朋友发了一条没有点名但像在说你的动态，你会？",
      options: [
        { text: "直接问是不是在说我", traits: ["control", "aggressor"] },
        { text: "截图存下来，反复确认", traits: ["skeptic", "envy"] },
        { text: "就当没看见，但开始疏远", traits: ["avoid", "cold"] },
        { text: "先想自己最近是不是得罪他了", traits: ["please", "victim"] },
      ],
    },
    {
      kicker: "帮助 17",
      title: "有人主动要帮你，你通常？",
      options: [
        { text: "先想他为什么这么好心", traits: ["skeptic", "cold"] },
        { text: "说不用，怕欠人情", traits: ["avoid", "control"] },
        { text: "接受，但一直惦记着怎么还", traits: ["please", "perfect"] },
        { text: "有点不习惯，但也不知道该不该拒绝", traits: ["dependent", "numb"] },
      ],
    },
    {
      kicker: "冷场 18",
      title: "一群人说笑，你突然插不上话，你？",
      options: [
        { text: "安静待着，觉得自己多余", traits: ["victim", "numb"] },
        { text: "找个机会离开", traits: ["avoid", "cold"] },
        { text: "勉强笑，等有人注意到我", traits: ["please", "dependent"] },
        { text: "有点不爽，觉得他们故意不带你", traits: ["aggressor", "skeptic"] },
      ],
    },
    {
      kicker: "熬夜 19",
      title: "你最近总是很累，但停不下来。你更接近？",
      options: [
        { text: "害怕一停下来，情绪就全涌上来", traits: ["numb", "avoid"] },
        { text: "觉得没人能替我，只能硬扛", traits: ["victim", "control"] },
        { text: "怕自己做得不够，所以不敢休息", traits: ["perfect", "dependent"] },
        { text: "怀疑是不是生活本来就这么难", traits: ["skeptic", "victim"] },
      ],
    },
    {
      kicker: "自己 20",
      title: "如果必须承认一个你一直逃避的部分，你会选？",
      options: [
        { text: "我其实也会生气", traits: ["aggressor"] },
        { text: "我其实很想被接住", traits: ["dependent", "victim"] },
        { text: "我其实不敢真的相信别人", traits: ["skeptic", "avoid"] },
        { text: "我其实已经不太有感觉了", traits: ["numb", "cold"] },
      ],
    },
  ];

  const letterMap = ["A", "B", "C", "D"];
  const screens = document.querySelectorAll(".as-screen");
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
  let questionStartedAt = 0;
  let toastTimer = null;

  function activateScreen(name) {
    screens.forEach((screen) => {
      screen.classList.toggle("is-active", screen.dataset.screen === name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function createIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function renderQuestion(index) {
    const question = questions[index];
    if (!question) return;

    questionKicker.textContent = question.kicker;
    questionTitle.textContent = question.title;
    questionCount.textContent = `${index + 1} / ${questions.length}`;
    progressFill.style.width = `${(index / questions.length) * 100}%`;
    backButton.disabled = index === 0;
    questionStartedAt = performance.now();

    optionsEl.innerHTML = "";
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "as-option";
      button.dataset.traits = option.traits.join(",");
      button.setAttribute("aria-pressed", "false");

      const letter = document.createElement("span");
      letter.className = "as-option-letter";
      letter.textContent = letterMap[optionIndex];

      const text = document.createElement("span");
      text.className = "as-option-text";
      text.textContent = option.text;

      button.append(letter, text);
      button.addEventListener("click", () => handleAnswer(option.traits, button));
      optionsEl.appendChild(button);
    });

    questionStage.style.animation = "none";
    void questionStage.offsetWidth;
    questionStage.style.animation = "as-fade-up 360ms ease both";
  }

  function handleAnswer(traitIds, button) {
    if (isLocked) return;
    isLocked = true;

    const elapsed = Math.round(performance.now() - questionStartedAt);
    answers[currentQuestion] = { traits: traitIds, elapsed };

    optionsEl.querySelectorAll(".as-option").forEach((option) => {
      option.classList.remove("is-selected");
      option.setAttribute("aria-pressed", "false");
    });
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

  function calculateScores() {
    const scores = {};
    Object.keys(traits).forEach((id) => {
      scores[id] = 0;
    });

    answers.forEach((answer) => {
      if (!answer) return;
      answer.traits.forEach((id) => {
        if (scores[id] !== undefined) {
          scores[id] += 1;
        }
      });
    });

    return scores;
  }

  function rankTraits(scores) {
    return Object.keys(scores)
      .map((id) => ({ id, score: scores[id] }))
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return 0;
      });
  }

  function getReactionTimes() {
    return answers
      .filter((answer) => answer && typeof answer.elapsed === "number")
      .map((answer) => answer.elapsed);
  }

  function getDenialLevel(avgMs) {
    if (avgMs < 1500) {
      return {
        score: Math.round(96 - avgMs / 18),
        label: "高防御 · 下意识否认",
        text: "你回答得很快，不是因为你不在意，而是你太知道怎样绕开不舒服。真正让你顿住的部分，往往就藏在这些快答里。",
      };
    }
    if (avgMs < 3200) {
      return {
        score: Math.round(74 - (avgMs - 1500) / 40),
        label: "中防御 · 半信半疑",
        text: "你在选择和回避之间犹豫了一下，说明你已经听见了心里的另一个声音，只是还没完全让它说话。",
      };
    }
    return {
      score: Math.max(0, Math.round(31 - (avgMs - 3200) / 130)),
      label: "低防御 · 敢于直视",
      text: "你愿意在这些问题上多停一会儿，没有急着逃开。你的反感不弱，但你更愿意把影子拿到光里看。",
    };
  }

  function showResult() {
    const scores = calculateScores();
    const ranked = rankTraits(scores);
    const primary = traits[ranked[0].id];
    const secondary = traits[ranked[1].id];
    const tertiary = traits[ranked[2].id];
    const reactionTimes = getReactionTimes();
    const avgMs =
      reactionTimes.length > 0
        ? reactionTimes.reduce((sum, time) => sum + time, 0) / reactionTimes.length
        : 2500;
    const denial = getDenialLevel(avgMs);
    const code = `AS-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const rich = richProfiles[primary.id] || {};

    document.getElementById("result-kicker").textContent = "你的反灵魂核心";
    document.getElementById("result-title").textContent = primary.name;
    document.getElementById("result-tagline").textContent =
      rich.tagline || "你最不愿承认，也最像你的暗面。";
    document.getElementById("result-description").textContent = primary.description;
    document.getElementById("profile-code").textContent = `档案编号 ${code}`;

    renderKeywords(rich.keywords || [primary.shortName, secondary.shortName, tertiary.shortName], denial);
    renderMeter([primary, secondary, tertiary], scores);
    document.getElementById("secondary-name").textContent = denial.label;
    document.getElementById("secondary-text").textContent = denial.text;
    document.getElementById("result-signal").textContent = primary.signal;
    document.getElementById("result-relation").textContent = primary.relation;
    document.getElementById("result-practice").textContent = primary.practice;
    document.getElementById("result-core-conflict").textContent = rich.coreConflict || "";
    document.getElementById("result-trigger").textContent = rich.trigger || "";
    document.getElementById("result-stress").textContent = rich.stressMode || "";
    document.getElementById("result-reminder").textContent = rich.reminder || "";
    document.getElementById("result-daily-mask").textContent = rich.dailyMask || "";
    document.getElementById("result-decision-style").textContent = rich.decisionStyle || "";
    document.getElementById("result-conflict-style").textContent = rich.conflictStyle || "";
    document.getElementById("result-relationship-need").textContent = rich.relationshipNeed || "";
    renderList("strength-list", rich.strengths || []);
    renderList("challenge-list", rich.challenges || []);
    document.getElementById("result-scene").textContent = rich.scene || "";
    document.getElementById("result-match").textContent = rich.match || "";
    document.getElementById("result-attract").textContent = rich.attract || "";
    document.getElementById("result-watch").textContent = rich.watch || "";

    activateScreen("result");
    window.setTimeout(() => {
      document.querySelectorAll("#personality-meter .meter-fill").forEach((fill) => {
        fill.style.width = `${fill.dataset.width}%`;
      });
    }, 80);
  }

  function renderKeywords(keywords, denial) {
    const keywordsEl = document.getElementById("result-keywords");
    keywordsEl.innerHTML = "";
    const keywordSet = ["反向显影", ...keywords, denial.label.split(" · ")[0]];

    keywordSet.forEach((keyword) => {
      const span = document.createElement("span");
      span.className = "keyword";
      span.textContent = keyword;
      keywordsEl.appendChild(span);
    });
  }

  function renderList(id, items) {
    const listEl = document.getElementById(id);
    if (!listEl) return;
    listEl.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  }

  function renderMeter(profile, scores) {
    const meter = document.getElementById("personality-meter");
    meter.innerHTML = "";
    const maxScore = Math.max(...profile.map((item) => scores[item.id] || 0), 1);

    profile.forEach((item, index) => {
      const trait = traits[item.id];
      const score = scores[item.id] || 0;
      const width = Math.round((score / maxScore) * 100);
      const row = document.createElement("div");
      row.className = "meter-row";

      const label = document.createElement("span");
      label.className = "meter-label";
      label.textContent = `${index + 1}. ${trait.name}`;

      const track = document.createElement("div");
      track.className = "meter-track";

      const fill = document.createElement("div");
      fill.className = "meter-fill";
      fill.dataset.width = width;
      fill.style.backgroundColor = trait.color;

      const value = document.createElement("span");
      value.className = "meter-value";
      value.textContent = `${score}`;

      track.appendChild(fill);
      row.append(label, track, value);
      meter.appendChild(row);
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  async function shareResult() {
    const primaryName = document.getElementById("result-title").textContent;
    const shareText = `我测出了「反灵魂档案」：${primaryName}。越不承认，越像你。`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "反灵魂档案",
          text: shareText,
        });
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      showToast("档案摘要已复制");
    } catch (error) {
      showToast(shareText);
    }
  }

  function resetQuiz() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    isLocked = false;
    activateScreen("quiz");
    renderQuestion(0);
  }

  function goBack() {
    if (isLocked || currentQuestion === 0) return;
    currentQuestion -= 1;
    renderQuestion(currentQuestion);
  }

  function handleKeyboard(event) {
    if (event.key === "ArrowLeft") {
      goBack();
      return;
    }

    const keyIndex = ["1", "2", "3", "4"].indexOf(event.key);
    if (keyIndex >= 0) {
      const button = optionsEl.children[keyIndex];
      if (button) button.click();
    }
  }

  startButton.addEventListener("click", () => {
    activateScreen("quiz");
    renderQuestion(0);
  });

  backButton.addEventListener("click", goBack);
  restartButton.addEventListener("click", resetQuiz);
  shareButton.addEventListener("click", shareResult);
  document.addEventListener("keydown", handleKeyboard);

  createIcons();
})();
