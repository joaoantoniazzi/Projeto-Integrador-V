import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import Dashboard from "../components/dashboard/Dashboard.vue";
import RegisterVehicle from "../components/dashboard/RegisterVehicle.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/register-vehicle",
    name: "Cadastrar veículo",
    component: RegisterVehicle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
