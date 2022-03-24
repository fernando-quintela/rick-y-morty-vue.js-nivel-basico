<template>
  
</template>

<script>
export default {
 data() {
    return {
      characters: {}, 
      search:''
    }
  },
  methods: {
  async consumisearch() {
    try {
      const data = await fetch(`https://rickandmortyapi.com/api/character/?name`);
      const getcharacters = await data.json();
      const {info, results } = getcharacters;
          this.characters = results;
          
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
 },
 created() {
   this.consumisearch();
 }
}
</script>

<style>

</style>
