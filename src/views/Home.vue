<template>
  <v-app>
    <Navbar />
    <v-container class="home-body">
      <div class="description w-50">
        <h1>Uzman Fikirlere Ulaşmanın En Kolay Yolu</h1>
        <p class="header-description text-secondary mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          asperiores, aspernatur at blanditiis consequuntur culpa ea eaque error
          iure nesciunt nostrum, quaerat rem vel! Assumenda consequatur debitis
          expedita natus ullam? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </p>
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
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>

<style>
.home-body {
  font-family: "Comfortaa", cursive;
}
.header-description {
  font-size: 22px;
}
.img-purple-hand {
  height: 80vh;
  position: absolute;
  bottom: 0;
  right: 7vw;
}
.description {
  margin-top: 9vh;
}
</style>
