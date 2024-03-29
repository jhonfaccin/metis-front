<template>
	<Header />
	<div class="container">
		<div class="Absolute-Center is-Responsive">
			<div v-show="isLogin">
				<h4 class="textalert alert-danger" v-if="exibeMensagem">{{mensagemErro}}</h4>
				<div class="mb-3">
					<input type="email" class="form-control" placeholder="Email" required v-model="usuario.email" />
				</div>
				<div class="mb-3">
					<input class="form-control" type="password" placeholder="senha" required v-model="usuario.password"/>
				</div>
				<div class="d-grid gap-2">
					<button v-on:click="acessar()" type="button" class="btn btn-primary">Acessar</button>
				</div>
				<div id="cadastro">
					<a href="#" v-on:click="cadastrarUsuario(false)">Cadastrar usuário</a>
				</div>
			</div>
			<div v-show="!isLogin">
				<a href="#" v-on:click="cadastrarUsuario(true)">Fazer Login</a>
				<CadastroUsuarioComponent />
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import CadastroUsuarioComponent from "@/components/CadastroUsuarioComponent.vue";

export default {
	nome: "Login",
	components: {
		Header,
		CadastroUsuarioComponent
	},
	data() {
		return {
			mensagemErro:"Email ou senha inválidos!",
			exibeMensagem: false,
			isLogin: true,
			usuario: {
				email: "",
				password: ""
			}
		};
	},
	methods: {
		acessar() {
			this.exibeMensagem = false;
			this.$router.push("/home");
		},
		cadastrarUsuario(login){
			this.isLogin = login;
		}
	},
	// beforeRouteEnter (to, from, next) {
	// 	next(vm => {
	// 		if(window.uid){
	// 			vm.$router.push({name: "Home"});
	// 		}
	// 	});
	// }
};
</script>

<style scoped>
.card {
	width: 55%;
}
.Absolute-Center {
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

.Absolute-Center.is-Responsive {
	width: 80%;
	height: 50%;
	min-width: 200px;
	max-width: 400px;
	padding: 40px;
}
#cadastro{
    padding-top: 5px;
}

</style>