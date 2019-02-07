import * as React from "react";
import NavLink from "react";
import App from '../app';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/Home"> {"Home"} </NavLink>
                <NavLink to="/Books"> {"Books"} </NavLink>
                <NavLink to="/Authors"> {"Authors"} </NavLink>
            </div>
        );
    }
}
