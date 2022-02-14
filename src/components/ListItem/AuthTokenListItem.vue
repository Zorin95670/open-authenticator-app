<template>
  <q-item
    clickable
    v-ripple
    @click="copyToClipboard">
    <q-item-section avatar>
      <auth-token-progress :second-left="secondLeft"/>
    </q-item-section>
    <q-item-section>
      <q-item-label caption>{{ authToken.name }}</q-item-label>
      <q-item-label>{{ code }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-icon
        color="red"
        name="delete"
        @click="confirm = true"/>
    </q-item-section>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">
            {{ $t('label.explanation.delete.token', { name: authToken.name })}}
          </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('action.cancel')" color="primary" v-close-popup />
          <q-btn flat :label="$t('action.yes')" color="red" @click="deleteToken" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-item>
</template>

<script>
import * as OTPAuth from 'otpauth';
import AuthTokenProgress from 'components/Progress/AuthTokenProgress';

export default {
  name: 'AuthTokenListItem',
  components: { AuthTokenProgress },
  props: {
    authToken: Object,
  },
  data() {
    return {
      confirm: false,
      code: null,
      secondLeft: 1,
      totp: null,
    };
  },
  created() {
    this.totp = new OTPAuth.TOTP({
      issuer: this.authToken.name,
      label: this.authToken.name,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: this.authToken.secret,
    });
    this.code = this.totp.generate();

    setInterval(() => {
      this.secondLeft = (30 - (Math.round(new Date() / 1000) % 30)) - 1;
      if (this.secondLeft === 0) {
        this.code = this.totp.generate();
      }
    }, 1000);
  },
  methods: {
    copyToClipboard() {
      const input = document.body.appendChild(document.createElement('input'));
      input.value = this.code;
      input.focus();
      input.select();
      document.execCommand('copy');
      input.parentNode.removeChild(input);

      this.$q.notify(this.$t('label.explanation.tokenCopy', { token: this.authToken.name }));
    },
    deleteToken() {
      this.confirm = false;
    },
  },
};
</script>
