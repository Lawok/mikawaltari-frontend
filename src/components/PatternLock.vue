<template>
  <div id="pattern-lock" />
</template>

<script>
import PatternLock from 'patternlock';

export default {
  name: 'PatternLock',
  props: {
    msg: String
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const patternLock = new PatternLock('#pattern-lock');
  }
}
</script>

<style lang="scss" scoped>
.patt-holder {
  background: white;

  /deep/ .patt-dots {
    background: black;
  }

  /deep/ .patt-lines {
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
