let arr = []
for(let i = 0; i< 100; i++) {
    arr.unshift(i)
}

console.log(arr);
function quickSortRecursive(arr) {
    let pivot = arr[Math.floor(arr.length/2)];

    if(arr.length === 0){
        return arr;
    }

    const less = arr.filter((value) => value < pivot)
    const greater = arr.filter((value) => value > pivot)

    return quickSort(less).concat(pivot).concat(quickSort(greater))
}

console.log(quickSortRecursive(arr));

function quickSort(arr) {
    for(let i in arr){
        let pivot = arr[0];
        const less = arr.filter((value) => value < pivot)
        const greater = arr.filter((value) => value > pivot)
        arr = [].concat(less).concat(pivot).concat(greater)
    }
    return arr
}

console.log(quickSort(arr));