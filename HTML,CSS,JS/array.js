// let user1 = "chetan";
// let user2 = "prem";
// let user3 = "yuva";
// let user4 = "komal";
// let user5 = "sunny";

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);


// let users = ["chetan", "prem", "yuva", "komal", "sunny", "harsha"];
// console.log(users);
// console.log(users[0]);
// console.log(users[3]);

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// users.map((user) => {
//     console.log(user);
// });

// let x = users.forEach((user) => {
//     console.log(user);
//     return user;
// });

// console.log(x);

//Create array of objects
// let users1 =
//     {
//     name: "chetan",
//     age: 20,
//     company: "wipro",
//     sal: 10000,
//     user:function(){
//         return `${this.name}  is a good employee. ${this.age} years old.`;
//     }  
// };

// console.log(users1);
// console.log(users1.user());

// let userdetails = {
//     name: "chetan",
//     age: 20,
//     company: "wipro",
//     sal: 10000,
//     address: {
//         city: "konda",
//         state: "telangana"
//     }
// }

// console.log(userdetails);
// console.log(userdetails.name);
// console.log(userdetails.address.city);


// let userdetails = [
//     {
//         name: "chetan",
//         city : "Vellanki"
//     },
//     {
//         name: "prem",
//         city : "konda"
//     },
//     {
//         name: "yuva",
//         city : "giri"
//     },
//     {
//         name: "komal",
//         city : "errasamudhram"
//     },
//     {
//         name: "sunny",
//         city : "kallur"
//     }
// ];

// userdetails.map((user) => {
//     console.log(user.name + " is from " + user.city);
// });


//!JSON
let userdetails = {
    name: "chetan",  
    age: 20,
    city: "Khammam"
}
 console.log(userdetails);

let x = JSON.stringify(userdetails);
console.log("JSON Object:",x);

let y = JSON.parse(x);
console.log(y);
