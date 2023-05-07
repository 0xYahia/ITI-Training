import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import allUsers from "./components/pages/allUsers.vue";
import userDetails from "./components/pages/userDetails.vue";
import errorPage from "./components/pages/errorPage.vue";

const routes = [
  { path: "/", component: allUsers, alias: "/users" },
  { path: "/users/:id", component: userDetails },
  { path: "/:NotFound(.*)*", component: errorPage, meta: { hideNavbar: true } },
];

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");
