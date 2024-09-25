import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/": [
    "",
    {
      text: "代码示例",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "API文档",
      prefix: "api/",
      link: "api/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "个人笔记",
      prefix: "note/",
      link: "note/",
      collapsible: true,
      children: "structure",
    },
  ],
});
