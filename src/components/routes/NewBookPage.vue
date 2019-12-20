<template>
  <page-body class="align-center">
    <form class="new-book-form">
      <label for="new-book-author">Kirjailija *</label>
      <input id="new-book-author" v-model="bookForm.author" type="text" required/>
      <label for="new-book-title">Kirja *</label>
      <input id="new-book-title" v-model="bookForm.title" type="text" required/>
      <label for="new-book-year">Julkaisuvuosi *</label>
      <input id="new-book-year" v-model="bookForm.year" type="number" required/>
      <label for="new-book-reference-date">Referaatiopäivä</label>
      <input id="new-book-reference-date" v-model="bookForm.referenceDate" type="date"/>
      <button @click.prevent="add">Lisää</button>
    </form>
  </page-body>
</template>

<script>
import { addBook } from '../../api/books';
import PageBody from '../common/PageBody';

export default {
  name: 'NewBookPage',
  components: {
    PageBody,
  },
  data() {
    return {
      bookForm: {
        author: '',
        title: '',
        year: null,
        referenceDate: null,
      }
    };
  },
  computed: {
    isFormValid() {
      return this.bookForm.author.length > 0 &&
        this.bookForm.title.length > 0 &&
        this.bookForm.year;
    }
  },
  methods: {
    async add() {
      if (this.isFormValid) {
        await addBook(this.bookForm);
        this.$router.push({ name: 'books'});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.align-center {
  align-items: center;
}

.new-book-form {
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 32px;
  }
}
</style>
