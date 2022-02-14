<template>
  <q-form
    class="q-gutter-md flex column flex-center">
    <q-select
      filled
      emit-value
      map-options
      v-model="lang"
      :options="options"
      option-value="id"
      option-label="desc"
      @update:model-value="onSubmit"
      :label="$t('label.application.language')"/>
  </q-form>
</template>

<script>
export default {
  name: 'LanguageForm',
  data() {
    return {
      lang: this.$store.state.application.language || 'en-US',
      options: [{
        id: 'en-US',
        desc: 'English (United States)',
      }, {
        id: 'fr-FR',
        desc: 'Français (France)',
      }],
    };
  },
  methods: {
    onSubmit(language) {
      this.$i18n.locale = language;
      this.$store.dispatch('application/setLanguage', language);
    },
  },
};
</script>
