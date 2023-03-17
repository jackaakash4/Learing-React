import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
  render() {
    return(
        //conditional operators
        this.state.isLoggedIn ?
        <div>Welcome Jack</div> :
        <div>Welcome Guest</div>
    )
        //element variable
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Jack</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div> message</div>
    

    //if/else
    // if ( this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome Jack
    //         </div>
    //     )
    // } else{
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }

//     return (
//       <div>
//         <div>Welcome Jack</div>
//         <div>Welcome Guest</div>
//       </div>
//     )
//   
}
}

export default UserGreeting