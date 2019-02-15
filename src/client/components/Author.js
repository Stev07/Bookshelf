import * as React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import "./scss/AppDom.scss";
import Footer from "./Footer";

export default class Author extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
                {"AUTHORS"}
                <Footer />
            </div>
        );
    }
}
