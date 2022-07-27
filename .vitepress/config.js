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

		sidebar: {
			"/docs/": sidebarDocs(),
			"/old/": sidebarOld(),
		},

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

		// algolia: {
		//   appId: "2PN8794ZO9",
		//   apiKey: "8a55d7d941cd49b3df09337bc46659c5",
		//   indexName: "hestiacp",
		// },
	},
});
/**
 * @returns {import("vitepress").DefaultTheme.NavItem[]}
 */
function nav() {
	return [
		{ text: "Demo", link: "https://demo.hestiacp.com:8083/" },
		{ text: "Docs", link: "/old/getting_started", activeMatch: "/old/" },
		{ text: "Team", link: "/team", activeMatch: "/team" },
		{ text: "Donate", link: "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ST87LQH2CHGLA" },
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
function sidebarDocs() {
	return [
		{
			text: "Introduction",
			items: [
				{ text: "Getting Started", link: "/docs/getting-started" },
				{ text: "Main Features", link: "/docs/main-features" },
				{ text: "Adding a domain", link: "/docs/adding-a-domain" },
			],
		},
		{
			text: "Reference",
			collapsible: true,
			items: [
				{ text: "CLI", link: "/docs/cli-reference" },
				{ text: "API", link: "/docs/api-reference" },
			],
		},
	];
}

/**
 * @returns {import("vitepress").DefaultTheme.SidebarGroup[]}
 */
function sidebarOld() {
	return [
		{
			text: "Introduction",
			collapsible: true,
			items: [
				{ text: "Getting started", link: "/old/getting_started" },
				{ text: "Main features", link: "/old/features" },
				{ text: "Customize", link: "/old/customize_hestia" },
			],
		},
		{
			text: "Admin",
			collapsible: true,
			items: [
				{ text: "API", link: "/old/admin/api" },
				{ text: "API examples", link: "/old/admin/rest_api" },
				{ text: "Backups", link: "/old/admin/backups" },
				{ text: "Cron", link: "/old/admin/cron" },
				{ text: "Database", link: "/old/admin/database" },
				{ text: "PHPmyAdmin SSO", link: "/old/admin/phpmyadmin-sso" },
				{ text: "DNS", link: "/old/admin/dns" },
				{ text: "Mail", link: "/old/admin/mail" },
				{ text: "Settings", link: "/old/admin/settings" },
				{ text: "File manager", link: "/old/admin/filemanager" },
				{ text: "Firewall", link: "/old/admin/firewall" },
				{ text: "Upgrades", link: "/old/admin/upgrades" },
				{ text: "Users", link: "/old/admin/users" },
				{ text: "Web", link: "/old/admin/web" },
				{ text: "FastCGI", link: "/old/admin/fastcgi" },
				{ text: "SSL certificates", link: "/old/admin/ssl_certificates" },
			],
		},
		{
			text: "GUI",
			collapsible: true,
			items: [
				{ text: "Best practices", link: "/old/gui/best_practices" },
				{ text: "User options", link: "/old/gui/user_options" },
				{ text: "Web domains", link: "/old/gui/webdomains" },
			],
		},
		{
			text: "CLI",
			collapsible: true,
			items: [{ text: "Commands", link: "/old/cli_commands" }],
		},
		{
			text: "Development",
			collapsible: true,
			items: [
				{ text: "Docs", link: "/old/development/docs" },
				{ text: "Panel", link: "/old/development/panel" },
				{ text: "Translating", link: "/old/development/translating" },
			],
		},
	];
}
