import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props)
        this.compRef = React.createRef()
    }
    focusInput(){
        this.compRef.current.focus()
    }


    
  render() {
    return (
      <div>
        <input type='text' ref={this.compRef} />
      </div>
    )
  }
}

export default Input