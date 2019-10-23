<template>
  <div class="mainpage">
    <div v-for="route in routes" :key="route.routeName">
      {{ route.label }}
    </div>
    <component :is="childComponent"></component>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  components: {
  },
  props: ['childComponent'],
  data() {
    return {
      routes: [
        { label: 'Nyt', routeName: 'news' },
        { label: 'Kirjat', routeName: 'books' },
        { label: 'Arvostelut', routeName: 'reviews' },
        { label: 'Jäsenluettelo', routeName: 'users' },
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

.mainpage {
  display: flex;
  flex: 1;
  background-color: $background;
}
</style>
