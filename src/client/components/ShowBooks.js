import React from "react";
import "./scss/AppDom.scss";
//import data from "./data.json"
import {Modal} from "antd";
import axios from "axios";
//import Booksdb from "./Booksdb";
import Footer from "./Footer";

export default class ShowBooks extends React.Component {
    constructor() {
        super();

        this.state = {
            visible: false,
            data: []
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        const token = localStorage.getItem("Token");
        console.log(token);
        const config = {
            headers: {
                token
            }
        }

        axios
            .get("/api/books", config)
            .then(res => {
                console.log(res);
                this.setState({data: res.data.books});
            })
            .catch(err => {
                alert(err.message);
            });
    }

    render() {
        const books = this.state.data.map(book => ( // Affichage des livres
            <div key={book._id}>
                <div className="bookContainer">
                    <div className="cardTitle">
                        <h3>{book.title}</h3>
                    </div>
                    <div className="cardCover">
                        <img
                            onClick={this.showModal}
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
                        <p>
                            {"Release date : "}
                            {book.releaseDate}
                        </p>
                        <p>
                            {"Language : "}
                            {book.language}
                        </p>
                        <p>
                            {"Physical : "}
                            {book.physical}
                        </p>
                        <p>
                            {"Ebook : "}
                            {book.ebook}
                        </p>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="dbContent">
                <div className="card-container">{books}</div>
                <Modal
                    title="Book"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    cancelText={"Close"}>
                    <p>{"Some contents..."}</p>
                    <p>{"Some contents..."}</p>
                    <p>{"Some contents..."}</p>
                </Modal>
            </div>
        );
    }
}
