<template>
  <div class="todo">
    <!-- {{ tod }} -->
    <input
      type="text"
      v-bind:class="{ urgent: tod.important, completed: tod.completed }"
      :disabled="!editing"
      v-model="tod.text"
    />
    <div class="todo-options">
      <div>
        <input
          type="checkbox"
          v-model="tod.important"
          name="urgent"
          id="urgent"
          :disabled="!editing"
        />
        <label for="urgent">Urgent</label>
      </div>
      <div>
        <input
          v-model="tod.completed"
          type="checkbox"
          name="completed"
          id="completed"
          :disabled="!editing"
        />
        <label for="completed">Completed</label>
      </div>
      <button class="delete" v-if="!editing" @click="deleteTodo">Delete</button>
      <button class="update" v-if="editing" @click="updateTodo">Update</button>
      <button @click="setEdit">{{ editing ? "Cancel" : "Edit" }}</button>
    </div>
  </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  props: { todo: Object },
  setup(props) {
    const store = useStore();
    const propsovi = toRefs(props);
    const tod = propsovi.todo.value;
    const editing = ref(false);

    const setEdit = () => {
      editing.value = !editing.value;
    };

    const deleteTodo = () => {
      store.dispatch({ type: "deleteTodo", payload: tod._id });
    };
    const updateTodo = () => {
      store.dispatch({ type: "updateTodo", payload: tod });
      editing.value = false;
    };
    return { tod, editing, setEdit, deleteTodo, updateTodo };
  },
};
</script>

<style scoped >
.todo {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: auto;
  margin-top: 1rem;
  background-color: #aaaaaaca;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 10px rgb(83, 83, 83);
}

.todo-options {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
}

input[type="text"] {
  padding: 0.1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  padding-left: 2rem;
  outline: none;
  border: none;
  background-color: #fefae0;
}
label {
  font-weight: bold;
  margin-left: 0.5rem;
}

.urgent {
  background-color: #ef233c !important;
  color: white;
  font-style: italic;
}
.completed {
  background-color: rgb(218, 205, 205) !important;
  color: rgb(104, 101, 101);
  text-decoration: line-through;
}

button {
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;
  background-color: #3a86ff;
  color: white;
  cursor: pointer;
}

button:hover {
  background: rgb(31, 29, 29);
}

.delete {
  background-color: #ff006e;
}

.update {
  background-color: #f6bd60;
}

@media screen and (max-width: 800px) {
  .todo {
    max-width: 90%;
  }
}
</style>