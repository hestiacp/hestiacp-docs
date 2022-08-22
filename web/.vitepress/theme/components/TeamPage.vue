<script setup lang="ts">
import type { DefaultTheme } from "vitepress";
import { VPTeamPage, VPTeamPageTitle, VPTeamPageSection, VPTeamMembers } from "vitepress/theme";

const projectManagers: DefaultTheme.TeamMember[] = [
	{
		avatar: "https://www.github.com/ScIT-Raphael.png",
		name: "Raphael Schneeberger 🇨🇭",
		title: "Project Founder",
		links: [{ icon: "github", link: "https://github.com/ScIT-Raphael" }],
	},
	{
		avatar: "https://www.github.com/jaapmarcus.png",
		name: "Jaap Marcus 🇳🇱",
		links: [
			{ icon: "github", link: "https://github.com/jaapmarcus" },
			{ icon: "twitter", link: "https://twitter.com/jaapmarcus" },
		],
	},
	{
		avatar: "https://www.github.com/Lupul.png",
		name: "Robert Zollner 🇷🇴",
		links: [{ icon: "github", link: "https://github.com/Lupul" }],
	},
];

const teamMembers: DefaultTheme.TeamMember[] = [
	{
		avatar: "https://www.github.com/jakobbouchard.png",
		name: "Jakob Bouchard 🇨🇦",
		title: "Developer",
		org: "Prosomo",
		orgLink: "https://prosomo.com",
		links: [
			{ icon: "github", link: "https://github.com/jakobbouchard" },
			{ icon: "linkedin", link: "https://linkedin.com/in/bouchardjakob" },
			{
				icon: {
					svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><title>Website</title><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>',
				},
				link: "https://jakobbouchard.dev",
			},
		],
	},
	{
		avatar: "https://cdn.discordapp.com/avatars/737905427097845780/32452f630dd8684ed7c580806ccbee09.webp",
		name: "Falzo 🇩🇪",
		links: [{ icon: "github", link: "https://github.com/falzoMAD" }],
	},
	{
		avatar: "https://www.github.com/divinity76.png",
		name: "divinity76 🇳🇴",
		links: [{ icon: "github", link: "https://github.com/divinity76" }],
	},
	{
		avatar: "https://www.github.com/istiak101.png",
		name: "istiak101 🇧🇩",
		links: [{ icon: "github", link: "https://github.com/istiak101" }],
	},
	{
		avatar: "https://www.github.com/Pleskan.png",
		name: "Anton Pleskanovskyy 🇺🇦",
		links: [{ icon: "github", link: "https://github.com/Pleskan" }],
	},
];

const featuredContributors: DefaultTheme.TeamMember[] = [
	{
		avatar: "/apple-touch-icon.png",
		name: "John Doe",
		links: [{ icon: "github", link: "https://github.com/hestiacp" }],
	},
	{
		avatar: "/apple-touch-icon.png",
		name: "John Doe",
		links: [{ icon: "github", link: "https://github.com/hestiacp" }],
	},
	{
		avatar: "/apple-touch-icon.png",
		name: "John Doe",
		links: [{ icon: "github", link: "https://github.com/hestiacp" }],
	},
	{
		avatar: "/apple-touch-icon.png",
		name: "John Doe",
		links: [{ icon: "github", link: "https://github.com/hestiacp" }],
	},
];
</script>

<template>
	<VPTeamPage>
		<VPTeamPageTitle>
			<template #title>The Team</template>
			<template #lead>
				The development of Hestia is guided by an international team, some of whom have chosen to be featured below.
			</template>
		</VPTeamPageTitle>
		<VPTeamPageSection>
			<template #title>Project Managers</template>
			<template #members>
				<VPTeamMembers :members="projectManagers" />
			</template>
		</VPTeamPageSection>
		<VPTeamPageSection>
			<template #title>Team Members</template>
			<template #members>
				<VPTeamMembers :members="teamMembers" />
			</template>
		</VPTeamPageSection>
		<VPTeamPageSection>
			<template #title>Contributors ❤️</template>
			<template #members>
				<VPTeamMembers size="small" :members="featuredContributors" />
			</template>
		</VPTeamPageSection>
	</VPTeamPage>
</template>
