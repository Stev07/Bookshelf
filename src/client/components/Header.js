import * as React from "react";
import logoBecode from "../images/logo_Becode.png";
import "./scss/AppDom.scss";
import Home from "./Home";

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            logo: logoBecode,
            headerTitle: "<BookShelf />",
            user: "Hello ",
            homeLink: Home,
        };
    } // Données utilisées pour le header

    render() {
        return (
            <div className="header">
                <div className="logoBox">
                    <a href="./Home.js">
                        <img
                            className="logo"
                            src={this.state.logo}
                            alt="BeCode.org"
                        />
                    </a>
                </div>
                <div>
                    <input
                        type="search"
                        placeholder="Looking for a book or an author ?"
                    />
                </div>
                <div className="titleBox">
                    <h1 className="title">{this.state.headerTitle}</h1>
                </div>
            </div>
        );
    }
}
