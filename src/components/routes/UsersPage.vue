<template>
  <div class="users">
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getUsers } from '../../axios/users';

export default {
  name: 'UsersPage',
  components: {
  },
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await getUsers();
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';
</style>
