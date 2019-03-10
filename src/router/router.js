import Vue from "vue";
import Router from "vue-router";
import Nav from "@/pages/nav.vue";
import Users from "@/components/AppUsers.vue";
import Add from "@/components/AppAdd.vue";
import Edit from "@/components/AppEdit.vue";
import NProgress from "nprogress";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: "/", name: "nav", component: Nav, children: [
      { path: "users", name: "users", component: Users, meta: { showProgressBar: false } },
      { path: "add", name: "add", component: Add },
      { path: "edit", name: "edit/:id", component: Edit },
    ] },
  ],
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
