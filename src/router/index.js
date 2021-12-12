import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Diario from "../views/Diario.vue";
import CadastraDiario from "../views/DiarioCadastrar.vue";
import EditarDiario from "../views/EditarDiario.vue";
import Login from "../views/Login.vue";
import Meditacao from "../views/Meditacao.vue";
import Leitura from "../views/Leitura.vue";

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
		path: "/login",
		name: "Login",
		component: Login
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
	},
	{
		path: "/cadastrarDiario",
		name: "cadastrarDiario",
		component: CadastraDiario
	},
	{
		path: "/editarDiario/:id",
		name: "editarDiario",
		component: EditarDiario
	},
	{
		path: "/meditacao",
		name: "meditacao",
		component: Meditacao	
	},
	{
		path: "/leitura/:id",
		name: "leitura",
		component: Leitura
	}
];


const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to,from,next) =>{
	if(!window.uid && to.name != "Login")
		next({name: "Login"});
	else
		next();
});







export default router;
