import React from "react";
import Cover from "../images/ReactJSEssentials.png"
import Booksdb from "./fakeData/booksdb.json"




export default class ShowBooks extends React.Component {

    constructor(){
        super();

        this.state = {
            books: Booksdb
        }

        this.books = this.state.books.map((book, key) => 
        <li key={books.id}>{books.title}</li>)

    }

    render() {
        return( 
            <div>
                <ul>
                    {this.props.books}
                </ul>
            </div>
        )
    }
}


// Ce code de "carte" va servir pour l'affichage des livres

{/* <div style={{ background: '#ECECEC', padding: '30px' }}>
<Card title="Card title" bordered={false} style={{ width: 300 }}>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</Card>
</div> */}