import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "个人笔记",
    icon: "circle-info",
    link: "note/server"

  },
  {
    text: "代码示例",
    icon: "person-chalkboard",
    link: "sample/processor",
  },
  {
    text: "API文档",
    icon: "fab fa-markdown",
    link: "api/dynamic-table-config"
  },
]);
