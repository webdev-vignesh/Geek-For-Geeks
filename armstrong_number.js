// For a given 3 digit number, find whether it is armstrong number or not.


function armstrongNumber(n) {
    n = n.toString()
    if (((n[0]**3)+(n[1]**3)+(n[2]**3)) == n ) 
    {
        return "Yes"
    }
    else {
        return "No"
    }
}

console.log(armstrongNumber(143));
console.log(armstrongNumber(371));