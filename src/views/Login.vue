<template>
	<Header />
	<div class="container">
		<!-- <div class="card position-absolute top-50 start-50 translate-middle"> -->
		<div class="Absolute-Center is-Responsive">
			<h4 class="textalert alert-danger" v-if="exibeMensagem">{{mensagemErro}}</h4>
			<div>
				<div class="mb-3">
					<input type="email" class="form-control" placeholder="Email" required v-model="usuario.email" />
				</div>
				<div class="mb-3">
					<input
						class="form-control"
						type="password"
						placeholder="senha"
						required
						v-model="usuario.password"
					/>
				</div>
				<div class="d-grid gap-2">
					<button v-on:click="acessar()" type="button" class="btn btn-primary">Acessar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import firebase from "firebase";

export default {
	nome: "Login",
	components: {
		Header
	},
	data() {
		return {
			mensagemErro:"Email ou senha inválidos!",
			exibeMensagem: false,
			usuario: {
				email: "",
				password: ""
			}
		};
	},
	methods: {
		acessar() {
			this.exibeMensagem = false;
			firebase.auth().signInWithEmailAndPassword(this.usuario.email,this.usuario.password).then(response => {
				window.uid = response.user.uid;
				this.$router.push("/home");
			}).catch(erro => {
				this.exibeMensagem = true;
				console.log("AAAAAAAAAA");
				console.log(erro);
			});
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			if(window.uid){
				vm.$router.push({name: "Home"});
			}
		});
	}
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
</style>