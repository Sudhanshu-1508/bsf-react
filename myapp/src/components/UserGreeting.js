import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
    
    //Short cicuit operator
    return (this.state.isLoggedIn && <div>Welcome 1</div>)

    //ternary operator
   // return(
   //     this.state.isLoggedIn ?
   //     (<div>Welcome 1</div>):
   //     (<div>Welcome Guest</div>)
   // )

   //element variables
    //let message
    //if(this.state.isLoggedIn) {
    //    message = <div>Welcome 1</div>
    //} else{
    //    message = <div>Welcome Guest</div>
    //}
//
    //return (<div>{message}</div>)

   // if (this.state.isLoggedIn) {
   //     return(
   //         <div>
   //             Welcome 1
   //          </div>
   //     )   
   // } else {
   //   return (
   //     <div>Welcome Guest</div>
   //   )  
   // }
    //  return (
    //  <div>
    //    <div>Welcome 1</div>
    //    <div>Welcome Guest</div>
    //  </div>
    //)
  }
}

export default UserGreeting