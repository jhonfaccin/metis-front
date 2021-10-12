<template>
	<div class="container">
		<div class="card position-absolute top-50 start-50 translate-middle">
			<div class="card-body">
				<div class="mb-3">
			<input
				type="email"
				class="form-control"
				id="exampleFormControlInput1"
				placeholder="Email"
                required
			/>
		</div>
		<div class="mb-3">
			<input class="form-control" type="password" placeholder="senha"/>
		</div>
		<div class="d-grid gap-2">
			<button type="button" class="btn btn-primary">Acessar</button>
		</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	nome: "Login"
};
</script>

<style scoped>
	.card {
		width: 55%;
	}
</style>