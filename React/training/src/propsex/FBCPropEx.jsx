import React from 'react'

const FBCPropEx = (a) => {
    console.log(a);
    if(a.isMarried === true){
        return (
            <div>
                <h1><i>{a.username} is a married person</i></h1>
                <hr/>
                <sup>{
                    a.hobbies.map(hobby=>{
                        return <li>{hobby}</li>
                    })
                }</sup>
            </div>
        
    )}
    else{
        return <h1>{a.username} is not a married person</h1>
    }
}

export default FBCPropEx