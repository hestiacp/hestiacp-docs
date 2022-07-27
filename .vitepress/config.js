import { defineConfig } from "vitepress";

import { version } from "../package.json";

export default defineConfig({
	lang: "en-US",
	title: "Hestia Control Panel",
	titleTemplate: "Hestia Control Panel",
	description: "Open-source web server control panel.",

	lastUpdated: true,

	themeConfig: {
		logo: "/logo.png",

		nav: nav(),

		sidebar: { "/guide/": sidebarGuide() },

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
			message: "Released under the GPLv3 License.",
			copyright: "Copyright © 2019-present Hestia Control Panel",
		},

		// Look at https://www.algolia.com/for-open-source/
		// algolia: {
		//   appId: "8J64VVRP8K",
		//   apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
		//   indexName: "hestiacp",
		// },

		// https://www.carbonads.net/
		// carbonAds: {
		//   code: "CEBDT27Y",
		//   placement: "hestiacp",
		// },
	},
});

function nav() {
	return [
		{ text: "Guide", link: "/guide/getting-started", activeMatch: "/guide/" },
		{ text: "Configs", link: "#", activeMatch: "/config/" },
		{
			text: `v${version}`,
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
	];
}

/**
 * @returns {import("vitepress").DefaultTheme.SidebarGroup[]}
 */
function sidebarGuide() {
	return [
		{
			text: "Introduction",
			collapsible: false,
			items: [{ text: "Getting Started", link: "/guide/getting-started" }],
		},
		{
			text: "Main features",
			collapsible: true,
			items: [],
		},
	];
}
