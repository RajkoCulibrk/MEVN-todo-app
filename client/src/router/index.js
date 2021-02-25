import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      let user = localStorage.getItem("user");
      if (user) {
        next();
      } else {
        next("/signin");
      }
    }
  },
  {
    path: "/Signin",
    name: "Signin",

    component: Signin,
    beforeEnter(to, from, next) {
      let user = localStorage.getItem("user");
      if (user) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
    beforeEnter(to, from, next) {
      let user = localStorage.getItem("user");
      if (user) {
        next("/");
      } else {
        next();
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
