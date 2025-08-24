import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/": [
    "",
    {
      text: "代码示例",
      prefix: "note/",
      link: "note/",
      collapsible: true,
      children: "structure",
    },

    {
      text: "site",
      prefix: "site/",
      link: "site/markdown",
      collapsible: true,
      children: "structure",
    },
  ],
});
