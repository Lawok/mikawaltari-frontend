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
    const patternLock = new PatternLock('#pattern-lock', {
      onDraw: pattern => {
        this.$emit('on-draw', pattern);
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

.patt-holder::v-deep {
  background: $pattern-background;

  .patt-dots {
    background: $pattern-circle;
  }

  .patt-circ {
    transition: background-color .5s ease-in-out, border-color .5s ease-in-out;
    background-color: $pattern-background;
    border: 3px solid $pattern-background;

    &.hovered {
      border-color: $pattern-circle;
      background-color: rgba($pattern-circle, 0.1);
    }
  }

  .patt-lines {
    background: rgba($pattern-line, 0.3);
  }
}
</style>
