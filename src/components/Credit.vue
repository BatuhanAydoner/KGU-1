<template>
  <div class="flex justify-center items-center mt-8">
    <div class="relative">
      <label for="name-with-label" class="text-gray-700"> Kredi Miktari </label>
      <input
        type="text"
        id="name-with-label"
        class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        name="email"
        v-model="credit"
        placeholder="Miktar (Örn: 45)"
      />

      <button
        type="button"
        v-on:click="buyCredit"
        class="py-2 px-4 my-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Kredi Al
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Credit",
  data() {
    return {
      credit: "",
    };
  },
  methods: {
    buyCredit() {
      console.log("Kredi al basladi");
      let userId = localStorage.getItem("userId");
      axios({
        method: "POST",
        url: "https://kguproject.herokuapp.com/api/users/add-credit",

        data: {
          id: userId,
          quantity: this.credit,
        },
      })
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
