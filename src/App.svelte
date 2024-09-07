<script lang="ts">
  import { SvelteUIProvider, Group, } from '@svelteuidev/core';
  import { Router, Route } from 'svelte-routing';

  import { IconCoffee, IconBook, IconDeviceGamepad2 } from '@tabler/icons-svelte';

  /* app */
  import TopPage from './pages/TopPage.svelte';
  import SpecifiedCommercialTransactionLawPage from './pages/SpecifiedCommercialTransactionLawPage.svelte';
  import PrivacyPolicy from './pages/PrivacyPolicy.svelte';
  import PaymentOfService from './pages/PaymentOfService.svelte';
  import TermsOfService from './pages/TermsOfService.svelte';
  import { environment as env } from './environment';

  export let url: string;
  $: url = window.location.pathname;

</script>


<SvelteUIProvider>
  <Router {url}>
    <div class="navbar bg-base-300 mb-10">
      <!-- <div class="navbar-start"></div> -->
      <div class="navbar-start">
        <label for="icon" class="btn btn-ghost btn-circle avatar">
          <div class="w-8 rounded-full">
            <img src="/umeko.jpg" alt="" />
          </div>
        </label>
        <a class="btn btn-ghost normal-case text-xl" href="/">うめこちゃん</a>
      </div>
      <div class="navbar-end">
        <!-- <label for="someInput" class="text-md fb-900 mr-5">support me: </label> -->
        <Group position={'right'} spacing={'sm'}>
          <!-- <ion-icon name="cafe" ios="ios-cafe" md="md-cafe" size="medium">カフェ代</ion-icon>
          <ion-icon name="book" ios="ios-book" md="md-book" size="medium">書籍代</ion-icon>
          <ion-icon name="game" ios="ios-game" md="md-game" size="medium">ゲーム</ion-icon> -->
          <a href={env.paymentLinks.stripe.cafe} class="btn btn-ghost btn-circle"><IconCoffee /></a>
          <a href={env.paymentLinks.stripe.book} class="btn btn-ghost btn-circle"><IconBook /></a>
          <a href={env.paymentLinks.stripe.game} class="btn btn-ghost btn-circle"><IconDeviceGamepad2 /></a>
        </Group>
      </div>
    </div>
    <main class="mx-auto w-full md:w-2/3 lg:w-1/2 container">
      <Route path="/"><TopPage /></Route>
      <Route path="/specified_commercial_transaction_act"><SpecifiedCommercialTransactionLawPage /></Route>
      <Route path="/terms_of_service"><TermsOfService /></Route>
      <Route path="/payment_of_service"><PaymentOfService /></Route>
      <Route path="/privacy_policy"><PrivacyPolicy /></Route>
    </main>
    <footer class="footer p-4 bg-base-200 text-base-content">
      <nav>
        <a class="link link-hover" href="/specified_commercial_transaction_act">特定商取引に関する表記</a>
        <a class="link link-hover" href="/terms_of_service">利用規約</a>
        <a class="link link-hover" href="/payment_of_service">資金決済法</a>
        <a class="link link-hover" href="/privacy_policy">プライバシーポリシー</a>
      </nav>
    </footer>
  </Router>
</SvelteUIProvider>


<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* 画面の高さを最低限に設定 */  
  }
</style>
