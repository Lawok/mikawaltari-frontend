<template>
  <div class="login-container">
    <div class="username-container">
      <input v-model="username" placeholder="Nimesi" type="text" spellcheck="false" />
    </div>
    <div class="patternlock-container">
      <PatternLock :is-error="isError" :is-success="isSuccess" @on-draw="checkPattern($event)" @on-reset="resetState"/>
    </div>
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
      username: '',
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
    },
    resetState() {
      this.isError = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.username-container > input {
    height: 42px;
    background-color: rgba(0, 0, 0, 0);
    color: $white;
    padding: 0 16px;
    border: 0;
    border-bottom: 2px solid $white;
    font-family: inherit;
    font-size: 18px;
    outline: none;
    letter-spacing: 1px;
    margin-bottom: 12px;
    text-align: center;
}

.login-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $pattern-background;
}
</style>
