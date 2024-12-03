// given array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

// solution
function transform(i) {
    return i * 2;
}

const ans = input.map(transform);
console.log("Original Array: " + input);
console.log("Transformed Array: " + ans);


// Filtering
// Given an array, give even numbers alone
// [1, 2, 3, 4, 5]
// output: [2, 4]


const output = input.filter(function (n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
});

console.log(output)