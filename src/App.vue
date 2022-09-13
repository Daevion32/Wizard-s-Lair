<script setup>
import { RouterView} from "vue-router";
import NavBar from "./components/NavBar.vue";

</script>

<template>
 
 <header>
   <NavBar />
 </header>
<RouterView/>
</template>

<style scoped>
  header{
    height: 16vh;
    width: 100vw;
    background-color: rgba(64, 2, 2, 0.405);
    display: flex;
    flex-direction: row;
    justify-content:flex-end ;
    gap:10vw;
    align-items: center;
  }

</style>
