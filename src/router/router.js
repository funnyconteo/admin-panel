import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: 
  [
    {
      path: "/users", 
      name: "users", 
      component: () => import("@/pages/Users.vue"), 
    },
    {
      path: "/add", 
      name: "add", 
      component: () => import("@/pages/Add.vue") 
    },
    {
      path: "/edit/:id", 
      name: "edit", 
      component: () => import("@/pages/Edit.vue") 
    },
  ]
});

router.beforeResolve((to, from, next) => {
  if (from.path) {
    NProgress.start()
  }
  next()
}),

router.afterEach(() => {
  NProgress.done()
})


export default router
