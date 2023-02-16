function higherValue(a, x) {
    let closestSum = Number.MAX_VALUE;

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            for (let k = j + 1; k < a.length; k++) {
                if (Math.abs(x - closestSum) >
                    Math.abs(x - (a[i] + a[j] + a[k])))
                    closestSum = (a[i] + a[j] + a[k]);
            }
        }
    }
    return closestSum;
}

const a = [-1, 2, 1, -4];

let x = 1;

console.log(higherValue(a, x));

