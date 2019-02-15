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
        axios.get('/api/books')
        .then(res => {
            books = res.results;
            this.setState({book});
        })
    };

    render(){
        return(
            <div>
                <ul>
                    {this.state.book.map(book => <li>{book.title}</li> )}
                </ul>
            </div>
        )
    }
}