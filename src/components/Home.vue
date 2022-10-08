<script setup>

import Carrousel from './Carrousel.vue';
import Book from './Book.vue';



</script>
<template>
    <div >
        <Carrousel />
    </div>
    
    <div class="flexBook">
        <Book />
    </div>
   
 
 
  
</template>
   
  
<style scoped>
    .flexBook{
        padding:9px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

</style>