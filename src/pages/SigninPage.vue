<template>
  <q-page class="q-gutter-md flex column flex-center">
    <h4>{{ $t('label.title.signin') }}</h4>
    <p class="text-center">
      {{ $t('label.explanation.password')}}
    </p>
    <language-form/>
    <signin-form/>
  </q-page>
</template>

<script>
import SigninForm from 'components/Form/SigninForm';
import LanguageForm from 'components/Form/LanguageForm';

export default {
  name: 'SignInPage',
  components: { LanguageForm, SigninForm },
};
</script>
