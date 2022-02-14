<template>
  <q-page class="flex column content-center justify-start">
    <h4 class="text-center">{{ $t('label.title.login') }}</h4>
    <login-form/>
  </q-page>
</template>

<script>
import LoginForm from 'components/Form/LoginForm';

export default {
  name: 'LoginPage',
  components: { LoginForm },
};
</script>
