<template>
  <div id="app">
    <Navbar v-if="!this.$store.state.isHaveToken" />

    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/without_login_components/Navbar";

export default {
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    },
  },
  components: {
    Navbar,
  },
};
</script>
<style>
body {
  background-color: #f0f3fe;
}
</style>
