<template>
  <form @submit.prevent="onSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <input type="password" placeholder="Repeat password" v-model="password2" />
    <button>Sign up</button>
    <Error v-for="error in errors" :key="error.id" :error="error" />
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Error from "../components/Error.vue";
export default {
  components: { Error },
  setup() {
    const store = useStore();
    const username = ref("");
    const password = ref("");
    const password2 = ref("");
    const email = ref("");
    const errors = computed(() => store.getters.errors);
    let user = {
      name: username.value,
      password: password.value,
      email: email.value,
    };
    const onSubmit = () => {
      if (password.value == password2.value) {
        store.dispatch({
          type: "signUp",
          payload: {
            name: username.value,
            password: password.value,
            email: email.value,
          },
        });
      } else {
        store.commit("setError", { errMessage: "Passwords do not match!" });
      }
    };
    return { onSubmit, username, password, email, store, errors, password2 };
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  margin-top: 3rem;
  background-image: linear-gradient(90deg, #85ffbd 0%, #cac762 100%);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
}
form h3 {
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 2rem;
}
form input {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  font-size: 1.5rem;
}
form button {
  outline: none;
  margin: auto;
  text-transform: uppercase;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.5rem;
  border: none;
  background: #85ffbd;
  transition: all 0.5s ease;
  letter-spacing: 0.1rem;
}
form button:hover {
  background: rgb(63, 63, 63);
  color: #85ffbd;
}
</style>