import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: null,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    getUsers(context) {
      return Axios.get('http://localhost:3000/users')
      .then((response) => {
        context.commit('SET_USERS', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    addUser(context, NewUser) {
      return Axios.post('http://localhost:3000/users', NewUser)
      .then((response) => {
        context.dispatch('getUsers', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteUser(context, id) {
      return Axios.delete('http://localhost:3000/users/' + id)
      .then((response) => {
        context.dispatch('getUsers', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
});
