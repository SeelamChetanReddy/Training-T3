import React, { Component } from 'react'

export default class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            users:["chetan","Prem","yuva","komal","sunny"],
            num : 100
        };
    }

    changeNum = () => {
        this .setState({num : 200})
    }
    incrementNum = () => {
        this .setState({num : this.state.num + 100})
    }
    decrementNum = () => {
        this .setState({num : this.state.num - 100})
    }
  render() {
    console.log(this)
    return (
      <div>
        {
            this.state.users.map((user,i)=>{
            return <li key = {i}>{user}</li>
            })
        }
        <h1>{this.state.num}</h1>
        <button onClick={this.changeNum}>Change Number</button><br />
        <button onClick={this.incrementNum}>Increment</button><br />
        <button onClick={this.decrementNum}>Decrement</button><br />
      </div>
    )
  }
}
