<template>
	<Header />
	<div id="main">
		<div class="container">
			<h3 class="text-center">Meu Diário</h3>
			<button type="button" class="btn btn-primary btn-lg" v-on:click="anotarDiario()">
				<span>+</span>
			</button>
			<div id="listaDiarios">
				<div class="card col-sm-12 col-md-12" v-for="diary in diaries" v-bind:key="diary.id">
					<div class="card-body " >
						<span>{{"Anotações do dia: "+convertDate(diary.dayRegister)}}</span>
						<ul class="list-group">
							<li class="list-group-item">
								<div class="row">
                                    <div class="col-md">{{ diary.dayReport }}</div>
								</div>
								<br />
								<div class="row">
                                    <div class="col-md">{{ diary.gratitude }}</div>
								</div>
							</li>
						</ul>
						<div>
							<button type="button" class="btn btn-primary btn-sm" id="tamanhoBotao" v-on:click="editarDiario(diary)">
								<span class="fa fa-edit"></span>
							</button>
							<button type="button" class="btn btn-danger btn-sm" id="tamanhoBotao" v-on:click="deleteDiary(diary)">
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
import diaryService from "../services/diaryService";

export default {
	name: "Diario",
	components: {
		Header
	},
	data() {
		return {
			diaries: []
		};
	},
	created() {
		this.listDiaries();
	},
	methods: {
		anotarDiario() {
			this.$router.push("/cadastrarDiario");
		},
		editarDiario(diary){
			this.$router.push(`/editarDiario/${diary.id}`);
		},
		listDiaries() {
			diaryService.getDiaries().then(response => {
				this.diaries = response.data;
			}).catch(error => {
				console.error(error);
			});
		},
		convertDate(date) {
			if (date) return new Date(date).toLocaleDateString('pt-BR');
		},
		deleteDiary(diary){
			diaryService.deleteDiary(diary.id).then(response => {
				this.listDiaries();
			}).catch(error => {
				console.error(error);
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
        /* width: 50%; */
        width:  85px;
        margin-right: 4px;
        margin-top: 5px;
    }
        
</style>