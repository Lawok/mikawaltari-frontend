<template>
  <div class="navigation" :class="{ 'no-events': !isMenuActive && isSmallScreen }">
    <template v-if="isSmallScreen">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide class="route-slide">
          <div class="top-bar" />
          <div class="route-container">
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
          <img
            class="swiper-handle"
            src="../../assets/bookmark-with-shadow.png"
            @click="toggleMenu"
          />
        </swiper-slide>
        <swiper-slide class="empty-slide no-swiping" :class="{ 'background-drop': isMenuActive }">
          <div class="empty-slide-top-bar" @click="closeMenu">
            <div>{{ activeRoute.label }}</div>
          </div>
          <div class="empty-slide-middle" @click="closeMenu" />
          <div class="empty-slide-bottom-bar" />
        </swiper-slide>
      </swiper>
    </template>
    <template v-else>
      <img
        class="navigation-item"
        src="../../assets/mw-logo-apng-negative.png"
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
    </template>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { smallScreen } from '../../styles/mixins/breakpoints.scss';

export default {
  name: 'Navigation',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    routes: Array
  },
  data() {
    return {
      isMenuActive: false,
      isSmallScreen: window.matchMedia(`(max-width: ${smallScreen})`).matches,
      smallScreenMatcher: window.matchMedia(`(max-width: ${smallScreen})`),
      swiper: null,
      swiperOptions: {
        init: false,
        direction: 'vertical',
        initialSlide: 1,
        autoHeight: true,
        grabCursor: true,
        longSwipesRatio: 0.2,
        preventInteractionOnTransition: true,
        noSwipingClass: 'no-swiping',
        cssMode: true,
      }
    }
  },
  mounted() {
    this.smallScreenMatcher.addListener(this.updateIsSmallScreen);
    if (this.$refs.swiper) this.initSwiper();
  },
  beforeDestroy() {
    this.smallScreenMatcher.removeListener(this.updateIsSmallScreen);
  },
  computed: {
    activeRoute() {
      return this.routes.find(route => route.routeName === this.$route.name);
    },
  },
  methods: {
    initSwiper() {
      this.swiper = this.$refs.swiper.swiper;
      this.swiper.init();
      this.swiper.on('slideChange', () => {
        this.isMenuActive = this.$refs.swiper.swiper.activeIndex === 0;
        this.$forceUpdate();
      });
    },
    navigate(name) {
      if (!this.isActiveRoute(name)) {
        this.$router.push({ name });
        if (this.swiper) this.closeMenu();
      }
    },
    isActiveRoute(name) {
      return this.$route.name === name;
    },
    updateIsSmallScreen(mediaquery) {
      this.isSmallScreen = mediaquery.matches;
      this.$forceUpdate();
      if (this.isSmallScreen && !this.swiper) {
        this.$nextTick(() => {
          this.initSwiper();
        });
      } else if (!this.isSmallScreen) {
        this.swiper = null;
      }
    },
    closeMenu() {
      this.swiper.slideTo(1);
    },
    toggleMenu() {
      this.swiper.activeIndex === 0 ? this.swiper.slideTo(1) : this.swiper.slideTo(0);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

$border-highlight-size: 4px;

.swiper-container::v-deep {
  overflow: visible;
}

.route-slide {
  height: 50vh;
  width: 100vw;
  background-color: $negative-background;

  .swiper-handle {
    height: 64px;
    position: absolute;
    right: 32px;
    bottom: -64px;
    z-index: 1;
    pointer-events: all;
    box-shadow: 0px -4px 3px $negative-background;
  }

  .top-bar {
    position: absolute;
    top: -100vh;
    height: 100vh;
    width: 100vw;
    background: $negative-background;
  }
}

.empty-slide {
  cursor: default;
  transition: background-color .5s;

  &.background-drop {
    background-color: rgba(0, 0, 0, .5);
    
    .empty-slide-bottom-bar {
      background-color: rgba(0, 0, 0, .5);
    }

    .empty-slide-top-bar {
      opacity: 0;
    }
  }

  .empty-slide-top-bar {
    height: $navigation-height-sm;
    background-color: $negative-background;
    transition: opacity .2s;
    
    & > div {
      color: $negative-text;
      line-height: $navigation-height-sm;
      padding-left: 32px;
    }
  }

  .empty-slide-middle {
    height: 100%;
  }

  .empty-slide-bottom-bar {
    position: absolute;
    bottom: -100vh;
    height: 100vh;
    width: 100vw;
    transition: background-color .5s;
  }
}

.empty-slide.swiper-slide-active,
.no-events {
  pointer-events: none;
}

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
  @include small-screen {
    height: auto;
    align-items: stretch;
    background-color: rgba(0, 0, 0, 0);

    .navigation-item {
      &:not(img) {
        padding: 0 8px;
      }
    }

    .route-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
      justify-content: space-evenly;
    }
  }
}
</style>
