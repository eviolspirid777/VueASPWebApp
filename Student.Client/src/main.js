import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import store from "./store/store";
import Vue from "vue";

Vue.config.productionTip = false;

Vue.use(Router);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
