<template>
  <v-app>
    <Navbar />
    <div class="container">
      <div class="row">
        <!--  Login Form Div     -->
        <div
          class="height-for-center col-4 d-flex justify-content-center align-items-center ml-5"
        >
          <transition
            mode="out-in"
            enter-active-class="animate__animated animate__bounceIn"
            leave-active-class="animate__animated animate__bounceOut"
          >
            <LoginView v-if="this.$store.state.nowComponents === 'login'" />

            <SignUp v-else-if="this.$store.state.nowComponents === 'signup'" />
            <ForgottenPassword
              v-else-if="this.$store.state.nowComponents === 'forgot'"
            />
          </transition>
        </div>

        <!--  Login Image Div     -->
        <div
          class="height-for-center col-8 d-flex justify-content-center align-items-center ml-n5"
        >
          <img
            src="@/assets/without_login/login-image.png"
            alt="login image"
            class="login-image"
          />
        </div>
      </div>
    </div>
  </v-app>
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
.height-for-center {
  height: 80vh;
}

.login-image {
  width: 48vw;
}
</style>
