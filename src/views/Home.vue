<template>
  <v-app>
    <Navbar />
    <v-container class="home-body">
      <div class="description">
        <h1 class="text-2xl md:text-3xl lg:text-4xl text-center">
          Uzman Fikirlere Ulaşmanın En Kolay Yolu
        </h1>
        <p
          class="header-description text-gray-500 text-lg md:text-xl lg:text-2xl mt-3"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          asperiores, aspernatur at blanditiis consequuntur culpa ea eaque error
          iure nesciunt nostrum, quaerat rem vel! Assumenda consequatur debitis
          expedita natus ullam? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </p>
        <div
          class="app-markets w-3/6 md:w-2/6 2xl:w-2/12 2xl:mb-4 mx-auto mb-5 "
        >
          <img
            src="@/assets/without_login/googlePlay.png"
            alt="Google Play"
            class="mx-auto"
          />
        </div>
      </div>
    </v-container>
    <img
      class="img-purple-hand md:w-3/6 xl:w-80 2xl:w-3/12 md:mx-auto md:absolute md:-bottom-5 md:left-0 md:right-0 md:text-center "
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
</style>

<!--<style scoped lang="scss">-->
<!--@media (max-width: 768px) {-->
<!--  .description h1 {-->
<!--    text-align: center;-->
<!--  }-->
<!--  .header-description {-->
<!--    margin: 0 20px;-->
<!--    font-size: 1.2rem;-->
<!--  }-->
<!--  .app-markets {-->
<!--    width: 100%;-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    margin-top: 2vh;-->
<!--    margin-bottom: 4vh;-->
<!--    img {-->
<!--      width: 40vw;-->
<!--      margin-left: 20px;-->
<!--    }-->
<!--  }-->
<!--}-->

<!--@media (min-width: 769px) and (max-width: 1024px) {-->
<!--  .header-description {-->
<!--    font-size: 2rem;-->
<!--    width: 90%;-->
<!--    text-align: center;-->
<!--    margin: 0 auto;-->
<!--  }-->

<!--  .description h1 {-->
<!--    text-align: center;-->
<!--  }-->

<!--  .img-purple-hand {-->
<!--    display: none;-->
<!--  }-->

<!--  .app-markets {-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    margin-top: 2vh;-->
<!--    margin-bottom: 4vh;-->
<!--    img {-->
<!--      width: 35%;-->
<!--    }-->
<!--  }-->
<!--}-->

<!--@media (min-width: 1025px) {-->
<!--  .header-description {-->
<!--    font-size: 22px;-->
<!--    width: 90%;-->
<!--    text-align: center;-->
<!--    margin: 0 auto;-->
<!--  }-->
<!--  .img-purple-hand {-->
<!--    height: 80vh;-->
<!--    position: absolute;-->
<!--    bottom: 0;-->
<!--    right: 7vw;-->
<!--  }-->
<!--  .description {-->
<!--    margin-top: 9vh;-->
<!--    max-width: 50%;-->
<!--  }-->

<!--  .app-markets {-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    margin-top: 2vh;-->
<!--    margin-bottom: 4vh;-->
<!--    img {-->
<!--      width: 15vw;-->

<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
