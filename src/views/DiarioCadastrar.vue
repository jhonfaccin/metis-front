<template>
	<Header />
	<div id="main">
		<div class="container">
			<h3 class="text-center">Inserir o registro diario</h3>
			<div class="row">
				<div class="col-md-12">
					<form class="form-inline">
						<div class="form-group mb-2">
							<label>Como foi seu dia?</label>
							<textarea v-model="diario.inputDia" class="form-control" rows="8"></textarea>
							<br />
							<label>Pelo que você é grato(a) hoje?</label>
							<br />
							<textarea v-model="diario.inputGratidao" class="form-control" rows="8"></textarea>
							<br />
							<v-date-picker v-model="diario.calendario">
								<template v-slot="{ inputValue, inputEvents }">
									<input class="form-control" id="calendario" :value="inputValue" v-on="inputEvents" />
								</template>
							</v-date-picker>
						</div>
						<button v-on:click="cadastrar()" type="submit" class="btn btn-primary mb-2">Salvar</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
// import api from "../services/api.js";


export default {
	name: "Home",
	components: {
		Header
	},
	data() {
		return {
			diario:{
				inputDia: "",
				inputGratidao: "",
				calendario: new Date(),
			}
		};
	},
	methods: {
		cadastrar(){
			this.validaCamposObrigatorios();
			// const db = firebase.database().ref(`/diarios/${window.uid}`);
			// const id = db.push().key;
			this.diario.id = id;
			this.diario.calendario = this.diario.calendario.getTime();
			// db.child(id).set(this.diario, error => {
			// 	if(error){
			// 		console.log(error);
			// 	}
			// 	else {
			// 		// this.diario.id = null;
			// 		// this.diario.inputDia = "";
			// 		// this.diario.inputGratidao = "";
			// 		// this.diario.calendario = new Date();
			// 		this.$router.push("/diario");
			// 	}
			// });
		},
		validaCamposObrigatorios() {
			if (this.diario.inputDia && this.diario.inputDia != "") {
				return true;
			}
            
			this.errors = [];

			if (!this.diario.inputDia) {
				console.log("AAAAAAAA");
			}
			if (!this.age) {
				this.errors.push("Age required.");
			}
		},
	},
};
</script>

<style scoped>
	#main {
		padding: 10px;
	}
	#calendario {
		width: 35%;
	}

	@media (min-width: 700px) {
	}
</style>