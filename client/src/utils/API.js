import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    getBooks: function() {
         return axios.get('api/books');
    },

    getBook: function(id) {
        return axios.get("/api/books" + id)
    },

    search: function(title) {
       return axios.get(API_URL + title);
    },


    saveBooks: function (bookData) {
       return axios.post('/api/books', bookData);
    }
};