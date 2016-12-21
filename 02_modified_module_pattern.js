var foo = (function(){
    var publicAPI = {
        bar: function() {
            publicAPI.baz();
        },
        baz: function() {
            console.log("baz");
        }
    };

    return Object.freeze(publicAPI) ;
})();

foo.bar(); // "baz"