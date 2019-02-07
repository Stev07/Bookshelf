/* becodeorg/bookshelf
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import Header from "./Header";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <p>{"Home page"}</p>
            </div>
        );
    }
}
