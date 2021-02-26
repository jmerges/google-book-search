import React, { Component } from "react";
import API from "../utils/API";

class Books extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
        // API.saveBook(res))
        // .then(() => {API.getBooks()
        //     .then(res => {console.log(res);
        //         this.setState({ books: res.data })})
        //     .catch(err => console.log(err));
    // });
    }

    removeBook = (event) => {
        API.deleteBook(event.target.getAttribute("data-id"))
            .then(() => {
                this.loadBooks();
            });
    }

    searchBook = () => {
        API.google("Lord of the Rings")
        .then(res=>{
            console.log(res);
            var bookObj = {
                title: res.data.items[0].volumeInfo.title,
                authors: res.data.items[0].volumeInfo.authors,
                image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
                link: res.data.items[0].volumeInfo.infoLink
            }
            API.saveBook(bookObj)
            this.loadBooks();
        });
    }

    render() {
        return (
            <div>
                <button id="search" onClick={this.searchBook}>Search</button>
                {this.state.books.map(book => {
                return (
                <div>
                    <p>Title: {book.title}</p>
                    <p>Author(s): {book.authors.map(author => {
                        return <span>{author}</span>
                    })}</p>
                    <p>Description: {book.description}</p>
                    <p>Image: <img src={book.image} /></p>
                    <p>Link: <a href={book.link}>{book.link}</a></p>
                    <button data-id={book._id} onClick={this.removeBook}>Remove Book</button>
                </div>
                );
            })}</div>

        );
    }
}

export default Books;