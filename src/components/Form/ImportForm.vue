<template>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md flex column flex-center">
    <q-file
      v-model="file"
      :label="$t('label.application.file')"
      accept=".json"/>
    <q-select
      v-model="type"
      :options="options"
      :label="$t('label.application.type.import')"/>
    <q-checkbox
      v-model="encrypted"
      :label="$t('label.explanation.encryptionImport')"/>
    <div>
      <q-btn
        :label="$t('action.import')"
        type="submit"
        color="primary"/>
    </div>
  </q-form>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  name: 'ExportForm',
  computed: {
    password() {
      return this.$store.state.authToken.password;
    },
  },
  data() {
    return {
      file: null,
      encrypted: true,
      type: this.$t('label.application.importExport.default'),
      options: [this.$t('label.application.importExport.default')],
    };
  },
  methods: {
    onSubmit() {
      if (this.type === this.$t('label.application.importExport.default')) {
        this.read(this.file);
      }
    },
    saveTokens(event) {
      const tokens = JSON.parse(event.target.result);
      let totalOfImportedToken = 0;
      tokens.map((token) => {
        if (this.encrypted) {
          return {
            name: token.name,
            secret: CryptoJS.AES.decrypt(token.secret, this.password)
              .toString(CryptoJS.enc.Utf8),
          };
        }
        return token;
      })
        .filter((token) => !this.$store.state.authToken.items.map((t) => t.secret)
          .includes(token.secret))
        .forEach((token) => {
          totalOfImportedToken += 1;
          this.$store.dispatch('authToken/createAuthTokenWithoutReload', token);
        });
      this.$store.dispatch('authToken/getAllAuthTokens').then(() => {
        if (totalOfImportedToken === 0) {
          this.$q.notify({
            type: 'warning',
            message: this.$t('error.full.token'),
          });
        } else if (totalOfImportedToken === tokens.length) {
          this.$q.notify({
            type: 'positive',
            message: this.$t('label.explanation.import'),
          });
        } else {
          this.$q.notify({
            type: 'warning',
            message: this.$t('error.partial.token', {
              current: totalOfImportedToken,
              max: tokens.length,
              imported: tokens.length - totalOfImportedToken,
            }),
          });
        }
      });
    },
    read(file) {
      const reader = new FileReader();
      reader.onload = this.saveTokens.bind(this);
      reader.readAsText(file, 'UTF-8');
    },
  },
};
</script>
