// let x = 10; 
// function outer() { 
//     let x = 20; 
//     function inner() { 
//         x++; 
//         let x = 30; //ERROR 
//         console.log(x); 
//     } inner(); 
// } outer();

//1 4 3 2
console.log(1); 
setTimeout(() => console.log(2), 1000); 
setTimeout(() => console.log(3), 0); 
console.log(4);

let person = { 
    name: 'Alice', 
    greet: function() { 
        setTimeout(function() { 
            console.log('Hello, ' + this.name); //this refers to the outer function greet
        }, 1000
    );} };

person.greet(); // Hello, undefined

person = { 
    name: 'Alice', 
    greet: function() { 
        setTimeout(()=> { 
            console.log('Hello, ' + this.name); //this in arrow function refers to this of parent
        }, 1000
    );} };

person.greet(); // Hello, Alice

//Non primitives has different reference so never equal
let a = [1, 2, 3]; 
let b = [1, 2, 3]; 
console.log(a == b); //false
console.log(a === b);//false