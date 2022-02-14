<template>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md flex column flex-center">
    <q-input
      filled
      v-model="password"
      :label="$t('label.application.password')"
      type="password"
      lazy-rules
      :rules="[
          val => val !== null && val !== '' || $t('error.empty.password'),
        ]"/>
    <q-input
      filled
      v-model="passwordConfirmation"
      :label="$t('label.application.passwordConfirmation')"
      type="password"
      lazy-rules
      :rules="[
          val => val !== null && val !== '' ||  $t('error.empty.passwordConfirmation'),
          val => val === password || $t('error.different.password')
        ]"/>

    <div>
      <q-btn :label="$t('action.signin')" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'SigninForm',
  data() {
    return {
      password: '',
      passwordConfirmation: '',
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('authToken/createApplicationPassword', this.password)
        .then(() => this.$router.push('/'));
    },
  },
};
</script>

<style scoped>

</style>
