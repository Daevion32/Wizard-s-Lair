<script setup>

 import { BookService } from '../data_Api/wizardService';
 import { ref } from 'vue';

 onCreated(async() => {
    BookData.value = await BookService.getAllBook();
   
});
props(){
        
}
 const editBook = ref({
  name: this.book.name,
  description: this.book.description,
  image:  this.book.image,
  category: this.book.category,
  reference: this.book.reference,
  price: this.book.price,
  buyable:false,
  favorite:false,
   
}); 
        editBook.value = BookService.storeBook(  data)
        


    </script>
    <template>
            <form class="form-group" >
                    <div clas="form-container"  >
                            <label for="exampleTitle">Nombre</label>
                            <input type="text" class="form-control" placeholder="Nombre"  />
                            <label for="exampleTitle">Descripcion</label>
                            <input type="text" class="form-control" placeholder="Descripcion"  />
                            <label for="exampleTitle">Imagen</label>
                            <input type="text" class="form-control" placeholder="Imagen"   />
                            <label for="exampleTitle">Categoria</label>
                            <input type="text" class="form-control" placeholder="Categoria"   />
                            <label for="exampleTitle">Numero de referencia</label>
                            <input type="text" class="form-control" placeholder="Referencia"   />
                            <label for="exampleTitle">Precio</label>
                            <input type="text" class="form-control" placeholder="Precio"   />
                            
    
                    </div>
                             
                            <button type="submit" class="btn btn-primary">Aceptar</button>
                            <button type="submit" class="btn btn-primary"  @click="$router.go(-1)">Cancelar</button>
                           
            </form>
            
    </template>
    <style scoped>
            .form-group{
                    height: 40vw;
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