<script setup>
import { BookService } from '../data_Api/wizardService';
import { ref } from 'vue';

const newBook = ref({
  name: "",
  description: "",
  image: "",
  category:"",
  reference:"",
  price:"",
  buyable:false,
  favorite:false,
 
  
});

const handleSubmit = (e) => {
  e.preventDefault();

BookService.postNewBook(newBook.value);

};

</script>
<template>
        <form class="form-group" @submit="handleSubmit">
                <div clas="form-container"  >
                        <label for="exampleTitle">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" v-model="newBook.name" required/>
                        <label for="exampleTitle">Descripcion</label>
                        <input type="text" class="form-control" placeholder="Descripcion" v-model="newBook.description" required/>
                        <label for="exampleTitle">Imagen</label>
                        <input type="text" class="form-control" placeholder="Imagen" v-model="newBook.image" required />
                        <label for="exampleTitle">Categoria</label>
                        <input type="text" class="form-control" placeholder="Categoria" v-model="newBook.category" required />
                        <label for="exampleTitle">Numero de referencia</label>
                        <input type="text" class="form-control" placeholder="Referencia" v-model="newBook.reference" required />
                        <label for="exampleTitle">Precio</label>
                        <input type="text" class="form-control" placeholder="Precio" v-model="newBook.price" required />
                        

                </div>
                        <button type="submit" class="btn btn-primary">Aceptar</button>
                       <button type="submit" class="btn btn-primary"  @click="$router.go(-1)">Cancelar</button>
        </form>
        
</template>
<style scoped>
        .form-group{
                height: 90vw;
                width:80vw;
                margin-top: 2vw;
                margin-left: 8vw;
                text-align: center;
                background-color: rgba(223, 197, 117, 0.468);
                position: absolute;
                
        }
        .form-container{
                height: 55vw;
                width:40vw;
                position:relative;
                
        }
        label{
                margin-top: 1.2vw;
        }
        input{
                width: 40vw;
                position:relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 20vw;
                
        }
      
        
        button{   
                margin:1vw;
                background-color:black ;
                color:red;
        }

</style>