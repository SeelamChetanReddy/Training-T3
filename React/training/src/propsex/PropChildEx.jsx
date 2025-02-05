import React from 'react'

const PropChildEx = (a) => {
  return (
    <div>{a.num}
        <i>{
            a.children
        }</i>
    </div>
  )
}

export default PropChildEx