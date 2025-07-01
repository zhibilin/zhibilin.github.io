import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
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
     slimsearchPlugin({
      // 配置项
    
     indexContent:true,
       customFields: [
        {
          name: 'author',
          getter: (page) => page.frontmatter.author,
          formatter: '作者：$content',
        },
        {
          name: 'category',
          getter: (page) => page?.frontmatter?.category,
          formatter: '分类：$content',
        },
        {
          name: 'tag',
          getter: (page) => page?.frontmatter?.tag,
          formatter: '标签：$content',
        },
        {
          name: 'updateTime',
          getter: (page) => page?.data?.git?.updateTime?.toLocaleString(),
          formatter: {
            '/': 'Update time: $content',
            '/zh/': '更新时间：$content',
          },
        },
      ],
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
