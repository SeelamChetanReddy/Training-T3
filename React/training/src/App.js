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
// import React from 'react'
// // import PropChildEx from './propsex/PropChildEx'
// // import SubChild from './propsex/SubChild'
// import Child1 from './propsex/Child1'

// const App = () => {
//   return (
//     <div>
//     app
//       {/* <PropChildEx num={1000}>
//         <h1>this is data coming from props children</h1>
//         <SubChild/>
//       </PropChildEx> */}
//       <Child1 university="Mallareddy university"/>
//     </div>
//   )
// }

// export default App

//! State examples
// import React from 'react'
// // import CBCStateEx from './stateexample/CBCStateEx'
// import FBCStateEx from './stateexample/FBCStateEx'
// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEx/> */}
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import FunctionalComponent from './components/FunctionalComponent'
// import styles from './myStyle.module.css'
// import "./components/Styles.css"
// const App = () => {
//   return (
//     <div>
//     <h1 class="heading">This is on styling class</h1>
//        <h1 class={styles.error}>Error</h1>
//        <FunctionalComponent clgName="MRU" apply={true}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Assignment from './components/Assignment'

// const App = () => {
//   return (
//     <div>
//       <Assignment/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import MyForm from './components/MyForm'

// const App = () => {
//   return (
//     <div>
//       <MyForm/>
//     </div>
//   )
// }

// export default App


//! hooks

import React from 'react'
import UseEffectEX from './hookexamples/UseEffectEX'

const App = () => {
  return (
    <div><UseEffectEX/></div>
  )
}

export default App