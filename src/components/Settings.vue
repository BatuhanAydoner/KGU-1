<template>
  <div class="w-full mt-8">
    <p class="text-4xl text-center mb-8">Ayarlar</p>
    <div class="mx-auto w-64">
      <div class="relative">
        <label for="name-with-label" class="text-gray-700"> İsim </label>
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="email"
          v-model="firstName"
          placeholder="İsim"
        />
      </div>

      <div class="relative mt-8">
        <label for="name-with-label" class="text-gray-700"> Soyisim </label>
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="email"
          v-model="lastName"
          placeholder="Soyisim"
        />
      </div>
      <div class="relative mt-8">
        <label for="name-with-label" class="text-gray-700"> Email </label>
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="email"
          v-model="email"
          placeholder="E-mail"
        />
      </div>
      <div class="relative mt-8 mb-8">
        <label for="name-with-label" class="text-gray-700"> Şifre </label>
        <input
          type="password"
          v-model="password"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Şifre"
        />
      </div>

      <button
        type="button"
        @click="updateInfos"
        class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Güncelle
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Settings",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    updateInfos() {
      let self = this;
      let userId = localStorage.getItem("userId");
      axios
        .patch(`https://kguproject.herokuapp.com/api/users/update/${userId}`, {
          firstname: self.firstName,
          lastname: self.lastName,
          email: self.email,
          password: self.password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
