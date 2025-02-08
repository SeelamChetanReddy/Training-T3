import React, { Component } from 'react'

export default class MyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textValue: '',
            skillValue: ''
        }
    }
    changeMessage = (event) => {
        this.setState({
            textValue: event.target.value
        })
    }
    changeSkill = (event) => {
        this.setState({
            skillValue: event.target.value
        })
    }

    submitted = (event) => {
        event.preventDefault();
        alert("form is submitted" + `  ${this.state.textValue} ${this.state.skillValue}`)
    }
  render() {
    return (
        <div>
        <form onSubmit={this.submitted}>
            <label>Username:</label>
            <input type="text" value={this.state.textValue} onChange={this.changeMessage}/>

            <label>Skill</label>
            <select onChange={this.changeSkill}>
                <option>HTML</option>
                <option>java</option>
                <option>py</option>

            </select>
            <button type="submit">Submit</button> 
        </form>

      </div>
    )
  }
}
