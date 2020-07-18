import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/audit",
    name: "AuditLog",
    component: () =>
      import(/* webpackChunkName: "audit" */ "@/views/AuditLog.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
