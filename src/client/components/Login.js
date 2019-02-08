import * as React from "react";
import "./scss/login.scss";
import logoBecode from "../images/logo_Becode.png";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {emailValue: "", passwordValue: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({emailValue: event.target.value});
    }

    handleSubmit(event) {
        alert(`A name was submitted ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="logo">
                        <img
                            className="logoBecode"
                            src={logoBecode}
                            alt="BeCode.org"
                        />
                    </div>

                    <div className="welcome">
                        <p>{"BookShelf"}</p>
                    </div>

                    <form className="user" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="inputUser"
                            placeholder="Email"
                            value={this.state.emailValue}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            className="inputPassword"
                            placeholder="Password"
                        />
                    </form>

                    <div className="login">
                        <button className="btnLogin">{"Login"}</button>
                    </div>

                    <div className="copyright">
                        <p>{"© 2016-2019, BeCode.org"}</p>
                    </div>

                    <div className="squaresBox">
                        <div id="block1" />
                        <div id="block2" />
                        <div id="block3" />
                        <div id="block4" />
                        <div id="block5" />
                        <div id="block6" />
                        <div id="block7" />
                        <div id="block8" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
