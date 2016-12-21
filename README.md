# advanced-javascript

##Closure
When a function remembers and acesses its lexical scope even if that 
function is accessed outside its lexical scope.

It is created when an inner function is transported out of function.

A closure is a reference to a hidden scope object, as long as there is some
function that still has a a closure in its scope that scope can stay around.
As long as the closure goes away scope can get garbage collected.

A variable isn't created per iteration. Putting an IFFY or let keyword
solves the scoping per iteration issue.

Closure 
- has to have an outer wrapping function
- return one or more inner functions that have closure over the scope

Benefits of module pattern
- hiding stuff

Tradeoff of module pattern
- testing is harder
- everytime we create a new module, we create a new copy of all 
internal functions, so 1000 copies for 1000 instances

##4 things happen when we use the NEW keyword
1. Brand new object gets created
2. Object gets linked
3. the context gets set to this
4. returns this

##What is a constructor?
It is a function that is called with the new keyword infront of it.

##What is a [[Prototype]] and where does it come from?
It is a linkage from one object to another object. There are two ways it comes from:
1. from Object.create - which links to another arbitrary object
2. Step 2 of the 4 steps of the NEW keyword

##How does a [[Prototype]] affect an object
We can call a property or method on an object reference and if it can't handle that reference it delegates up the prototype
chain to a different object.

##How do we find out where an object's [[Prototype]] points to?
1. __proto__
2. object.getPrototypeOf
3. .constructor.prototype
