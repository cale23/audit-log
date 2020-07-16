import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import pluralFilter from "./shared/filters/plural-filter";
import initialsFilter from "./shared/filters/initials-filter";
import uppercaseFilter from "./shared/filters/uppercase-filter";

Vue.config.productionTip = false;
Vue.filter("plural", pluralFilter);
Vue.filter("initials", initialsFilter);
Vue.filter("uppercase", uppercaseFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
