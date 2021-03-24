<template>
  <div>
    <div class="loginMainView">
      <div class="text-center">
        <h2 class="mb-5 text-2xl">Hoşgeldiniz</h2>
        <div>
          <input v-model="user.email" type="email" placeholder="E-Posta" />
          <br />
          <input v-model="user.password" type="password" placeholder="Şifre" />
        </div>
        <button v-if="!visible" class="login-button" @click="signInKGU">
          Giriş Yap
        </button>
        <div v-else class="w-100 mx-auto flex justify-center items-center">
          <loading
            loader="bars"
            :active.sync="visible"
            :can-cancel="true"
          ></loading>
        </div>
        <a @click="LoginViewForgotPassword" class="mt-3 text-gray-500 ">
          Şifremi Unuttum
        </a>
        <a @click="LoginViewSignUp" class="text-muted">
          Hesabınız Yok mu? Kayıt Olun
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import Loading from "vue-loading-overlay";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "fohidolyqi@mailinator.com",
        password: "Pa$$w0rd!"
      },
      visible: false
    };
  },
  components: {
    Loading
  },

  methods: {
    ...mapActions(["LoginViewSignUp", "LoginViewForgotPassword"]),
    signInKGU() {
      this.visible = true;
      let loader = this.$loading.show({
        loader: "dots"
      });

      axios({
        method: "POST",
        url: "https://kguproject.herokuapp.com/api/users/signin",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        data: {
          ...this.user
        }
      }).then(res => {
        loader.hide();
        this.visible = false;
        console.log(this.user);
        console.log(res);
        this.$router.push("/");
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
