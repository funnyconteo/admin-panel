<template>
  <AppAdd v-model="user">
    <template v-slot:title>
      <h1 class="title">{{ title }}</h1>
    </template>
    <template v-slot:button>
      <button class="button button--add" type="button" @click="editUser()">
        Редачить
      </button>
    </template>
  </AppAdd>
</template>

<script>

import axios from "axios"

export default {
	components: {
		"AppAdd": () => import('@/components/AppAdd.vue')
  },
  watch: {
    $route (to, from) {
      if (to.path == `/edit/${this.id}`) {
        this.loadData()
      }
    }
  },
  mounted() {
    this.loadData()
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
    },
    title: ''
  }),
  computed: {
		id() {
			return this.$route.params.id
    },
    url() {
      return `http://localhost:3000/users/${this.id}`
    },
  },
  methods: {
    loadData() {
      axios.get(this.url)
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
        .then(response => {
          this.title = !this.user.firstName || !this.user.lastName
        ? 'Пользователь'
        : [this.user.firstName, this.user.lastName].join(' ')
        })
    },
    editUser() {
      return axios.patch('http://localhost:3000/users/' + this.id, this.user)
        .then(() => {
          this.$store.dispatch('getUsers');
          this.$router.push({ path: '/users' })
        })
    }
  },
}

</script>
