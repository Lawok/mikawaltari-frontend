<template>
  <div class="basic-table-container">
    <vuetable ref="vuetable"
      :api-mode="false"
      :fields="headers"
      :data="data"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2';

export default {
  name: 'BasicTable',
  components: {
    Vuetable,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.basic-table-container::v-deep {
  th, td {
    padding: 16px;
    border: 1px solid $negative-background;
  }

  th {
    background-color: $negative-background;
    color: $negative-text;
  }

  td {
    background-color: $background;
    color: $text;
  }
}
</style>
