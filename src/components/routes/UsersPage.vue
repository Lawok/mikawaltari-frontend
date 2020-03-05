<template>
  <page-body>
    <div v-if="isLoading">Ladataan...</div>
    <basic-table v-else :data="users" :headers="userHeaders" />
  </page-body>
</template>

<script>
import { getUsers } from '../../api/users';
import PageBody from '../common/PageBody';
import BasicTable from '../common/BasicTable';

export default {
  name: 'UsersPage',
  components: {
    PageBody,
    BasicTable,
  },
  data() {
    return {
      isLoading: true,
      users: [],
      userHeaders: [
        {
          name: 'username',
          sortField: 'username',
          title: 'Nimi',
        },
        {
          name: 'motto',
          title: 'Motto',
        },
        {
          name: 'favoriteAuthor',
          title: 'Lempikirjailija',
        }
      ]
    }
  },
  async created() {
    this.users = await getUsers();
    this.isLoading = false;
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';
</style>
