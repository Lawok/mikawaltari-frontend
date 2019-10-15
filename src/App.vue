<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: null,
    }
  },
  watch: {
    $route(to, from) {
      if (from.name === 'login') this.transitionName = 'from-login';
      else if (to.name === 'login') this.transitionName = 'to-login';
      else this.transitionName = null;
    }
  },
}
</script>

<style lang="scss">
@import 'styles/app';

body {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  background: $background;
}

.from-login-enter-active,
.to-login-enter-active,
.to-login-leave-active {
  transition: opacity .5s;
}

.from-login-leave-active {
  transition: opacity 1s;
  transition-delay: .5s;
}

.from-login-enter,
.from-login-leave-to,
.to-login-enter,
.to-login-leave-to {
  opacity: 0;
}

</style>
