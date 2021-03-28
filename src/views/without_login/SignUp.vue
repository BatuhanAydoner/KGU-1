<template>
  <div
    class="flex max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800 lg:max-w-4xl md:mt-14"
  >
    <!--    https://elements.envato.com/welcome-screen-girl-GU84WWU -->
    <div
      class="hidden bg-cover pr-5 lg:block lg:w-1/2"
      style="
        background-image: url('https://elements-cover-images-0.imgix.net/02ec0894-22c0-4d03-922b-b6863e1c0c2a?auto=compress%2Cformat&fit=max&w=2740&s=197207c703e48a73ff81abed8219a2f9');
        background-position: center;
      "
    ></div>

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
      <img
        src="https://www.kgu.0x778.me/img/Logo.ed60e589.png"
        class="w-24 mx-auto hidden md:block"
        alt=""
      />

      <p class="text-xl text-center text-gray-600 dark:text-gray-200">
        Hoşgeldiniz
      </p>

      <label
        class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
        for="LoggingEmailAddress"
        >İsim Soyisim
      </label>
      <div class="flex justify-between">
        <input
          v-model="newUser.firstname"
          id="FirstName"
          class="md:inline w-40 md:w-44 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
          placeholder="İsim"
        />
        <input
          v-model="newUser.lastname"
          id="LastName"
          class="md:inline w-40 md:w-48 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
          placeholder="Soyisim"
        />
      </div>
      <div class="mt-4">
        <label
          class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          for="LoggingEmailAddress"
          >Email Adresiniz</label
        >
        <input
          v-model="newUser.email"
          id="LoggingEmailAddress"
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="email"
          placeholder="Email"
        />
      </div>

      <div class="mt-4">
        <div class="flex justify-between">
          <label
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            for="loggingPassword"
          >
            Şifreniz
          </label>
        </div>

        <input
          v-model="newUser.password"
          id="loggingPassword"
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="password"
          placeholder="Şifre"
        />
      </div>
      <div class="mt-4">
        <div class="flex justify-between">
          <label
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            for="loggingPassword"
          >
            Şifrenizi Doğrulayın
          </label>
        </div>

        <input
          v-model="newUser.repassword"
          id="loggingRePassword"
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="password"
          placeholder="Şifre"
        />
      </div>
      <label class="flex items-center space-x-3 mt-4">
        <input
          v-model="isMentor"
          type="checkbox"
          name="checked-demo"
          class="rounded form-checkbox"
        />
        <span class="text-gray-700 font-normal text-sm">
          Danışman Hesabı Olarak Kayıt Ol
        </span>
      </label>
      <div class="mt-4">
        <button
          @click="signUp"
          class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-indigo-500 to-purple-400 rounded focus:outline-none focus:bg-gray-600"
        >
          Kayıt Ol
        </button>
      </div>

      <div class="flex items-center justify-between mt-4">
        <span class="w-1/4 border-b dark:border-gray-600 md:w-1/4"></span>

        <router-link
          to="/giris-yap"
          class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline text-center"
        >
          Hesabınız Var Mi? <br />
          Giriş Yapın
        </router-link>

        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      newUser: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repassword: "",
      },
      isMentor: false,
    };
  },
  methods: {
    signUp() {
      let whoIs = this.isMentor ? "mentors" : "users";
      axios({
        method: "POST",
        url: `https://kguproject.herokuapp.com/api/${whoIs}/signup`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        data: {
          ...this.newUser,
        },
      }).then((res) => {
        console.log(this.newUser);
        console.log(res);
        this.$router.push("/giris-yap");
      });
    },
  },
};
</script>

<style scoped>
.login-height {
  height: 50vh;
}
</style>
