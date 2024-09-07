<script lang="ts">
  import { Tabs } from '@svelteuidev/core';
  import InformationBarTemplate from '../templates/InformationBarTemplate.svelte';
  import FixedBannerTemplate from '../templates/FixedBannerTemplate.svelte';
  import BlogLinkTemplate from '../templates/BlogLinkTemplate.svelte';

  import IconInformationBar from '../assets/img__informationbar.svg';
  import IconFixedBanner from '../assets/img__fixedbanner.svg';
  import IconBlogLink from '../assets/img__review.svg';


  let selectedComponent = "informationBar";

  function showComponent(component: string) {
    selectedComponent = component;
  }

</script>


<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
  <!-- カード1 -->
  <button class={`btn ${selectedComponent === 'informationBar' ? 'bg-[#99CCFF]' : 'bg-base-100'} shadow-xl h-48`} on:click={() => showComponent("informationBar")}>
    <div class="card-body flex flex-col justify-center items-center">
      <div class="font-bold">お知らせバー</div>
      <div class="card-actions justify-center">
        <img src={IconInformationBar} alt="お知らせバー" class="w-24 h-24" />
      </div>
    </div>
  </button>

  <!-- カード2 -->
  <button class={`btn ${selectedComponent === 'fixedBanner' ? 'bg-[#99CCFF]': 'bg-base-100'} shadow-xl h-48`}  on:click={() => showComponent("fixedBanner")}>
    <div class="card-body">
      <div class="font-bold">固定バナー</div>
      <div class="card-actions justify-center">
        <img src={IconFixedBanner} alt="固定バナー" class="w-24 h-24" />
      </div>
    </div>
  </button>

  <!-- カード3 -->
  <button class={`btn ${selectedComponent === 'blogLink' ? 'bg-[#99CCFF]' : 'bg-base-100'} shadow-xl h-48`}  on:click={() => showComponent("blogLink")}>
    <div class="card-body flex flex-col items-center justify-center">
      <div class="font-bold">ブログリンク</div>
      <div class="card-actions justify-center">
        <img src={IconBlogLink} alt="ブログリンク" class="w-24 h-24" />
      </div>
    </div>
  </button>
</div>


<div class="py-4">
  <!-- 選択されたコンポーネントの表示 -->
  {#if selectedComponent === "informationBar"}
    <InformationBarTemplate />
  {:else if selectedComponent === "fixedBanner"}
    <FixedBannerTemplate />
  {:else if selectedComponent === "blogLink"}
    <BlogLinkTemplate />
  {/if}
</div>
