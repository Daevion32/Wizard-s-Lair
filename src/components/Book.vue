<script setup>
import IconsFavorite from './icons/IconsFavorite.vue';
import IconShopping from './icons/IconShopping.vue';
import IconCoin from './icons/IconCoin.vue';

import { ref , onMounted} from "vue";
import { BookService } from '../data_Api/wizardService';

const BookData = ref([]);

onMounted(async() => {
    BookData.value = await BookService.getAllBook();
   
});



    
</script>
<template>
    <div class="card" v-for="Book in BookData">
        <img src="{{Book.image}}" alt="libro warhammer">
        <div class="card-body">
            <h3 class="card-title">{{Book.name}}</h3>
            <p class="card-text">{{Book.text}}</p>
            <p class ="card-text">{{Book.reference}}</p>
            <p class ="card-text">{{Book.category}}</p>
            <div class="buttons">
                <a class="btn btn-transparent"><IconCoin />{{Book.price}}</a>
                <a class="btn btn-transparent"><IconShopping />{{Book.buyable}}</a>
                <a class="btn btn-transparent"><IconsFavorite />{{Book.favorite}}</a>
              
            </div>
        </div>
    </div>
    



</template>


<style scoped>

.card{
    display: flex;
    flex-direction: row;
    height: 45vh;
    width: 28vw;
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