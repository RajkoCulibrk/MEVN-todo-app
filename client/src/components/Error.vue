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
  color: #ff477e;
  text-shadow: 2px 2px 2px black;
  margin-top: 0.2rem;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 3px;
}
</style>