<template>
  <div class="book-container" :class="{ 'top-book': topBook }">
    <img :src="require(topBook ? '../../assets/book-top.png' : '../../assets/book-cover.png')" />
    <div class="book-title">{{ `${book.author || ''}: ${book.title || ''}` }}</div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: Object,
    topBook: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

// These values have been determined by careful testing,
// Do not modify lightly
.book-container {
  position: relative;
  height: 125px;
  width: 453px;
  pointer-events: none;

  img {
    position: absolute;
  }

  .book-title {
    position: absolute;
    color: $white;
    top: 97px;
    left: -11px;
    width: 265px;
    height: 60px;
    line-height: 30px;
    font-size: 24px;
    transform: rotateX(45deg) rotateY(45deg) rotateZ(0deg) scaleY(1.8);
    overflow: hidden;
    pointer-events: all;
    cursor: pointer;

    &:hover {
      color: $green;
    }
  }

  &.top-book {
    height: 246px;

    .book-title {
      top: 221px;
    }
  }
}
</style>
