import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

//axios instance
const instance = axios.create({
  baseURL: "http://localhost:5000"
});
//set axios autentification  headers  automaticly if there is token or not in local storage
instance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

let user = JSON.parse(localStorage.getItem("user"));
export default createStore({
  state: {
    user: user,
    errors: [],
    todos: [],
    filtered: [],
    loadingTodos: false,
    loadingUser: false
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
      if (user) {
        router.go("/");
      } else {
        router.go("/signin");
      }
    },
    setError: (state, error) => {
      error.id = Date.now();
      state.errors.push(error);
    },
    deleteError: (state, error) => {
      state.errors = state.errors.filter((err) => err.id !== error.id);
    },
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.user = null;
      router.go("/login");
    },
    setTodos: (state, data) => {
      state.todos = data;
    },
    addTodo: (state, data) => {
      state.todos = [data, ...state.todos];
      if (state.filtered[0]) {
        if (state.filtered[0].important === true && data.important == true) {
          console.log(state.filtered[0].important);
          state.filtered = [data, ...state.filtered];
        }
      }
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter((todo) => todo._id !== id);
      state.filtered = state.filtered.filter((todo) => todo._id !== id);
    },
    setLoadingTodos: (state, data) => {
      state.loadingTodos = data;
    },
    setLoadingUser: (state, data) => {
      state.loadingUser = data;
    },
    setFiltered: (state, data) => {
      state.filtered = data;
    }
  },
  actions: {
    async signUp({ commit, dispatch }, { payload }) {
      try {
        console.log(payload);
        let { data } = await instance.post("/api/users", payload);
        localStorage.setItem("token", data.token);
        dispatch("getUser");
      } catch (error) {
        localStorage.removeItem("token");
        console.log(error.response.data);
        if (error.response.data.errors) {
          commit("setError", {
            errMessage: error.response.data.errors[0].msg
          });
        }
        if (error.response.data.msg) {
          commit("setError", { errMessage: error.response.data.msg.msg });
        }
        if (error.response.data) {
          commit("setError", { errMessage: error.response.data.msg });
        }
      }
    },
    async getTodos({ commit }) {
      try {
        commit("setLoadingTodos", true);
        let { data } = await instance.get("/api/todos");
        const completed = data.filter((todo) => todo.completed == true);
        const important = data.filter(
          (todo) => todo.completed == false && todo.important == true
        );
        const normal = data.filter(
          (todo) => todo.completed == false && todo.important == false
        );
        /* state.todos.filter((todo)=>todo.completed==true) */
        const sorted = [...important, ...normal, ...completed];
        commit("setLoadingTodos", false);
        commit("setTodos", sorted);
      } catch (error) {
        console.log(error.response.data);
        commit("setLoadingTodos", false);
      }
    },
    async signIn({ commit, dispatch }, { payload }) {
      try {
        console.log(payload);
        let { data } = await instance.post("/api/auth", payload);
        console.log(data);
        localStorage.setItem("token", data.token);
        dispatch("getUser");
      } catch (error) {
        localStorage.removeItem("token");

        if (error.response.data.errors) {
          commit("setError", { errMessage: error.response.data.errors[0].msg });
        }
        commit("setError", { errMessage: error.response.data.msg });
      }
    },
    async getUser({ commit }) {
      try {
        commit("setLoadingUser", true);
        let { data } = await instance.get("/api/auth");
        localStorage.setItem("user", JSON.stringify(data));
        commit("setUser", data);
      } catch (error) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        commit("setLoadingUser", false);
        console.log(error.response?.data, "erore");
        console.log(error.response);
      }
    },
    async addTodo({ commit }, { payload }) {
      try {
        const { data } = await instance.post("/api/todos", payload);

        commit("addTodo", data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async deleteTodo({ commit }, { payload }) {
      try {
        await instance.delete(`/api/todos/${payload}`);
        commit("deleteTodo", payload);
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async updateTodo({ commit }, { payload }) {
      try {
        const todo = await instance.put(`/api/todos/${payload._id}`, payload);
        console.log(todo);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  },
  modules: {},
  getters: {
    count(state) {
      return state.count;
    },
    user(state) {
      return state.user;
    },
    errors(state) {
      return state.errors;
    },
    todos(state) {
      return state.todos;
    }
  }
});
