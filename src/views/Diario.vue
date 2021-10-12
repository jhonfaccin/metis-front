<template>
	<Header />
	<div id="main">
		<h3 class="text-center">Meu Diario</h3>
		<button type="button" class="btn btn-primary btn-lg" v-on:click="goToAnotarDiario()">
			<span>+</span>
		</button>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	name: "Diario",
	components: {
		Header
	},
	methods: {
		goToAnotarDiario() {
			console.log(this.window);
			this.$router.push("/cadastrarDiario");
		}
	}
};
</script>

<style scoped>
	#main {
		padding: 10px;
	}
</style>