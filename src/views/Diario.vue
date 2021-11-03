<template>
	<Header />
	<div id="main">
		<h3 class="text-center">Meu Diario</h3>
		<button type="button" class="btn btn-primary btn-lg" v-on:click="goToAnotarDiario()">
			<span>+</span>
		</button>
		<div id="listaDiarios">
			<div class="card" v-for="diario in diarios" v-bind:key="diario.calendario">
				<div class="card-body">
					<span>{{"Anotações do dia: "+convertDate(diario.calendario)}}</span>
					<ul class="list-group">
						<li class="list-group-item">
							<div class="row">
								<div class="col-md" v-if="diario.inputDia.length < 60">{{ diario.inputDia }}</div>
								<div class="col-md" v-else>{{ diario.inputDia.substring(0,61)+"..." }}</div>
							</div>
							<br />
							<div class="row">
								<div class="col-md" v-if="diario.inputGratidao.length < 60">{{ diario.inputDia }}</div>
								<div class="col-md" v-else>{{ diario.inputGratidao.substring(0,61)+"..." }}</div>
							</div>
						</li>
					</ul>
					<div>
						<button type="button" class="btn btn-primary btn-sm" id="teste" v-on:click="goToAnotarDiario()">
							<span class="fa fa-edit"></span>
						</button>
						<button type="button" class="btn btn-danger btn-sm" id="teste">
							<span class="fa fa-trash"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import firebase from "firebase";

export default {
	name: "Diario",
	components: {
		Header
	},
	data() {
		return {
			diarios: []
		};
	},
	created() {
		this.listarDiarios();
	},
	methods: {
		goToAnotarDiario() {
			console.log(this.window);
			this.$router.push("/cadastrarDiario");
		},
		listarDiarios() {
			const db = firebase.database().ref(`/diarios/${window.uid}`);
			db.on("value", data => {
				const values = data.val();
				this.diarios = Object.keys(values).map(i => values[i]);
			});
		},
		convertDate(data) {
			if (data) return new Date(data).toLocaleDateString();
			// data = data.toLocaleDateString("en-US");
			// return data.toLocaleTimeString(navigator.language, {hour: "2-digit", minute:"2-digit"});
		}
	}
};
</script>

<style scoped>
	#main {
		padding: 10px;
	}
	#listaDiarios {
		padding: 10px;
	}
	.card {
		position: unset;
	}
	.list-group-item {
		position: unset;
	}
	#teste {
		/* display: block; */
		width: 50%;
	}
</style>