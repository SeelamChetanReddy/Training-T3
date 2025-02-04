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


import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Main/>
      <div className='sidebar'>
      <Sidebar1/>
      <Sidebar2/>
      </div>
      <Footer/>
    </div>
  )
}

export default App