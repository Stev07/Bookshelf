import * as React from "react";
import {Link} from "react-router-dom";

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/home"> {"Home"} </Link>
                <Link to="/books"> {"Books"} </Link>
                <Link to="/author"> {"Author"} </Link>
            </div>
        );
    }
}
