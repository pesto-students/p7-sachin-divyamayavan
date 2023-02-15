const a = [1, 2, 3, 4, -10];
const n = a.length;

function maxSubArraySum(a, size) {
    let maximum_value = a[0];
    let current_max_value = a[0];

    for (i = 1; i < size; i++) {
        current_max_value = Math.max(a[i], current_max_value + a[i]);
        maximum_value = Math.max(maximum_value, current_max_value);

    }
    return maximum_value;
}
console.log(maxSubArraySum(a, n));