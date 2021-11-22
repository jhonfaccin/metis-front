<template>
	<Header />
	<div id="main">
		
		<div class="text-center">
			<h1>Meditação</h1>
		</div>
		<div class="container">
			<div class="card">
				<div class="card-body text-center">
					<p>Semana 1</p>
					<audio controls class="audio">
						<source src="horse.ogg" type="audio/ogg" />
						<source src="../assets/musica/agua.mp3" type="audio/mpeg" />Your browser does not support the audio element.
					</audio>
				</div>
			</div>
			<div class="card">
				<div class="card-body text-center">
					<p>Semana 2</p>
					<audio controls class="audio">
						<source src="horse.ogg" type="audio/ogg" />
						<source src="../assets/musica/SEGUNDA_SEMANA.mp3" type="audio/mpeg" />Your browser does not support the audio element.
					</audio>
				</div>
			</div>
			<div class="card">
				<div class="card-body text-center">
					<p>Semana 3</p>
					<audio controls class="audio">
						<source src="horse.ogg" type="audio/ogg" />
						<source src="../assets/musica/TERCEIRA_SEMANA.mp3" type="audio/mpeg" />Your browser does not support the audio element.
					</audio>
				</div>
			</div>
			<div class="card">
				<div class="card-body text-center">
					<p>Semana 4</p>
					<audio controls class="audio">
						<source src="horse.ogg" type="audio/ogg" />
						<source src="../assets/musica/QUARTA_SEMANA.mp3" type="audio/mpeg" />Your browser does not support the audio element.
					</audio>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
	name: "Meditcao",
	components: {
		Header
	},
	data() {
		return {
			currentTime: 0,
			seekValue: 0
		};
	},
	methods: {}
};
</script>

<style scoped>
	#main {
		padding: 10px;
	}
	.card {
		position: unset;
	}
	audio::-webkit-media-controls-panel {
		background-color: #46b0a3;
	}
	.audio {
		width: 500px;
		height: 54px;
	}
	@media (max-width: 700px){
		.audio {
			width: 250px;
			height: 54px;
		}
		.container {
			width:98%;
		}
	}
	
	/* @media  (min-width: 800px) {
		.container {
			width:1100px;
		}
	} */
	
</style>
