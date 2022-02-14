<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          {{$t('label.application.title')}}
        </q-toolbar-title>

        <div>v{{ $store.state.application.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmptyLayout',
});
</script>
