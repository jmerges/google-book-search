import React, {Component, createRef} from "react";
import API from "../utils/API";

class Search extends Component {
    state = {
        bookArray: []
    };

    inputRef = createRef();

    // searchBook = () => {
    //     API.google("Lord of the Rings")
    //     .then(res=>{
    //         console.log(res);
    //         var bookObj = {
    //             title: res.data.items[0].volumeInfo.title,
    //             authors: res.data.items[0].volumeInfo.authors,
    //             image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
    //             link: res.data.items[0].volumeInfo.infoLink,
    //             description: res.data.items[0].volumeInfo.description
    //         }
    //         API.saveBook(bookObj)
    //         this.loadBooks();
    //     });
    // }

    saveBook = (book) => {
        API.saveBook(book)
            .then(res => {
                console.log(res);
            });
    }

    handleInputChange = (event) => {
        event.preventDefault();
        var searchTerm = this.inputRef.current.value;

        console.log(searchTerm);

        API.google(searchTerm)
            .then(res => {
                console.log(res);
                var bookArray = res.data.items;
                bookArray.forEach(book => {
                    if (!book.volumeInfo.authors) {
                        book.volumeInfo.authors = [];
                    }
                    if (!book.volumeInfo.imageLinks) {
                        book.volumeInfo.imageLinks = {
                            thumbnail: ""
                        }
                    }
                })
                this.setState({bookArray: bookArray});
            });
    }

    render() {
        return (
        <div>
            <form id="searchForm" onSubmit={this.handleInputChange}>
                <input type="text" ref={this.inputRef} />
                <button id="search">Search</button>
            </form>
            {this.state.bookArray.map(book => {
                console.log(book);
                return (
                    <div className="card">
                    <div className="row">
                        <div className="col-2 img-col">
                            <img src={book.volumeInfo.imageLinks.thumbnail} />
                        </div>
                        <div className="col-2">
                            <p>Title: {book.volumeInfo.title}</p>
                            <p>Author(s): {book.volumeInfo.authors.map(author => {
                                return <span>{author}</span>
                            })}</p>
                            
                            <a href={book.volumeInfo.infoLink}><button>View</button></a>
                            <p><button onClick={() => this.saveBook({
                                title: book.volumeInfo.title,
                                authors: book.volumeInfo.authors,
                                image: book.volumeInfo.imageLinks.thumbnail,
                                description: book.volumeInfo.description,
                                link: book.volumeInfo.infoLink
                            })}>Save Book</button></p>
                        </div>
                        <div className="col-8">
                        <p>Description: {book.volumeInfo.description}</p>
                        </div>
                    </div>
 

                </div>
                )
            })}
        </div>)

    }
}

export default Search;