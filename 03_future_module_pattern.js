// use for ES6+

//
// foo.js
//
var o = {bar: "bar"};

export function bar() {
    return o.bar;
}

//
// implementation.js
//

// import allows you to import one or many members of the API as first class things
import bar from foo
bar(); // "bar"

// use module to import the whole module
module foo from "foo"
foo.bar(); // "bar"


