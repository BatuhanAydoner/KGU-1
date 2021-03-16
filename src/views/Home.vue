<template>
  <v-app >
    <v-container class="home-body">
      <nav class="container d-flex justify-content-between">
        <img class="logo" src="@/assets/Logo.png" alt="Logo" />
        <div>
          <router-link to="/">Ana Sayfa</router-link> |
          <router-link to="about">Nasıl Kullanılır?</router-link> |
          <router-link to="about">Giriş Yap</router-link>
        </div>
      </nav>
      <div class="desription">
        <h1 class="">Header</h1>
        <p class="text-secondary">aciklama</p>
      </div>
    </v-container>
    <img
      class="img-purple-hand"
      src="@/assets/without_login/purple_hand.png"
      alt="purple hand"
    />
  </v-app>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.home-body {
  font-family: "Comfortaa", cursive;
}
.img-purple-hand {
  height: 80vh;
  position: absolute;
  bottom: 0;
  right: 7vw;
}
.desription{
  margin-top: 9vh;
}

.logo {
  width: 7vw;
}
</style>
