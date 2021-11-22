<template>
	<Header />
	<div id="main">
		<div class="container">
			<h3 class="text-center">Meu Diário</h3>
			<button type="button" class="btn btn-primary btn-lg" v-on:click="anotarDiario()">
				<span>+</span>
			</button>
			<div id="listaDiarios">
				<div class="card col-sm-12 col-md-12" v-for="diario in diarios" v-bind:key="diario.id">
					<div class="card-body " >
						<span>{{"Anotações do dia: "+convertDate(diario.calendario)}}</span>
						<ul class="list-group">
							<li class="list-group-item">
								<div class="row">
                                    <div class="col-md">{{ diario.inputDia }}</div>
									<!-- <div class="col-md" v-if="diario.inputDia.length < 60">{{ diario.inputDia }}</div>
									<div class="col-md" v-else>{{ diario.inputDia.substring(0,61)+"..." }}</div> -->
								</div>
								<br />
								<div class="row">
                                    <div class="col-md">{{ diario.inputGratidao }}</div>
									<!-- <div class="col-md" v-if="diario.inputGratidao.length < 60">{{ diario.inputGratidao }}</div>
									<div class="col-md" v-else>{{ diario.inputGratidao.substring(0,61)+"..." }}</div> -->
								</div>
							</li>
						</ul>
						<div>
							<button type="button" class="btn btn-primary btn-sm" id="tamanhoBotao" v-on:click="editarDiario(diario)">
								<span class="fa fa-edit"></span>
							</button>
							<button type="button" class="btn btn-danger btn-sm" id="tamanhoBotao" v-on:click="deleteAnotacao(diario)">
								<span class="fa fa-trash"></span>
							</button>
						</div>
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
		anotarDiario() {
			this.$router.push("/cadastrarDiario");
		},
		editarDiario(diario){
			this.$router.push(`/editarDiario/${diario.id}`);
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
		},
		deleteAnotacao(diario){
			const db = firebase.database().ref(`/diarios/${window.uid}/`+diario.id);
			db.remove().then(function(data){
				console.log("removido com sucesso!"+data);
			}).catch(function(error) {
				console.log("Remove failed: " + error.message);
			});
		}
	}
};
</script>

<style scoped>
	#main {
		padding: 10px;
	}
	#listaDiarios {
		padding-top: 10px;
	}
	.card {
       margin-bottom: 10px;
	}
	.list-group-item {
        max-height: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
	#tamanhoBotao {
		/* display: block; */
        width: 50%;
        margin-top: 5px;
    }
        
</style>