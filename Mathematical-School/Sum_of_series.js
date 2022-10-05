//Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms) 

function seriesSum(n) {
    return n*((n+1)/2); //mathematical equation with O(1)
}

console.log(seriesSum(5));