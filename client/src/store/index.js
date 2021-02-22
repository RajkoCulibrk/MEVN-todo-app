import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {},
  mutations: {},
  actions: {
    async signUp({ commit }, { payload }) {
      try {
        console.log(payload);
        let { data } = await axios.post(
          "http://localhost:5000/api/users",
          payload
        );
        localStorage.setItem("token", data.token);
      } catch (error) {
        localStorage.removeItem('token')
        console.log(error.response.data);
      }
    }
  },
  modules: {}
});
