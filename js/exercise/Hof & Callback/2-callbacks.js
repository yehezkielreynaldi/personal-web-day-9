//callbacks | bek kiri bek kanan

function hello() {
    console.log("Hello World");
}

function goodBye() {
    console.log("Good Bye");
}

function print(callback) {
    callback();
}

print(hello);
print(goodBye);