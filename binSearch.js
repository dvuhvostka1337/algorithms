let arr = [];

// recursive bin search
function binSearch(arr, start, end, find){
    let mid = Math.floor((end+start)/2);
    let guess = arr[mid];
    // base
    if(guess > find){
        end = mid-1;
    }
    if(guess < find){
        start = mid+1;
    }
    if(guess === find){
        return mid
    } 
    return binSearch(arr, start, end, find);
}


for(let i = 0; i<100000; i++){
    arr.push(i);
}

let startTime = performance.now()
console.log(binSearch(arr, 0, arr.length-1, 99254));
let endTime = performance.now();
console.log(endTime - startTime, 'ms');

startTime = performance.now()
let result = arr.find((value) => value === 99254)
endTime = performance.now();
console.log(result);
console.log(endTime - startTime, 'ms');