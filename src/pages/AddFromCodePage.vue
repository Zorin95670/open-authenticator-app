<template>
  <q-page class="flex column content-center justify-start">
    <h4 class="text-center">{{ $t('label.title.fromCode') }}</h4>
    <AuthTokenForm/>
  </q-page>
</template>

<script>
import AuthTokenForm from 'components/Form/AuthTokenForm';

export default {
  name: 'AddFromQRCodePage',
  components: { AuthTokenForm },
};
</script>
