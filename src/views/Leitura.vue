<template>
	<Header/>
	<div id="main">
		<div class="container">
			<h3 class="text-center">{{leitura.titulo}}</h3>
			<div>
				<p>{{leitura.texto}}</p>
			</div>
			<div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">{{leitura.titulo}}</h5>
                        <p class="card-text">{{leitura.texto}}</p>
                    </div>
                </div>
			
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import firebase from "firebase";

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
			const db = firebase.database().ref(`/textos/${id}`);
			db.on("value", data => {
				this.leitura = data.val();
				console.log(this.leitura);
			});
		}
	}
};
</script>

<style>
#main {
	padding: 10px;
}
</style>