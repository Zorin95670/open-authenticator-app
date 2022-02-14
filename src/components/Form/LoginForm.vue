<template>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md flex column flex-center">
    <q-input
      filled
      v-model="password"
      type="password"
      :label="$t('label.application.password')"
      lazy-rules
      :rules="[
          val => val !== null && val !== '' || $t('error.empty.password'),
        ]"/>

    <div>
      <q-btn :label="$t('action.login')" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      password: '',
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('authToken/validateApplicationPassword', this.password)
        .then(() => this.$store.dispatch('authToken/getAllAuthTokens'))
        .then(() => this.$router.push('/'))
        .catch(() => {
          this.password = '';
          this.$q.notify({
            type: 'negative',
            message: this.$t('error.wrong.password'),
          });
        });
    },
  },
};
</script>
