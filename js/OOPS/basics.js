/* 
    JS is primarily a prototype-based language
    and classes is just a syntactic sugar for those coming from oops language like java
*/
//object - collection of properties and methods

// CONSTRUCTOR
// new is used to create NEW INSTANCE (or copy) which does not effect other original values
//IF new is NOT USED then same values are OVERWRITTEN by every object 
function User(name,age) {
    this.name=name;
    this.age=age;
    //return the object 
    /*
        if we do not return this 
        user1 and user2 will give undefined
        BUT
        user3 will still work and gives output
            User { name: 'Mehrotra', age: 21 }
        as it is implicit when using new keyword
    */
    return this;
}

const user1=User("Om",21); // returns object with name:Om ,age:21
console.log(user1);
const user2=User("Rahul",20);
//the value for user1 is also OVERWRITTEN
console.log(user1); //returns object with name:Rahul ,age:20

//return this is not required when using new keyword
const user3=new User("Mehrotra",21);
// NO OVERWRITING user3 and user1/user2 are different
console.log(user1); //returns object with name:Rahul ,age:20
console.log(user3);// User { name: 'Mehrotra', age: 21 }


function SomeUser(name,age) {
    this.name=name;
    this.age=age;
    this.greeting=function() {
        console.log(`Hello ${this.name}`);        
    }
}
const u1=new SomeUser("om",21); //SomeUser { name: 'om', age: 21, greeting: [Function (anonymous)] }
//return reference of function
console.log(u1.constructor); //[Function: SomeUser]

u1.greeting();//Hello om

//check u1 is instance of some function 
console.log(u1 instanceof SomeUser); //true


