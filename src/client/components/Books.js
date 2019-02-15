import * as React from "react";
import ShowBooks from "./ShowBooks";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer"

export default class Books extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <ShowBooks />
                <Footer />
            </div>
        );
    }
}
