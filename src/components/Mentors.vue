<template>
  <div class="flex flex-wrap justify-center">
    <div
      class="flex justify-around my-4 mx-5 max-w-md bg-white shadow-lg rounded-lg overflow-hidden"
      v-for="mentor in allMentorsList"
      :key="mentor._id"
    >
      <div class="w-1/3 bg-auto bg-landscape">
        <img
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
      </div>
      <div class="w-2/3 p-4 flex flex-col justify-between">
        <h1 class="text-gray-900 font-bold text-2xl">
          {{ mentor.firstname + " " + mentor.lastname }}
        </h1>
        <p class="mt-2 text-gray-600 text-sm">
          {{ mentor.mentor_about }}
        </p>
        <div>
          <div class="flex item-center mt-2">
            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
              ></path>
            </svg>
            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
              ></path>
            </svg>
            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
              ></path>
            </svg>
            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
              ></path>
            </svg>
            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
              ></path>
            </svg>
          </div>
          <div class="flex item-center justify-between mt-2">
            <h1 class="text-gray-700 font-bold text-xl">
              {{ mentor.hour_price }}₺
            </h1>

            <button
              type="button"
              v-bind:id="mentor._id"
              v-on:click="mentorProfile($event)"
              class="py-1 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              İncele
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let mentors = [];
import axios from "axios";
export default {
  name: "Mentors",
  data() {
    return {
      allMentorsList: mentors,
    };
  },
  methods: {
    mentorProfile(event) {
      let mentorID = event.currentTarget.id;
      this.$router.push({ name: "MentorView", params: { mentorID } });
    },
  },
  beforeCreate() {
    console.log("before create");
    axios
      .get("https://kguproject.herokuapp.com/api/mentors/all-mentors")
      .then(function (response) {
        let allMentors = response.data.mentors;
        if (mentors == "") {
          allMentors.forEach((element) => {
            mentors.push(element);
          });
        }
        console.log(mentors);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style scoped></style>