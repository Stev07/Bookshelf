import * as React from "react";
import {Link} from "react-router-dom";
import "./scss/navbar.scss";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/home"> {"Home"} </Link>
                <Link to="/books"> {"Books"} </Link>
                <Link to="/author"> {"Author"} </Link>
            </div>
        );
    }
}
