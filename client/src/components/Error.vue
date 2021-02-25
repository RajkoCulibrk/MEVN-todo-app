<template>
  <div class="error">{{ error.errMessage }}</div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: ["error"],
  setup(props) {
    const store = useStore();
    const t = setTimeout(() => {
      store.commit("deleteError", props.error);
      clearTimeout(t);
    }, 3000);
  },
};
</script>

<style>
.error {
  color: red;
  margin-top: 0.2rem;
  font-weight: bold;
  letter-spacing: 3px;
}
</style>