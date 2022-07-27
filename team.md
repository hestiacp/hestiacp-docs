---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/jaapmarcus.png',
    name: 'Jaap Marcus',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/jaapmarcus' },
      { icon: 'twitter', link: 'https://twitter.com/jaapmarcus' },
    ]
  },
]
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
  <VPTeamMembers :members="members" />
</VPTeamPage>
