<template>
  <div class="navigation">
    <img
      class="navigation-item"
      src="../../assets/mw-new-logo-apng-fast.png"
      @click="navigate(routes[0].routeName)"
    />
    <div
      v-for="route in routes"
      :key="route.routeName"
      class="navigation-item"
      :class="{ active: isActiveRoute(route.routeName) }"
      @click="navigate(route.routeName)"
    >
      {{ route.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    routes: Array
  },
  computed: {
    activeRoute() {
      return this.$route.name;
    }
  },
  methods: {
    navigate(name) {
      if (!this.isActiveRoute(name)) {
        this.$router.push({ name })
      }
    },
    isActiveRoute(name) {
      return this.$route.name === name;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

$border-highlight-size: 4px;

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $navigation-height-lg;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: $negative-background;
  color: $negative-text;

  img.navigation-item {
    height: $navigation-height-lg;
  }

  .navigation-item {
    cursor: pointer;

    &:not(img) {
      height: $navigation-height-lg / 4 - $border-highlight-size;
      line-height: $navigation-height-lg / 4 - $border-highlight-size;
      border-bottom: $border-highlight-size solid transparent;
    }

    &:not(img):hover,
    &.active {
      border-bottom-color: $negative-text;
    }
  }
}

.navigation {
  @include sm-and-down {
    height: $navigation-height-sm;

    img.navigation-item {
      height: $navigation-height-sm;
    }

    .navigation-item {
      &:not(img) {
        height: auto;
        line-height: initial;
        border-bottom: 0;
        padding: 0 8px;
        border-left: $border-highlight-size solid transparent;
      }
      
      &:not(img):hover,
      &.active {
        border-left-color: $negative-text;
      }
    }
  }
}
</style>
