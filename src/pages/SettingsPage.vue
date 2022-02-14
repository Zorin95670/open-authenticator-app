<template>
  <q-page class="flex column content-center justify-start">
    <h4 class="text-center">{{ $t('label.title.settings') }}</h4>
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="password"
        :label="$t('label.application.updatePassword')">
        <q-card>
          <q-card-section>
            <password-update-form/>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="language"
        :label="$t('label.explanation.language')">
        <q-card>
          <q-card-section>
            <language-form/>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="phonelink_erase"
        :label="$t('label.application.deleteAllData')">
        <q-card>
          <q-card-section>
            <delete-data-form/>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import DeleteDataForm from 'components/Form/DeleteDataForm';
import PasswordUpdateForm from 'components/Form/PasswordUpdateForm';
import LanguageForm from 'components/Form/LanguageForm';

export default {
  name: 'SettingsPage',
  components: { LanguageForm, PasswordUpdateForm, DeleteDataForm },
};
</script>
