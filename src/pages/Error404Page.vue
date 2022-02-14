<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        {{ $t('label.title.error404') }}
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ $t('label.explanation.error404') }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        :label="$t('action.cancel')"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error404Page',
});
</script>
