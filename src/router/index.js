import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home"),
  },
  {
    path: "/audit",
    name: "AuditLog",
    component: lazyLoad("AuditLog"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
