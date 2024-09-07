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
  let imageUrl: string = '';
  let url: string = '';
  let text: string = '';
  let width: string = '236';
  let position: string = 'right';



  /**
   * スロット
   * オプション一覧
   */
   const positionOptions = [
    { label: '右下', value: 'right' },
    { label: '中央下', value: 'center' },
    { label: '左下', value: 'left' },
  ];
  
  /**
   * 閉じるアイコン
   * 表示非表示
   */
  const closeIconOpenOptions = [
    { label: 'あり', value: '0' },
    { label: 'なし', value: '1' },
  ];
  
  /**
   * 初回表示
   * オプション一覧
   */
  const defaultOpenOptions = [
    { label: '最初から表示する', value: '0' },
    { label: '後から表示する（ファーストビューを過ぎたら）', value: '1' },
  ];

  let divTag: string = '';
  $: {
    divTag = `<div id="umeko__fixedBanner" data-image-url="${imageUrl}" data-url="${url}" data-text="${text}" data-width="${width}" data-position="${position}"></div>`
  }

</script>


<form>

  <Group position={'right'}>
    <label for="preview__fixedBanner" class="btn btn-xs btn-primary">プレビュー</label>
  </Group>

  <input type="checkbox" id="preview__fixedBanner" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box h-[800px]">
      <h-fixed-banner
        text={text}
        url={url}
        imageUrl={imageUrl}
        width={width}
        position={position}
      ></h-fixed-banner>
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
            `${divTag}<script type="module" src="${env.embed.url}/fixedBanner.js"></script>`,
            Prism.languages.markup,
            'markup'
          )
        }
      </div>
    </Stack>
  </div>
  <Space h={'ls'} />

  <!-- バナー画像 -->
  <div>
    <Stack>
      <Title order={5}>バナー画像URL</Title>
      <Text size={'xs'}>
        表示させたいバナーをURLで設定してください。
      </Text>
      <input
        class="input input-bordered input-sm w-full"
        type="text"
        placeholder="ex. https://picsum.photos/id/242/300/200"
        bind:value={imageUrl}
      />
    </Stack>
  </div>
  <Space h={'md'} />

  <!-- 遷移先URL -->
  <div>
    <Stack>
      <Title order={5}>遷移先URL</Title>
      <Text size={'xs'}>
        バナーの遷移先をURLで設定してください。
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

  <!-- テキスト表示 -->
  <div>
    <Stack>
      <Title order={5}>テキスト表示</Title>
      <Text size={'xs'}>
        バナーで補足のテキストがあれば記載してください。
      </Text>
      <input
        class="input input-bordered input-sm w-full"
        type="text"
        placeholder="ex. ハロウインキャンペーン10月31日まで！"
        bind:value={text}
      />
    </Stack>
  </div>
  <Space h={'md'} />

  <!-- 配置場所 --> 
  <div>
    <Stack>
      <Title order={5}>バナーの配置場所</Title>
      <Text size={'xs'}>
        いずれかを選択してください。
      </Text>
      <div class={'p-6 card bordered'}>
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

  <!-- 横幅設定 -->
  <div>
    <Stack>
      <Title order={5}>バナーの横幅設定</Title>
      <Text size={'xs'}>
        表示させたいバナーの横幅サイズを入力してください。
      </Text>
      <Group>
        <input
          type="number"
          class={`input input-bordered input-sm`}
          placeholder="ex. 200"
          bind:value={width}
        />
        <sm>px</sm>
      </Group>
    </Stack>
  </div>
  <Space h={'md'} />

  <!-- 閉じる機能の設定 -->
  <!-- <div>
    <Stack>
      <Title order={5}>閉じる機能の設定</Title>
      <Text size={'xs'}>閉じるアイコンを表示するか選択してください。</Text>
      <div class={'p-6 card bordered'}>
        {#each closeIconOpenOptions as open}
          <div
            class='form-control'
          >
            <label class="cursor-pointer label">
              <span class="label-text">{open.label}</span> 
              <input type="radio" name="opt" class="radio" value={open.value} />
            </label>
          </div>
        {/each}
      </div>
    </Stack>
  </div>
  <Space h={'md'} /> -->

  <!-- 表示タイミング -->
  <!-- <div>
    <Stack>
      <Title order={5}>表示タイミング</Title>
      <Text size={'xs'}>いずれかを選択してください。</Text>
      <div class={'p-6 card bordered'}>
        {#each defaultOpenOptions as open}
          <div class='form-control'>
            <label class="cursor-pointer label">
              <span class="label-text">{open.label}</span> 
              <input type="radio" name="opt" class="radio" value={open.value} />
            </label>
          </div>
        {/each}
      </div>
    </Stack>
  </div> -->
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
