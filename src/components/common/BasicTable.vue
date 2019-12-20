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
  word-break: break-word;

  th, td {
    padding: 16px;
    border: 1px solid $negative-background;
    vertical-align: middle;

    @include small-screen {
      padding: 8px;
    }
  }

  th {
    top: $navigation-height-lg - 1px;
    position: sticky;
    background-color: $negative-background;
    color: $negative-text;
    white-space: nowrap;

    @include small-screen {
      top: $navigation-height-sm - 1px;
    }
  }

  td {
    background-color: $background;
    color: $text;
  }
}
</style>
