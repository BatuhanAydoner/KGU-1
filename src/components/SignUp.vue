<template>
  <div class="text-center">
    <h2 class="mb-5 text-2xl">Hesap Oluştur</h2>
    <div>
      <input type="email" placeholder="E-Posta" /> <br />
      <input type="password" placeholder="Şifre" /> <br />
      <input type="password" placeholder="Şifre Doğrula" />
    </div>
    <button class="login-button">Hesap Oluştur</button>
    <div class="mt-5">
      <button class="text-gray-500" @click="LoginViewLogin">
        ⬅ Hesabınız Var mı? Giriş Yapın
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ForgottenPassword",
  methods: {
    ...mapActions(["LoginViewLogin"])
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
}
</style>
