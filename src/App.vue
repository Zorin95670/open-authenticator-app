<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  created() {
    return this.$store.dispatch('application/init').then((language) => {
      this.$i18n.locale = language;
    });
  },
});
</script>
