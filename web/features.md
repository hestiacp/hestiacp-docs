---
layout: page
title: Features
---

<script setup lang="ts">
  import FeaturePageTitle from "./.vitepress/theme/components/FeaturePageTitle.vue";
  import FeaturePageSection from "./.vitepress/theme/components/FeaturePageSection.vue";
  import FeatureList from "./.vitepress/theme/components/FeatureList.vue";
  import { users, webDomains, mail, databases, serverAdmin } from "./_data/features";
</script>

<FeaturePage>
  <FeaturePageTitle>
    <template #title>Features</template>
  </FeaturePageTitle>
  <FeaturePageSection>
    <template #title>Users</template>
    <template #lead>Ullamco eu voluptate ex laborum consequat anim adipisicing proident voluptate duis amet occaecat pariatur.</template>
    <template #list>
      <FeatureList :items="users"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection>
    <template #title>Web domains</template>
    <template #lead>Ullamco eu voluptate ex laborum consequat anim adipisicing proident voluptate duis amet occaecat pariatur.</template>
    <template #list>
      <FeatureList :items="webDomains"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection>
    <template #title>Mail</template>
    <template #lead>Ullamco eu voluptate ex laborum consequat anim adipisicing proident voluptate duis amet occaecat pariatur.</template>
    <template #list>
      <FeatureList :items="mail"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection>
    <template #title>Databases</template>
    <template #lead>Ullamco eu voluptate ex laborum consequat anim adipisicing proident voluptate duis amet occaecat pariatur.</template>
    <template #list>
      <FeatureList :items="databases"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection>
    <template #title>Server admin</template>
    <template #lead>Ullamco eu voluptate ex laborum consequat anim adipisicing proident voluptate duis amet occaecat pariatur.</template>
    <template #list>
      <FeatureList :items="serverAdmin"></FeatureList>
    </template>
  </FeaturePageSection>
</FeaturePage>
