let array1=[{
  empid:1,
  empname:"sunny",
  empcompany:"mru",
  empsalary:"1000",
  empaddress:{
      empcity:"kmm",
      emparea:"aaa"
      
}
},{
  empid:2,
  empname:"harsha",
  empcompany:"mru",
  empsalary:"1000",
  empaddress:{
      empcity:"kmm",
      emparea:"aab"
      
}
}
]
array1.map((user)=>{
  store.innerHTML+=`
 <tr>
<td>${user.empid} </td>
 <td>${user.empname} </td>
  <td>${user.empcompany} </td>
  <td>${user.empsalary} </td>
  <td>${user.empaddress.empcity} </td>
  <td>${user.empaddress.emparea} </td>
  </tr>`
})