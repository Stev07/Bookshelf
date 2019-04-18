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
import Footer from "./Footer";
import axios from "axios";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            lastEntries: [],
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("Token");
        const config = {
            headers: {
                token,
            },
        };

        axios
            .get("/api/books", config)
            .then(result => {
                let length = result.data.books.length;
                const lastEntries = [];
                lastEntries.push(result.data.books[length - 1]);
                lastEntries.push(result.data.books[length - 2]);
                lastEntries.push(result.data.books[length - 3]);
                lastEntries.push(result.data.books[length - 4]);

                this.setState({
                    lastEntries: lastEntries
                });
                console.log(this.state.lastEntries);
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    render() {
        const lastEntries = this.state.lastEntries.map(entries => {
            return (
                <div key={entries._id} className="bookContainer">
                    <img className="book" src={entries.image} alt="book" />
                </div>
            );
        });
        return (
            <div>
                <Header />
                <NavBar />

                <div className="section">
                    <p className="sectionName">{"LATEST ENTRIES"}</p>
                </div>
                <div className="showSection">
                    {lastEntries}
                </div>
                {/* <div className="section">
                    <p className="sectionName">{"MOST RATED"}</p>
                </div>
                <div className="showSection" />
                <div className="section">
                    <p className="sectionName">{"LATEST REVIEWS"}</p>
                </div> */}
                <div className="showSection" />
                <Footer />
            </div>
        );
    }
}
