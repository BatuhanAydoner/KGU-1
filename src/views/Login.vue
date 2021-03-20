<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="main">
        <!--  Login Form Div     -->
        <div class="height-for-center ">
          <transition enter-active-class="animate__animated animate__bounceIn">
            <LoginView v-if="this.$store.state.nowComponents === 'login'" />
            <SignUp v-else-if="this.$store.state.nowComponents === 'signup'" />
            <ForgottenPassword
              v-else-if="this.$store.state.nowComponents === 'forgot'"
            />
          </transition>
        </div>

        <!--  Login Image Div     -->
        <div class="height-for-center main-image ">
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
@media (max-width: 768px) {
  .height-for-center {
    margin-top: 1rem;
  }
  .height-for-center img {
    display: none;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .height-for-center img {
    display: none;
  }

  .height-for-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-image {
    margin-top: 10vh;
  }
}

@media (min-width: 1025px) {
  .main {
    display: flex;
    flex-wrap: wrap;
  }
  .height-for-center img {
    width: 30vw;
  }
}
</style>
