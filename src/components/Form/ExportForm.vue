<template>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md flex column flex-center">
    <q-select
      v-model="type"
      :options="options"
      :label="$t('label.application.type.export')"/>
    <q-checkbox
      v-model="encrypted"
      :label="$t('label.explanation.encryptionExport')" />
    <div>
      <q-btn :label="$t('action.export')" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'ExportForm',
  data() {
    return {
      encrypted: true,
      type: this.$t('label.application.importExport.default'),
      options: [this.$t('label.application.importExport.default')],
    };
  },
  methods: {
    onSubmit() {
      if (this.type === this.$t('label.application.importExport.default')) {
        this.$store.dispatch('authToken/exportDefault', this.encrypted)
          .then((data) => this.download(
            data,
            'application/json',
            `OpenAuthenticator_export_default_${new Date().getTime()}.json`,
          ));
      }
    },
    download(data, type, name) {
      const blob = new Blob([JSON.stringify(data)], { type });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = name;
      link.click();
      URL.revokeObjectURL(link.href);
    },
  },
};
</script>
