import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/": [
    
       {
      text: "api",
      prefix: "api/",
      link: "api/index",
      collapsible: true,
      children: "structure",
    },
     {
      text: "deploy",
      prefix: "deploy/",
      link: "deploy/index",
      collapsible: true,
      children: "structure",
    },

    {
      text: "sample",
      prefix: "sample/",
      link: "sample/",
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
