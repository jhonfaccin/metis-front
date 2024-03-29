import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./styles/global.css";


import VCalendar from "v-calendar";


createApp(App)
	.use(VCalendar, {})
	.use(router).mount("#app");
