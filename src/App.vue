<template>
  <div id="app">
    <Navbar v-if="!this.$store.state.isHaveToken" />
    <NavBarLogged v-else />

    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/without_login_components/Navbar";
import NavBarLogged from "./components/NavBar";

export default {
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    },
  },
  components: {
    Navbar,
    NavBarLogged,
  },
};
</script>
<style>
body {
  background-color: #f0f3fe;
}
</style>
