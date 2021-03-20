<template>
  <div class="h-screen">
    <Navbar />
    <div
      class="container height-container xl:flex xl:items-center xl:justify-center "
    >
      <!--  Login Form Div     -->
      <div class="height-for-center xl:flex xl:items-center xl:justify-center ">
        <transition enter-active-class="animate__animated animate__bounceIn">
          <div class="xl:flex xl:justify-center xl:items-center xl:mx-auto">
            <LoginView v-if="this.$store.state.nowComponents === 'login'" />
            <SignUp v-else-if="this.$store.state.nowComponents === 'signup'" />
            <ForgottenPassword
              v-else-if="this.$store.state.nowComponents === 'forgot'"
            />
          </div>
        </transition>
        <!--  Login Image Div     -->
        <div
          class="height-for-center invisible md:visible md:mt-4 xl:w-6/12 2xl:w-5/12 mx-auto"
        >
          <img
            src="@/assets/without_login/login-image.png"
            alt="login image"
            class="login-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import LoginView from "@/components/LoginView";
import SignUp from "@/components/SignUp";
import ForgottenPassword from "@/components/ForgottenPassword";

export default {
  name: "Login",
  components: {
    Navbar,
    LoginView,
    SignUp,
    ForgottenPassword
  }
};
</script>

<style scoped>
.container {
  font-family: "Comfortaa", cursive;
}

@media only screen and (min-width: 1400px) {
  .height-container {
    height: 80vh !important;
  }
}
</style>
