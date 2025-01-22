// console.log(10);
// console.log(20);
// setTimeout(() => {
//     console.log(30);
// }, 5000);
// console.log(40);
// console.log(50);


// setInterval(() => {
// document.write("chetan<br/>");
//     console.log("chetan");
// }, 100);

//Promises

// let p1 = new Promise((resolve, reject) => {});

// let p2 = new Promise((resolve, reject) => {
//         resolve("Success");
// });

// p2.then((res) => console.log(res)).catch((err) => console.log(err)).finally(() => console.log("Finally for both"));

// let p3 = new Promise((resolve, reject) => {
//         reject("Failure");
// });
// p3.then((res) => console.log(res)).catch((err) => console.log(err)).finally(() => console.log("Finally for both"))

// API fetching

function fetchUser() {
        let response = fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        response.then(result =>{ 
                // console.log(res.json());
                return result.json().then(data => {
                        // console.log(data)
                        let store = document.getElementById("store");
                        data.map(user => {
                                store.innerHTML += `
                                <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.company.name}</td>
                                </tr>
                                `
                        })
                })
        })
        .catch(err => console.log(err));
}
fetchUser();

