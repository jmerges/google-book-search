import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },

    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    google: function(title) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+title);
    }
}