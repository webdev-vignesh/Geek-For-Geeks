// Given a number N. 
//The task is to complete the function convertFive() which 
//replace all zeros in the number with 5 and returns the number.

function convertFive(n){
    let m = n.toString();
    const reg= /[0]/g;
    return Number(m.replace(reg, 5));
}

console.log(convertFive(1030));
console.log(convertFive(258));
console.log(convertFive(3005));