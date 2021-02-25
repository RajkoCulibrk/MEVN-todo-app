<template>
  <div class="home">
    <AddTodoVue />
    <TodoVue v-for="todo in todos" :key="todo._id" :todo="todo" />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import TodoVue from "../components/Todo.vue";
import AddTodoVue from "../components/AddTodo.vue";

export default {
  name: "Home",
  components: { TodoVue, AddTodoVue },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);
    onMounted(() => {
      store.dispatch("getTodos");
    });
    return { todos };
  },
};
</script>
