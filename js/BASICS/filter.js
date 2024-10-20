arr=[1,2,3,4,5,6,7,8,9,10]

a=arr.filter( (i)=> i>8 );
console.log(a); //[9,10]

a=arr.filter( (i)=> {
    return i>8 //return important as not implicit return as we use {}
});
console.log(a); //[9,10]


arr=[ {  name:"om",
        age:21 },
    {  name:"rahul",
        age:20 },
    {  name:"rohit",
        age:22 }]

console.log(arr.filter(
    (i) => (i.age>=21)
));

console.log(arr.filter(
    (i) => (i.age>=21 && i.name==="om")
));
