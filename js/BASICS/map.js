arr=[1,2,3,4,5,6,7,8,9,10]
a=arr.map((i)=> i+10)
console.log(a);// array of numbers all increased by 10

a=arr.map((i)=> {
    return i+10
})
console.log(a);

// CHAINING (FIRST ONE IS EXECUTED FIRST)
a=arr
    .map((i)=>i*10) //first this is executed
    .map((i)=>i+1) //then this is executed
console.log(a);

a=arr
    .map((i)=>i*10) //first this is executed
    .map((i)=>i+1) //then this is executed
    .filter((i)=>i>50)//then this is executed
console.log(a);