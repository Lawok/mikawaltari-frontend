<template>
  <div class="books">
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getBooks } from '../../axios/books';

export default {
  name: 'BooksPage',
  components: {
  },
  data() {
    return {
      books: [],
    }
  },
  async created() {
    this.books = await getBooks();
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';
</style>
