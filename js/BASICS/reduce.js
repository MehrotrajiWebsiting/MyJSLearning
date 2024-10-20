arr=[1,2,3,4]
// SUM OF ALL ELEMENTS
initialValue=0
sum=arr.reduce(
    (accumulator,currentValue)=> accumulator+currentValue,initialValue
)
console.log(sum);

sum=arr.reduce(
   function (accumulator,currentValue){
        console.log(`accumulator = ${accumulator} , currentValue = ${currentValue}`);
        return accumulator+currentValue
   },0 //initial value is written OUTSIDE FUNCTION
)
console.log(sum);

shoppingCart=[
    {item:"java",price:1000},
    {item:"py",price:800},
    {item:"cpp",price:100},
    {item:"py",price:10000},
]
//TOTAL PRICE
console.log("Price",
    shoppingCart.reduce(
    (acc,item)=>acc+item.price,0
)
);

