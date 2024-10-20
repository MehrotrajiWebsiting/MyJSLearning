/* 
    ALL Objects and those who inherit prototype of objects
    will get this property (like array and strings)
*/
Object.prototype.om=function(){
    console.log("I am Om");    
}
let user={
    name:"om",
    age:21,
}
user.om();//I am Om

let abc="123";
abc.om();//I am Om

let arr=[1,4];
arr.om();//I am Om

/*
    Arrays will get this property but
    Objects DO NOT because ARRAYS INHERIT OBJECT
    OBJECT DO NOT INHERIT ARRAYS
*/
Array.prototype.mehrotra=function(){
    console.log("I am Mehrotra");    
}
arr.mehrotra();
// abc.mehrotra();  // ERROR AS STRINGS DO NOT INHERIT ARRAY
// user.mehrotra(); // ERROR AS OBJECTS DO NOT INHERIT ARRAY