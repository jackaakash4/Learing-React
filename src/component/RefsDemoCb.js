import React, { Component } from 'react'

class RefsDemoCb extends Component {
    constructor(props) {
      super(props)
        this.cbRef = null
        this.setcbRef = (element) =>{
            this.cbRef = element
        }
      }
    

    componentDidMount() {
        if(this.setcbRef){
        this.cbRef.focus()
        }
    }

    clickHandler = () => {
    alert(`Welcome ${this.cbRef.value}`)

    }
  render() {
    return (
      <div>
        <input type='text' ref={this.setcbRef} />
        <button onClick={this.clickHandler} >Click</button>
      </div>
    )
  }
}

export default RefsDemoCb