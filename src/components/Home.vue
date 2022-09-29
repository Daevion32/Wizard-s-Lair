<script setup>

import Carrousel from './Carrousel.vue';
import Book from './Book.vue';



</script>
<template>
    <div >
        <Carrousel />
    </div>
    
    <div class="GridBook">
        <Book />
    </div>
   
 
 
  
</template>
   
  
<style scoped>
    .GridBook{
        left:90px;
        display: grid;
        grid-template-columns: repeat(3, 560px [col-start]);
        row-gap: 50px;
        column-gap: 50px;
    }

</style>