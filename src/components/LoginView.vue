<template>
  <div class="text-center">
    <h2 class="mb-5">Hoşgeldiniz</h2>
    <div>
      <input type="email" placeholder="E-Posta" />
      <input type="password" placeholder="Şifre" />
    </div>
    <button class="login-button">Giriş Yap</button>
    <a @click="LoginViewForgotPassword" class="mt-3 mb-3 text-secondary">
      Şifremi Unuttum
    </a>
    <div class="d-flex justify-content-center mt-n5 ">
      <hr class="w-75" />
    </div>
    <a @click="LoginViewSignUp"> Hesabınız Yok mu? <br />Kayıt Olun. </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions(["LoginViewSignUp", "LoginViewForgotPassword"])
  }
};
</script>

<style scoped>
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
  color: #0066ff;
}
</style>
