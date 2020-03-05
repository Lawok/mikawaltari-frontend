<template>
  <page-body class="align-center">
    <form class="add-review-form">
      <div class="form-item">
        <label for="review-book">Kirja</label>
        <select id="review-book" v-model="reviewForm.book" required>
          <option v-for="book in books" :key="book.id" :value="book">{{ book.title }}</option>
        </select>
      </div>
      <div v-for="(review, index) in reviewForm.reviews" :key="index" class="single-review">
        <div class="form-item">
          <label :for="`reviewer${index}`">Jäsen</label>
          <select
            :id="`reviewer${index}`"
            v-model="review.user"
            required
            @change="focusVote(index)"
          >
            <option value="" disabled hidden selected>Valitse jäsen...</option>
            <option
              v-for="user in users"
              :key="user.id"
              :value="user"
              :disabled="isUserSelected(user)"
            >
              {{ user.username }}
            </option>
          </select>
        </div>
        <div class="form-item">
          <label :for="`vote${index}`">Arvosana</label>
          <input
            ref="vote"
            :id="`vote${index}`"
            v-model="review.vote"
            type="number"
            min="0"
            max="5"
            required
          />
        </div>
        <i v-show="index !== 0" class="material-icons remove-icon" @click="removeReview(index)">delete_outline</i>
      </div>
      <i v-if="reviewForm.reviews.length < users.length" class="material-icons add-icon" @click="addNewSingleReview">add_circle_outline</i>
      <button @click.prevent="add">Lisää</button>
    </form>
  </page-body>
</template>

<script>
import { getBooks } from '../../api/books';
import { getUsers } from '../../api/users';
import PageBody from '../common/PageBody';

export default {
  name: 'AddReviewPage',
  components: {
    PageBody
  },
  data() {
    return {
      books: [],
      users: [],
      reviewForm: {
        book: null,
        reviews: [{
          user: '',
          vote: null
        }],
      }
    };
  },
  async created() {
    this.books = await getBooks();
    this.users = await getUsers();
    if (this.books && this.books.length > 0) {
      this.reviewForm.book = this.books[0];
    }
  },
  computed: {
    isFormValid() {
      return this.reviewForm.book &&
        this.reviewForm.reviews.every(review => this.isSingleReviewValid(review));
    }
  },
  methods: {
    async add() {
      if (this.isFormValid) {
        // await addBook(this.reviewForm);
        // this.$router.push({ name: 'books'});
      }
    },
    addNewSingleReview() {
      this.reviewForm.reviews.push({ user: '', vote: null });
    },
    focusVote(index) {
      this.$refs.vote[index].focus();
    },
    isSingleReviewValid(review) {
      const vote = parseFloat(review.vote);
      return review.user && typeof vote === 'number' && vote >= 0 && vote <= 5;
    },
    isUserSelected(user) {
      return this.reviewForm.reviews.some(selectedUser => selectedUser.user.id === user.id);
    },
    removeReview(index) {
      this.reviewForm.reviews.splice(index, 1);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';
@import '../../styles/mixins/labeled-input';

i {
  cursor: pointer;
}

.align-center {
  align-items: center;
}

.form-item {
  @include labeled-input;
}

.add-review-form {
  display: flex;
  flex-direction: column;

  .single-review {
    display: flex;
    flex-direction: row;
  }
}

.remove-icon {
  font-size: 32px;
  margin-left: 16px;
  margin-top: 18px;
  margin-bottom: 32px;
  color: $text;
}

.add-icon {
  font-size: 32px;
  margin-bottom: 32px;
  color: $text;
}
</style>
