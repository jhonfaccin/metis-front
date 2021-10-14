<template>
    <!-- <Header/> -->
    <router-view/>
    <div></div>
</template>

<script>
import firebase from "firebase";

// export default {
// 	name: "Home",
// 	components: {
// 		Header
// 	}
// };


export default {
	name: "App",
	mounted() {
		firebase.auth().onAuthStateChanged(user => {
			window.uid = user ? user.uid : null;
			if (window.uid){
				this.$router.push("/home");
			} else{
				this.$router.push("/login");
			}
		});
	},
};
</script>

<style>

</style>
