// let element = document.getElementById("demo");
// element.innerText="Google+";

// console.log(element);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello";
// ele[0].style.backgroundColor="red";

// let x=[...ele];
// console.log(x,Array.isArray(x));

// x.map(element=>{
//     element.innerText="Hello";
//     element.style.backgroundColor="tomato";
// })

// let ele = document.getElementsByTagName("div");
// console.log(ele);

// let ele = document.getElementsByName("formData");
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

// let ele = document.getElementById("mru");
// console.log(ele);

// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     console.log('Button clicked');
//     alert('Button clicked');
//     document.body.style.backgroundColor = 'red';
// })

// let btn = document.querySelector('#btn');
// btn.addEventListener('dblclick', () => {
//     console.log('Button Double clicked');
// })

// let divBlock = document.getElementsByClassName('divBlock');
// divBlock.addEventListener('onMouseOver', () => {
//     document.body.style.backgroundColor = 'yellow';
//     divBlock.style.backgroundColor = 'blue';
// })

// divBlock.addEventListener('onMouseLeave', () => {
//     document.body.style.backgroundColor = 'yellow';
//     divBlock.style.backgroundColor = 'blue';
// })

// let bgColor = document.querySelector('.bgColor');

// [...bgColor].map(element => {
//     element.addEventListener('onMouseOver', () => {
//         element.style.backgroundColor = 'blue';
// })
// })

// let ele = document.createElement("h1");
// ele.textContent = "Hello, World!";
// ele.style.color = 'red';
// ele.id = 'demo';
// document.body.appendChild(ele);

// console.log(ele);

// let img = document.createElement("img");
// img.src = "./Ro.jpg";
// img.style.width = "1200px";
// img.style.height = "500px";
// img.style.position = "absolute";
// img.style.transition = "all 1s ease-in-out";
// console.log(img);
// document.body.appendChild(ele);
// document.body.appendChild(img);

let form = document.querySelector("form");
let username = document.getElementById("uName");
let email = document.getElementById("uMail");
let password = document.getElementById("uPass");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event);
  // console.log("Form submitted");
  let uname = username.value;
  let uemail = email.value;
  let upass = password.value;
  let userDetails = {
    uname,
    uemail,
    upass,``
  };
  console.log(userDetails);
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
});
