import React, { createContext } from 'react'

const GlobalDataProvider = createContext()
const ContextAPI = (props) => {
  return <GlobalDataProvider.Provider value="MRU">
    {props.children}
  </GlobalDataProvider.Provider>
}

export default ContextAPI