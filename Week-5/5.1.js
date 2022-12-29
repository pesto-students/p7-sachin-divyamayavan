
async function myDisplayer(answer) {
    document.getElementById("demo").innerHTML = await answer;
}

let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
        let a = 10;
        let b = 20;
        let c;
        sum = a + b;
        sub = a - b;
        total = sum - sub;
        if ((gen.next().value) != total) {
            myResolve("Resolved");
        } else {
            myReject("Error");
        }
    }, 3000);
});

myPromise.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);

function* generator() {
    var number = 1;
    while (true) {
        yield number++;
    }
}
var gen = generator();

for (var i = 0; i <= 19; i++) {
    document.getElementById("demo1").innerHTML = (gen.next().value);
}

// generator function full output will display on console window
//generator function declaration
function* generator() {
    var number = 1;

    //here yield keyword is used
    while (true) {
        yield number++;
    }
}

//here we want to call the generator function
var gen = generator();

//here for loop is used to iterate the values
for (var i = 0; i <= 29; i++) {
    console.log(gen.next().value);
}

