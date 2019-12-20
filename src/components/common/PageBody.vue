<template>
  <div class="page-body">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageBody',
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.page-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @include margin;

  @include small-screen {
    align-items: flex-start;
  }
}
</style>
