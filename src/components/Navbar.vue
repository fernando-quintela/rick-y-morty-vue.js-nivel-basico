<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-center">
    <router-link class="navbar-brand "  to="/">
      <img src="../assets/rm-title.png" alt="" width="220" height="60">
      </router-link>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          
          
        </li>   
      </ul>
    </div> -->
  </div>
</nav>



</template>

<script>
import HomeView from '@/views/HomeView.vue';

export default {
  components: {
    HomeView
  },
 data() {
   return {
     
     
   }
 },
 
}
</script>

<style scoped>
.navbar li a.router-link-exact-active {
  color: red !important;
  font-weight: bold;
  /* background-color: yellow; */
}
</style>