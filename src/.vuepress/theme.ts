import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://zhibilin.github.io",
  print: true,
  /**
   * // 默认为 GitHub. 同时也可以是一个完整的 URL
  // repo:
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
*/

  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  author: {
    name: "知code",
    url: "https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://vuepress.vuejs.org/images/hero.png",

  docsDir: "src",
  fullscreen: true,

  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "赣ICP备2022003118号-1",

      displayFooter: true,

      // page meta
      metaLocales: {
        origin: "原创",
        editLink: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    copyright: {
      author: "知Code",
      global: true,
    },
    markdownTab: true,
    revealjs: true,

    // search: true,
    docsearch: {
      appId: "9QVS7BT1LD",
      apiKey: "8a328d798e98ba5699e78b30fc0b2da9",
      indexName: "note",
      rateLimit: 8,
      startUrls: ["https://zhibilin.github.io/"],
      sitemaps: ["https://zhibilin.github.io/sitemap.xml"],
      ignoreCanonicalTo: true,
      exclusionPatterns: [],
      discoveryPatterns: ["https://zhibilin.github.io/**"],
      schedule: "at 02:00 every 1 day",
      actions: [
        {
          indexName: "note",
          pathsToMatch: ["https://zhibilin.github.io/**"],
          recordExtractor: ({ $, helpers }) => {
            // 以下是适用于 vuepress-theme-hope 的默认选项选项
            return helpers.docsearch({
              recordProps: {
                lvl0: {
                  selectors: [".vp-sidebar-link.active", "[vp-content] h1"],
                  defaultValue: "Documentation",
                },
                lvl1: "[vp-content] h1",
                lvl2: "[vp-content] h2",
                lvl3: "[vp-content] h3",
                lvl4: "[vp-content] h4",
                lvl5: "[vp-content] h5",
                lvl6: "[vp-content] h6",
                content: "[vp-content] p, [vp-content] li",
              },
              recordVersion: "v3",
            });
          },
        },
      ],
      initialIndexSettings: {
        YOUR_INDEX_NAME: {
          attributesForFaceting: ["type", "lang"],
          attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
          attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
          attributesToSnippet: ["content:10"],
          camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
          searchableAttributes: [
            "unordered(hierarchy_radio_camel.lvl0)",
            "unordered(hierarchy_radio.lvl0)",
            "unordered(hierarchy_radio_camel.lvl1)",
            "unordered(hierarchy_radio.lvl1)",
            "unordered(hierarchy_radio_camel.lvl2)",
            "unordered(hierarchy_radio.lvl2)",
            "unordered(hierarchy_radio_camel.lvl3)",
            "unordered(hierarchy_radio.lvl3)",
            "unordered(hierarchy_radio_camel.lvl4)",
            "unordered(hierarchy_radio.lvl4)",
            "unordered(hierarchy_radio_camel.lvl5)",
            "unordered(hierarchy_radio.lvl5)",
            "unordered(hierarchy_radio_camel.lvl6)",
            "unordered(hierarchy_radio.lvl6)",
            "unordered(hierarchy_camel.lvl0)",
            "unordered(hierarchy.lvl0)",
            "unordered(hierarchy_camel.lvl1)",
            "unordered(hierarchy.lvl1)",
            "unordered(hierarchy_camel.lvl2)",
            "unordered(hierarchy.lvl2)",
            "unordered(hierarchy_camel.lvl3)",
            "unordered(hierarchy.lvl3)",
            "unordered(hierarchy_camel.lvl4)",
            "unordered(hierarchy.lvl4)",
            "unordered(hierarchy_camel.lvl5)",
            "unordered(hierarchy.lvl5)",
            "unordered(hierarchy_camel.lvl6)",
            "unordered(hierarchy.lvl6)",
            "content",
          ],
          distinct: true,
          attributeForDistinct: "url",
          customRanking: [
            "desc(weight.pageRank)",
            "desc(weight.level)",
            "asc(weight.position)",
          ],
          ranking: [
            "words",
            "filters",
            "typo",
            "attribute",
            "proximity",
            "exact",
            "custom",
          ],
          highlightPreTag:
            '<span class="algolia-docsearch-suggestion--highlight">',
          highlightPostTag: "</span>",
          minWordSizefor1Typo: 3,
          minWordSizefor2Typos: 7,
          allowTyposOnNumericTokens: false,
          minProximity: 1,
          ignorePlurals: true,
          advancedSyntax: true,
          attributeCriteriaComputedByMinProximity: true,
          removeWordsIfNoResults: "allOptional",
        },
      },
    },
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    components: {
      // 你想使用的组件
      components: [
        "ArtPlayer",

        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
      ],
    },

    // These features are enabled for demo, only preserve features you need here
    markdownImage: {
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    },

    markdownMath: {
      // install katex before enabling it
      // type: "katex",
      // or install mathjax-full before enabling it
      type: "mathjax",
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      footnote: true,
      mark: true,
      markmap: true,
      flowchart: true,
      echarts: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // Install chart.js before enabling it
      // chart: true,

      // insert component easily

      // Install echarts before enabling it
      // echarts: true,

      // Install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // Install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // Install @vue/repl before enabling it
      // vuePlayground: true,

      // Install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
