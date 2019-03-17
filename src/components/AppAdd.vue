<template>
  <div class="add">
    <slot name="title"></slot>
    <div class="add__wrapper">
      <form class="form" action="#" @submit.prevent>
        <fieldset class="fieldset">
          <div class="field-wrap">
            <label for="first-name">Имя</label>
            <input type="text" id="first-name" v-model="user.firstName">
          </div>
          <div class="field-wrap">
            <label for="last-name">Фамилия</label>
            <input type="text" id="last-name" v-model="user.lastName">
          </div>
          <div class="field-wrap">
            <label for="balance">Баланс</label>
            <input type="text" id="balance" v-model="user.balance">
          </div>
          <div class="field-wrap">
            <label for="phone">Телефон</label>
            <input type="tel" id="phone" v-model="user.phone">
          </div>
          <div class="field-wrap">
            <label for="address">Адрес</label>
            <input type="tel" id="address" v-model="user.address">
          </div>
          <div class="field-wrap">
            <label for="company">Компания</label>
            <input type="tel" id="company" v-model="user.company">
          </div>
          <div class="field-wrap">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="user.email">
          </div>
          <div class="field-wrap">
            <label for="age">Возраст</label>
            <input type="number" id="age" v-model="user.age">
          </div>
        </fieldset>
      </form>
      <div class="add__preview-wrapper">
        <pre class="add__preview">{{ user }}</pre>
        <slot name="button"></slot>
      </div>
    </div>   
  </div>
</template>

<script>
  export default {
    name: "AppAdd",
    model: {
      prop: 'user'
    },
    props: {
      user: {
        type: Object,
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
    white-space: pre-wrap;
  }

  .button--add {
    background-color: rgba(66, 243, 112, 0.4);
  }

</style>


