
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "./assets/css/tailwind.css"

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDD9FjYwztnBlcti889KQV4WkZVl70eaVA",
  authDomain: "vue-slack-clone-60f5f.firebaseapp.com",
  databaseURL: "https://vue-slack-clone-60f5f-default-rtdb.firebaseio.com",
  projectId: "vue-slack-clone-60f5f",
  storageBucket: "vue-slack-clone-60f5f.appspot.com",
  messagingSenderId: "342812911326",
  appId: "1:342812911326:web:fca8088144a4f9a48d844f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
