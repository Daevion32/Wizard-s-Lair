<script setup>
import IconCart from "./icons/IconCart.vue";
import IconWizard from "./icons/IconWizard.vue";
import IconBooks from "./icons/IconBooks.vue";
import IconDice from "./icons/IconDice.vue";
import IconFavorites from "./icons/IconFavorites.vue";
import { RouterLink } from "vue-router";
</script>
<template>
        <div class="nav">
            <div class="Home">
                <RouterLink to="/"><IconWizard /><p class="btn btn-transparent">Home</p></RouterLink>
            </div>
               
            <div class="Views">
                <RouterLink to="/cart"><IconCart /><p class="btn btn-transparent" >Cart</p></RouterLink>

                <RouterLink to="/favorites"><IconFavorites /><p class="btn btn-transparent">Favorites</p></RouterLink>

                <RouterLink to="/books"><IconBooks /><p class="btn btn-transparent">FantasyBooks</p></RouterLink>

                <RouterLink to="/rol"><IconDice /><p class="btn btn-transparent">RolBooks</p></RouterLink>
            </div>      
        </div>
        




                
        

</template>

<style scoped>
    .nav{

    height: 16vh;
    width: 100vw;
    background-color: rgba(64, 2, 2, 0.405);


}

.Home{
    display: flex;
    flex-direction: row;
    position:absolute;
    align-items: center;
    top:3vh;
    left:4vw;
    
}



.Views{
    display: flex;
    flex-direction: row;
    justify-content:flex-end ;
    gap:5vw;
    align-items: center;
    position: absolute;
    right:3vw;
    top:2vh;
    text-align:center;
    
}
.btn-transparent{
    color:white;

    
}
</style>
