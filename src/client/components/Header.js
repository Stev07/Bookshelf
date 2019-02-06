import * as React from "react";

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            logo: "",
            headerTitle: "<BookShelf />",
        };
    }

    render() {
        return (
            <div>
                <img src="" />
                <h1>{this.state.headerTitle}</h1>
            </div>
        );
    }
}
