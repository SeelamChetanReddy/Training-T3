// import React, { useState} from 'react'

// const Assignment = () => {
//     const [value, setvalue] = useState();
//     const [bgColor, setBgColor] = useState('green');

//     console.log(value);

//     const changeValue = () => {
//         if (bgColor !== "green") {
//             setvalue("Hello");
//             setBgColor("green");
            
//         }
//         else{
//             setvalue("Good morning");
//             setBgColor("red");
//         } 

//     }

//   return (
//     <div>
//             <h1  style={{ backgroundColor: bgColor }}>{value}</h1>
//             <button onClick={changeValue}>Change Value</button>
//     </div>
//   )
// }

// export default Assignment



import React, { Component } from 'react'

export default class Assignment extends Component {

  constructor(props) {
    super(props)
    this.state = {
        clicked : true,
        value : "Hello",
        bgColor : "green"
    }
  }

  changeValue = () => {
        this.setState({
          clicked : false,
          value : "Good morning",
          bgColor : "red",
          
        })
  }
  render() {
    return (
      <div>
        <h1 style={{backgroundColor : this.state.bgColor}}>{this.state.value}</h1>
        <button onClick={this.changeValue}>Change Value</button>
      </div>
    )
  }
}
