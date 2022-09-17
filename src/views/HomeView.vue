<script setup>
import Home from '../components/Home.vue';
import { onBeforeMount } from 'vue';
import { useBooksStore} from '../stores/books';



//stores 
const bookStore = useBooksStore()
//lifecycle
onBeforeMount(() =>{
    getBooks()
    
})

//methods
const getBooks = async () =>{
    await bookStore.fetchBooks()
}
</script>

<template>

    <main>
        <div id="home">
           <Home />
          
        </div>
    </main>
</template>

<style scoped>


    .TopSellings{
        display:flex;
        position:absolute;
        top:3vh;
        left:3vw;

    }
    .home{
        display: flex;
        flex-direction: row;
    }
    

</style>
