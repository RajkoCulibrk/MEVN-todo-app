<template>
  <div>
    <SpinnerVue v-if="loadingUser" />
    <form v-if="!loadingUser" @submit.prevent="onSubmit">
      <h3>Sign in</h3>

      <input type="email" required placeholder="Email" v-model="email" />
      <input
        type="password"
        required
        placeholder="Password"
        v-model="password"
      />
      <button>Sign in</button>
      <div class="to-signup">
        Don't have an account? <br />
        <router-link to="Signup">Sign up !</router-link>
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

    const errors = computed(() => store.getters.errors);
    const loadingUser = computed(() => store.state.loadingUser);

    const password = ref("");
    const email = ref("");

    const onSubmit = () => {
      store.dispatch({
        type: "signIn",
        payload: {
          password: password.value,
          email: email.value,
        },
      });
    };
    return { onSubmit, password, email, store, errors, loadingUser };
  },
};
</script>

<style>
.to-signup {
  margin-top: 1rem;
}
.to-signup a {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}
</style>