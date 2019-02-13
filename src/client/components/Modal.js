import React, { Component } from 'react'
//@Handle user settings for the modal...
class Modal extends Component {
  constructor(props){

    super(props);
    this.state={userName:"",userPassword:"", userLastName:"", userEmail:""}
    this.handleFormAction = this.handleFormAction.bind(this)
  }

  //@Little trick to change dynamicaly the user inforamtions

  handleFormAction(e){
    this.setState({ userEmail:event.target.value, userLastName:e.target.value, userName: e.target.value, userPassword:e.target.value })
  }



  render() {
    return (
      <div className="modal-container">
        <div className="title-container">
          <h3>User settings</h3>
        </div>          
        <div className="inner-modal">
          <div className="user-info">
          <div className="modal-title">
        <h3>User ettings</h3>
        </div>
            <form action="post">
              <span className="input-container"><p>First Name:</p> <p>Jean</p> </span>
              <span className="input-container"><p>Lat Name:  </p> <p>Neymar</p> </span>
              <span className="input-container"><p>Class:</p> <p>Hamilton</p> </span>
              <span className="input-container"><p>Email:</p> <input type="mail"/></span>
              <span className="input-container"><p>Password:</p> <input type="password"/></span>
              <span className="input-container"><p>Password:</p> <input type="password"/></span>
              <button className="button">
                <p>CONFIRM MOFO!!!</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default  Modal;