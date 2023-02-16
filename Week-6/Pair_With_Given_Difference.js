function findPair(a, size, n) {
    let i = 0, j = 1;

    while (i < size && j < size) {
        if (i != j && a[j] - a[i] == n) {
            console.log("Pair Found: (" + a[i] + ", " + a[j] + ")");
            return true;
        }
        else if (a[j] - a[i] < n)
            j++;
        else
            i++;
    }
    console.log("No pairs found");
    return false;

}
const a = [1, 8, 30, 40, 100];

let size = a.length;

n = 60;

findPair(a, size, n);

