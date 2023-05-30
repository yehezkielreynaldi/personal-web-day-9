//  promises
let condition = true;

let promise = new Promise(function (resolve, reject) {
    if (condition) {
        resolve("Promise is resolved");
    } else {
        reject("Promise is rejected");
    }
});

// console.log(promise);
// What? Why it is appear Promise? Because we need to wait it, that's the point of Promise. We should access it like this:

promise.then(function (value) {
    console.log(value);
    return alert("The promise is fullfilled!");
}).catch(function (reason) {
    console.log(resason);
})