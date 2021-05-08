<template>
  <div>
    <button @click="$router.go(-1)" class="pt-8 pl-8">
      <ion-icon name="arrow-back-circle-outline" size="large"></ion-icon>
    </button>

    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-5/12 h-auto object-cover object-center rounded"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {{ this.mentorInfo.firstname + " " + this.mentorInfo.lastname }}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <span class="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span
                class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"
              >
              </span>
            </div>
            <p class="leading-relaxed pb-5">
              {{ this.mentorInfo.mentor_about }}
            </p>

            <div class="flex pb-8">
              <span class="title-font font-medium text-2xl text-gray-900">
                ₺{{ this.mentorInfo.hour_price }}
              </span>

              <date-picker
                class="flex ml-auto"
                v-model="value1"
                format="DD/MM/YYYY"
                type="date"
                valueType="format"
                placeholder="Tarih Seçin"
              ></date-picker>
            </div>
            <div class="">
              <button
                class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                @click="scheduleMeeting"
              >
                Randevu Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/tr";
import axios from "axios";

let mentor = [];
export default {
  name: "MentorView",
  data() {
    return {
      mentorID: this.$route.params.mentorID,
      mentorInfo: [],
      value1: null,
    };
  },
  components: { DatePicker },
  beforeCreate() {
    let mentorId = this.$route.params.mentorID;
    let self = this;
    axios
      .get(`https://kguproject.herokuapp.com/api/mentors/${mentorId}`)
      .then(function (response) {
        console.log(response.data.mentor);
        mentor = response.data.mentor;
        console.log(mentor);
        self.mentorInfo = mentor;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    scheduleMeeting() {
      let userCredit = localStorage.getItem("userCredit");
      if (parseInt(this.mentorInfo.hour_price) < userCredit) {
        // randevu alma islemi
        alert(this.value1);
      } else {
        alert("Yetersiz Kredi");
        this.$store.state.nowTab = "credit";
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.img-h {
  height: 50%;
}
</style>
