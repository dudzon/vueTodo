import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import Vue from "vue";
import App from "./App.vue";
import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;
// Firebase config
Vue.use(VueFire);
var config = {
  apiKey: "AIzaSyCA2LrfIBAcga1sF1zYDPzf8zJrPyFQJyY",
  authDomain: "vuetodo-6bd00.firebaseapp.com",
  databaseURL: "https://vuetodo-6bd00.firebaseio.com",
  projectId: "vuetodo-6bd00",
  storageBucket: "vuetodo-6bd00.appspot.com",
  messagingSenderId: "761445342898"
};
firebase.initializeApp(config);
export const db = firebase.firestore();
new Vue({
  render: h => h(App)
}).$mount("#app");
