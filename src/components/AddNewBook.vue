<script setup>

</script>
<template>
        <div class="form-group">
                <div clas="form-container">
                        <label for="exampleTitle">Titulo</label>
                        <input type="text" class="form-control" placeholder="Titulo"/>
                        <label for="exampleTitle">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre"/>
                        <label for="exampleTitle">Descripcion</label>
                        <input type="text" class="form-control" placeholder="Descripción"/>
                        <label for="exampleTitle">Imagen</label>
                        <input type="text" class="form-control" placeholder="Imagen"/>
                        <label for="exampleTitle">Numero de referencia</label>
                        <input type="text" class="form-control" placeholder="Referencia"/>
                        <label for="exampleTitle">Precio</label>
                        <input type="text" class="form-control" placeholder="Precio"/>
                        

                </div>
                        <button class="btn btn-primary">Aceptar</button>
                        <button class="btn btn-primary">Cancelar</button> 
        </div>
        
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