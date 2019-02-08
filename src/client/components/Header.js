import * as React from "react";
import logoBecode from "../images/logo_Becode.png";
import "./scss/AppDom.scss";
import UserSettings from "./UserSettings";
import SearchBar from "./SearchBar";

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            logo: logoBecode,
            user: "Hello ",
        };
    } // Données utilisées pour le header

    render() {
        return (
            <div className="header">
                <div className="logoBox">
                    <img
                        className="logo"
                        src={this.state.logo}
                        alt="BeCode.org"
                    />
                </div>
                <div className="inputBox">
                    <SearchBar />
                </div>
                <div className="userBox">
                    <div className="helloUserBox">
                        <p>{"Hello, User"}</p>
                    </div>
                    <div className="iconBox">
                        <UserSettings />
                    </div>
                </div>
            </div>
        );
    }
}
