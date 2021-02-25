<template>
  <div class="addTodo">
    <input type="text" v-model="todo.text" placeholder="New todo" />
    <div>
      <input
        v-model="todo.important"
        type="checkbox"
        name="urgent"
        id="urgent"
      />
      <label for="urgent">Urgent</label>
    </div>
    <button @click="addTodo">Submit</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const todo = ref({ text: "", important: false });
    const addTodo = () => {
      store.dispatch({ type: "addTodo", payload: { ...todo.value } });
      todo.value.text = "";
      todo.value.important = false;
    };
    return { addTodo, todo };
  },
};
</script>

<style scoped>
.addTodo {
  margin: auto;
  max-width: 60%;
  background-color: rgb(222, 228, 208);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

input[type="text"] {
  padding: 0.5rem;
  border-radius: 1rem;
  padding-left: 0.5rem;
  outline: none;
  font-size: 1.5rem;
  border: none;
  margin-right: 1rem;
}
label {
  margin-right: 1rem;
}
button {
  padding: 0.5rem;
  background-color: rgb(117, 189, 117);
  color: white;
  outline: none;
  border-radius: 1rem;
  font-size: 1.2rem;
}
</style>