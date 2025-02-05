// import React from "react";

// function App() {
//   // let ele = React.createElement("div",{className : "App"},[
//   //   React.createElement("h1",null,"Hello, world!"),
//   // ])
//   let user = "sunny";
//   return (
    
//     <div className="App">
//       <h1 style={{color:"red"}}>HI</h1>
//       <h1>Chetan</h1>
//       <h1>{user}</h1>
//       <h1>{28+12}</h1>
//     </div>
//   );
// }

// export default App;


// ! componenet composition


// import React from 'react';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Footer from './components/Footer';


// const App = () => {
//   return (
//     <div className='App'>
//       <Navbar/>
//       <Main/>
//       <div className='sidebar'>
//       <Sidebar1/>
//       <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default App

// ! props

// import React,{Component} from "react";
// import FBCPropEx from "./propsex/FBCPropEx";


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//         username = "chetan"
//         age = {20}
//         hobbies = {["cricket","football","basketball"]}
//         address={{city:"Khammam",area:"allipuram"}}
//         sendFun={function(){alert("hi i am  chetan")}}
//         /> */}

//         <FBCPropEx
//         username = "Rushil"
//         isMarried = {true}
//         hobbies = {["chatting","reading","eating","sleeping"]}
//         />
//       </div>
//     )
//   }
// }

//! props children

import React from 'react'
import PropChildEx from './propsex/PropChildEx'
import SubChild from './propsex/SubChild'
const App = () => {
  return (
    <PropChildEx num = {1000}>
      <h1>Hi I am child</h1>
      <SubChild/>
    </PropChildEx>
  )
}

export default App