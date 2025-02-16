<template>
	<Header />
	<div id="main">
		<div class="container">
			<h3 class="text-center">Home</h3>
			<div>
				<div class="card" v-for="texto in textos" v-bind:key="texto.id">
					<div class="card-body">
						<h5 class="card-title">{{ texto.titulo }}</h5>
						<h6 class="card-subtitle mb-2 text-muted" v-if="texto.status == false">Não lido</h6>
						<h6 class="card-subtitle mb-2 text-muted" v-if="texto.status == true">Lido</h6>
						<p class="card-text">{{ texto.texto }}</p>
						<button type="button" class="btn btn-primary" v-on:click="lerMais(texto)">
							<span>Ler mais</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import api from "../services/api.js";

export default {
	name: "Home",
	components: {
		Header
	},
	data() {
		return {
			textos: []
		};
	},
	created() {
		this.listarTextos();
	},
	methods: {
		listarTextos() {
			// api.get("/vaiSerImplementado").then(response => {
			// 	console.log(response.data);
			// }).catch(error => {
			// 	console.error('Erro ao fazer a requisição:', error);
			// });
			
			// const db = firebase.database().ref("/textos/");
			// db.on("value", data => {
			// 	const values = data.val();
			let values = [{ "titulo": "AAAA" }]
			this.textos = Object.keys(values).map(i => values[i]);
			console.log(this.textos);
			// });
		},
		lerMais(texto) {
			this.$router.push(`/leitura/${texto.id}`);
		}
	},
};
</script>

<style scoped>
#main {
	padding: 10px;
}

.card {
	margin-bottom: 10px;
	/* max-height: 180px; */
}

.card-text {
	font-family: Arial;
	max-height: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	/* number of lines to show */
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>
