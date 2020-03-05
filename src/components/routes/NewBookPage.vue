<template>
  <page-body class="align-center">
    <form class="new-book-form">
      <div class="form-item">
        <label for="new-book-author">Kirjailija *</label>
        <input id="new-book-author" v-model="bookForm.author" type="text" required/>
      </div>
      <div class="form-item">
        <label for="new-book-title">Kirja *</label>
        <input id="new-book-title" v-model="bookForm.title" type="text" required/>
      </div>
      <div class="form-item">
        <label for="new-book-year">Julkaisuvuosi *</label>
        <input id="new-book-year" v-model="bookForm.year" type="number" required/>
      </div>
      <div class="form-item">
        <label for="new-book-reference-date">Referaatiopäivä</label>
        <input id="new-book-reference-date" v-model="bookForm.referenceDate" type="date"/>
      </div>
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
@import '../../styles/mixins/labeled-input';

.align-center {
  align-items: center;
}

.new-book-form {
  display: flex;
  flex-direction: column;

  .form-item {
    @include labeled-input;
  }
}
</style>
