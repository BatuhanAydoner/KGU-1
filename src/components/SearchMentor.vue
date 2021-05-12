<template>
  <div class="">
    <div class="w-full text-center flex items-end justify-center space-x-6">
      <input
        type="text"
        placeholder="Danışman İsmi"
        class="w-72 border shadow-lg px-4 py-3 mt-8 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none font"
        v-model="searchKey"
      />
      <button
        @click="search"
        class="block px-6 py-2 leading-loose bg-indigo-500 text-white text-same text-center font-semibold leading-none hover:bg-indigo-400 rounded-l-2xl rounded-t-2xl"
      >
        Ara
      </button>
    </div>

    <div class="flex flex-wrap items-center" :key="key">
      <div
        class="w-96 px-8 py-4 mx-auto bg-white rounded-2xl shadow-xl my-16 border-2 border-indigo-300 transform transition duration-150 hover:scale-105 hover:border-4 hover:border-indigo-600"
        v-for="mentor in allMentorsList"
        :key="mentor._id"
      >
        <div class="flex justify-center -mt-16 md:justify-end">
          <img
            class="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full"
            alt="mentor avatar"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          />
        </div>

        <h2 class="mt-2 text-2xl text-gray-800 md:mt-0 md:text-3xl mentor-name">
          {{ mentor.firstname }} {{ mentor.lastname }}
        </h2>

        <p
          class="mt-2 text-gray-600 hover:font-bold text-same mentor-description"
        >
          {{ mentor.mentor_about }}
        </p>

        <div class="flex justify-between mt-2 items-center">
          <h1 class="text-indigo-600 font-bold text-2xl">
            {{ mentor.hour_price }}₺
          </h1>
          <button
            type="button"
            v-bind:id="mentor._id"
            v-on:click="mentorProfile($event)"
            class="py-1 px-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
          >
            İncele
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let mentors = [];
import axios from "axios";
export default {
  name: "SearchUser",
  data() {
    return {
      allMentorsList: mentors,
      key: 0,
      searchKey: "",
    };
  },

  methods: {
    mentorProfile(event) {
      let mentorID = event.currentTarget.id;
      this.$router.push({ name: "MentorView", params: { mentorID } });
    },

    search() {
      console.log("tiklandi = " + this.searchKey);
      this.get();
      this.key++;
    },

    get() {
      let searchMentorKey = this.searchKey;
      axios({
        method: "POST",
        url: "https://kguproject.herokuapp.com/api/mentors/search-mentors",
        data: {
          key: searchMentorKey,
        },
      })
        .then((response) => {
          let allMentors = response.data.mentors;

          mentors.length = 0
          allMentors.forEach((element) => {
            mentors.push(element);
          });

          this.$store.state.searchMentorKey = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeCreate() {
    console.log("create");
    this.get();
  },
  beforeMount() {
    console.log("mount");
    this.get();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.font {
  font-family: "Rubik", sans-serif;
}
</style>

<!--beforeCreate() {-->
<!--let searchMentorKey = this.$store.state.searchMentorKey;-->
<!--keyi = this.$store.state.keyForSearchMentor;-->
<!--console.log("store " + searchMentorKey);-->
<!--axios({-->
<!--method: "POST",-->
<!--url: "https://kguproject.herokuapp.com/api/mentors/search-mentors",-->

<!--data: {-->
<!--key: searchMentorKey,-->
<!--},-->
<!--})-->
<!--.then((response) => {-->
<!--console.log(response);-->
<!--let allMentors = response.data.mentors;-->
<!--allMentors.forEach((element) => {-->
<!--mentors.push(element);-->
<!--});-->
<!--this.$store.state.searchMentorKey = "";-->
<!--})-->
<!--.catch((error) => {-->
<!--console.log(error);-->
<!--});-->
<!--},-->
<!--beforeUpdate() {-->
<!--mentors = [];-->
<!--let searchMentorKey = this.$store.state.searchMentorKey;-->
<!--console.log("store " + searchMentorKey);-->
<!--axios({-->
<!--method: "POST",-->
<!--url: "https://kguproject.herokuapp.com/api/mentors/search-mentors",-->

<!--data: {-->
<!--key: searchMentorKey,-->
<!--},-->
<!--})-->
<!--.then((response) => {-->
<!--console.log(response);-->
<!--let allMentors = response.data.mentors;-->
<!--if (mentors == "") {-->
<!--allMentors.forEach((element) => {-->
<!--mentors.push(element);-->
<!--});-->
<!--}-->
<!--console.log("mentors " + mentors);-->
<!--console.log("store mentors " + this.allMentorsList);-->
<!--this.$store.state.searchMentorKey = "";-->
<!--})-->
<!--.catch((error) => {-->
<!--console.log(error);-->
<!--});-->
<!--},-->

<!--<div-->
<!--  class="flex flex-wrap justify-center"-->
<!--  :key="this.$store.state.keyForSearchMentor"-->
<!--&gt;-->
<!--<div-->
<!--  class="flex justify-around my-4 mx-5 max-w-md bg-white shadow-lg rounded-lg overflow-hidden"-->
<!--  v-for="mentor in allMentorsList"-->
<!--  :key="mentor._id"-->
<!--&gt;-->
<!--  <div class="w-1/3 bg-auto bg-landscape">-->
<!--    <img-->
<!--      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"-->
<!--      alt=""-->
<!--    />-->
<!--  </div>-->
<!--  <div class="w-2/3 p-4 flex flex-col justify-between">-->
<!--    <h1 class="text-gray-900 font-bold text-2xl">-->
<!--      {{ mentor.firstname + " " + mentor.lastname }}-->
<!--    </h1>-->
<!--    <p class="mt-2 text-gray-600 text-sm">-->
<!--      {{ mentor.mentor_about }}-->
<!--    </p>-->
<!--    <div>-->
<!--      <div class="flex item-center mt-2">-->
<!--        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">-->
<!--          <path-->
<!--            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"-->
<!--          ></path>-->
<!--        </svg>-->
<!--        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">-->
<!--          <path-->
<!--            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"-->
<!--          ></path>-->
<!--        </svg>-->
<!--        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">-->
<!--          <path-->
<!--            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"-->
<!--          ></path>-->
<!--        </svg>-->
<!--        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">-->
<!--          <path-->
<!--            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"-->
<!--          ></path>-->
<!--        </svg>-->
<!--        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">-->
<!--          <path-->
<!--            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"-->
<!--          ></path>-->
<!--        </svg>-->
<!--      </div>-->
<!--      <div class="flex item-center justify-between mt-2">-->
<!--        <h1 class="text-gray-700 font-bold text-xl">-->
<!--          {{ mentor.hour_price }}₺-->
<!--        </h1>-->

<!--        <button-->
<!--          type="button"-->
<!--          v-bind:id="mentor._id"-->
<!--          v-on:click="mentorProfile($event)"-->
<!--          class="py-1 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"-->
<!--        >-->
<!--          İncele-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
<!--</div>-->
