import React, { Component } from 'react'

export default class B extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Jack Dai'
        }
        console.log('Lifecycle B constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount B')
    }


  render() {
    console.log('Render B')
    return (
      <div>
        <h1>Lifecycle B</h1>
      </div>
    )
  }
}
