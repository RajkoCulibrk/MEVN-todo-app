<template>
  <div class="home">
    <AddTodoVue />
    <SetFiltersVue />
    <SpinnerVue v-if="loadingTodos" />

    <transition-group v-if="filtered.length < 1" tag="p" name="list-complete">
      <TodoVue
        class="list-complete-item"
        v-for="todo in todos"
        :key="todo._id"
        :todo="todo"
      />
    </transition-group>
    <transition-group tag="p" name="list-complete">
      <TodoVue
        class="list-complete-item"
        v-for="todo in filtered"
        :key="todo._id"
        :todo="todo"
      />
    </transition-group>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import TodoVue from "../components/Todo.vue";
import AddTodoVue from "../components/AddTodo.vue";
import SpinnerVue from "../components/Spinner.vue";
import SetFiltersVue from "../components/SetFilters.vue";

export default {
  name: "Home",
  components: { TodoVue, AddTodoVue, SpinnerVue, SetFiltersVue },
  setup() {
    const store = useStore();
    const filtered = computed(() => store.state.filtered);
    const loadingTodos = computed(() => store.state.loadingTodos);
    const todos = computed(() => store.getters.todos);
    onMounted(() => {
      store.dispatch("getTodos");
    });
    return { todos, loadingTodos, filtered };
  },
};
</script>
<style >
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
