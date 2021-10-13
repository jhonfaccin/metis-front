import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./styles/global.css";
import firebase from "firebase";


import VCalendar from "v-calendar";

const firebaseConfig = {
	apiKey: "AIzaSyDnymQWac0RfCQRtPsjwRF_pwdDCPo0eVc",
	authDomain: "metis-back.firebaseapp.com",
	databaseURL: "https://metis-back-default-rtdb.firebaseio.com",
	projectId: "metis-back",
	storageBucket: "metis-back.appspot.com",
	messagingSenderId: "1048612874378",
	appId: "1:1048612874378:web:a7ecf585ef126dc4852573",
	measurementId: "G-PR29TWS401"
};

firebase.initializeApp(firebaseConfig);

createApp(App)
	.use(firebase)
	.use(VCalendar, {})
	.use(router).mount("#app");
