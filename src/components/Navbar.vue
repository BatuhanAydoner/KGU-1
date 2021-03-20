<template>
  <nav class="container">
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
@media (max-width: 768px) {
  .logo {
    width: 27vw;
  }

  nav {
    font-family: "Comfortaa", cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  nav div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
  }

  nav div a {
    text-decoration: none;
    text-align: center;
    font-size: 1.4rem;
    margin-top: 0.3rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .logo {
    width: 17vw;
  }

  nav {
    font-family: "Comfortaa", cursive;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    margin-right: 15px;
  }
}

@media (min-width: 1025px) {
  .logo {
    width: 7vw;
  }

  nav {
    font-family: "Comfortaa", cursive;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    margin-right: 15px;
  }
}
.login-button {
  background: linear-gradient(293.79deg, #fe5762 25.78%, #ff6ba1 112.77%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
