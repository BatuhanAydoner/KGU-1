<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/without_login_components/Navbar";

export default {
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
