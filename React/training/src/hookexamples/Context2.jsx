import React from 'react'
import Context3 from './Context3'
import { GlobalDataProvider } from './GlobalDataProvider';
const Context2 = () => {
  const data = GlobalDataProvider.useContext();
  console.log(data);
  return (
    <div>Context2
      <hr />
        <Context3 />
    </div>
  )
}

export default Context2