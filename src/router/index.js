import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Diario from "../views/Diario.vue";

const routes = [
	{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/home",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: About
	},
	{
		path: "/diario",
		name: "Diario",
		component: Diario
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
