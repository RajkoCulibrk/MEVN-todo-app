<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>

    <div class="nav-links">
      <router-link to="Signin">kurac</router-link>
      <router-link to="Signup">palac</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(90deg, #85ffbd 0%, #fffb7d 100%);
}

.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-links a {
  text-decoration: none;
  font-weight: bold;
  color: rgb(80, 78, 78);
  border-radius: 1rem;
  text-transform: uppercase;
  margin-left: 1rem;
  padding: 0.5rem;
  background: #85ffbd;
}
.logo img {
  width: 50px;
}
</style>