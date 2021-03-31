<template>
  <div>
    giris yapildi
    <button @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logout() {
      localStorage.removeItem("token");
      location.reload();
    },
  },
};
</script>

<style scoped></style>
