<template>
	<Header />
	<div id="main">
		<div class="container">
			<h3 class="text-left">Inserir o registro diario</h3>
			<div class="row">
				<div class="col-md-8">
					<form class="form-inline">
						<div class="form-group mb-2">
							<label>Como foi seu dia?</label>
							<textarea v-model="inputDia" class="form-control" rows="6"></textarea>
							<br />
							<label>Pelo que você é grato(a) hoje?</label>
							<br />
							<textarea v-model="inputGratidao" class="form-control" rows="4"></textarea>
							<br />
							<v-date-picker v-model="calendario">
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
import api from "../services/api.js";

export default {
	name: "Home",
	components: {
		Header
	},
	data() {
		return {
			inputDia: "",
			inputGratidao: "",
			calendario: new Date(),
		};
	},
	methods: {
		cadastrar(){
			let diario = {};
			diario.textoDia = this.inputDia;
			diario.textoGratidao = this.inputGratidao;
			diario.data = this.calendario;
			console.log(diario);
			// console.log(today.toLocaleDateString("en-US"));
			api.post("/about.json").then(response => {
				console.log(response.data);
			});
		}
	},
};
</script>

<style scoped>
	#main {
		padding: 10px;
    }
    #calendario{
        width: 35%;
    }

	@media (min-width: 700px) {
	}
</style>