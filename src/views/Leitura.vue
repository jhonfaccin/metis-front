<template>
	<Header/>
	<div id="main">
		<div class="container">
			<h3 class="text-center">{{leitura.titulo}}</h3>
			<div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">{{leitura.titulo}}</h5>
                        <p class="card-text">{{leitura.texto}}</p>
						<button type="button" class="btn btn-primary" v-on:click="marcarComoLido(true)">
								<span>Marcar como lido</span>
						</button>
                    </div>
            </div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	name: "Leitura",
	components: {
		Header
	},
	data() {
		return {
			leitura: {
				titulo:"",
			}
		};
	},
	mounted() {
		this.getTextoById();
	},
	methods: {
		getTextoById() {
			const id = this.$route.params.id;
			// const db = firebase.database().ref(`/textos/${id}`);
			// db.on("value", data => {
			// 	this.leitura = data.val();
			// });
		},
		marcarComoLido(status){
			const id = this.$route.params.id;
			// const db = firebase.database().ref(`/textos/${id}`);
			this.leitura.status = status;
			// db.set(this.leitura, error => {
			// 	debugger;
			// 	if(error)
			// 		console.log(error);
			// 	else 
			// 		this.$router.push("/home");
			// });
		}
	}
};
</script>

<style>
#main {
	padding: 10px;
}
</style>