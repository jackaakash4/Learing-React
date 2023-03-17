import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LIfecycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Jack Dai'
        }
        console.log('Lifecycle A constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }


  render() {
    console.log('Render')
    return (
      <div>
        <h1>Lifecycle A</h1>
        <LifecycleB />
      </div>
    )
  }
}
