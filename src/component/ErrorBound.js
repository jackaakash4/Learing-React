import React, { Component } from 'react'

class ErrorBound extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }
    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

  render() {
        if(this.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.childern
  }
}

export default ErrorBound