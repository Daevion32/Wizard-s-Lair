<script setup>
import { RouterLink } from 'vue-router';
import IconsFavorite from './icons/IconsFavorite.vue';
import IconShopping from './icons/IconShopping.vue';
import IconCart from './icons/IconCart.vue';
    
</script>
<template>
       <div class="card" >
        <img src="../assets/978184154964.png" alt="libro warhammer">
      <div class="card-body">
        <h3 class="card-title">Warhammer</h3>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="buttons">
            <a href="#" class="btn btn-primary"><RouterLink to="/cart"><IconCart />Compra</RouterLink></a>
            <a href="#" class="btn btn-primary"><RouterLink to="/favorites"><IconsFavorite />Favoritos</RouterLink></a>
        </div>
      </div>
    </div>
    <div class="card" >
        <img src="../assets/978184154964.png" alt="libro warhammer">
      <div class="card-body">
        <h3 class="card-title">Warhammer</h3>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="buttons">
            <a href="#" class="btn btn-primary"><RouterLink to="/cart"><IconCart />Compra</RouterLink></a>
            <a href="#" class="btn btn-primary"><RouterLink to="/favorites"><IconsFavorite />Favoritos</RouterLink></a>
        </div>
      </div>
    </div>
    <div class="card" >
        <img src="../assets/978184154964.png" alt="libro warhammer">
      <div class="card-body">
        <h3 class="card-title">Warhammer</h3>
        <p class="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <div class="buttons">
            <a class="btn btn-primary"><IconShopping />Compra</a>
            <a class="btn btn-primary"><IconsFavorite />Favoritos</a>
        </div>
        <p class="price">   10,95€</p>
      </div>
    </div>

</template>


<style scoped>

.card{
    display: flex;
    height: 60vh;
    width: 24vw;
    margin:2vw;
    background-color: hwb(0 0% 100% / 0.25);
    color:rgb(0, 0, 0)    

}
    img{
        height: 26vh;
        width: 14vw;
        margin:0.5vh;
    }
    h3{
        text-align: center;
        font-size:larger;
        
    }
    .card-text{
    
    }
    .buttons{
        height: 8vh;
        width: 8vw;
        display: flex;
        flex-direction: row;
        top:12vh;
        gap:3vw;
        text-align: center;
        justify-content: center;
    }
    .price{
        text-align:center;
        position: relative;
        top:14vh;
        right:7vw;
    }
</style>