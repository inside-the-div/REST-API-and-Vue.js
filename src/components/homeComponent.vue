<template>
	<div class="container">
		<div class="jumbotron" v-for="post in posts">
		  <h2>{{post.title}}</h2>
		  <p>{{post.description}}</p>
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
  name: 'HomeComponent',
  data () {
    return {
      posts: [],
      links: []
    }
  },
  methods: {
  	allPost: function(){
  		var app = this;
  		axios.get('http://rest.nasirkhan.me/api/posts')
  		.then(function(response){
  			app.posts = response.data.data;
  			app.links = response.data.links;
  		})
  	}
  },
  mounted: function(){
  	this.allPost()
  }
}


// axios.get('http://rest.nasirkhan.me/api/posts')
//   .then(function (response) {
//     // handle success
//     console.log(response.data.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h2{
		font-size: 25px;
		font-weight: normal;
	}
</style>