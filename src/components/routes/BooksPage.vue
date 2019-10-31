<template>
  <div class="books">
    <book-list :books="books" />
  </div>
</template>

<script>
import { getBooks } from '../../api/books';
import BookList from '../common/BookList';

export default {
  name: 'BooksPage',
  components: {
    BookList
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
