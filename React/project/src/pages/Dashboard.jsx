import React, {useState} from 'react'

const Dashboard = () => {

  const [UserName,setUserName] = useState();
  const [Password,setPassword] = useState();
  const [Email,setEmail] = useState();
  const [Gender, setGender] = useState();
  const [Address, setAddress] = useState();
  const [Country, setCountry] = useState();
  const [File, setFile] = useState();

  let handleSubmit = (e) => { 
    e.preventDefault();
    console.log(UserName,Password,Email,Gender,Address,Country,File);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name :</label>
        <input type="text" placeholder="Enter UserName"/>
        <br />
        <label>Email :</label>
        <input type="email" placeholder="Enter Email"/>
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter password"/>

        <br />

        <label >Gender </label>
        <radio>
          <input type="radio"/>Male
          <input type="radio"/>Female
          <input type="radio"/>Other
        </radio>

        <br />

        <label>Address:</label>
        <br />
        <textarea placeholder="Enter Address"></textarea>

        <br />  

        <label >Choose File</label>
        <input type="file"/>

        <br />

        <label>Country</label>
        <select>
          <option>India</option>
          <option>USA</option>
          <option>England</option>
        </select>

        <br />
        <br />

        <button type="button">Submit</button>


      </form>
    </div>
  )
}

export default Dashboard