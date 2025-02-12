import React, { createContext, useState } from 'react'

const GlobalDataProvider = createContext()

const ContextAPI = (props) => {
  const [count, setCount] = useState(0);
  let button
  return <GlobalDataProvider.Provider value="MRU">
    {props.children}
  </GlobalDataProvider.Provider>
}

export default ContextAPI