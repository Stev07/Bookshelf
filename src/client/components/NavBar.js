import * as React from "react";
import {Link} from "react-router-dom";
import "./scss/navbar.scss";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {top: "", height: ""};
    }

    handleScroll = () => {
        this.setState({scroll: window.scrollY});
    };

    componentDidMount() {
        this.fct();
    }

    fct = () => {
        const el = document.querySelector("nav");

        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener("scroll", this.handleScroll);
    };

    componentDidUpdate() {
        this.state.scroll > this.state.top
            ? (document.body.style.paddingTop = `${this.state.height}px`)
            : (document.body.style.paddingTop = 0);
    }

    render() {
        return (
            <nav
                className={
                    this.state.scroll > this.state.top ? "fixed-nav" : ""
                }>
                <div className="navLinks">
                    <li className="navItem">
                        <Link to="/home"> {"Home"} </Link>
                    </li>
                    <div className="separate">{"|"}</div>
                    <li className="navItem">
                        <Link to="/books"> {"Books"} </Link>
                    </li>
                    <div className="separate">{"|"}</div>
                    <li className="navItem">
                        <Link to="/author"> {"Author"} </Link>
                    </li>
                </div>
            </nav>
        );
    }
}
