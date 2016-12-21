function Foo(who) {
    this.me = who;
}

Foo.prototype.speak = function() {
    console.log("Hello, I am", this.me , ".");
}

var a1 = new Foo("a1");

a1.speak(); //"Hello, I am a1 ."