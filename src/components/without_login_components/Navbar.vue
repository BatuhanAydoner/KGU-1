<template>
  <header class="text-gray-600 body-font md:sticky top-0">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img src="../../assets/Logo.png" class="w-24" alt="" />
      </a>
      <nav
        class="md:ml-auto block md:flex md:flex-wrap md:items-center text-base md:justify-center"
      >
        <router-link
          to="/"
          class="md:mr-5 hover:text-gray-900 block mx-auto text-center"
          >Ana Sayfa</router-link
        >

        <router-link
          to="/giris-yap"
          class="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-white loginBtn-background-color hover:opacity-90"
        >
          <button class="inline-flex items-center">
            Giriş Yap
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Comfortaa", cursive;
}

header {
  background-color: #f0f3fe;
}
.loginBtn-background-color {
  background: linear-gradient(287.18deg, #fe5762 13.07%, #ff6ba1 110.81%);
  &:hover {
  }
}
</style>
