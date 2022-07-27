import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
	lang: "en-US",
	title: "Hestia Control Panel",
	description: "Open-source web server control panel.",
	head: [
		["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
		["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
		["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
		["link", { rel: "manifest", href: "/site.webmanifest" }],
		["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#b7236a" }],
		["meta", { name: "msapplication-TileColor", content: "#b7236a" }],
		["meta", { name: "theme-color", content: "#b7236a" }],
	],

	lastUpdated: true,

	themeConfig: {
		logo: "/logo.png",
		// algolia: {
		//   appId: "2PN8794ZO9",
		//   apiKey: "8a55d7d941cd49b3df09337bc46659c5",
		//   indexName: "hestiacp",
		// },
		nav: nav(),
		socialLinks: [
			{ icon: "github", link: "https://github.com/hestiacp/hestiacp" },
			{ icon: "discord", link: "https://discord.com/invite/yy75DKs" },
			// {
			// 	icon: {
			// 		svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><title>Forum</title><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>',
			// 	},
			// 	link: "https://forum.hestiacp.com/",
			// },
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
		{ text: "Docs", link: "/docs/introduction/getting-started.md", activeMatch: "/docs/" },
		{ text: "Team", link: "/team.md" },
		{ text: "Demo", link: "https://demo.hestiacp.com:8083/" },
		{ text: "Donate", link: "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ST87LQH2CHGLA" },
		{
			text: `v1.6.x`,
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
				{ text: "Getting started", link: "/docs/introduction/getting-started.md" },
				{ text: "Architecture overview", link: "/docs/introduction/architecture.md" },
				{ text: "Customization", link: "/docs/introduction/customization.md" },
			],
		},
		{
			text: "Admin",
			collapsible: true,
			collapsed: true,
			items: [
				{ text: "API", link: "/docs/admin/api.md" },
				{ text: "API examples", link: "/docs/admin/rest_api.md" },
				{ text: "Backups", link: "/docs/admin/backups.md" },
				{ text: "Cron", link: "/docs/admin/cron.md" },
				{ text: "Database", link: "/docs/admin/database.md" },
				{ text: "PHPmyAdmin SSO", link: "/docs/admin/phpmyadmin-sso.md" },
				{ text: "DNS", link: "/docs/admin/dns.md" },
				{ text: "Mail", link: "/docs/admin/mail.md" },
				{ text: "Settings", link: "/docs/admin/settings.md" },
				{ text: "File manager", link: "/docs/admin/filemanager.md" },
				{ text: "Firewall", link: "/docs/admin/firewall.md" },
				{ text: "Upgrades", link: "/docs/admin/upgrades.md" },
				{ text: "Users", link: "/docs/admin/users.md" },
				{ text: "Web", link: "/docs/admin/web.md" },
				{ text: "FastCGI", link: "/docs/admin/fastcgi.md" },
				{ text: "SSL certificates", link: "/docs/admin/ssl_certificates.md" },
			],
		},
		{
			text: "GUI",
			collapsible: true,
			collapsed: true,
			items: [
				{ text: "Best practices", link: "/docs/gui/best_practices.md" },
				{ text: "User options", link: "/docs/gui/user_options.md" },
				{ text: "Web domains", link: "/docs/gui/webdomains.md" },
			],
		},
		{
			text: "CLI",
			items: [{ text: "Commands", link: "/docs/cli/commands.md" }],
		},
		{
			text: "Contributing",
			items: [
				{ text: "Documentation", link: "/docs/contributing/documentation.md" },
				{ text: "Development", link: "/docs/contributing/development.md" },
				{ text: "Translations", link: "/docs/contributing/translations.md" },
			],
		},
	];
}
