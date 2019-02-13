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
import Home from "./components/Home";
import Author from "./components/Author";
import Books from "./components/Books";
import Login from "./components/Login";
// import Login from "./components/Login";
// import CoachInterface from "./components/CoachInterface";
// import UserInterface from "./components/UserInterface";
import Error from "./components/Error";
import './components/scss/app.scss';
import Modal from './components/Modal'
export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/books" component={Books} />
                        <Route path="/author" component={Author} />
                        <Route path="/user" component={Modal} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
