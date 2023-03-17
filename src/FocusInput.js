import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.focusRef = React.createRef()
    }
    
clickHandler = () => {
        this.focusRef.current.focusInput()
    }

  render() {
    return (
      <div>
        <Input ref={this.focusRef} />
        <button onClick={this.clickHandler} >Focus Input</button>
      </div>
    )
  }
}

export default FocusInput