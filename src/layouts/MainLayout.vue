<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          :aria-label="$t('label.application.menu')"
          @click="toggleLeftDrawer"/>

        <q-toolbar-title>
          {{$t('label.application.title')}}
        </q-toolbar-title>

        <div>v{{ $store.state.application.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      @click="toggleLeftDrawer"
      bordered>
      <q-list>
        <q-item-label header>
          {{ $t('label.application.menu') }}
        </q-item-label>

        <EssentialLink
          v-for="link in links"
          :key="link.title"
          v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-md">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';
import links from 'assets/link.json';

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
  },
  watch: {
    $route() {
      this.drawer = false;
    },
  },
  data() {
    return {
      links,
      drawer: false,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
