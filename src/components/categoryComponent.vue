<template>
	<div class="container">
    
    <div class="jumbotron bg-info">
      <h1 class="display-4">All categories</h1>
    </div>


		<div class="jumbotron" v-for="category in categories">
		  <h2>{{category.name}}</h2>
		  <p>{{category.description}}</p>
		</div>
		<div class="border p-3 bg-dark">
			<a class="btn btn-info" :href="links.next">
				Next
			</a>

			<a class="btn btn-info" :href="links.prev" v-if="links.prev">
				Previous
			</a>
		</div>
	</div>
</template>









<script>
export default {
  name: 'categoryComponent',
  data () {
    return {
      categories: [],
      links: []
    }
  },
  methods: {
  	allPost: function(){
  		var app = this;
  		axios.get('http://rest.nasirkhan.me/api/categories')
  		.then(function(response){
  			app.categories = response.data.data;
  			app.links = response.data.links;
  			console.log(app.categories)
  		})
  	}
  },
  mounted: function(){
  	this.allPost();
    
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h2{
		font-size: 25px;
		font-weight: normal;
	}
</style>