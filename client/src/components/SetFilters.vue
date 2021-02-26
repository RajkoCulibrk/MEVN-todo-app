<template>
  <div class="setFiltered">
    <select @change="setFiltered" name="" id="">
      <option value="all">All</option>
      <option value="important">important</option>
      <option value="completed">completed</option>
    </select>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);
    const filtered = computed(() => store.state.filtered);

    const setFiltered = (e) => {
      let condition = e.target.value;
      if (condition == "completed") {
        let x = todos.value.filter((todo) => {
          return todo.completed == true;
        });
        store.commit("setFiltered", x);
      }
      if (condition == "important") {
        let x = todos.value.filter((todo) => {
          return todo.important == true;
        });
        store.commit("setFiltered", x);
      }
      if (condition == "all") {
        store.commit("setFiltered", []);
      }
    };
    return { setFiltered, filtered };
  },
};
</script>

<style>
.setFiltered {
  margin-top: 1rem;
}
select {
  display: block;
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  outline: none;
  margin: auto;
}
@media screen and (max-width: 800px) {
  select {
    padding: 0;
  }
}
</style>