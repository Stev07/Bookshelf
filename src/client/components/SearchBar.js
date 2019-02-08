import * as React from "react";
import {Input} from "antd";
import "./scss/antd.scss";

const Search = Input.Search;

export default class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <Search
                    className="searchBar"
                    placeholder="Looking for a book ?"
                    onSearch={value => console.log(value)}
                    enterButton
                />
            </div>
        );
    }
}
