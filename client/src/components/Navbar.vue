<template>
  <div class="navbar">
    <router-link to="/">
      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
    </router-link>

    <div class="nav-links">
      <div class="wellcome" v-if="user">
        Logged in as : <br />
        <span class="name">{{ user.name }}</span> <br />
        <span>{{ user.email }}</span>
      </div>
      <router-link v-if="!user" to="Signin">Login</router-link>
      <a @click="store.commit('logout')" v-if="user" href="#">Logout</a>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.getters.user);

    const counter = computed(() => store.getters.count);

    return { user, counter, store };
  },
};
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
  box-shadow: 2px 2px 4px black;
}
.nav-links a:hover {
  background: #41f193;
}
.logo img {
  width: 50px;
}

.wellcome {
  font-size: 0.8rem;
}
.name {
  text-transform: capitalize;
}
</style>