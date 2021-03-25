<template>
  <div class="text-center">
    <h2 class="mb-5 text-2xl">Hesap Oluştur</h2>
    <div>
      <div class="inline ">
        <input
          v-model="newUser.firstname"
          type="text"
          placeholder="Isim"
          class="name stringInput"
        />
        <span class="nameSpan"></span>
        <input
          v-model="newUser.lastname"
          type="text"
          placeholder="Soyisim"
          class="lastname stringInput"
        />
      </div>
      <br />
      <input
        class="stringInput"
        v-model="newUser.email"
        type="email"
        placeholder="E-Posta"
      />
      <br />
      <input
        class="stringInput"
        v-model="newUser.password"
        type="password"
        placeholder="Şifre"
      />
      <br />
      <input
        class="stringInput"
        v-model="newUser.repassword"
        type="password"
        placeholder="Şifre Doğrula"
      />
    </div>
    <div class="flex mb-2 text-center mx-auto">
      <label class="flex justify-center items-center">
        <input v-model="isWantMentor" type="checkbox" class="form-checkbox" />
        <span class="ml-2">Danışman Olmak İstiyorum</span>
      </label>
    </div>
    <button v-if="!visible" class="login-button" @click="signupKGU">
      Hesap Oluştur
    </button>
    <div v-else class="w-100 mx-auto flex justify-center items-center">
      <loading
        loader="bars"
        :active.sync="visible"
        :can-cancel="true"
      ></loading>
    </div>
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
import Loading from "vue-loading-overlay";

export default {
  name: "SignUp",
  data() {
    return {
      newUser: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repassword: ""
      },
      visible: false,
      isWantMentor: false
    };
  },
  components: {
    Loading
  },

  methods: {
    ...mapActions(["LoginViewLogin"]),
    signupKGU() {
      this.visible = true;
      let loader = this.$loading.show({
        loader: "dots"
      });
      let whoIs = this.isWantMentor ? "mentors" : "users";

      axios({
        method: "POST",
        url: `https://kguproject.herokuapp.com/api/${whoIs}/signup`,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        data: {
          ...this.newUser
        }
      }).then(res => {
        loader.hide();
        this.visible = false;
        console.log(this.newUser);
        console.log(res);
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped lang="scss">
.stringInput {
  width: 300px;
  height: 53px;
  background: #c3d0ed;
  border-radius: 12px;
  margin-bottom: 20px;
  padding-left: 20px;
}
.name,
.lastname {
  width: 145px !important;
}
.nameSpan {
  width: 10px;
  display: inline-block;
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
