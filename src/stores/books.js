import {defineStore} from 'pinia'

export const useBooksStore = defineStore({
    id:'books',
    state: () => ({
        books:[]
    }),
    actions:{
        async fetchBooks(){
            await fetch()
            .then(res =>res.json())
            .then(data =>{
                this.books = data
            })
        }
    }
})