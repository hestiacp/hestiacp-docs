import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Hestia Control Panel",
  titleTemplate: "Hestia Control Panel",
  description: "An open-source Linux web server control panel.",

  lastUpdated: true,

  themeConfig: {
    logo: "https://www.hestiacp.com/img/logo.png",

    nav: [
      { text: "Guide", link: "#", activeMatch: "/guide/" },
      { text: "Configs", link: "#", activeMatch: "/config/" },
      {
        text: "v1.6.x",
        items: [
          {
            text: "Changelog",
            link: "https://github.com/hestiacp/hestiacp/blob/main/CHANGELOG.md",
          },
          {
            text: "Contributing",
            link: "https://github.com/hestiacp/hestiacp/blob/main/CONTRIBUTING.md",
          },
        ],
      },
    ],

    editLink: {
      pattern: "https://github.com/hestiacp/hestiacp-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/hestiacp/hestiacp" },
      { icon: "discord", link: "https://discord.com/invite/yy75DKs" },
      { icon: "twitter", link: "https://twitter.com/HestiaPanel" },
      { icon: "facebook", link: "https://www.facebook.com/hestiacp" },
    ],

    footer: {
      message:
        "❤️ Made with love & pride by the open-source community from around the world.",
      copyright: "GPLv3 | Copyright © 2022-present Hestia Control Panel",
    },

    // algolia: {
    //   appId: "8J64VVRP8K",
    //   apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //   indexName: "vitepress",
    // },

    // carbonAds: {
    //   code: "CEBDT27Y",
    //   placement: "vuejsorg",
    // },
  },
});
