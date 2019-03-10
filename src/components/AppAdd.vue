<template>
  <div class="add">
    <h1 class="title">Добавление пользователя</h1>
    <div class="add__wrapper">
      <form class="form" action="#" @submit.prevent>
        <fieldset class="fieldset">
          <div class="field-wrap">
            <label for="first-name">Имя</label>
            <input type="text" id="first-name" v-model="NewUser.firstName">
          </div>
          <div class="field-wrap">
            <label for="last-name">Фамилия</label>
            <input type="text" id="last-name" v-model="NewUser.lastName">
          </div>
          <div class="field-wrap">
            <label for="balance">Баланс</label>
            <input type="text" id="balance" v-model="NewUser.balance">
          </div>
          <div class="field-wrap">
            <label for="phone">Телефон</label>
            <input type="tel" id="phone" v-model="NewUser.phone">
          </div>
          <div class="field-wrap">
            <label for="address">Адрес</label>
            <input type="tel" id="address" v-model="NewUser.address">
          </div>
          <div class="field-wrap">
            <label for="company">Компания</label>
            <input type="tel" id="company" v-model="NewUser.company">
          </div>
          <div class="field-wrap">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="NewUser.email">
          </div>
          <div class="field-wrap">
            <label for="age">Возраст</label>
            <input type="number" id="age" v-model="NewUser.age">
          </div>
        </fieldset>
      </form>
      <div class="add__preview-wrapper">
        <pre class="add__preview">{{ NewUser }}</pre>
        <button class="button" type="button" @click="addUser()">Добавить</button>
      </div>
    </div>   
  </div>
</template>

<script>
  export default {
    name: "AppAdd",
    data: () => ({
      NewUser: {
        firstName: '',
        lastName: '',
        balance: '',
        phone: '',
        address: '',
        company: '',
        email: '',
        age: '',
        registered: ''
      }
    }),
    mounted() {
      this.date()
    },
    methods: {
      date() {
        let date = new Date();
        let year = date.getFullYear()
        let mounth = date.getMonth() + 1
        let day = date.getDate()
        if (mounth < 10) mounth = '0' + mounth
        if (day < 10) day = '0' + day
        let regDate = year + '-' + mounth + '-' + day
        this.NewUser.registered = regDate
      },
      addUser() {
        this.$store.dispatch('addUser', this.NewUser)
      }
    },
  }
</script>

<style lang="scss">

  .add {
    width: 80vw;
    margin: 0 auto;
  }

  .add__wrapper {
    display: flex;
    justify-content: space-between;
  }

  .add__preview-wrapper {
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .add__preview {
    width: 100%;
    text-align: left;
    line-height: 1.5;
    font-size: 1.2rem;
  }

</style>


