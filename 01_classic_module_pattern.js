var foo = (function(){

    var o = { bar: "bar" };

    return {
        bar: function() {
            console.log(o.bar);
        }
    }
})();

foo.bar(); //"bar"