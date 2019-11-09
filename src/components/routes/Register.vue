<template>
  <div class="new-user-container">
    <div class="disclaimer-container">
      <transition name="fade" mode="out-in">
        <div>{{ disclaimerText }}</div>
      </transition>
    </div>
    <div class="username-container">
      <input ref="usernameInput" v-model="username" placeholder="Nimi" type="text" spellcheck="false" />
    </div>
    <div class="patternlock-container">
      <PatternLock
        :is-error="isError"
        :is-success="isSuccess"
        :call-reset-on-success="true"
        @on-draw="proceedStage($event)" @on-reset="reset"
      />
    </div>
  </div>
</template>

<script>
import { addUser } from '../../api/users';
import PatternLock from '../common/PatternLock';

const STAGE = {
  START: 1,
  USERNAME_OK: 2,
  USERNAME_ERROR: 3,
  PASSWORD_OK: 4,
  PASSWORD_AGAIN_ERROR: 5,
  CREATING: 6,
  USERNAME_EXISTS: 7,
  CREATION_ERROR: 8,
};

export default {
  name: 'Register',
  components: {
    PatternLock
  },
  data() {
    return {
      isError: false,
      isSuccess: false,
      stage: STAGE.START,
      username: '',
      password: '',
      passwordAgain: '',
    }
  },
  mounted() {
    this.$refs.usernameInput.focus();
  },
  computed: {
    disclaimerText() {
      switch(this.stage) {
        case STAGE.START:
          return 'Syötä oikea etunimesi ja haluamasi koodikuvio.';
        case STAGE.USERNAME_OK:
          return 'Syötä haluamasi koodi.';
        case STAGE.USERNAME_ERROR:
          return 'Syötä ensin nimesi, sen jälkeen haluamasi koodi.';
        case STAGE.PASSWORD_OK:
          return 'Vahvista koodi syöttämällä se uudelleen.';
        case STAGE.PASSWORD_AGAIN_ERROR:
          return 'Koodit eivät täsmänneet. Syötä haluamasi koodi.';
        case STAGE.CREATING:
          return 'Luodaan käyttäjää...';
        case STAGE.USERNAME_EXISTS:
          return 'Nimi on jo varattu. Valitse toinen nimi.';
        case STAGE.CREATION_ERROR:
          return 'Käyttäjän luonti epäonnistui. Ota yhteyttä Janiin.';
        default:
          return '';
      }
    },
    isUsernameValid() {
      return this.username && this.username.length > 0;
    },
    isPasswordValid() {
      return this.password === this.passwordAgain;
    },
  },
  methods: {
    async createUser() {
      try {
        await addUser({ username: this.username, password: this.password });
        this.$router.push({ name: 'mainpage' });
      } catch (err) {
        this.stage = STAGE.USERNAME_EXISTS;
      }
    },
    proceedStage(pattern) {
      this.isError = false;
      this.isSuccess = false;
      switch(this.stage) {
        case STAGE.START:
        case STAGE.USERNAME_OK:
        case STAGE.USERNAME_ERROR:
        case STAGE.PASSWORD_AGAIN_ERROR:
        case STAGE.CREATION_ERROR:
        case STAGE.USERNAME_EXISTS:
          if (this.isUsernameValid) {
            this.password = pattern;
            this.stage = STAGE.PASSWORD_OK;
            this.setStatus(true);
          } else {
            this.password = '';
            this.passwordAgain = '';
            this.stage = STAGE.USERNAME_ERROR;
            this.setStatus(false);
          }
          break;
        case STAGE.PASSWORD_OK:
          if (this.isUsernameValid) {
            this.passwordAgain = pattern;
            this.setStatus(true);
          } else {
            this.stage = STAGE.USERNAME_ERROR;
            this.setStatus(false);
            break;
          }
          if (this.isPasswordValid) {
            this.stage = STAGE.CREATING;
            this.setStatus(true);
            this.createUser();
          } else {
            this.stage = STAGE.PASSWORD_AGAIN_ERROR;
            this.password = '';
            this.passwordAgain = '';
            this.setStatus(false);
          }
          break;
        default:
          break;
      }
    },
    setStatus(isSuccess) {
      this.isSuccess = isSuccess;
      this.isError = !isSuccess;
    },
    reset() {
      this.isError = false;
      this.isSuccess = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.new-user-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: $pattern-background;
  color: $negative-text;
  padding: 32px;

  .logo-container img {
    width: 64px;
  }

  .disclaimer-container {
    @include fade(.2s);

    text-align: center;
  }

  .username-container > input {
    height: 42px;
    background-color: rgba(0, 0, 0, 0);
    color: $negative-text;
    padding: 0 16px;
    border: 0;
    border-bottom: 2px solid $negative-text;
    font-family: inherit;
    font-size: 18px;
    outline: none;
    letter-spacing: 1px;
    text-align: center;
  }

  .new-user-container {
    border: 2px solid $negative-text;
    padding: 12px;
    font-size: 12px;
    cursor: pointer;
  }

  .is-error {
    color: $pattern-fail;
  }

  .is-success {
    color: $pattern-success;
  }
}
</style>
