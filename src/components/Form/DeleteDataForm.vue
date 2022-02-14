<template>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md flex column flex-center">
    <q-btn
      icon="phonelink_erase"
      :label="$t('action.delete.data')"
      type="submit"
      color="red"/>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="phonelink_erase" color="red" text-color="white" />
          <span class="q-ml-sm">{{ $t('label.explanation.delete.data') }}</span>
          <span class="q-ml-sm text-italic">{{ $t('label.explanation.delete.dataMore') }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('action.cancel')" color="primary" v-close-popup />
          <q-btn flat :label="$t('action.yes')" color="red" @click="deleteAll" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-form>
</template>

<script>
export default {
  name: 'DeleteDataForm',
  data() {
    return {
      confirm: false,
    };
  },
  methods: {
    deleteAll() {
      return this.$store.dispatch('authToken/deleteAll').then(() => {
        this.$router.push('/signin');
      });
    },
    onSubmit() {
      this.confirm = true;
    },
  },
};
</script>
