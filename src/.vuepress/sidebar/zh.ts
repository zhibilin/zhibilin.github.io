import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // {
  //     text: "Node1",
  //     prefix: "node/",
  //     link: "node/index",
  //     collapsible: true,
  //     children: "structure",
  //   }
    
  "/": [
       {
      text: "Welcome to Node1!",
      collapsible: false,
      link: "node/index",
    },
     {
      text: "Pricing & Rate Limits",
     collapsible: false,
      link: "node/pricingRateLimits",
    }


  ],
});
