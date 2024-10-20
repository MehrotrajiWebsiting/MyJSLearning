//YOU CANNOT CHANGE VALUE OF Math.PI
console.log(Math.PI); // 3.141592653589793
Math.PI=4;
console.log(Math.PI); // 3.141592653589793

// tells hidden properties about object you haven't seen
// Object.getOwnPropertyDescriptor(class/module , key/property name)
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor); //{value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
//NO MATTER WHAT YOU DO YOU CANNOT CHANGE writable to true
//THUS Math.PI never changes

const chai={
    name:'ginger tea',
    price:250,
    isAvailable:true,
    order:function () {
        console.log("Ordered");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//{value: 'ginger tea', writable: true, enumerable: true, configurable: true}

for(let [key,value] of Object.entries(chai)){
    //function is not printed
    if(typeof value !== 'function'){
        console.log(key,value);
    }
}
/*
name ginger tea
price 250
isAvailable true
*/

//changing properties
//Object.defineProperty(object,property, value)
Object.defineProperty(
    chai,'name',{
        writable:false, //cannot be updated
        enumerable:false, //cannot be iterated
    }
);
console.log("AFTER CHANGE");
/*
    SINCE for name, enumerable is false,
    name is NOT printed as it was never iterated 
*/
for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(key,value);
    }
}
/*
price 250
isAvailable true
*/