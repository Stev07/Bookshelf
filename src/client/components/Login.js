import * as React from "react";
import "./scss/login.scss";
import logoBecode from "../images/logo_Becode.png";

class Login extends React.Component {
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

                    <div className="user">
                        <input className="inputUser" placeholder="User" />
                        <input
                            className="inputPassword"
                            placeholder="Password"
                        />
                    </div>

                    <div className="login">
                        <button className="btnLogin">{"Login"}</button>
                    </div>

                    <div className="copyright">
                        <p>{"© 2016-2019, BeCode.org"}</p>
                    </div>
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
        );
    }
}

export default Login;
