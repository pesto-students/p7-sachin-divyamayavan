function NextGreatestElement(arr, number) {
    var next, i, j;
    for (i = 0; i < number; i++) {
        next = -1;
        for (j = i + 1; j < number; j++) {
            if (arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        console.log(arr[i] + " -- " + next);
    }
}

var arr = [1, 3, 2, 4];
var number = arr.length;
NextGreatestElement(arr, number);