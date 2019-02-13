import React from "react";
import data from "./data.json";
import {Card} from "antd";
import "./scss/AppDom.scss";
import "./scss/antd.scss";

export default class ShowBooks extends React.Component {
    constructor() {
        super();

        this.state = {
            data: data,
        };

        this.books = this.state.data.map((book, key) => (
            // <li key={book.id}>{book.title} {book.author} {book.releaseDate} {book.ISBN}</li>

            <div >
                <div
                    className="bookContainer"
                    style={{background: "white", padding: "30px"}}>

                    <Card
                        title={book.title}
                        key={book.id}
                        bordered={true}
                        style={{width: 300}}>

                        <img
                            className="bookCover"
                            src={book.cover}
                            alt={book.title}
                        />

                        <p>{book.availability}</p>
                        <p>{book.author}</p>
                        <p>{book.releaseDate}</p>
                    </Card>

                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="dbContent">
                <div className="card-container">{this.books}</div>
            </div>
        );
    }
}

// Ce code de "carte" va servir pour l'affichage des livres

/* <div style={{ background: '#ECECEC', padding: '30px' }}>
<Card title="Card title" bordered={false} style={{ width: 300 }}>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</Card>
</div> */
