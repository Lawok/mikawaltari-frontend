<template>
  <div class="books">
    <basic-table :data="books" :headers="bookHeaders" />
  </div>
</template>

<script>
import { getBooks } from '../../api/books';
import BasicTable from '../common/BasicTable';

export default {
  name: 'BooksPage',
  components: {
    BasicTable,
  },
  data() {
    return {
      books: [],
      bookHeaders: ['author', 'title', 'year', 'rating'],
    };
  },
  async created() {
    this.books = await getBooks();
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.books {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px;
}
</style>
