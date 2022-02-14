<template>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md flex column flex-center">
    <q-input
      filled
      v-model="oldPassword"
      :label="$t('label.application.password')"
      type="password"
      lazy-rules
      :rules="[
          val => val !== null && val !== '' || $t('error.empty.password'),
        ]"/>
    <q-input
      filled
      v-model="newPassword"
      :label="$t('label.application.passwordNew')"
      type="password"
      lazy-rules
      :rules="[
          val => val !== null && val !== '' || $t('error.empty.passwordNew'),
        ]"/>
    <q-input
      filled
      v-model="newPasswordConfirmation"
      :label="$t('label.application.passwordConfirmation')"
      type="password"
      lazy-rules
      :rules="[
          val => val !== null && val !== '' || $t('error.empty.passwordConfirmation'),
          val => val === newPassword || $t('error.different.password')
        ]"/>
    <div>
      <q-btn :label="$t('action.update')" type="submit" color="primary"/>
      <q-btn :label="$t('action.cancel')" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'PasswordUpdateForm',
  computed: {
    password() {
      return this.$store.state.authToken.password;
    },
  },
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
    };
  },
  methods: {
    onSubmit() {
      return this.$store.dispatch('authToken/validateApplicationPassword', this.oldPassword)
        .then(() => this.updatePassword())
        .catch(() => {
          this.oldPassword = '';
          this.$q.notify({
            type: 'negative',
            message: this.$t('error.wrong.password'),
          });
        });
    },
    onReset() {
      this.$router.push('/');
    },
    updatePassword() {
      return this.$store.dispatch('authToken/updateApplicationPassword', {
        old: this.oldPassword,
        new: this.newPassword,
      }).then(() => {
        this.$q.notify({
          type: 'positive',
          message: this.$t('label.explanation.update.password'),
        });
        this.$router.push('/');
      });
    },
  },
};
</script>
