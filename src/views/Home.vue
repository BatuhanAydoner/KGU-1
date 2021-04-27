<template>
  <div class="flex">
    <NavBarLogged class="sticky top-0" />
    <div class="w-full">
      <Mentors v-if="this.$store.state.nowTab === 'mentors'" />
      <Meeting v-if="this.$store.state.nowTab === 'meetings'" />
      <Credit v-if="this.$store.state.nowTab === 'credit'" />
      <Settings v-if="this.$store.state.nowTab === 'settings'" />
    </div>
  </div>
</template>

<script>
import NavBarLogged from "../components/NavBar";
import Mentors from "../components/Mentors";
import Meeting from "../components/Meeting";
import Credit from "../components/Credit";
import Settings from "../components/Settings";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavBarLogged,
    Mentors,
    Meeting,
    Credit,
    Settings,
  },
};
</script>

<style scoped></style>
