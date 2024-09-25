
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import theme from "./theme.js";


export default defineUserConfig({

  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "docs",
      description: "",
    },
  },

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
