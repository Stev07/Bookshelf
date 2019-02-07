/* becodeorg/bookshelf
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */
import * as React from "react";
import ReactDOM from "react-dom";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Author from "./components/Author";
import Books from "./components/Books";
// import Login from "./components/Login";
// import CoachInterface from "./components/CoachInterface";
// import UserInterface from "./components/UserInterface";
import Error from "./components/Error";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <NavBar />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Books" component={Books} />
                        <Route path="/Author" component={Author} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
