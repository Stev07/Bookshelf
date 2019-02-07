/* becodeorg/bookshelf
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */
import * as React from "react";
import ReactDOM from "react-dom";

import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
// import Header from "./components/Header";
// import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Author from "./components/Author";
import Books from "./components/Books";
// import Login from "./components/Login";
// import CoachInterface from "./components/CoachInterface";
// import UserInterface from "./components/UserInterface";
import Error from "./components/Error";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">{"Home"}</Link>

                    <Link to="/books">{"Books"}</Link>

                    <Link to="/author">{"Author"}</Link>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/books" component={Books} />
                        <Route path="/author" component={Author} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
