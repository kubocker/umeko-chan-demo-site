<script lang="ts">
  import {
    Group,
    Space,
    Stack,
    Text,
    Title 
  } from '@svelteuidev/core';
  import 'prismjs/themes/prism.css';
  import Prism from 'prismjs';

  /* app */
  import { environment as env } from '../environment';

  /**
   * スコープ
   * プロパティ群
   */
  let text: string = '';
  let url: string = '';
  let category: string = 'primary';
  let position: string = 'fixed';


  /**
   * カテゴリ
   * オプション一覧
   */
  const categoryOptions = [
    { label: 'primary（青色：通常の強調スタイル）', value: 'primary' },
    { label: 'danger（赤色：アラートスタイル）', value: 'danger' },
    { label: 'warning（黄色：警告スタイル）', value: 'warning' },
  ];
 

  /**
   * スロット
   * オプション一覧
   */
   const positionOptions = [
    { label: 'ページ上部に常に固定表示', value: 'fixed' },
    { label: '埋め込んだ箇所に表示', value: 'relative' },
  ];

  let divTag: string = '';
  $: {
    divTag = `<div id="umeko__informationBar" data-text="${text}" data-url="${url}" data-category="${category}" data-position="${position}"></div>`
  }

</script>


<div>

  <Group position={'right'}>
    <label for="preview__informationBar" class="btn btn-xs btn-primary">プレビュー</label>
  </Group>

  <input type="checkbox" id="preview__informationBar" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box h-[500px]">
      <h-information-bar
        text={text}
        url={url}
        category={category}
        position={position}
      ></h-information-bar>
    </div>
    <div class="modal-action">
      <label for="preview__informationBar" class="btn">閉じる</label>
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
              `${divTag}<script type="module" src="${env.embed.url}/informationBar.js"></script>`,
              Prism.languages.markup,
              'markup'
            )
          }
        </div>
    </Stack>
  </div>
  <Space h={'ls'} />

  <!-- テキストメッセージ -->
  <div>
    <Stack>
      <Title order={5}>お知らせ内容</Title>
      <Text size={'xs'}>
        表示するテキストを記入してください。<br />
        お知らせバーは短く簡潔な文章がおすすめです。
      </Text>
      <input
        class="input input-bordered input-sm w-full"
        type="text"
        placeholder="ex. 年末年始休業のお知らせ"
        bind:value={text}
      />
    </Stack>
  </div>
  <Space h={'md'} />

  <!-- 遷移先URL -->
  <div>
    <Stack>
      <Title order={5}>遷移先URL</Title>
      <Text size={'xs'}>
        テキストをクリックした時に遷移先させるURLを記入してください。<br />
        設定不要の場合は空欄のまま保存してください。
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

  <!-- カテゴリ -->
  <div>
    <Stack>
      <Title order={5}>表示スタイル</Title>
      <Text size={'xs'}>
        強調レベルに応じて3種類のカラーからお選びください
      </Text>
      <div class="p-6 card bordered">
        {#each categoryOptions as cat}
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">{cat.label}</span>
              <input
                type="radio"
                name="category"
                class="radio"
                value={cat.value}
                bind:group={category}
              />
            </label>
          </div>
        {/each}
      </div>
    </Stack>
  </div>
  <Space h={'md'} />

  <!-- スクロール -->
  <!-- <div>
    <Stack>
      <Title order={5}>スクロール</Title>
      <Text size={'xs'}>
        スクロールすることでお知らせバーを非表示にするか指定してください
      </Text>
      <Group>
        <input type="text" placeholder="0" class="input input-bordered input-sm max-w-xl" />
        <p>px</p>
      </Group>
    </Stack>
  </div>
  <Space h={'md'} /> -->

  <!-- 配置場所 -->
  <div>
    <Stack>
      <Title order={5}>ポジション</Title>
      <Text size='xs'>
        お知らせバーの配置場所を選択してください
      </Text>
      <div class="p-6 card bordered">
        {#each positionOptions as pos}
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">{pos.label}</span>
              <input
                type="radio"
                name="position"
                class="radio"
                value={pos.value}
                bind:group={position}
              />
            </label>
          </div>
        {/each}
      </div>
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
</div>


<style>
</style>