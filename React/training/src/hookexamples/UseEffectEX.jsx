import React, { useEffect, useState } from "react";

const UseEffectEX = () => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //     setTimeout(() => {
  //         setCount(100)
  //     },5000);

  //     // setTimeout(() => {
  //     //     setCount(count+1);
  //     // },1000);

  //     // setTimeout(() => {
  //     //     setCount(count-1);
  //     // },1000);
  //     console.log(count);
  //      // document.title = "Training React";
  //     document.title = count;
  // },[count]);
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        res.json().then((data) => {
          // console.log(data);
          setUsers(data);
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <h1>{data}</h1> */}
      <h1>UseEffectEX</h1>
      {users.map((user, index) => {
        return (
          // <div key={index}>

          //     <h2>{index}{user.name}</h2>
          //     <p>{user.email}</p>
          // </div>
          <React.Fragment key={index}>
            <h2>
              {index} {user.name}
            </h2>
            <p>{user.email}</p>
          </React.Fragment>
          // <>
          //     <h2>{index} - {user.name}</h2>
          //     <p>{user.email}</p>
          // </>
        );
      })}
    </div>
  );
};

export default UseEffectEX;
