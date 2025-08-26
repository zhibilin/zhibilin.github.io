import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/": [
       {
      text: "Node1",
      prefix: "node/",
      link: "node/index",
      collapsible: true,
      children: "structure",
    }
  ],
});
