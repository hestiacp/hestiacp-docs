import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
	lang: "en-US",
	title: "Hestia Control Panel",
	description: "Open-source web server control panel.",
	head: [
		["link", { rel: "stylesheet", href: "/styles/fontawesome.min.css" }],
		["link", { rel: "icon", sizes: "any", href: "/favicon.ico" }],
		["link", { rel: "icon", type: "image/svg+xml", sizes: "16x16", href: "/logo.svg" }],
		["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
		["link", { rel: "manifest", href: "/site.webmanifest" }],
		["meta", { name: "theme-color", content: "#b7236a" }],
	],

	lastUpdated: true,

	themeConfig: {
		logo: "/logo.svg",
		// algolia: {
		//   appId: "REPLACE_ME",
		//   apiKey: "REPLACE_ME",
		//   indexName: "REPLACE_ME",
		// },
		nav: nav(),
		socialLinks: [
			{ icon: "github", link: "https://github.com/hestiacp/hestiacp" },
			{ icon: "discord", link: "https://discord.com/invite/yy75DKs" },
			{ icon: "twitter", link: "https://twitter.com/HestiaPanel" },
			{ icon: "facebook", link: "https://www.facebook.com/hestiacp" },
		],

		sidebar: { "/docs/": sidebarDocs() },

		editLink: {
			pattern: "https://github.com/hestiacp/hestiacp-docs/edit/main/docs/:path",
			text: "Edit this page on GitHub",
		},
		footer: {
			message: "Released under the GPLv3 License.",
			copyright: "Copyright © 2019-present Hestia Control Panel",
		},
	},
});

function nav(): DefaultTheme.NavItem[] {
	return [
		{ text: "Features", link: "/features.md" },
		{ text: "Docs", link: "/docs/introduction/why-hestia.md", activeMatch: "/docs/" },
		{ text: "Team", link: "/team.md" },
		{ text: "Demo", link: "https://demo.hestiacp.com:8083/" },
		{ text: "Forum", link: "https://forum.hestiacp.com/" },
		{ text: "Donate", link: "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ST87LQH2CHGLA" },
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
				{
					text: "Security policy",
					link: "https://github.com/hestiacp/hestiacp/blob/main/SECURITY.md",
				},
			],
		},
	];
}

function sidebarDocs(): DefaultTheme.SidebarGroup[] {
	return [
		{
			text: "Introduction",
			items: [
				{ text: "Why Hestia?", link: "/docs/introduction/why-hestia.md" },
				{ text: "Getting started", link: "/docs/introduction/getting-started.md" },
				{ text: "Best practices", link: "/docs/introduction/best-practices.md" },
				{ text: "Architecture", link: "/docs/introduction/architecture.md" },
				{ text: "Customisation", link: "/docs/introduction/customisation.md" },
			],
		},
		{
			text: "User guide",
			collapsible: true,
			items: [
				{ text: "Users", link: "/docs/user-guide/users.md" },
				{ text: "Packages", link: "/docs/user-guide/packages.md" },
				{ text: "Web domains", link: "/docs/user-guide/web-domains.md" },
				{ text: "DNS", link: "/docs/user-guide/dns.md" },
				{ text: "Mail domains", link: "/docs/user-guide/mail-domains.md" },
				{ text: "Databases", link: "/docs/user-guide/databases.md" },
				{ text: "Cron jobs", link: "/docs/user-guide/cron-jobs.md" },
				{ text: "Backups", link: "/docs/user-guide/backups.md" },
				{ text: "File manager", link: "/docs/user-guide/file-manager.md" },
				{ text: "Statistics", link: "/docs/user-guide/statistics.md" },
				{ text: "Notifications", link: "/docs/user-guide/notifications.md" },
				{ text: "Account", link: "/docs/user-guide/account.md" },
			],
		},
		// {
		// 	text: "Server administration",
		// 	collapsible: true,
		// 	items: [],
		// },
		{
			text: "Contributing",
			items: [
				{ text: "Development", link: "/docs/contributing/development.md" },
				{ text: "Documentation", link: "/docs/contributing/documentation.md" },
				{ text: "Translations", link: "/docs/contributing/translations.md" },
			],
		},
		{
			text: "Community",
			items: [
				{ text: "Install script generator", link: "/docs/community/install-script-generator.md" },
				{ text: "Hestia Nginx Cache", link: "/docs/community/hestia-nginx-cache.md" },
			],
		},
		{
			text: "CLI Reference",
			items: [{ text: "Commands", link: "/docs/cli/commands.md" }],
		},
	];
}