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

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />

                <div>
                    <h1>{"<Bookshelf />"}</h1>
                </div>
                <div className="section">
                    <p className="sectionName">{"Latest entries"}</p>
                </div>
                <div className="section">
                    <p className="sectionName">{"Most rated"}</p>
                </div>
                <div className="section">
                    <p className="sectionName">{"Latest Review"}</p>
                </div>
            </div>
        );
    }
}
