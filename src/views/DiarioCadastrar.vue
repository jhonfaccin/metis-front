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
							<textarea v-model="diary.dayReport" class="form-control" rows="8"></textarea>
							<br />
							<label>Pelo que você é grato(a) hoje?</label>
							<br />
							<textarea v-model="diary.gratitude" class="form-control" rows="8"></textarea>
							<br />
							<v-date-picker v-model="diary.dayRegister" locale="pt-BR">
								<template v-slot="{ inputValue, inputEvents }">
									<input class="form-control" id="calendario" :value="inputValue"
										v-on="inputEvents" />
								</template>
							</v-date-picker>
						</div>
						<button v-on:click="creat()" type="submit" class="btn btn-primary mb-2">Salvar</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import diaryService from "../services/diaryService";

export default {
	name: "Home",
	components: {
		Header
	},
	data() {
		return {
			diary: {
				dayReport: "",
				gratitude: "",
				dayRegister: new Date(),
			},
			message: {
				error: null
			}
		};
	},
	methods: {
		creat() {
			diaryService.createDiary(this.diary).then(response => {
				this.$router.push("/diario");
			}).catch(error => {
				console.error(error);
			});
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

@media (min-width: 700px) {}
</style>../services/diaryService