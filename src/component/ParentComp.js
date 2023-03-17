import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Jack'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Jack'
            })
        }, 2000)
    }

  render() {
    console.log('*********************Parent Comp *********************')
    return (
      <div>ParentComp
        <MemoComponent name = {this.state.name} />
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        
      </div>
    )
  }
}

export default ParentComp