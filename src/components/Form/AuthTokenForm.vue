<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md flex column flex-center">
    <q-input
      filled
      v-model="name"
      :label="$t('label.application.token.name')"
      lazy-rules
      :rules="[ val => val && val.length > 0 || $t('error.empty.token.name')]"/>

    <q-input
      filled
      v-model="secret"
      :label="$t('label.application.token.secret')"
      lazy-rules
      :rules="[
          val => val !== null && val !== '' || $t('error.empty.token.secret'),
          val => val.replaceAll(' ', '').length !== 11 || $t('error.size.token.secret'),
        ]"/>

    <div>
      <q-btn :label="$t('action.add')" type="submit" color="primary"/>
      <q-btn :label="$t('action.cancel')" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'AuthTokenForm',
  data() {
    return {
      name: '',
      secret: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.$store.state.authToken.items.map((t) => t.secret)
        .includes(this.secret)) {
        this.$q.notify({
          type: 'negative',
          message: this.$t('error.duplicate.token'),
        });
        return;
      }
      this.$store.dispatch('authToken/createAuthToken', {
        name: this.name,
        secret: this.secret.replaceAll(' ', ''),
      }).then(() => this.$router.push('/'));
    },
    onReset() {
      this.$router.push('/');
    },
  },
};
</script>
