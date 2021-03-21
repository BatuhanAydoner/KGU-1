<template>
  <div class="text-center">
    <h2 class="mb-5 text-2xl">Hoşgeldiniz</h2>
    <div>
      <input v-model="user.email" type="email" placeholder="E-Posta" /> <br />
      <input v-model="user.password" type="password" placeholder="Şifre" />
    </div>
    <button class="login-button" @click="signInKGU">Giriş Yap</button>
    <a @click="LoginViewForgotPassword" class="mt-3 text-gray-500 ">
      Şifremi Unuttum
    </a>
    <a @click="LoginViewSignUp" class="text-muted">
      Hesabınız Yok mu? Kayıt Olun
    </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["LoginViewSignUp", "LoginViewForgotPassword"]),
    signInKGU() {
      axios({
        method: "POST",
        url: "https://kguproject.herokuapp.com/api/users/signin",
        params: {
          ...this.user
        },
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        data: {
          ...this.user
        }
      }).then(res => {
        console.log(this.user);
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="scss">
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
  &.text-muted {
    color: rgba(107, 114, 128, 1);
  }
}
</style>
