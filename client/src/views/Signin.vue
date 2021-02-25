<template>
  <form @submit.prevent="onSubmit">
    <h3>Sign in</h3>

    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Sign in</button>
    <div class="to-signup">
      Don't have an account? <br />
      <router-link to="Signup">Sing up !</router-link>
    </div>

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

    const errors = computed(() => store.getters.errors);

    const password = ref("");
    const email = ref("");
    let user = {
      password: password.value,
      email: email.value,
    };

    const onSubmit = () => {
      store.dispatch({
        type: "signIn",
        payload: {
          password: password.value,
          email: email.value,
        },
      });
    };
    return { onSubmit, password, email, store, errors };
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