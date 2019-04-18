import React from "react";
import "./scss/AppDom.scss";
import {Modal} from "antd";
import axios from "axios";

export default class ShowBooks extends React.Component {
    constructor() {
        super();

        this.state = {
            visible: false,
            selectedBook: undefined,
            data: []
        };
    }

    showModal = (book) => {
        this.setState({
            visible: true,
            selectedBook: book
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        const token = localStorage.getItem("Token");
        const config = {
            headers: {
                token
            }
        }

        axios
            .get("/api/books", config)
            .then(res => {
                this.setState({data: res.data.books});
            })
            .catch(err => {
                alert(err.message);
            });
    }

    render() {
        const books = this.state.data.map(book => ( // Affichage des livres
            <div key={book._id}  onClick={() => this.showModal(book)}>
                <div className="bookContainer">
                    <div className="cardTitle">
                        <h3>{book.title}</h3>
                    </div>
                    <div className="cardCover">
                        <img
                            className="bookCover"
                            src={book.image}
                            alt={book.title}
                        />
                    </div>
                    <div className="cardInfo">
                        <p>
                            {"Author : "}
                            {book.author}
                        </p>
                        {/* <p>
                            {"Release date : "}
                            {book.releaseDate}
                        </p> */}
                        <p>
                            {"Language : "}
                            {book.language}
                        </p>
                        <p>
                            {"Physical : "}
                            <input type="checkbox" onChange={() => {}} checked={book.physical ? true: false} disabled/>
                        </p>
                        <p>
                            {"Ebook : "}
                            <input type="checkbox" onChange={() => {}} checked={book.ebook ? true: false} disabled/>                        
                        </p>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="dbContent">
                <div className="card-container">{books}</div>
                {this.state.selectedBook && <Modal
                        title={this.state.selectedBook.title}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        cancelText={"Close"}>
                        <p>{"ISBN: " + this.state.selectedBook.isbn}</p>
                        <p>{"Authors: " + this.state.selectedBook.author}</p>
                    </Modal>
                }
            </div>
        );
    }
}
