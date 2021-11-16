<template>
	<header>
		<nav class="container">
			<img v-on:click="openMenu" alt="Abrir menu" id="menu-button" src="../assets/menu.svg" />
			<h1>
				<span>Métis</span>
			</h1>
			<img alt="Abrir menu" id="menu-button" src="../assets/meditacao.jpg" />
			<div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive" />
			<div id="menu-items" :class="{active:menuActive}">
				<ul>
					<li>
						<router-link to="/">Início</router-link>
					</li>
					<li>
						<router-link to="/diario">Meu diário</router-link>
					</li>
					<li>
						<router-link to="/about">Sobre</router-link>
					</li>
					<li>
						<router-link to="/meditacao">Meditação</router-link>
					</li>
					<li>
						<router-link to="/about">About</router-link>
					</li>
					
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	nome: "Header",
	data() {
		return {
			menuActive: false
		};
	},
	methods: {
		openMenu: function(){
			this.menuActive = true;
		},
		closeMenu: function(){
			this.menuActive = false;
		}
	},
};
</script>

<style scoped>
	h1{
        color: #ededed;	
        text-align: left;
	}
	header {
		background-color: var(--color-background-nav);
		height: 60px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	nav {
		display: flex;
		justify-content: space-between;
		height: 60px;
		align-items: center;
	}

	#menu {
		width: 130px;
	}
	#menu-button {
		width: 30px;
	}
	#menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 40%;
		height: 100vh;
        background-color: #000000;
		opacity: 0.8;
	}
	#menu-items {
		display: none;
		flex-direction: column;
		position: fixed;
		top: 0;
		right: 0;
		background-color: var(--color-background-nav);
		width: 60%;
		height: 100vh;
		align-items: center;
	}
	#menu-items.active{
		display: flex;
	}
	
	ul{
		list-style: none;
		text-align: center;
	}
	ul li{
		margin: 20px 0px;
		
	}
	ul li a{
		color: var(--color-text-light);
	}
	/* altera menu para desktop*/
	@media (min-width: 700px){
		#menu-button,
		#menu-overlay{
			display: none;
		}
		#menu-items{
			display: flex;
			position: static;
			height: 60px;
			width: auto;
		}
		ul{
			display: flex;
			flex-direction: row;
			height: 60px;
			align-items: center;
		}
		ul li{
			margin-top: 20px;
			margin-left: 20px;
		}
		h1{
			/* margin-left: 35%; */
		}
	}
</style>