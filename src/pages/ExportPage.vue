<template>
  <q-page class="flex column content-center justify-start">
    <h4 class="text-center">{{ $t('label.title.export') }}</h4>
    <export-form/>
  </q-page>
</template>

<script>
import ExportForm from 'components/Form/ExportForm';

export default {
  name: 'ExportPage',
  components: { ExportForm },
};
</script>
