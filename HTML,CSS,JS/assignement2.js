//Assignment   

let pattern1="";
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        pattern1+="*";
    }pattern1+="\n";
}   
console.log(pattern1);

let pattern2="";
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        pattern2+="*";
    }pattern2+="\n";
}   
console.log(pattern2);



let pattern3 = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j === i || j === 5 - i + 1) {
            pattern3 += "*";
        } else {
            pattern3 += " ";
        }
    }
    pattern3 += "\n";
}
console.log(pattern3);