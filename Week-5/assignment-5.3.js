const arr = [9, 8, 9, 4, 6, 0, 6, 9, 7, 5];

function hasDuplicates(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
}
console.log(hasDuplicates(arr));