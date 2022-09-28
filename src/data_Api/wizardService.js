import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export const BookService ={
   
        getAllBook() {
            const book = axios.get(baseURL + "/book").then(res => res.data);
            return book;
        },

        getBookById(id){
            const bookById = axios.get(baseURL + "/book/"+id).then(res => res.data);
            return bookById;
        },

        getBookBySearch(search){
            const bookBySearch = axios.get(baseURL + `book?search=${search}`).then(res => res.data);
            return bookBySearch;
        },

        getFavoriteBook(){
            const favBook = axios.get(baseURL + "/book").then(res => res.data
                .filter(book =>book.isFavorite === true));
            return favBook;
        },

        updateBook(id, data){
            const updateBook = axios.get(baseURL + `/book/${id}`, data).then(res => res.data);
            return updateBook;        
        },

}