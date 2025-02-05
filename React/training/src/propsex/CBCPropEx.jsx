import React, { Component } from 'react'

export default class CBCPropEx extends Component {
  render() {
    return (
      <div>
        
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        <i>{
          this.props.hobbies.map((hobby)=>{
            return <li>{hobby}</li>
          })
        }</i>
        <h1>Address</h1>
        <h4>{this.props.address.city}</h4>
        <h4>{this.props.address.area}</h4>
        <button onClick={this.props.sendFun}>click</button>
      </div>
    )
  }
}
