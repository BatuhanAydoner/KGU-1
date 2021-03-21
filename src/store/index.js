import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nowComponents: "login",
    isLoggedIn: false
  },
  mutations: {
    LoginViewLogin() {
      this.state.nowComponents = "login";
    },
    LoginViewSignUp() {
      this.state.nowComponents = "signup";
    },
    LoginViewForgotPassword() {
      this.state.nowComponents = "forgot";
    },
    toggleLoading() {
      this.state.isLoggedIn = !this.state.isLoggedIn;
    }
  },
  actions: {
    LoginViewLogin(context) {
      context.commit("LoginViewLogin");
    },
    LoginViewSignUp(context) {
      context.commit("LoginViewSignUp");
    },
    LoginViewForgotPassword(context) {
      context.commit("LoginViewForgotPassword");
    },
    toggleLoading(context) {
      context.commit("toggleLoading");
    }
  }
});
