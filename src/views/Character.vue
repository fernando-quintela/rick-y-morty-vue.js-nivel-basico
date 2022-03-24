<template>
  <div class="container-fluid ">
   <div class="row">

     <div class="col-3 fds ">
      <img src="../assets/personajes.jpg" class="img-fluid" alt="" >
     </div>
 
    <div class="card mb-3 col  d-flex  justify-content-center" style="max-width: 48rem;">
  <div class="  row ">

    <div class="col-md-6 gimg ">
      <img :src="personaje.image" class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col">

      <div class="card-body">
        <h5 class="card-title fs-3">{{ personaje.name }}</h5>
        <ul>
          <li>Species: {{personaje.species}}</li>
          <li>Sexo: {{personaje.gender}}</li>
          <li>Origin: {{personaje.origin.name}}</li>
          <li :class="estado" class="fw-bold" >Condition: {{personaje.status}}</li>
        </ul>
      </div>

    </div>

  </div>
</div>

     <div class="col-3 fds ">
      <img src="../assets/personajes.jpg" class="img-fluid" alt=""  >
     </div>


  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personaje: {},
      activeColor: 'violet',
      fontSize: 24
    }
  },
  methods: {
    async mostrarPerso() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
        const getPersonaje = await data.json();
        this.personaje = getPersonaje;
        console.log(this.personaje);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  computed: {
   estado() {
     return {
       'text-success': this.personaje.status == 'Alive',
       'text-warning': this.personaje.status == 'unknown',
       'text-danger': this.personaje.status == 'Dead'

    //  "unknown"? 'text-warning' 'text-danger'
    }
   },
  
  },
   
  created() {
    this.mostrarPerso();
    
  }

}
</script>

<style>

.fds img{
  height: 100vh;
  width: 100%;
  padding: 0;
}

.fds{
  padding: 0;
}

</style>