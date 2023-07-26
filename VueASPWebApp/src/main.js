import App from "./App.vue";
import store from "./store/store";
import Vue from "vue";

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  store
}).$mount("#app");
