<script setup>
import EditBook from '../components/EditBook.vue';

const props = defineProps({
        id : String,
})

</script>
<template>
    <div>
        <EditBook :id="id" />
    </div>
</template>



<style  scoped>

</style>