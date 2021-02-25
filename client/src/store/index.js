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
    todos: []
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
          commit("setError", { errMessage: error.response.data.errors[0].msg });
        }
        if (error.response.data.msg) {
          commit("setError", { errMessage: error.response.data.msg });
        }
        if (error.response.data) {
          commit("setError", { errMessage: error.response.data });
        }
      }
    },
    async getTodos({ commit }) {
      console.log("sadf");
      try {
        let { data } = await instance.get("/api/todos");
        commit("setTodos", data);
      } catch (error) {
        console.log(error.response.data);
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
        let { data } = await instance.get("/api/auth");
        localStorage.setItem("user", JSON.stringify(data));
        commit("setUser", data);
      } catch (error) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        console.log(error.response?.data, "erore");
        console.log(error.response);
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
