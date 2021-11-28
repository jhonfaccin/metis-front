<template>
    <Header/>
    <div id="main">
		<div class="container">
			<h3 class="text-center">Sobre o Métis</h3>
            <p>desenvolvido por Jhonatan Faccin</p>
			<p>Este software foi desenvolvido como trabalho de conclusão de curso de Sistemas de Informação, com o 
                intuito de auxiliar à saúde mental e bem-estar das pessoas que sofrem de 
                transtorno de ansiedade.</p>
            <p>O programa de meditação assim como os textos informativos foram baseadas nas referências abaixo </p>
            <p>Dispenza, Dr. Joe. Como Criar um novo eu. Isbn, 2013.</p>
            <p>Meditative Therapies for Reducing Anxiety: A Systematic Review
and Meta-analysis of Randomized Controlled Trials*</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
	name: "About",
	components: {
		Header
	}
};
</script>
