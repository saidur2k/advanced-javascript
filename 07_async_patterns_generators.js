function* gen () {
    console.log("Hello");
    yield null;
    console.log("World");
}

var it = gen();
it.next(); // "Hello"
it.next(); // "World"