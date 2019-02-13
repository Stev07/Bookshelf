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
        <div className="inner-modal">
          <h3>User settings</h3>
          <div className="user-info">
            <form action="post">
              <span className="input-container"><p>First Name: </p><input type="text"/></span>
              <span className="input-container"><p>Lat Name:  </p><input type="text"/></span>
              <span className="input-container"><p>Class Name:</p><input type="text"/></span>
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