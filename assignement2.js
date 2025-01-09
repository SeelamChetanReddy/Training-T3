//Star triangle pattern

// for(let i=0; i<5; i++){
//     for(let j=0; j<=i; j++){
//         document.write("*");
//     }
//     document.writeln();
// }    

let pattern="";
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        pattern+="*";
    }pattern+="\n";
}   
console.log(pattern);

let pattern2="";
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        pattern2+="*";
    }pattern2+="\n";
}   
console.log(pattern2);

