<template>
  <div class="patternlock-container">
    <PatternLock :is-error="isError" :is-success="isSuccess" @on-draw="checkPattern($event)"/>
  </div>
</template>

<script>
import PatternLock from '../common/PatternLock';

export default {
  name: 'Login',
  components: {
    PatternLock,
  },
  data() {
    return {
      isError: false,
      isSuccess: false,
    }
  },
  methods: {
    checkPattern(pattern) {
      const testPattern = '7415369';
      if (pattern === testPattern) {
        this.isSuccess = true;
        this.login();
      } else {
        this.isError = true;
      }
    },
    login() {
      // Start route change on next tick so transitions play in children
      this.$nextTick(() => {
        this.$router.push({ name: 'mainpage' });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.patternlock-container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: $pattern-background;
}
</style>
