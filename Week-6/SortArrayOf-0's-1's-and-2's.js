
function printArr(a, n) {
    for (let i = 0; i < n; i++)
        console.log(a[i] + " ");
}

// These function helps to sort the array of 0's,1's and 2's
function sortArr(a, n) {
    let i, cnt0 = 0; cnt1 = 0; cnt2 = 0;

    // now count the number of 0's,1's and 2's
    for (i = 0; i < n; i++) {
        switch (a[i]) {
            case 0:
                cnt0++;
                break;
            case 1:
                cnt1++;
                break;
            case 2:
                cnt2++;
                break;
        }
    }

    // Now Update the array bec want to store the array in a order
    i = 0;

    // Store all the 0s in the beginning
    while (cnt0 > 0) {
        a[i++] = 0;
        cnt0--;
    }


    // Store all the 1s in the beginning
    while (cnt1 > 0) {
        a[i++] = 1;
        cnt1--;
    }


    // Store all the 1s in the beginning
    while (cnt2 > 0) {
        a[i++] = 2;
        cnt2--;
    }

    printArr(a, n);

}
let a = [0, 2, 1, 2, 0];
let n = a.length;

sortArr(a, n);
