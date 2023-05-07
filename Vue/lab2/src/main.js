import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import addUser from "./components/pages/addUser.vue";
import allUsers from "./components/pages/allUsers.vue";
import editUser from "./components/pages/editUser.vue";
import errorPage from "./components/pages/errorPage.vue";
import userDetails from "./components/pages/userDetails.vue";

const routes = [
  { path: "/", component: allUsers, alias: "/users" },
  { path: "/users/:id", component: userDetails },
  { path: "/:NotFound(.*)*", component: errorPage, meta: { hideNavbar: true } },
  { path: "/edit/:id", component: editUser },
  { path: "/add", component: addUser },
];

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");
