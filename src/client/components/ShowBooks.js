import React from "react";
import "./scss/AppDom.scss";
import data from "./data.json"
import {Modal} from "antd";
import axios from 'axios'
import Booksdb from './booksdb'

export default class ShowBooks extends React.Component {

    constructor() {
        super();

        this.state = {
            visible: false,
            book: [],
            data: data
        };

        /* this.books = this.state.data.map(book => ( // Affichage des livres
            <div>
                <div className="bookContainer">
                    <div
                        className="cardTitle"
                        key={book.id}
                    >
                        <h3>{book.title}</h3>
                    </div>
                    <div className="cardCover">
                        <img
                            onClick={this.showModal}
                            className="bookCover"
                            src={book.cover}
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
        )); */
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


    render() {
        return (
            <div className="dbContent">
                {/* <div className="card-container">{this.books}</div> */}
                <Booksdb />
                <Modal
                    title="Book"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    cancelText={"Close"}>
                    <p>{"Some contents..."}</p>
                    <p>{"Some contents..."}</p>
                    <p>{"Some contents..."}</p>
                </Modal>
                <Footer />
            </div>
        );
    }
}
