
<script setup>
import IconTop from "./icons/IconTop.vue";


</script>


<template>
    <div class="sellingBooks">
        <div class="iconTop"> <IconTop /></div>
            <p>Top Ventas</p>
        
        <ol  class="Top">
            <li>Primer Libro</li>
            <li>Segundo Libro</li>
        </ol>
        


    </div>
</template>

<style scoped>
    .sellingBooks{
        height: 70vh;
        width: 20vw;
        background-color: green;
        position:absolute;
        top:4vh;
        left:3vw;
        border-radius: 2vw;
    }
    .iconTop{
        left:7vw;
        top:1.2vw;
    }
    p{
        top:0.8vw;
        font-size:2vw;
        text-align: center;
    }
    .Top{
        height: 5vw;
        width:15vw;
        background-color: white;
        left:2vw;
        top:3vw;
    }
</style>
