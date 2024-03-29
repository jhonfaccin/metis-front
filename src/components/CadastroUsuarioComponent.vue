<template>
	<header>
		<h4 class="textalert alert-danger" id="alert" v-if="exibeMensagem">{{ mensagemErro }}</h4>
		<div>
			<div class="mb-3">
				<label>Digite um email válido</label>
				<input type="email" class="form-control" placeholder="Email" v-model="usuario.email" />
			</div>
			<div class="mb-3">
				<label>Digite uma senha</label>
				<input class="form-control" type="password" placeholder="senha" v-model="usuario.password" />
			</div>
			<div class="mb-3">
				<label>Repita a senha</label>
				<input class="form-control" type="password" placeholder="senha" v-model="usuario.confirmarSenha" />
			</div>
			<div class="d-grid gap-2">
				<button v-on:click="cadastrarUsuario()" type="button" class="btn btn-primary">Cadastrar</button>
			</div>
		</div>
	</header>
</template>

<script>

export default {
	nome: "CadastroUsuarioComponent",
	data() {
		return {
			exibeMensagem: false,
			mensagemErro: "Erro ao cadastrar usuario",
			usuario: {
				email: "",
				password: "",
				confirmarSenha: ""
			}
		};
	},
	methods: {
		// cadastrarUsuario() {
		// 	if (this.usuario.password == this.usuario.confirmarSenha && this.usuario.password.length > 5) {
		// 		firebase.auth().createUserWithEmailAndPassword(this.usuario.email, this.usuario.password)
		// 			.then(response => {
		// 				if (response) {
		// 					firebase.auth().signOut();
		// 					this.$router.push("/Login");
		// 				}
		// 			}).catch(erro => {
		// 				if (erro) {
		// 					this.exibeMensagem = true;
		// 					setTimeout(() => this.exibeMensagem = false, 2000);
		// 					this.usuario.email = "";
		// 					this.usuario.password = "";
		// 					this.usuario.confirmarSenha = "";
		// 				}
		// 			});
		// 	}
		// }
	},
};
</script>

<style scoped></style>