<template>
  <page-body>
    <button @click="navigateToNewBook()">Lisää kirja</button>
    <div v-if="isLoading">Ladataan...</div>
    <basic-table v-else :data="books" :headers="bookHeaders" />
  </page-body>
</template>

<script>
import { getBooks } from '../../api/books';
import PageBody from '../common/PageBody';
import BasicTable from '../common/BasicTable';

export default {
  name: 'BooksPage',
  components: {
    PageBody,
    BasicTable,
  },
  data() {
    return {
      isLoading: true,
      books: [],
      bookHeaders: [
        {
          name: 'author',
          sortField: 'author',
          title: 'Kirjailija',
        },
        {
          name: 'title',
          sortField: 'title',
          title: 'Kirja',
        },
        {
          name: 'year',
          sortField: 'year',
          title: 'Vuosi',
        },
        {
          name: 'average',
          sortField: 'average',
          title: 'Keskiarvo',
        }
      ]
    };
  },
  async created() {
    this.books = await getBooks();
    this.books = this.books.map(book => ({
      ...book,
      average: this.getBookAverage(book),
    }));
    this.isLoading = false;
  },
  methods: {
    isNumber(value) {
      return (typeof value === 'number') && value === Number(value) && Number.isFinite(value);
    },
    roundToThreeDecimals(value) {
      return Math.round(value * 1000 + Number.EPSILON) / 1000;
    },
    navigateToNewBook() {
      this.$router.push({ name: 'new-book' });
    },
    getBookAverage(book) {
      if (book.votes &&
        Array.isArray(book.votes) &&
        book.votes.length > 0 &&
        book.votes.every(vote => this.isNumber(vote.vote))) {
          return this.roundToThreeDecimals(book.votes.reduce((a, b) => a + b.vote, 0) / book.votes.length);
        }
      return 0;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/app';

button {
  @include margin(bottom);
}
</style>
