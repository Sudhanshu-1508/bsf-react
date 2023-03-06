import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         topic:'react'
      }
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleTopic=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit=(event)=>{
      alert(`${this.state.username} ${this.state.topic}`)  
      event.preventDefault()
    }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type={Text} value= {this.state.username} onChange= {this.handleChange}></input>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange = {this.handleTopic}>
                <option value={"react"}>React</option>
                <option value={"angular"}>Angular</option>
                <option value={"vue"}>Vue</option>
            </select>
        </div>
        <button >submit</button>
    </form>
        )
  }
}

export default Form