<script setup>
import IconsFavorite from './icons/IconsFavorite.vue';
import IconShopping from './icons/IconShopping.vue';
import IconCoin from './icons/IconCoin.vue';



    
</script>
<template>
    <div class="card" >
        <img src="../assets/978184154964.png" alt="libro warhammer">
        <div class="card-body">
            <h3 class="card-title">Warhammer</h3>
            <p class="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <div class="buttons">
                <a class="btn btn-transparent"><IconCoin />10,95€</a>
                <a class="btn btn-transparent"><IconShopping />Compra</a>
                <a class="btn btn-transparent"><IconsFavorite />Favoritos</a>
            </div>
        </div>
    </div>



</template>


<style scoped>

.card{
    display: flex;
    flex-direction: row;
    height: 45vh;
    width: 24vw;
    left:30vw;
    top:4vw;
    background-color: hwb(0 11% 25% / 0.319);
    color:rgb(0, 0, 0);    
    border-radius: 1vw;
    
    

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
    .buttons{
        height: 8vh;
        width: 8vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        right:2vw;
        gap:2vw;
        top:2.2vw;
        text-align: center;
        justify-content: center;
        color:white;
    }
    .buttons .btn{
      color:white;
    }


</style>