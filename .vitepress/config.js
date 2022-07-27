import { defineConfig } from "vitepress";

import { version } from "../package.json";

export default defineConfig({
	lang: "en-US",
	title: "Hestia Control Panel",
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
			{
				icon: {
					svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><title>Forum</title><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>',
				},
				link: "https://forum.hestiacp.com/",
			},
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
		{ text: "Team", link: "/team", activeMatch: "/team" },
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
		{
			text: "Reference",
			collapsible: true,
			items: [
				{ text: "CLI", link: "/guide/cli-reference" },
				{ text: "API", link: "/guide/api-reference" },
			],
		},
	];
}
