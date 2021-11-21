import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import ContactUs from "../views/ContactUs.vue";
import AboutUs from "../views/AboutUs.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/main",
    name: "main",
    component: Main,
  },

  {
    path: "/contactUs",
    name: "contactUs",
    component: ContactUs,
  },

  {
    path: "/aboutUs",
    name: "aboutUs",
    component: AboutUs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
