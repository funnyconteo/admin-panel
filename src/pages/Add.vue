<template>
	<AppAdd v-model="user">
    <template v-slot:title>
      <h1 class="title">Добавление пользователя</h1>
    </template>
		<template v-slot:button>
			<button class="button button--add" type="button" @click="addUser()">
        Добавить
      </button>
		</template>
	</AppAdd>
</template>

<script>

export default {
	components: {
		"AppAdd": () => import('@/components/AppAdd.vue')
	},
	data: () => ({
		user: {
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
    addUser() {
      this.$store.dispatch('addUser', this.user)
    },
    date() {
        let date = new Date();
        let year = date.getFullYear()
        let mounth = date.getMonth() + 1
        let day = date.getDate()
        if (mounth < 10) mounth = '0' + mounth
        if (day < 10) day = '0' + day
        let regDate = year + '-' + mounth + '-' + day
        this.user.registered = regDate
      },
  },
}

</script>
