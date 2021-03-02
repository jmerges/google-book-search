import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

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
                link: res.data.items[0].volumeInfo.infoLink,
                description: res.data.items[0].volumeInfo.description
            }
            API.saveBook(bookObj)
            this.loadBooks();
        });
    }

    render() {
        return (
            <div>
                {this.state.books.map(book => {
                return (
                <div className="card">
                    <div className="row">
                        <div className="col-2 img-col">
                            <img src={book.image} />
                        </div>
                        <div className="col-2">
                            <p>Title: {book.title}</p>
                            <p>Author(s): {book.authors.map(author => {
                                return <span>{author}</span>
                            })}</p>
                            
                            <a href={book.link}><button>View</button></a>
                            <p><button data-id={book._id} onClick={this.removeBook}>Remove Book</button></p>
                        </div>
                        <div className="col-8">
                        <p>Description: {book.description}</p>
                        </div>
                    </div>
 

                </div>
                );
            })}</div>

        );
    }
}

export default Books;