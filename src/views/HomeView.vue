<template>
<p> {{ valorRecivido}}</p>
<h2 class="text-center">Character List</h2>
  <div class="container mt-4">
   <div class="row" >
    <div class="d-flex getresults" v-for="getresult of getresults" :key="getresult.id">
    
          <div class="col-6">
          <div class="card" >
          <div class="card-body">
            <h5 class="card-title">{{ getresult.name }}</h5>
            <img :src="getresult.image"   alt="" class="card-img">
            <router-link class="btn btn-primary position-relative" :to="`/character/${getresult.id}`" >character details</router-link>
            
          </div>
        </div>
      </div>

    </div>
    
   </div> 
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  props: {
     valorRecivido: String
  },
  data() {
    return {
    
    getresults: {},
    getinfo: {}
  }
 },
 methods: {
  async consumirApi() {
    try {
      const data = await fetch(`https://rickandmortyapi.com/api/character`);
      const getcharacters = await data.json();
      const {info, results } = getcharacters;
          this.getresults = results;
          console.log(this.getresults)
      

    } catch (error) {
      console.log(error);
      throw error;
    }
  }
 },
 created() {
   this.consumirApi();
 }
}
</script>


<style scoped>

.getresults{
  max-width: 20rem;
}

.card {
  width: 18rem;
}

.btn{
 left: 28px;
}
</style>