<template>
  <div class="add">
    <h1 class="title">Редактирование пользователя</h1>
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
    </div>   
  </div>
</template>

<script>
	export default {
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
    computed: {
      id() {
        return this.$route.params.id
      }
    },
	}
</script>
