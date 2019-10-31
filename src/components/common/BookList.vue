<template>
  <div class="book-list-container">
    <book v-if="books.length > 0" :key="books[0].id" :book="books[0]" top-book />
    <book v-for="book in booksWithoutFirst" :key="book.id" :book="book" />
  </div>
</template>

<script>
import Book from './Book';

export default {
  name: 'BookList',
  components: {
    Book
  },
  props: {
    books: Array,
  },
  computed: {
    booksWithoutFirst() {
      return this.books.length > 0 ? this.books.slice(1, this.books.length) : [];
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.book-list-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-bottom: 125px;
}
</style>
