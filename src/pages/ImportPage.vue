<template>
  <q-page class="flex column content-center justify-start">
    <h4 class="text-center">{{ $t('label.title.import') }}</h4>
    <import-form/>
  </q-page>
</template>

<script>
import ImportForm from 'components/Form/ImportForm';

export default {
  name: 'ImportPage',
  components: { ImportForm },
};
</script>
