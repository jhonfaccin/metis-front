<template>
    <!-- <Header/> -->
    <router-view/>
    <div></div>
</template>

<script>


export default {
	name: "App",
	mounted() {
		this.$router.push("/home");
	},
};
</script>

<style>

    

</style>
