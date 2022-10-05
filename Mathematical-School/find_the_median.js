//Given an array arr[] of N integers, calculate the median

const arr = [59, 11 , 89, 78, 100]

function find_median(arr) {
    let s_arr = arr.sort((a,b) => a-b);
    if(s_arr.length % 2 != 0){
        let i = Math.round(s_arr.length/2);
        return s_arr[i-1];
    }
    else {
        let j = s_arr.length/2;
        let value = Math.floor((s_arr[j-1] + s_arr[j]) / 2);
        return value;        
    }
}

console.log(find_median(arr));
