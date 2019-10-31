<template>
  <div
    v-click-outside="resetPattern"
    id="pattern-lock"
    :class="{ 'is-error': isError, 'is-success': isSuccess }"
    class="patt-holder"
  />
</template>

<script>
import PatternLock from 'patternlock';
import ClickOutside from '../../directives/ClickOutside';

export default {
  name: 'PatternLock',
  props: {
    isError: Boolean,
    isSuccess: Boolean
  },
  directives: {
    ClickOutside
  },
  data() {
    return {
      patternLock: null,
    }
  },
  mounted() {
    this.patternLock = new PatternLock('#pattern-lock', {
      onDraw: pattern => {
        this.$emit('on-draw', pattern);
        setTimeout(this.resetPattern, 1000);
      }
    });
  },
  methods: {
    resetPattern() {
      if (!this.isSuccess) {
        this.patternLock.reset();
        this.$emit('on-reset');
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

$background-transition: background-color .5s ease-in-out;
$border-transition: border-color .5s ease-in-out;

.patt-holder::v-deep {
  background: $pattern-background;

  .patt-dots {
    transition: $background-transition;
    background: $pattern-circle;
  }

  .patt-circ {
    transition: $background-transition, $border-transition;
    background-color: $pattern-background;
    border: 3px solid $pattern-background;

    &.hovered {
      border-color: $pattern-circle;
      background-color: rgba($pattern-circle, 0.1);
    }
  }

  .patt-lines {
    transition: $background-transition;
    background: rgba($pattern-line, 0.3);
  }

  &.is-error {
    .patt-circ.hovered {
      border-color: $pattern-fail;
      background-color: rgba($pattern-fail, 0.1);
    }

    .patt-lines {
      background: rgba($pattern-fail, 0.3);
    }
  }

  &.is-success {
    .patt-circ.hovered {
      border-color: $pattern-success;
      background-color: rgba($pattern-success, 0.1);
    }

    .patt-lines {
      background: rgba($pattern-success, 0.3);
    }
  }
}
</style>
