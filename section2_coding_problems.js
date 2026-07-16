function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 3, 8, 1]));

function greaterThan(arr, value) {
    let result = [];

    for (let num of arr) {
        if (num > value) {
            result.push(num);
        }
    }

    return result;
}

console.log(greaterThan([10, 20, 30, 5, 40], 15));
console.log(greaterThan([1, 2, 3], 10));
