<script setup>


</script>
<template>
  
    <div id="carouselExampleControls" class="carousel_slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active ">
            <img src="../assets/978184154964.webp" class="d-block w-100 " alt="Carrusel1">
            </div>
            <div class="carousel-item">
            <img src="../assets/libro-1.jpg" class="d-block w-100" alt="Carrusel2">
            </div>
            <div class="carousel-item">
            <img src="../assets/978184154964.webp" class="d-block w-100" alt="Carrusel3">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
   
</template>

<style scoped>

    .carousel_slide{
        width: 90vw;
        left:10vw;
    }
   .carousel-inner{
    height: 20vw;
    width: 12vw;
    left:40vw;
   }

</style>