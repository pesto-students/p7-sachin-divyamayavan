function memoize(fn) {
    const cache = new Map();
    return function (n) {
        const key = n.tostring();
        if (cache.has(key)) {
            console.log("Memoized Value-")
            return cache.get(key);
        }
        cache.set(key, fn(n));
        return cache.get(key);
    };


}
function add(a) {
    console.log("Calculating Value:")
    return a + a;
}

const addM = memoize(add);

console.log(addM(10));
console.log(addM(10));
console.log(addM(20));
console.log(addM(20));
console.log(addM(30));
console.log(addM(30));
