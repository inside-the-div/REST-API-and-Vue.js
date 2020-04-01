<template>
	<div class="container">
		<div class="jumbotron">
		  <h1 class="display-4">M.N.U YEA HIA KHAN</h1>
		  <h2>Full Stack web developer</h2>
		  <router-link class="btn btn-primary btn-lg" :to="'contact'" role="button">Contact</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'AboutComponent',
		data () {
			return {

			}
		}
	}
</script>

<style scoped>
	.jumbotron{
		text-align: center;
	}
	h1{
		font-size: 30px;
	}
	h2{
		font-size: 25;
	}
</style>