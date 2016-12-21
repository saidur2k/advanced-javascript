//Object Linked to Other Objects (OLOO) Delegated Objects
var Foo = {
    init: function (who) {
        this.me = who;
    },
    identify: function () {
        return "I am " + this.me;
    }
};

var Bar = Object.create(Foo);

Bar.speak = function () {
    return "Hello, " + this.identify() + ".";
}

var b1 = Object.create(Bar);
b1.init("b1");
console.log(b1.speak());

//OLOO Object.create
if (!Object.create) {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}