import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

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
    docsearchPlugin({
      // // 搜索插件 配置项
        appId: "9QVS7BT1LD",
        apiKey: "81b838a454686cdd2c100c4340c0b5bc",
 
        indexName: "zhibilinio",
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
              vendor: [
                "@vuepress/plugin-markdown-tab",
                "@vuepress/plugin-redirect",
                "@vuepress/plugin-revealjs",
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
