<template>
  <div class="text-center">
    <h2 class="mb-5 text-2xl">Hesap Oluştur</h2>
    <div>
      <input v-model="newUser.name" type="text" placeholder="Isim" /> <br />
      <input v-model="newUser.lastname" type="text" placeholder="Soyisim" />
      <br />
      <input v-model="newUser.email" type="email" placeholder="E-Posta" />
      <br />
      <input v-model="newUser.password" type="password" placeholder="Şifre" />
      <br />
      <input
        v-model="newUser.repassword"
        type="password"
        placeholder="Şifre Doğrula"
      />
    </div>
    <button class="login-button" @click="signupKGU">Hesap Oluştur</button>
    <div class="mt-5">
      <button class="text-gray-500" @click="LoginViewLogin">
        ⬅ Hesabınız Var mı? Giriş Yapın
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      newUser: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        repassword: ""
      }
    };
  },
  methods: {
    ...mapActions(["LoginViewLogin"]),
    signupKGU() {
      // axios
      //   .post(`http://kguproject.herokuapp.com/api/users/signup`, {
      //     body: { ...this.newUser }
      //   })
      //   .then(() => {
      //     console.log("basarili");
      //   })
      //   .catch(() => {
      //     console.log({ ...this.newUser });
      //     console.log("basarili degil");
      //   });

      axios({
        method: "post",
        url: "http://kguproject.herokuapp.com/api/users/signup",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        },
        data: {
          ...this.newUser
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
          console.log("basarisiz");
        });
    }
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
