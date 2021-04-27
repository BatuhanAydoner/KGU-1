<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    },
  },
};
</script>
<style>
body {
  background-color: #f0f3fe;
}
</style>
