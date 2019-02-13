import React from "react";
import data from "./data.json";
import "./scss/AppDom.scss";
import {Modal} from "antd";

export default class ShowBooks extends React.Component {
    constructor() {
        super();

        this.state = {
            data: data,
            visible: false,
        };

        this.books = this.state.data.map(book => (
            <div>
                <div className="bookContainer">
                    <div
                        className="cardTitle"
                        key={book.id}
                        bordered={true}
                        style={{width: 300}}>
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
        ));
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
                <div className="card-container">{this.books}</div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <p>{"Some contents..."}</p>
                    <p>{"Some contents..."}</p>
                    <p>{"Some contents..."}</p>
                </Modal>
            </div>
        );
    }
}
