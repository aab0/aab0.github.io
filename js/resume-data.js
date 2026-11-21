/* ============================================================================
   ★ 简历内容配置（唯一需要修改的文件）★
   ============================================================================
   使用说明：
   1. 全部简历文本集中在本文件：zh = 中文版（默认），en = English 版，
      两者结构完全相同；改了中文，记得同步修改英文；
   2. 在 GitHub 上在线修改：打开本文件 → 点右上角铅笔图标 → 编辑 →
      Commit changes，约 1 分钟后线上简历自动更新；
   3. 直接修改引号内的文字即可；请勿删除字段名（冒号前的键）、
      引号与逗号，逐项对应修改；
   4. links：中英文共用的链接，改一次两版同时生效；
   5. 邮箱为防爬虫以「密文」存储（emailCipher / emailKey），
      页面上点击「联系」后才会在浏览器内解密生成。
      ★ 请勿把明文邮箱写在这里！更换邮箱的方法见 docs/部署与修改指南.md。
   ============================================================================ */

window.RESUME_DATA = {

  /* ---- 中英文共用：外链 ---------------------------------------------- */
  links: {
    github:         "https://github.com/aab0",
    awesomeJobs:    "https://github.com/aab0/awesome-jobs",
    zhanghaozhushou:"https://github.com/aab0/zhanghaozhushou",
    openNavPass:    "https://github.com/aab0/opennavpass",
  },

  /* ---- 中英文共用：邮箱密文（XOR + Base64，勿填明文！）---------------- */
  emailCipher: "fkJVXV1kUUdHLRRDHlFZTA==",
  emailKey: [70, 114, 97, 110, 107, 82, 101, 115, 117, 109, 101, 50, 48, 50, 54, 33],

  /* ==================== 中文版（默认显示）==================== */
  zh: {
    htmlLang: "zh-CN",
    title: "Frank · 全栈工程师 · 个人简历",
    metaDesc: "Frank 的个人简历：9 年经验的全栈工程师，AI 原生开发者，具备产品思维与独立交付能力。",

    /* ---- 界面文案 ---- */
    ui: {
      langSwitch: "EN",                 // 语言切换按钮文字（中文界面显示 EN）
      githubBtn: "GitHub",
      contactBtn: "联系我",
      contactTitle: "联系我",
      modalHint: "为防止邮箱被爬虫抓取，邮箱在点击后才动态生成：",
      copyBtn: "复制邮箱",
      mailBtn: "发送邮件",
      copied: "邮箱已复制到剪贴板",
      printBtn: "导出 PDF",
      featuredBadge: "代表作品",
    },

    /* ---- 头部 ---- */
    header: {
      name: "Frank",
      role: "全栈工程师 · 产品型开发者",
      tagline: "把复杂业务，做成真正可用的产品。",
      summary: "9 年开发经验，覆盖复杂 B 端平台、低代码系统与独立产品。擅长从业务问题出发完成产品抽象与全栈交付，以 AI Agent 放大工程能力，而非替代工程判断。",
      meta: [
        "9 年开发经验",
        "广州",
        "2 个开源项目 100+ Stars",
      ],
    },

    /* ---- 核心优势 ---- */
    about: {
      title: "核心优势",
      cards: [
        {
          icon: "lightbulb",
          title: "业务抽象与产品判断",
          desc: "从真实使用路径定义需求，打通发现、研究、决策与复盘，不做功能清单的搬运工。",
        },
        {
          icon: "cpu",
          title: "AI 协同，不失工程判断",
          desc: "以需求拆解、架构边界和结果验收驾驭 AI Agent，独立交付 4.3 万行桌面产品，让 AI 成为可靠的生产力杠杆。",
        },
        {
          icon: "layers",
          title: "复杂系统全栈交付",
          desc: "覆盖交互、数据、实时通信与桌面发布，不止完成技术方案，更能推进为稳定可用的产品。",
        },
        {
          icon: "zap",
          title: "0 → 1 与持续迭代",
          desc: "两次从 0 到 1 交付广告产品，主导低代码平台，并持续迭代独立产品，兼具团队协同与个人闭环。",
        },
      ],
    },

    /* ---- 技术栈 ---- */
    skills: {
      title: "技术栈",
      groups: [
        { name: "前端",     items: ["Vue.js / Vue 3", "React", "微信小程序", "Element Plus", "ECharts / klinecharts"] },
        { name: "后端与数据", items: ["Node.js", "SQLite", "MongoDB", "MySQL"] },
        { name: "桌面与自动化", items: ["Electron", "Puppeteer", "Chrome 插件"] },
        { name: "AI 协同开发", items: ["Cursor", "Trae", "提示词工程", "AI Agent 工作流设计"] },
        { name: "产品与架构", items: ["产品设计", "低代码平台架构", "数据可视化", "交互设计"] },
      ],
    },

    /* ---- 工作经历 ---- */
    experience: {
      title: "工作经历",
      items: [
        {
          period: "2024.01 - 至今",
          company: "美股自营交易公司",
          role: "日内交易员 · 独立产品开发者",
          bullets: [
            "以真实日内交易场景为需求源头，构建个人交易系统，将反复执行的筛选、研究与风控流程产品化；",
            "独立开发美股实时交易扫描器，整合 10+ 数据源、秒级行情、AI 辅助分析与风险提醒，形成「实盘验证 → 产品迭代」闭环；",
            "独立完成需求定义、交互与架构、数据治理、开发及桌面发布，项目规模约 4.3 万行代码、122 个模块。",
          ],
          highlights: [],
        },
        {
          period: "2019.10 - 2023.11",
          company: "某大型通信运营商",
          role: "全栈工程师",
          bullets: [
            "主导工业大数据平台前端开发，从 0 到 1 完成系统搭建与功能实现；",
            "主导低代码数据大屏的架构与核心模块，抽象拖拽编辑、配置渲染、组件注册及数据源管理，内置 100+ 组件并在多个大型企业客户落地；",
            "参与工业互联网云平台前端开发，同时独立交付面向政企客户的小程序，兼顾复杂平台建设与快速业务交付。",
          ],
          highlights: [
            "连续两年年度绩效 A（研发类前 20%）",
            "年度优秀员工（前 5%）",
          ],
        },
        {
          period: "2017.07 - 2019.09",
          company: "某移动互联网广告技术公司",
          role: "前端开发工程师",
          bullets: [
            "连续从 0 到 1 交付 DSP 广告投放平台与广告数据洞察产品，覆盖广告投放与效果分析两类核心 B 端场景；",
            "不止完成页面开发：围绕广告主操作路径组织信息层级与交互，在复杂业务中沉淀前端业务抽象和数据展示能力；",
            "主动将 DSP 能力延伸至微信小程序，独立补齐移动使用场景，该项目获公司“黑客马拉松”比赛第二名。",
          ],
          highlights: [
            "年度绩效 A（研发类前 20%）",
          ],
        },
      ],
    },

    /* ---- 项目经历 ---- */
    projects: {
      title: "项目经历",
      items: [
        {
          name: "美股实时交易扫描器（US Stock Scanner）",
          period: "2024.04 - 至今",
          role: "独立完成产品定义、架构设计与全部开发",
          featured: true,   // true = 显示「代表作品」角标
          desc: "基于 Electron + Vue 3 + SQLite 的跨平台美股交易工作台，面向美股日内交易者，覆盖「发现 → 研究 → 监测 → 决策 → 复盘」完整交易闭环。全项目 122 个模块、约 4.3 万行代码，由一人独立完成。",
          stats: [
            { num: "4.3万+", label: "行代码" },
            { num: "122",    label: "个模块" },
            { num: "10+",    label: "数据源" },
            { num: "1",      label: "人独立完成" },
          ],
          bullets: [
            "产品闭环：用「扫描 + 订阅」区分小盘机会发现与大盘 / ETF 监测，串联个股研究、事件决策和 K 线复盘，而非堆砌工具；",
            "AI 工作流：提示词模板 + ${symbol} 上下文渲染，一键将个股结构化数据带入 AI 分析；本地负责数据与上下文，AI 负责推理；",
            "数据可靠性：统一治理 10+ 异构数据源，以多源容灾、按域熔断、滚动限流和失败负缓存，在免费配额约束下保持服务可用；",
            "实时与调度：WebSocket + 300ms 节流 + 快照自愈实现秒级行情；三级同步队列与看门狗协调不同频率的采集任务；",
            "风险产品化：将 Nasdaq 合规规则与 SEC 融资文件转化为退市五级预警、稀释风险提示和事件避雷日历。",
          ],
          tags: ["Electron", "Vue 3", "SQLite", "WebSocket", "Puppeteer", "AI 协同", "熔断限流"],
        },
        {
          name: "opennavpass（NavPass）",
          period: "2026.08",
          role: "独立完成产品设计、Chrome 扩展架构与全部开发",
          featured: false,
          desc: "基于 Vue 3 + Chrome Manifest V3 的新标签页导航与隐私链接管理工具：直接复用浏览器书签，结合端到端加密与 WebDAV 同步，无需中心化服务器。",
          stats: [],
          bullets: [
            "书签即导航：直接读取 Chrome 书签并自动同步分区，支持深层搜索与文件夹平铺，避免导航站和浏览器书签的重复维护；",
            "完整收藏路径：贯通新标签页、Popup、网页角标和右键菜单，覆盖收藏、搜索、分组、备注、移出书签与密文备份恢复；",
            "端到端加密：通过 Web Crypto 使用 PBKDF2-SHA256（600,001 次迭代）派生 AES-GCM 256 位密钥，本地与云端仅存密文，支持自动上锁及改密后全量重加密；",
            "扩展工程化：基于 MV3 多上下文与模块化 Service Worker 协同，原生 fetch 实现 WebDAV 客户端；图标采用空闲预取、并发去重、缓存淘汰与多级降级。",
          ],
          tags: ["Vue 3", "Chrome MV3", "Web Crypto", "WebDAV", "UnoCSS"],
        },
        {
          name: "低代码可视化数据大屏平台",
          period: "2021.01 - 2022.12",
          role: "架构设计与核心模块开发",
          featured: false,
          desc: "企业级低代码可视化平台：通过积木式拖拽快速搭建数据大屏，内置 100+ 可视化组件，支持无代码配置搭建与低代码扩展开发。",
          stats: [],
          bullets: [
            "可视化拖拽编辑引擎：画布式编辑器，支持组件拖拽、自由布局、网格吸附、辅助线对齐、图层管理与撤销重做；",
            "组件化架构：统一组件规范与动态注册机制，内置 100+ 组件，支持自定义组件注册、复用与扩展；",
            "配置驱动渲染引擎：组件配置结构化存储，编辑器与运行时渲染解耦，支持大屏的保存 / 加载 / 预览 / 发布；",
            "数据源管理：静态 / 动态接口统一接入，数据获取、转换、映射与定时刷新，支持组件间交互联动；",
            "后端与性能：基于 Node.js + MongoDB 构建后端服务；通过按需加载、图表实例复用优化复杂大屏渲染。",
          ],
          achievement: "平台在多个大型企业客户部署落地，显著降低大屏开发成本，提升项目交付效率。",
          tags: ["Vue.js", "ECharts", "Node.js", "MongoDB", "低代码"],
        },
        {
          name: "口算练习助手小程序",
          period: "2025.12",
          role: "独立完成产品设计、功能规划与全部开发",
          featured: false,
          desc: "面向幼小衔接与小学低年级学生的数学口算练习工具，帮助孩子巩固数学基础，提升家长辅导效率。",
          stats: [],
          bullets: [
            "试卷生成：多题型自动生成符合 A4 规格的练习试卷，支持导出图片 / PDF，方便下载、打印与分享；",
            "在线练习与效果分析：自动记录答题结果并生成练习效果报告，帮助家长了解学习表现；",
            "专项练习与错题管理：按题型、知识点针对性练习，错题回顾与强化训练。",
          ],
          tags: ["微信小程序", "教育产品", "产品设计"],
        },
      ],
    },

    /* ---- 开源与作品（urlKey 对应上方 links 里的键名）---- */
    openSource: {
      title: "开源与作品",
      items: [
        { name: "awesome-jobs",       desc: "每天收集互联网大厂开发岗位 · 120+ Stars", urlKey: "awesomeJobs" },
        { name: "zhanghaozhushou",    desc: "账号助手微信小程序 · 110+ Stars",          urlKey: "zhanghaozhushou" },
        { name: "opennavpass",        desc: "加密书签导航与隐私链接管理 Chrome 扩展",       urlKey: "openNavPass" },
      ],
    },

    /* ---- 教育经历 ---- */
    education: {
      title: "教育经历",
      items: [
        { period: "2013 - 2017", school: "一本院校", degree: "本科 · 网络工程" },
      ],
    },

    /* ---- 资格证书 ---- */
    certs: {
      title: "资格证书",
      items: [
        "大学英语四级（CET-4）",
        "证券从业资格证",
      ],
    },

  },

  /* ==================== English 版 ==================== */
  en: {
    htmlLang: "en",
    title: "Frank · Full-Stack Engineer · Resume",
    metaDesc: "Frank's resume: a full-stack engineer with 9 years of experience, an AI-native developer with strong product thinking and independent delivery capability.",

    ui: {
      langSwitch: "中文",
      githubBtn: "GitHub",
      contactBtn: "Contact",
      contactTitle: "Contact Me",
      modalHint: "To protect this address from scrapers, the email is generated on demand:",
      copyBtn: "Copy Email",
      mailBtn: "Send Email",
      copied: "Email copied to clipboard",
      printBtn: "Save as PDF",
      featuredBadge: "Featured",
    },

    header: {
      name: "Frank",
      role: "Full-Stack Engineer · Product-Minded Developer",
      tagline: "Turning complex business problems into products people can actually use.",
      summary: "9 years of experience across complex B2B platforms, low-code systems and independent products. I turn business problems into clear product abstractions and full-stack delivery, using AI agents to amplify—not replace—engineering judgment.",
      meta: [
        "9 years of experience",
        "Guangzhou, China",
        "2 open-source projects with 100+ stars each",
      ],
    },

    about: {
      title: "Core Strengths",
      cards: [
        {
          icon: "lightbulb",
          title: "Business & Product Abstraction",
          desc: "I define requirements around real user journeys—from discovery to review—instead of shipping a disconnected feature checklist.",
        },
        {
          icon: "cpu",
          title: "AI Leverage, Engineering Judgment",
          desc: "I steer AI agents through requirement breakdown, architectural boundaries and acceptance checks, while owning a 43k-line desktop product end to end.",
        },
        {
          icon: "layers",
          title: "Complex Full-Stack Delivery",
          desc: "From UX and data to real-time communication and desktop releases, I turn technical designs into reliable, usable products.",
        },
        {
          icon: "zap",
          title: "0-to-1 & Continuous Iteration",
          desc: "Two 0-to-1 advertising products, a low-code platform and evolving independent products—delivered both in teams and independently.",
        },
      ],
    },

    skills: {
      title: "Tech Stack",
      groups: [
        { name: "Frontend",            items: ["Vue.js / Vue 3", "React", "WeChat Mini Programs", "Element Plus", "ECharts / klinecharts"] },
        { name: "Backend & Data",      items: ["Node.js", "SQLite", "MongoDB", "MySQL"] },
        { name: "Desktop & Automation", items: ["Electron", "Puppeteer", "Chrome Extensions"] },
        { name: "AI Collaboration",    items: ["Cursor", "Trae", "Prompt Engineering", "AI Agent Workflows"] },
        { name: "Product & Architecture", items: ["Product Design", "Low-code Platform Architecture", "Data Visualization", "UX Design"] },
      ],
    },

    experience: {
      title: "Experience",
      items: [
        {
          period: "Jan 2024 - Present",
          company: "US Proprietary Trading Firm",
          role: "Day Trader · Independent Product Developer",
          bullets: [
            "Used real day-trading workflows as the product proving ground, turning repeated screening, research and risk-control tasks into a personal trading system;",
            "Independently built a US stock scanner integrating 10+ data sources, second-level quotes, AI-assisted analysis and risk alerts, closing the loop between live validation and product iteration;",
            "Owned product definition, UX, architecture, data engineering, development and desktop release: ~43k lines of code across 122 modules.",
          ],
          highlights: [],
        },
        {
          period: "Oct 2019 - Nov 2023",
          company: "A Major Telecom Carrier",
          role: "Full-Stack Engineer",
          bullets: [
            "Led the 0-to-1 front-end delivery of an industrial big-data platform;",
            "Led the architecture and core modules of a low-code dashboard product, abstracting drag-and-drop editing, config-driven rendering, component registration and data-source management; shipped 100+ components to multiple large enterprises;",
            "Contributed to an industrial cloud platform while independently delivering a mini program for government and enterprise clients, balancing complex platforms with fast business delivery.",
          ],
          highlights: [
            "Top rating (A) two years in a row (top 20% of R&D)",
            "Annual Outstanding Employee (top 5%)",
          ],
        },
        {
          period: "Jul 2017 - Sep 2019",
          company: "Mobile Advertising Tech Company",
          role: "Front-End Engineer",
          bullets: [
            "Delivered two 0-to-1 B2B products—a DSP advertising platform and an ad-data insights product—covering both campaign operations and performance analysis;",
            "Went beyond page implementation by organizing information and interactions around advertiser workflows, building reusable experience in business abstraction and data presentation;",
            "Proactively extended the DSP to mobile by independently building its companion mini program, which won 2nd place in the company's “hackathon” competition.",
          ],
          highlights: [
            "Annual rating A (top 20% of R&D)",
          ],
        },
      ],
    },

    projects: {
      title: "Projects",
      items: [
        {
          name: "US Stock Scanner",
          period: "Apr 2024 - Present",
          role: "Sole owner: product definition, architecture and all code",
          featured: true,
          desc: "A cross-platform US stock trading workbench built on Electron + Vue 3 + SQLite for day traders, covering the complete trading loop of Discover → Research → Monitor → Decide → Review. 122 modules and ~43k lines, built entirely by one person.",
          stats: [
            { num: "43K+", label: "lines of code" },
            { num: "122",  label: "modules" },
            { num: "10+",  label: "data sources" },
            { num: "1",    label: "developer" },
          ],
          bullets: [
            "Product loop: separate small-cap discovery through scanning from large-cap / ETF monitoring through subscriptions, then connect stock research, event-driven decisions and K-line review;",
            "AI workflow: prompt templates and ${symbol} context rendering bring structured stock data into AI analysis in one click—local systems own data and context, while AI handles reasoning;",
            "Data reliability: govern 10+ heterogeneous sources with multi-source failover, per-domain circuit breakers, rolling-window rate limits and negative caching to stay available within free quotas;",
            "Real-time scheduling: WebSocket push, 300ms throttling and snapshot recovery deliver second-level quotes; three sync queues and a watchdog coordinate tasks at different frequencies;",
            "Productized risk: turn Nasdaq compliance rules and SEC financing filings into five-level delisting alerts, dilution warnings and event-risk calendars.",
          ],
          tags: ["Electron", "Vue 3", "SQLite", "WebSocket", "Puppeteer", "AI Collaboration", "Circuit Breaker"],
        },
        {
          name: "opennavpass (NavPass)",
          period: "Aug 2026",
          role: "Sole owner: product design, Chrome extension architecture and development",
          featured: false,
          desc: "A Vue 3 + Chrome Manifest V3 new-tab navigator and private link manager: built directly on browser bookmarks, with end-to-end encryption and WebDAV sync—no central server required.",
          stats: [],
          bullets: [
            "Bookmarks as navigation: read Chrome bookmarks directly and sync sections automatically, with deep search and flattened folder views to eliminate duplicate bookmark and navigation maintenance;",
            "Complete saving flow: connect the new tab, popup, in-page badge and context menu, covering saving, search, groups, notes, restoring to bookmarks, and encrypted backup / recovery;",
            "End-to-end encryption: use Web Crypto with PBKDF2-SHA256 (600,001 iterations) to derive AES-GCM 256-bit keys; store ciphertext only locally and in the cloud, with auto-lock and full re-encryption after password changes;",
            "Extension engineering: coordinate MV3 contexts and a modular service worker, implement a native-fetch WebDAV client, and use idle prefetching, request deduplication, cache eviction and multi-level favicon fallbacks.",
          ],
          tags: ["Vue 3", "Chrome MV3", "Web Crypto", "WebDAV", "UnoCSS"],
        },
        {
          name: "Low-Code Data Dashboard Platform",
          period: "Jan 2021 - Dec 2022",
          role: "Architecture design & core module development",
          featured: false,
          desc: "An enterprise low-code platform: build data dashboards via drag-and-drop, with 100+ built-in visualization components, supporting no-code configuration and low-code extension.",
          stats: [],
          bullets: [
            "Visual drag-and-drop editing engine: canvas editor with free layout, grid snapping, alignment guides, layer management and undo/redo;",
            "Component architecture: unified component spec and dynamic registration, 100+ built-in components, extensible and reusable;",
            "Config-driven rendering engine: structured storage of component configs, decoupling the editor from runtime; save / load / preview / publish;",
            "Data source management: unified static / dynamic API access with transform, mapping and scheduled refresh; cross-component interaction;",
            "Backend & performance: Node.js + MongoDB services; on-demand loading and chart-instance reuse to optimize heavy dashboards.",
          ],
          achievement: "Deployed for multiple large enterprise customers, significantly cutting dashboard development cost and delivery time.",
          tags: ["Vue.js", "ECharts", "Node.js", "MongoDB", "Low-code"],
        },
        {
          name: "Mental Math Trainer Mini Program",
          period: "Dec 2025",
          role: "Sole owner: product design, planning and all development",
          featured: false,
          desc: "A mental-math practice tool for kids in early primary school, helping them consolidate math fundamentals and making parents' coaching easier.",
          stats: [],
          bullets: [
            "Worksheet generation: auto-generates A4-sized worksheets in multiple question types, exportable as images / PDF for printing and sharing;",
            "Online practice & analytics: auto-records answers and generates learning reports for parents;",
            "Targeted practice & mistake book: practice by question type or knowledge point, with mistake review and reinforcement.",
          ],
          tags: ["WeChat Mini Program", "Education", "Product Design"],
        },
      ],
    },

    openSource: {
      title: "Open Source & Side Projects",
      items: [
        { name: "awesome-jobs",    desc: "Daily-collected dev job openings from major tech companies · 120+ stars", urlKey: "awesomeJobs" },
        { name: "zhanghaozhushou", desc: "A WeChat mini program for account management · 110+ stars",                urlKey: "zhanghaozhushou" },
        { name: "opennavpass",     desc: "Encrypted bookmark navigation & private link manager for Chrome",            urlKey: "openNavPass" },
      ],
    },

    education: {
      title: "Education",
      items: [
        { period: "2013 - 2017", school: "A First-Tier University", degree: "BEng in Network Engineering" },
      ],
    },

    certs: {
      title: "Certificates",
      items: [
        "CET-4 (College English Test, Band 4)",
        "Securities Practitioner Qualification (China)",
      ],
    },

  },
};
