import React from 'react';
import axios from 'axios';

export default class Booksdb extends React.Component {
    constructor(){
        super();

        this.state = {
            book: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/books', {
            params: {
                token: localStorage.getItem('Token')
        }})
        .then(res => {
            const books = res.books;
            this.setState({book: books});
            console.log('Done !')
        }).catch(err => {
            console.log('FCK YOU', err.message);
        })
    };

    render(){
        return(
            <div>
                <ul>
                    {this.state.book.map(book => <li>{books.title}</li> )}
                </ul>
            </div>
        )
    }
}