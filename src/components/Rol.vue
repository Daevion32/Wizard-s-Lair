<script setup>
import IconFavorites from './icons/IconFavorites.vue';
import { RouterLink } from 'vue-router';
import IconCart from './icons/IconCart.vue';
import IconWizard from './icons/IconWizard.vue';
    
</script>
<template>
       <div class="card" style="width: 18rem;">
        <img src="../assets/978184154964.png" alt="libro warhammer">
      <div class="card-body">
        <h5 class="card-title">Warhammer</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary"><RouterLink to="/"><IconWizard />Inicio</RouterLink></a>
        <a href="#" class="btn btn-primary"><RouterLink to="/cart"><IconCart />Compra</RouterLink></a>
        <a href="" class="btn btn-primary"><RouterLink to="/favorites"><IconFavorites />Favoritos</RouterLink></a>
        
      </div>
    </div>
</template>

<style scoped>

</style>