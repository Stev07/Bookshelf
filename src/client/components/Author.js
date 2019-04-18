import * as React from "react";
import axios from "axios";
import Header from "./Header";
import NavBar from "./NavBar";
import "./scss/AppDom.scss";
import Footer from "./Footer";

export default class Author extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authors: []
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("Token");
        axios.get("/api/books/authors", {headers: {token}}).then(res => {
            this.setState({authors: res.data.authors});
        }).catch(err => {
            console.log(`There was an error: ${err.message}`);
        });
    }

    render() {
        const authors = this.state.authors.map(author => {
            return (
                <div key={author}>
                     <li>
                        <h3>{author}</h3>
                    </li>
                </div>
            );
        })
        return (
            <div>
                <Header />
                <NavBar />
                <ul className="list-authors">{authors}</ul>
                <Footer />
            </div>
        );
    }
}
