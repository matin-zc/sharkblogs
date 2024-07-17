

module.exports = {
  title: "Shark Chilli",
  description: "不坠青云之志",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    // 引入鼠标点击脚本
    ["script", {
      language: "javascript",
      type: "text/javascript",
      src: "/js/MouseClickEffect.js"
    }]
  ],
  theme: "reco",
  base: '/',
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "分类",
        ariaLabel: "分类",
        items: [
          {text: "关系型数据库", link: '/docs/blogs/theme.md'}
        ]
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "javascript",
        icon: "reco-message",
        items: [
          {
            text: "基础",
            link: "/blogs/js基础",
          },
        ],
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      '/blogs/': [
        {
          title: '基础',
          collapsable: true,
          children: [
              ['js基础/原型与原型链.md', '原型与原型链'],
          ]
        }
      ]
    },
    type: "blog",
    blogConfig: {
      // category: {
      //   location: 2,
      //   text: "分类L",
      // },
      // tag: {
      //   location: 3,
      //   text: "Tag",
      // },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      // {
      //   title: "vuepress-theme-reco",
      //   desc: "A simple and beautiful vuepress Blog & Doc theme.",
      //   avatar:
      //     "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: "https://vuepress-theme-reco.recoluan.com",
      // },
    ],
    logo: "/avatar.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Shark Chilli",
    authorAvatar: "/avatar.png",
    record: "xxxx",
    startYear: "2024"
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "@vuepress/plugin-photo-swipe",{
        // 选项
        selector: ".theme-default-content :not(a) > img:not([no-view])",
        download: true,
        fullscreen: true,
        scrollToClose: true,
        delay: 1000
      }
    ],
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme:['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        // clean: false,
        // messages: {
        //   welcome: "我是lookroot欢迎你的关注 ",
        //   home: "心里的花，我想要带你回家。",
        //   theme: "好吧，希望你能喜欢我的其他小伙伴。",
        //   close: "再见哦",
        // },
        // width: 150,
        // height: 220,
      },
    ],
    ["sakura", {
      num: 20,  // 默认数量
      show: true, //  是否显示
      zIndex: -1,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }     
  }],
    [
      "vuepress-plugin-go-top"
    ],
    // 图片预览插件
    ['@vuepress/medium-zoom', {
      selector: ".page img",
      options: {
          margin: 16,
          background: "#616161",
          scrollOffset: 0
      }
  }],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],
    [
      "@vuepress-reco/vuepress-plugin-bulletin-popover",
      {
        title: "公告",
        body: [
          {
            type: "title",
            content: "欢迎加我的QQ/vx 🎉🎉🎉",
            style: "text-aligin: center;",
          },
          {
            type: "text",
            content: "QQ/VX：1349320519",
            style: "text-align: center;",
          },
          {
            type: "text",
            content: "喜欢的主题特效可以去个人信息",
            style: "text-align: center;",
          },
          {
            type: "text",
            content: "友链或疑问均可在留言板给我留言",
            style: "text-align: center;",
          },
        ],
        footer: [{ type: "button", text: "打赏", link: "/blog/donate" }],
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          // 本地文件示例             // {             //   name: '장가갈 수 있을까',             //   artist: '咖啡少年',             //   url: '/bgm/1.mp3',             //   cover: '/bgm/1.jpg'             // },
          // 网络文件示例
          // {
          //   name: "강남역 4번 출구",
          //   artist: "Plastic / Fallin` Dild",
          //   url: "https://assets.smallsunnyfox.com/music/2.mp3",
          //   cover: "https://assets.smallsunnyfox.com/music/2.jpg",
          // },
          {
            name: "惊鸿一面",
            artist: "许嵩",
            url: "/惊鸿一面.mp3",
            cover: "/jinghong.jpg",
          },
        ],
        // 是否默认缩小
        autoShrink: true ,
        // 缩小时缩为哪种模式
        shrinkMode: 'float',
        // 悬浮窗样式
        floatStyle:{ bottom: '10px', 'z-index': '999999' }
      },
    ],
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,// size of the particle,
        default: 2,
        shape: "star", // shape of the particle
        // default: "star",
        zIndex: 999999999, // z-index property of the canvas
        default: 999999999,
      },
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    [
      //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
       'flowchart'
    ],
    // ["vuepress-plugin-nuggets-style-copy", {
    //   copyText: "复制代码",
    //   tip: {
    //       content: "复制成功"
    //   }
    // }]
    ['vuepress-plugin-code-copy', true],
    ['vuepress-plugin-reading-progress']
    
  ],
};
