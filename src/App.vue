<template>
  <div id="app">

  
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <router-link class="navbar-brand" :to="'/'">LOGO</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <router-link class="nav-link" :to="'/'">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'categories'">Category</router-link>

          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item ">
            <router-link class="nav-link" :to="'contact'">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'about'">About</router-link>
          </li>
        </ul>

      </div>
    </nav>
  </div>




    <router-view/>
  </div>
</template>








<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
