<template>
  <div class="login-container">
    <div class="logo-container">
      <img src="../../assets/mw-logo-apng-negative.png" />
    </div>
    <div class="disclaimer-container">
      <transition name="fade" mode="out-in">
        <div v-if="!isError && !isSuccess" key="neutral">Syötä nimesi ja koodikuviosi.</div>
        <div v-else-if="isError" class="is-error" key="error">Kirjautuminen epäonnistui.</div>
        <div v-else-if="isSuccess" class="is-success" key="success">Tervetuloa.</div>
      </transition>
    </div>
    <div class="username-container">
      <input ref="usernameInput" v-model="username" placeholder="Nimi" type="text" spellcheck="false" />
    </div>
    <div class="patternlock-container">
      <PatternLock :is-error="isError" :is-success="isSuccess" @on-draw="checkPattern($event)" @on-reset="resetState"/>
    </div>
    <div class="new-user-button-container" @click="register">
      <div>Olen uusi jäsen</div>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/users';
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
  mounted() {
    this.$refs.usernameInput.focus();
  },
  methods: {
    async checkPattern(password) {
      try {
        await login({ username: this.username, password });
        this.isSuccess = true;
        // Start route change on next tick so transitions play in children
        this.$nextTick(() => {
          this.$router.push({ name: 'mainpage' });
        });
      } catch(err) {
        this.isError = true;
      }
    },
    resetState() {
      this.isError = false;
    },
    register() {
      this.$router.push({ name: 'register' });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.login-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: $pattern-background;
  color: $negative-text;
  padding: 32px;

  .logo-container img {
    width: 64px;
  }

  .disclaimer-container {
    @include fade(.2s);

    text-align: center;
  }

  .username-container > input {
    height: 42px;
    background-color: rgba(0, 0, 0, 0);
    color: $negative-text;
    padding: 0 16px;
    border: 0;
    border-bottom: 2px solid $negative-text;
    font-size: 18px;
    outline: none;
    letter-spacing: 1px;
    text-align: center;
  }

  .new-user-button-container {
    border: 2px solid $negative-text;
    padding: 12px;
    font-size: 12px;
    cursor: pointer;
  }

  .is-error {
    color: $pattern-fail;
  }

  .is-success {
    color: $pattern-success;
  }
}
</style>
