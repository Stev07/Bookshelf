import * as React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import "./scss/AppDom.scss";

export default class UserInterface extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
                {"User interface"}
            </div>
        );
    }
}
