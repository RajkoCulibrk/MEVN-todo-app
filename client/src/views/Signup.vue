<template>
  <div>
    <SpinnerVue v-if="loadingUser" />
    <form v-if="!loadingUser" @submit.prevent="onSubmit">
      <h3>Sign up</h3>
      <input required type="text" placeholder="Username" v-model="username" />
      <input required type="email" placeholder="Email" v-model="email" />
      <input
        required
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <input
        type="password"
        placeholder="Repeat password"
        v-model="password2"
      />
      <button>Sign up</button>
      <div class="to-signup">
        Already have an account? <br />
        <router-link to="Signin">Sign in !</router-link>
      </div>
      <Error v-for="error in errors" :key="error.id" :error="error" />
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Error from "../components/Error.vue";
import SpinnerVue from "../components/Spinner.vue";

export default {
  components: { Error, SpinnerVue },
  setup() {
    const store = useStore();
    const username = ref("");
    const password = ref("");
    const password2 = ref("");
    const email = ref("");
    const loadingUser = computed(() => store.state.loadingUser);
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
    return {
      onSubmit,
      username,
      password,
      email,
      store,
      errors,
      password2,
      loadingUser,
    };
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
  background-image: linear-gradient(90deg, #85ffbe88 0%, #cac662b2 100%);

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
  color: white;
  text-shadow: 2px 2px 4px black;
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
  color: rgb(61, 56, 56);
  transition: all 0.5s ease;
  box-shadow: 2px 2px 4px black;
}
form button:hover {
  background: rgb(63, 63, 63);
  color: #85ffbd;
}

h3 {
  color: rgb(61, 56, 56);
}
.to-signup {
  color: white;
  text-shadow: 1px 1px black;
}

form a {
  box-shadow: none;
  background: #25a18e;
  display: block;
  width: fit-content;
  margin: auto;
  color: rgb(236, 236, 236) !important;
  border-radius: 1rem;
  transition: all 0.5s ease;
  padding: 0.3rem;
  margin-top: 1rem !important;
}

form a:hover {
  background: rgb(63, 63, 63);
  color: #85ffbd !important;
}

@media screen and (max-width: 800px) {
  form {
    max-width: 90%;
  }
}
</style>