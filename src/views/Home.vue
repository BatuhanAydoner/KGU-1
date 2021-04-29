<template>
  <div class="flex">
    <NavBarLogged class="sticky top-0" />
    <div class="w-full">
      <Mentors
        v-if="
          this.$store.state.nowTab === 'mentors' &&
          this.$store.state.userType == 'users'
        "
      />
      <Meeting v-if="this.$store.state.nowTab === 'meetings'" />
      <Credit
        v-if="
          this.$store.state.nowTab === 'credit' &&
          this.$store.state.userType == 'users'
        "
      />
      <Settings v-if="this.$store.state.nowTab === 'settings'" />
      <SearchUser v-if="this.$store.state.nowTab === 'searchMentor'" />
    </div>
  </div>
</template>

<script>
import NavBarLogged from "../components/NavBar";
import Mentors from "../components/Mentors";
import Meeting from "../components/Meeting";
import Credit from "../components/Credit";
import Settings from "../components/Settings";
import SearchUser from "../components/SearchMentor";

export default {
  name: "Home",
  data() {
    return {};
  },
  beforeCreate() {
    let whoIs = localStorage.getItem("whoIs");
    if (whoIs == "mentors") {
      this.$store.state.nowTab = "meetings";
    }
  },
  components: {
    NavBarLogged,
    Mentors,
    Meeting,
    Credit,
    Settings,
    SearchUser,
  },
};
</script>

<style scoped></style>
