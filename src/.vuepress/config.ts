


import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import theme from "./theme.js";
import { docsearchPlugin } from '@vuepress/plugin-docsearch';

export default defineUserConfig({

  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "docs",
      description: "",
    },
  },
   plugins: [
    //todo  search  详情看最近收到的QQ邮件有没有收到appid啥的
        docsearchPlugin({
      appId: '9QVS7BT1LD',
      apiKey: '8a328d798e98ba5699e78b30fc0b2da9',
      indexName: 'note',
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    }),
  ],
  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['@vuepress/plugin-markdown-tab'
              ,'@vuepress/plugin-redirect'
              ,'@vuepress/plugin-revealjs'
              // ,'markmap-common'
              ], // 手动拆分 vendor chunks
              // markmap: ['markmap-common'], // 手动拆分 markmap-common
            },
          },
        },
        chunkSizeWarningLimit: 2048, // 调整 chunk 大小限制
      },
    },
    vuePluginOptions: {},
  }),

});
