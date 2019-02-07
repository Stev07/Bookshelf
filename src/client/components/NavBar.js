import * as React from "react";
import Link from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/"> {"Home"} </Link>
                <Link to="/books"> {"Books"} </Link>
                <Link to="/authors"> {"Authors"} </Link>
            </div>
        );
    }
}
