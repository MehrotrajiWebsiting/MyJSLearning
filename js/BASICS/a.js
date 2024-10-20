"use strict"; // for latest code

// FALSY VALUES
// false, 0, -0, null, undefined, "", NaN, BigInt 0n

// TRUTHY VALUES
/* true, ANY NON-EMPTY STRING - "0" or "false" or " " , [], {}
         , function(){}  - empty function   
*/

console.log("hi")
const a="hi"
// a="by"
console.log(a)
console.table([a,"om"])
// alert("hello") // not working in node js
console.log(3+3);
console.log(typeof(undefined)); //undefined
console.log(typeof(null)); //object

// conversion
let score="33"
console.log(typeof score);//string
let v=Number(score)
console.log(typeof v);//number
console.log(v);//33

score="33abc"
v=Number(score)
console.log(typeof v);//number
console.log(v);//NaN

score=null
v=Number(score)
console.log(typeof v);//number
console.log(v);//0

score=undefined
v=Number(score)
console.log(typeof v);//number
console.log(v);//NaN

score=true
v=Number(score)
console.log(typeof v);//number
console.log(v);//1

let l=1
v=Boolean(l)
console.log(v);//true

l=""
v=Boolean(l)
console.log(v);//false

l=123
v=String(l);
console.log(typeof v);//string
console.log(v);//123

// OPERATIONS
console.log(2**4);//16
console.log(1+2);//3
console.log(1+"2");//12
console.log("1"+2);//12
console.log("1"+2+2);//122 - string comes first so all string
console.log(1+2+"2");//32 
console.log(+true);//1
console.log(+"");//0
let num1,num2,num3
num1 =num2=num3=2+2
console.log(""+num1+num2+num3);//444

console.log(2=="2");//true
console.log(2==="2");//false
console.log(null==0);//false -no conversion
console.log(null >= 0);//true - conversion due to >
console.log(undefined >= 0);//false

// symbol
let id1=Symbol("123")
let id2=Symbol("123")
console.log(id1==id2);//false
console.log(typeof id1);//symbol

//bigint - use n after number
let bignumber=1n
console.log(typeof bignumber);//bigint

// arrays
let arr=[1,2,3]
console.log(arr);
console.log(typeof arr);//object

// object
let myObj={
    name:"om",
    age:21,
}
console.log(myObj);//returns everything inside {}

// function
let myFunc= function() {
    console.log("hi");
    }
myFunc()//hi
console.log(typeof myFunc);//function

// MEMORY
// STACK - FOR PRIMITIVE DATATYPES - USES CALL BY VALUE
// HEAP - FOR NON PRIMITIVE DATATYPES - USES CALL BY REFERENCE
let u1={
    name:'om'
}
let u2=u1//reference as object is non primitive so HEAP
u2.name='mehrotra'
console.log(u1);//name:mehrotra - value is changed in both u1 and u2
u1.name='om'
console.log(u2);//name:om - value is changed in both u1 and u2












