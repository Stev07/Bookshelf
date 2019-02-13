import * as React from "react";
import ShowBooks from "./ShowBooks";
import NavBar from "./NavBar";
import Header from "./Header";

export default class Books extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <ShowBooks />
            </div>
        );
    }
}
