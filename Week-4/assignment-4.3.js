const fibonacci = {
    [Symbol.iterator]() {
        var a = -1, b = 1, count = 0;
        const fibonacciLimit = 10;
        return {
            next() {
                var c = a + b;
                a = b;
                b = c;
                return { value: c, done: ++count > fibonacciLimit }
            }
        }
    }

}


console.log('The Fibionacci Series is :');

for (var fibonacciNumber of fibonacci) {
    console.log(fibonacciNumber)
}