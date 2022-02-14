<template>
  <q-page class="flex column content-center justify-start">
    <h4 class="text-center">{{ $t('label.title.index') }}</h4>
    <auth-token-list class="full-width" :auth-tokens="authTokens"/>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab color="primary" icon="add" direction="up">
        <q-fab-action
          color="primary"
          icon="qr_code_scanner"
          to="/add/qrcode"/>
        <q-fab-action
          color="primary"
          icon="pin"
          to="/add/code"/>
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import AuthTokenList from 'components/List/AuthTokenList';

export default defineComponent({
  name: 'PageIndex',
  components: { AuthTokenList },
  data() {
    return { authTokens: [] };
  },
  created() {
    this.$store.dispatch('authToken/getAllAuthTokens').then((tokens) => {
      this.authTokens = tokens;
    });
  },
});
</script>
