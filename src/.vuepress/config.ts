<<<<<<< HEAD

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import theme from "./theme.js";


export default defineUserConfig({

  base: "/",
=======
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

>>>>>>> 708fe462470277a5931cb1ba89651af6ad29f7bb
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
<<<<<<< HEAD

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

=======
>>>>>>> 708fe462470277a5931cb1ba89651af6ad29f7bb
});
