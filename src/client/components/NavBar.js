import * as React from "react";
import {Link} from "react-router-dom";

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/"> {"Home"} </Link>
                <Link to="/Books"> {"Books"} </Link>
                <Link to="/Author"> {"Author"} </Link>
            </div>
        );
    }
}
