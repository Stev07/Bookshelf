/* becodeorg/bookshelf
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import Header from "./Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Book" component={Book} />
                        <Route path="/Author" component={Author} />
                        <Route
                            path="/UserInterface"
                            component={UserInterface}
                        />
                        <Route
                            path="/CoachInterface"
                            component={CoachInterface}
                        />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
