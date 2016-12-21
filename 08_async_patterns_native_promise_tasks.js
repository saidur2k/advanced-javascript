function getData (d) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){ resolve(d); }, 1000);
    });
}

var x;

console.log("Start:", new Date().getTime());

getData(10)
.then(function (num1) {
    x = 1 + num1;
    console.log("Step 1: ", new Date().getTime());
    return getData(30);
})
.then(function (num2) {
    var y = 1 + num2;
    console.log("Step 2: ", new Date().getTime());
    return getData("Meaning of life: " + (x + y));
})
.then(function (answer) {
    console.log("Step 3: ", new Date().getTime());
    console.log(answer);
})

console.log("End:", new Date().getTime());
