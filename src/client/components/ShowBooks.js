import React from "react";
import data from "./data.json";
import "./scss/AppDom.scss";

export default class ShowBooks extends React.Component {
    constructor() {
        super();

        this.state = {
            data: data,
        };

        this.books = this.state.data.map(book => (
            <div>
                <div
                    className="bookContainer"
                    style={{background: "white", padding: "30px"}}>
                    <div
                        className="cardTitle"
                        key={book.id}
                        bordered={true}
                        style={{width: 300}}>
                        <h3>{book.title}</h3>
                    </div>
                    <div className="cardCover">
                        <img
                            className="bookCover"
                            src={book.cover}
                            alt={book.title}
                        />
                    </div>
                    <div className="cardInfo">
                        <p>{book.availability}</p>
                        <p>{book.author}</p>
                        <p>{book.releaseDate}</p>
                    </div>
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
