---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamPageSection, VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/jaapmarcus.png',
    name: 'Jaap Marcus',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/jaapmarcus' },
      { icon: 'twitter', link: 'https://twitter.com/jaapmarcus' }
    ]
  },
  {
    avatar: 'https://www.github.com/ScIT-Raphael.png',
    name: 'Raphael',
    title: 'Developer',
    links: [{ icon: 'github', link: 'https://github.com/ScIT-Raphael' }]
  },
  {
    avatar: 'https://www.github.com/divinity76.png',
    name: 'divinity76',
    title: 'Developer',
    links: [{ icon: 'github', link: 'https://github.com/divinity76' }]
  },
  {
    avatar: 'https://www.github.com/Lupul.png',
    name: 'Zollner Robert',
    title: 'Developer',
    links: [{ icon: 'github', link: 'https://github.com/Lupul' }]
  }
]
const featuredContributors = [
  {
    avatar: 'https://www.github.com/jakobbouchard.png',
    name: 'Jakob Bouchard',
    title: 'Docs Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/jakobbouchard' },
      { icon: 'twitter', link: 'https://twitter.com/bouchardjakob' }
    ]
  },
  {
    avatar: '/logo.png',
    name: 'John Doe',
    title: 'Lorem ipsum',
    links: [{ icon: 'github', link: '#' }]
  },
  {
    avatar: '/logo.png',
    name: 'John Doe',
    title: 'Lorem ipsum',
    links: [{ icon: 'github', link: '#' }]
  },
  {
    avatar: '/logo.png',
    name: 'John Doe',
    title: 'Lorem ipsum',
    links: [{ icon: 'github', link: '#' }]
  }
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
  <VPTeamPageSection>
    <template #title>Main Team Members</template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Contributors</template>
    <template #members>
      <VPTeamMembers size="small" :members="featuredContributors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
