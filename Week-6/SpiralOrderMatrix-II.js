
function SpiralPrint(m, n, arr) {
    let i, k = 0, l = 0;
    /*
    k - starting row index
    m - ending row index
    l - starting column index
    n - ending column index  
*/

    while (k < m && l < n) {
        // printing first row
        for (i = l; i < n; ++i) {
            console.log(arr[k][i] + ' ');
        }
        k++;

        // printing last column
        for (i = k; i < m; ++i) {
            console.log(arr[i][n - 1] + ' ');
        }
        n--;

        // printing last row
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                console.log(arr[m - 1][i] + ' ');
            }
            m--;
        }

        // printing first column
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                console.log(arr[i][l] + ' ');
            }
            l++;
        }
    }
}

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let r = arr.length;
let c = arr[0].length;

SpiralPrint(r, c, arr);

