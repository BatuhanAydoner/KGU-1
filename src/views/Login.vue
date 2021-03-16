<template>
  <v-app>
    <Navbar />
    <div class="container">
      <div class="row">
        <!--  Login Form Div     -->
        <div
          class="height-for-center col-4 d-flex justify-content-center align-items-center"
        >
          <div class="text-center">
            <h2 class="mb-5">Hoşgeldiniz</h2>
            <div>
              <input type="email" placeholder="E-Posta" />
              <input type="password" placeholder="Şifre" />
            </div>
            <button class="login-button">Giriş Yap</button>
            <router-link to="sifremi-unuttum" class="mt-3 mb-3 text-secondary">
              Şifremi Unuttum
            </router-link>
            <div class="d-flex justify-content-center mt-n5 ">
              <hr class="w-75" />
            </div>
            <router-link to="kayit-ol">
              Hesabınız Yok mu? <br />Kayıt Olun.
            </router-link>
          </div>
        </div>

        <!--  Login Image Div     -->
        <div
          class="height-for-center col-8 d-flex justify-content-center align-items-center"
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
export default {
  name: "Login",
  components: {
    Navbar
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

input {
  width: 300px;
  height: 53px;
  background: #c3d0ed;
  border-radius: 12px;
  margin-bottom: 20px;
  padding-left: 20px;
}
input:focus {
  outline: none;
  box-shadow: 0 0 4px #0066ff;
}

.login-button {
  width: 200px;
  height: 50px;
  color: white;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    rgba(0, 10, 253, 1) 0%,
    rgba(126, 0, 253, 1) 50%,
    rgba(248, 0, 253, 1) 100%
  );
}

.login-button:hover {
  box-shadow: 0 0 5px #0066ff;
}

a {
  text-decoration: none;
  display: block;
}
</style>
