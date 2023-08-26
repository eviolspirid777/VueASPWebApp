import App from "./App.vue";
import router from "./router";
import Router from "vue-router";
import store from "./store/store";
import Vue from "vue";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUserSecret);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Router);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
