<template>
  <q-circular-progress
    reverse
    show-value
    font-size="12px"
    :value="percent"
    size="30px"
    :thickness="0.22"
    color="teal"
    track-color="grey-3"
    class="q-ma-md"
  >
    {{ secondLeft }}
  </q-circular-progress>
</template>

<script>
export default {
  name: 'AuthTokenProgress',
  props: {
    secondLeft: Number,
  },
  computed: {
    percent() {
      return parseInt((this.secondLeft / 30) * 100, 10);
    },
  },
};
</script>

<style scoped>

</style>
