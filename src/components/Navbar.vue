<template>
  <nav class="container d-flex justify-content-between align-items-center">
    <router-link to="/">
      <img class="logo" src="@/assets/Logo.png" alt="Logo" />
    </router-link>
    <div>
      <router-link to="/">Ana Sayfa</router-link>
      <router-link
        class="login-button"
        to="giris-yap"
        @click.native="LoginViewLogin"
        >Giriş Yap</router-link
      >
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(["LoginViewLogin"])
  }
};
</script>

<style scoped>
nav {
  font-family: "Comfortaa", cursive;
}
.logo {
  width: 7vw;
}

a {
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-right: 15px;
}
.login-button {
  background: linear-gradient(293.79deg, #fe5762 25.78%, #ff6ba1 112.77%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
