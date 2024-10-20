arr=["om","rahul"]

/* CALLBACK FUNCTIONS ARE THOSE WHICH ARE 
    PASSED AS ARGUMENT IN OTHER FUNTIONS
    THEY DO NO REQUIRE TO HAVE NAME
*/ 
arr.forEach( (element) => {
    console.log(element);
});
arr.forEach(function (element) {
    console.log(element);
});

function print(i){
    console.log(i);
}
//PASS THE REFERENCE DO NOT CALL THE FUNCTION
arr.forEach(print);

// all parameters of func in for each
arr.forEach(
    (element,index,arrayItself) => {
        console.log(element,index,arrayItself);
    }
);

// array of object
arr=[
    {
        name:"om",
        age:21
    },
    {
        name:"rahul",
        age:20
    },
    {
        name:"rohit",
        age:22
    }
]

arr.forEach(element => {
    console.log(element.age);
});