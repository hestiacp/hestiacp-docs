---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamPageSection, VPTeamMembers } from 'vitepress/theme';

const projectManagers = [
  {
    avatar: 'https://www.github.com/jaapmarcus.png',
    name: 'Jaap Marcus 🇳🇱',
    links: [
      { icon: 'github', link: 'https://github.com/jaapmarcus' },
      { icon: 'twitter', link: 'https://twitter.com/jaapmarcus' },
    ],
  },
  {
    avatar: 'https://www.github.com/ScIT-Raphael.png',
    name: 'Raphael Schneeberger 🇨🇭',
    links: [{ icon: 'github', link: 'https://github.com/ScIT-Raphael' }],
  },
  {
    avatar: 'https://www.github.com/Lupul.png',
    name: 'Robert Zollner 🇷🇴',
    links: [{ icon: 'github', link: 'https://github.com/Lupul' }],
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/737720562482151485/bac8f56f0a909032efaf60c1aa4047e5.webp',
    name: 'Kristan Kenney 🇨🇦',
  },
];

const teamMembers = [
  {
    avatar: 'https://www.github.com/ioannidesalex.png',
    name: 'Alexandros Ioannides 🇨🇾',
    title: 'CTO',
    org: "FocusNet",
    orgLink: "https://focus-net.net/",
    links: [{ icon: 'github', link: 'https://github.com/ioannidesalex' }],
  },
  {
    avatar: 'https://www.github.com/jakobbouchard.png',
    name: 'Jakob Bouchard 🇨🇦',
    title: 'Developer',
    org: "Prosomo",
    orgLink: "https://prosomo.com",
    links: [
      { icon: 'github', link: 'https://github.com/jakobbouchard' },
      { icon: 'twitter', link: 'https://twitter.com/bouchardjakob' },
    ],
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/737905427097845780/32452f630dd8684ed7c580806ccbee09.webp',
    name: 'Falzo 🇩🇪',
    links: [{ icon: 'github', link: 'https://github.com/falzoMAD' }],
  },
  {
    avatar: 'https://www.github.com/cmstew.png',
    name: 'Curtis Stewart 🇨🇦',
    links: [{ icon: 'github', link: 'https://github.com/cmstew' }],
  },
  {
    avatar: 'https://www.github.com/divinity76.png',
    name: 'divinity76 🇳🇴',
    links: [{ icon: 'github', link: 'https://github.com/divinity76' }],
  },
];

const featuredContributors = [
  {
    avatar: '/logo.png',
    name: 'John Doe',
    links: [{ icon: 'github', link: 'https://github.com/hestiacp' }],
  },
  {
    avatar: '/logo.png',
    name: 'John Doe',
    links: [{ icon: 'github', link: 'https://github.com/hestiacp' }],
  },
  {
    avatar: '/logo.png',
    name: 'John Doe',
    links: [{ icon: 'github', link: 'https://github.com/hestiacp' }],
  },
  {
    avatar: '/logo.png',
    name: 'John Doe',
    links: [{ icon: 'github', link: 'https://github.com/hestiacp' }],
  },
];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      The Team
    </template>
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
    <template #title>Contributors</template>
    <template #members>
      <VPTeamMembers size="small" :members="featuredContributors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
