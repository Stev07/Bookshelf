/* becodeorg/bookshelf
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import "./scss/AppDom.scss";
import Cover from "../images/ReactJSEssentials.png";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cover: Cover,
        };
    }

    render() {
        return (
            <div>
                <Header />
                <NavBar />

                <div className="section">
                    <p className="sectionName">{"Latest entries"}</p>
                </div>
                <div className="showSection">
                    <div className="bookCover">
                        <img
                            className="book"
                            src={this.state.cover}
                            alt="book"
                        />
                    </div>
                </div>
                <div className="section">
                    <p className="sectionName">{"Most rated"}</p>
                </div>
                <div className="showSection" />
                <div className="section">
                    <p className="sectionName">{"Latest Review"}</p>
                </div>
                <div className="showSection" />
            </div>
        );
    }
}
