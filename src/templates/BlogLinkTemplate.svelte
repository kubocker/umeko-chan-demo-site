<script lang="ts">
  import {
    Group,
    Text,
    Space,
    Stack,
    Title 
  } from '@svelteuidev/core';
  import 'prismjs/themes/prism.css'; // プリズムのスタイルシートをインポート
  import Prism from 'prismjs'; // プリズムをインポート

  import { environment as env } from '../environment';


  /**
   * スコープ
   * プロパティ群
   */
  let url: string = '';



  let divTag: string = '';
  $: {
    divTag = `<div id="umeko__blogLink" data-url="${url}"></div>`
  }

</script>


<form>

  <Group position={'right'}>
    <label for="preview__fixedBanner" class="btn btn-xs btn-primary">プレビュー</label>
  </Group>

  <input type="checkbox" id="preview__fixedBanner" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box h-[800px]">
      <h-blog-link url={url}></h-blog-link>
    </div>
    <div class="modal-action">
      <label for="preview__fixedBanner" class="btn">閉じる</label>
    </div>
  </div>

  <Space h={'ls'} />
  <Space h={'ls'} />

  <!-- 埋め込みたぐの例 -->
  <div>
    <Stack>
      <Title order={5}>埋め込みタグ</Title>
      <div class="mockup-code">
        {@html
          Prism.highlight(
            `${divTag}<script type="module" src="${env.embed.url}/blogLink.js"></script>`,
            Prism.languages.markup,
            'markup'
          )
        }
      </div>
    </Stack>
  </div>
  <Space h={'ls'} />

  <!-- 遷移先URL -->
  <div>
    <Stack>
      <Title order={5}>リンク先</Title>
      <Text size={'xs'}>
        リンク先を記載してください
      </Text>
      <input
        class="input input-bordered input-sm w-full"
        type="text"
        placeholder="ex. https://www.yahoo.co.jp"
        bind:value={url}
      />
    </Stack>
  </div>
  <Space h={'md'} />

  <Space h={'md'} />
  <Space h={'md'} />

  <!-- プレビュー確認ボタン -->
  <!-- <div class="fixed right-4 bottom-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
      +
    </button>
  </div> -->
</form>
