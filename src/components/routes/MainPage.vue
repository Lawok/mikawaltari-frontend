<template>
  <div class="mainpage">
    <div class="navigation">
      <div v-for="route in routes" :key="route.routeName">
        {{ route.label }}
      </div>
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
@import '../../styles/app';

.mainpage {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: $background;
}

.navigation {
  display:flex;
  flex-direction: row;
  margin-bottom: 36px;
}
</style>
