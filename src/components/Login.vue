<template>
  <div class="patternlock-container">
    <PatternLock @on-draw="checkPattern($event)"/>
  </div>
</template>

<script>
import PatternLock from './PatternLock';

export default {
  name: 'Login',
  components: {
    PatternLock,
  },
  methods: {
    checkPattern(pattern) {
      // eslint-disable-next-line no-console
      console.log('pattern sent', pattern);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

.patternlock-container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: $pattern-background;
}
</style>
