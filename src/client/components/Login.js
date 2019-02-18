import * as React from "react";
import "./scss/login.scss";
import logoBecode from "../images/logo_Becode.png";
import {
    Link
} from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: "",
            passValue: "",
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({
            emailValue: event.target.value
        });
    }

    handleChangePass(event) {
        this.setState({
            passValue: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios
            .post(`/api/users/login`, {
                params: {
                    email: this.state.emailValue,
                    password: this.state.passValue,
                }
            })
            .then(res => {
                console.log(res.data);
                const user = res.data.user;
                const token = res.data.token;

                console.log(token);
                localStorage.setItem("User", user);
                localStorage.setItem("Token", token);
            }).catch(err => {
                alert('FCK YOU');
            });
    };

    render() {
        return ( <
            div className = "container" >
            <
            NavBar / >
            <
            div className = "content" >
            <
            div className = "logo" >
            <
            img className = "logoBecode"
            src = {
                logoBecode
            }
            alt = "BeCode.org" /
            >
            <
            /div>

            <
            div className = "welcome" >
            <
            p > {
                "BookShelf"
            } < /p> <
            /div>

            <
            form className = "user"
            onSubmit = {
                this.handleSubmit
            } >
            <
            input type = "email"
            className = "inputUser"
            placeholder = "Email"
            onChange = {
                this.handleChangeEmail
            }
            value = {
                this.state.emailValue
            }
            />

            <
            input type = "password"
            className = "inputPassword"
            placeholder = "Password"
            onChange = {
                this.handleChangePass
            }
            value = {
                this.state.passValue
            }
            /> <
            /form>

            <
            div className = "login" >
            <
            Link to = "/home" >
            <
            button type = "submit"
            className = "btnLogin"
            onClick = {
                this.handleSubmit
            } > {
                "Home"
            } <
            /button> <
            /Link> <
            /div>

            <
            div className = "copyright" >
            <
            p > {
                "© 2016-2019, BeCode.org"
            } < /p> <
            /div>

            <
            div className = "squaresBox" >
            <
            div id = "block1" / >
            <
            div id = "block2" / >
            <
            div id = "block3" / >
            <
            div id = "block4" / >
            <
            div id = "block5" / >
            <
            div id = "block6" / >
            <
            div id = "block7" / >
            <
            div id = "block8" / >
            <
            /div> <
            /div> <
            /div>
        );
    }
}

export default Login;