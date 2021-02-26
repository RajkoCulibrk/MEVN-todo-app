<template>
  <Navbar />

  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*,
html {
  font-family: "Roboto", sans-serif;
}
body {
  /*  background: rgb(255, 249, 249); */
  background-image: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
