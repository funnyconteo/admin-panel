<template>
  <div class="users">
    <div v-if="users" v-cloak>
      <h1 class="title">Список пользователей</h1>
      <table class="users__table">
        <th>
          <td>#</td>
          <td>Имя</td>
          <td>Фамилия</td>
          <td>Активен</td>
          <td>Баланс</td>
          <td>Email</td>
          <td>Телефон</td>
          <td>Зарегистрирован</td>
          <td></td>
        </th>
        <tr :key="user.id" v-for="user in users">
          <router-link :to="'/edit/' + user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.isActive }}</td>
            <td>{{ user.balance }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.registered }}</td>
          </router-link>  
          <button class="button button--delete" type="button" @click="deleteUser(user.id)">Удалить</button>
        </tr>
      </table>
      <p class="users__count">Всего пользователей: {{ count }}</p>
    </div>
    <div class="preloader" v-else-if="!users">
      <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve">
        <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
        <g>
          <circle cx="16" cy="64" r="16" fill="#2c3e50" fill-opacity="1"/>
          <circle cx="16" cy="64" r="14.344" fill="#2c3e50" fill-opacity="1" transform="rotate(45 64 64)"/>
          <circle cx="16" cy="64" r="12.531" fill="#2c3e50" fill-opacity="1" transform="rotate(90 64 64)"/>
          <circle cx="16" cy="64" r="10.75" fill="#2c3e50" fill-opacity="1" transform="rotate(135 64 64)"/>
          <circle cx="16" cy="64" r="10.063" fill="#2c3e50" fill-opacity="1" transform="rotate(180 64 64)"/>
          <circle cx="16" cy="64" r="8.063" fill="#2c3e50" fill-opacity="1" transform="rotate(225 64 64)"/>
          <circle cx="16" cy="64" r="6.438" fill="#2c3e50" fill-opacity="1" transform="rotate(270 64 64)"/>
          <circle cx="16" cy="64" r="5.375" fill="#2c3e50" fill-opacity="1" transform="rotate(315 64 64)"/>
          <animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>

  export default {
    mounted() {
      return this.$store.dispatch('getUsers')
    },
    methods: {
      deleteUser(id) {
        return this.$store.dispatch('deleteUser', id)
      }
    },
    computed: {
      users() {
        return this.$store.state.users
      },
      count() {
        return this.users.length
      }
    },
  };
</script>

<style lang="scss">

  .users {
    width: 80vw;
    margin: 0 auto;
  }

  .users__table{
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;


    th, tr {
      border-bottom: 1px solid #e2e2e2;
      display: table-row;
    }

    th {
      display: table-row;
    }

    tr {
      a {
        display: contents;
        text-decoration: none;
        color: inherit;
      }

      &:hover {
        background-color: #ececec;
      }
    }

    td {
      padding: 10px;
      white-space: nowrap;
      text-align: left;
    }
  }

  .users__count {
    text-align: left;
    font-weight: bold;
    margin-top: 25px;
  }

  .preloader {
    margin-top: 50px;
  }

  .button--delete {
    font-size: .7rem;
    padding: 5px 5px;
    background-color: rgba(243, 70, 66, 0.4);
  }

</style>

