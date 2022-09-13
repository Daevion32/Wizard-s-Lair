<script setup>
import IconCart from "./icons/IconCart.vue";
import IconWizard from "./icons/IconWizard.vue";
import IconBooks from "./icons/IconBooks.vue";
import IconDice from "./icons/IconDice.vue";
import IconFavorites from "./icons/IconFavorites.vue";
import { RouterLink } from "vue-router";
</script>
<template>
                <RouterLink to="/">
                        <IconWizard />
                </RouterLink>
                
                        <router-link to="/cart">
                                <IconCart />
                        </router-link>

                        <RouterLink to="/favorites">
                                <IconFavorites />
                        </RouterLink>

                        <RouterLink to="/books">
                                <IconBooks />
                        </RouterLink>

                        
                        <RouterLink to="/rol">
                                <IconDice />
                        </RouterLink>
                
        

</template>

<style scoped>
        




</style>
