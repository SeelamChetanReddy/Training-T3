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

let p2 = new Promise((resolve, reject) => {
        resolve("Success");
});

p2.then((res) => console.log(res)).catch((err) => console.log(err)).finally(() => console.log("Finally for both"));

let p3 = new Promise((resolve, reject) => {
        reject("Failure");
});
p3.then((res) => console.log(res)).catch((err) => console.log(err)).finally(() => console.log("Finally for both"))