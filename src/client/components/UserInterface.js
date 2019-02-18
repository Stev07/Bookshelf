import React, { Component } from 'react'
import "./scss/AppDom.scss"
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
//@Handle user settings for the modal...


export default class Modal extends Component {
    
    constructor(props){

    super(props);
    this.state={
        userName:"",
        userPassword:"", 
        userLastName:"", 
        userEmail:""
    }
    this.handleFormAction = this.handleFormAction.bind(this)
    }

//@Little trick to change dynamicaly the user inforamtions

    handleFormAction(e){
        this.setState({ userEmail:event.target.value, userLastName:e.target.value, userName: e.target.value, userPassword:e.target.value })
    }



    render() {
        return (
            <div>
            <Header />
            <NavBar />
            <div className="modalBack">
                <div className="modal-container">
                    <div className="title-container">
                        <h3>{"User settings"}</h3>
                    </div>

                    <div className="inner-modal">
                        <div className="user-info">

                            <form action="post">
                                <span className="input-container">

                                    <div className="infoBox">
                                        <p className="info">{"First Name :"}</p>
                                    </div>

                                    <div className="details">
                                        <p >{"Jean"}</p>
                                    </div>

                                </span>

                                <span className="input-container">

                                    <div className="infoBox">
                                        <p className="info">{"Last Name : "}</p>
                                    </div>

                                    <div className="details">
                                        <p>{"Neymar"}</p> 
                                    </div>

                                </span>
                                <span className="input-container">

                                    <div className="infoBox">
                                        <p className="info">{"Class : "}</p>
                                    </div>

                                    <div className="details">
                                        <p>{"Hamilton"}</p>
                                    </div>

                                </span>
                                <span className="input-container">

                                    <div className="infoBox">
                                        <p>{"Email : "}</p>
                                    </div>

                                    <div className="details">
                                        <input type="mail"/>
                                    </div>

                                </span>
                                <span className="input-container">
                                    <div className="infoBox">
                                        <p>{"Password : "}</p>
                                    </div>

                                    <div className="details">
                                        <input type="password"/>
                                    </div>

                                </span>
                                <span className="input-container">

                                    <div className="infoBox">
                                        <p>{"Confirm password : "}</p>
                                    </div>

                                    <div className="details">
                                        <input type="password"/>
                                    </div>

                                </span>

                                <button className="buttonConfirm">
                                    <p>{"Confirm"}</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}