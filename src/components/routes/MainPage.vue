<template>
  <div class="mainpage">
    <navigation :routes="routes" />
    <transition name="fade" mode="out-in">
      <component :is="childComponent"></component>
    </transition>
  </div>
</template>

<script>
import Navigation from '../common/Navigation';

export default {
  name: 'MainPage',
  components: {
    Navigation
  },
  props: ['childComponent'],
  data() {
    return {
      routes: [
        { label: 'Nyt', routeName: 'news' },
        { label: 'Kirjat', routeName: 'books' },
        { label: 'Arvostelut', routeName: 'reviews' },
        { label: 'Jäsenluettelo', routeName: 'users' },
        { label: 'Profiili', routeName: 'profile' },
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.mainpage {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: $background;
  margin-top: $navigation-height-lg;

  @include small-screen {
    margin-top: $navigation-height-sm;
  }

  @include fade(.3s);
}
</style>
