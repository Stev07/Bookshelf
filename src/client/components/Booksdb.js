import React from 'react';
import axios from 'axios';

export default class Booksdb extends React.Component {
    constructor(){
        super();

        this.state = {
            book: []
        }

        this.books = this.state.book.map(book => <li>{book.title} {book.language}</li>)
    }

    componentDidMount = () => {
        axios.get('/api/books', {
            params: {
                token: localStorage.getItem('Token')
        }})
        .then(res => {
            const books = res.books;
            this.setState({book: books});
        }).catch(err => {
            console.log('FCK YOU', err.message);
        })
    };

    

    render(){
        return(
            <div>
                <ul>
                    {this.books}
                </ul>
            </div>
        )
    }
}