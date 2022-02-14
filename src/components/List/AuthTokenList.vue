<template>
  <q-list bordered separator>
    <auth-token-list-item
      :auth-token="authToken"
      :key="`token_item_${authToken.id}`"
      v-for="authToken in authTokens"/>
    <q-item>
      <q-item-section style="min-height: 5rem">
        <q-item-label caption>{{ $t('label.explanation.noItems')}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import AuthTokenListItem from 'components/ListItem/AuthTokenListItem';

export default {
  name: 'AuthTokenList',
  components: { AuthTokenListItem },
  props: {
    authTokens: Array,
  },
};
</script>
