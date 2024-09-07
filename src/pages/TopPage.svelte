<script lang="ts">
  import { Tabs } from '@svelteuidev/core';
  import InformationBarTemplate from '../templates/InformationBarTemplate.svelte';
  import FixedBannerTemplate from '../templates/FixedBannerTemplate.svelte';
  import BlogLinkTemplate from '../templates/BlogLinkTemplate.svelte';

</script>


<Tabs grow position="center">
  <Tabs.Tab label="お知らせバー">
    <InformationBarTemplate />
  </Tabs.Tab>
  <Tabs.Tab label="固定バナー">
    <FixedBannerTemplate />
  </Tabs.Tab>
  <Tabs.Tab label="ブログリンク">
    <BlogLinkTemplate />
  </Tabs.Tab>
</Tabs>
