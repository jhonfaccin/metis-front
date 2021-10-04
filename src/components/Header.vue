<template>
	<header>
		<nav class="container">
			<img v-on:click="openMenu" alt="Abrir menu" id="menu-button" src="../assets/menu.svg" />
			<h1>
				<span class="text-center ">Métis</span>
			</h1>
			<img alt="Abrir menu" id="menu-button" src="../assets/meditacao.jpg" />
			<div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive" />
			<div id="menu-items" :class="{active:menuActive}">
				<ul>
					<li>
						<a  href="/">Inicio</a>
					</li>
					<li>
						<a href="/about">Sobre</a>
					</li>
					<li>
						<a href="/about">Sobre</a>
					</li>
					<li>
						<a href="/about">Sobre</a>
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
</style>