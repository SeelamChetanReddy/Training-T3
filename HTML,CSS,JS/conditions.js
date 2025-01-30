//Decision Making Statements

// if
// if else
// if else if
// ternary operator
// switch

//if
if(true){
    console.log("If block is executed");
}
if(false){
    console.log("If block is not executed");
}


//if else
let age1=17;
if(age1>=18){   
    console.log("You are eligible");
}
else{
    console.log("You are not eligible");
}

//if else if
let day=prompt("Enter the day");
if(day==1){
    console.log("Sunday");
}
else if(day==2){
    console.log("Monday"); 
}
else if(day==3){
    console.log("Tuesday");
}
else if(day==4){
    console.log("Wednesday");
}
else if(day==5){
    console.log("Thursday");
}
else if(day==6){
    console.log("Friday");
}
else if(day==7){
    console.log("Saturday");
}
else{
    console.log("Invalid day");
}

//Switch
let day1=Number(prompt("Enter the day"));

switch(day1){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4: 
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

//Ternary Operator
let age2=Number(prompt("Enter your age"));
let eligible=age2>=18?"You are eligible":"You are not eligible";
console.log(eligible);
