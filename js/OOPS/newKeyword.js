/* 
    PROTOTYPE helps to under the mechanism of JS
    what js does and why is it doing
*/
/* 
    JS HAS PROTOTYPAL BEHAVIOUR
        If something is not in current then it looks in parent then grandparent and so on
        until it gets value or null
*/
//ARROW FUNCTIONS DO NOT HAVE ACCESS OF this BECAUSE OF PROTOTYPE

/* 
    ARRAY   
    FUNCTION (technically) -------> OBJECT -----> null
    STRING
*/

function mulby5(num) {
    return num*5;
}
/* EVERYTHING IN JS is OBJECT
    functions behave like functions but can 
        also be made to behave like object
*/
mulby5.power=2; 
console.log(mulby5(5)); //25
console.log(mulby5.power); //2

//prototype gives internal methods as well as internal properties
console.log(mulby5.prototype); //{}

function User(name,age) {
    this.name=name;
    this.age=age;
}
//CREATE your own functions in prototype
User.prototype.increment=function() {
    //this is important to refer to current instance
    this.age++;
}
User.prototype.printMe=function() {
    //this is important to refer to current instance
    console.log(this.name,this.age);    
}

// const u1=User("om",21);
// u1.printMe(); // GIVES ERROR AS you don't tell u1 that new properties have been added

// FOR THIS WE USE new
const u1=new User("om",21);
u1.increment();
u1.printMe();// om 22

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the 
        prototype property of the constructor function. This means that it has access to 
        properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the 
        specified arguments and this is bound to the newly created object. 
        If no explicit return value is specified from the constructor, 
        JavaScript assumes this, the newly created object, 
        to be the intended return value.

The new object is returned: After the constructor function has been called, 
        if it doesn't return a non-primitive value (object, array, function, etc.), 
        the newly created object is returned.

*/