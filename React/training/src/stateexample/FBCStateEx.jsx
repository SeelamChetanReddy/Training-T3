import React, { useState } from 'react'

const FBCStateEx = () => {
    // const data = React.useState("hi");
    // console.log(data);

    const [value, setvalue] = useState(0);
    console.log(value);

    const changeValue = () => {
        setvalue(1000);
    }

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={changeValue}>change value</button>
    </div>
  )
}

export default FBCStateEx