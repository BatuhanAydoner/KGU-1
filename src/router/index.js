import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/without_login/Home.vue";
import HomeLogged from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: {
      render(c) {
        this.$store.state.isHaveToken =
          localStorage.getItem("token") === null ? false : true;
        if (this.$store.state.isHaveToken === false) {
          return c(Home);
        } else {
          return c(HomeLogged);
        }
      },
    },
  },
  {
    path: "/giris-yap",
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/without_login/Login.vue"
      ),
  },
  {
    path: "/kayit-ol",
    name: "SignUp",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/without_login/SignUp.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
