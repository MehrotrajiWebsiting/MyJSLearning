user={
    name:"om",
    // email:`${this.name}@gmail.com`, // NOT WORKING GIVES UNDEFINED
    email:function(){
        console.log(this);//return entire object        
        return (`${this.name}@gmail.com`)
    },
    age:21,
}

/* IF EMAIL HAD ARROW FUNCTION IT WOULD BE undefined as this in ARROW FUNCTION refers to this of parent, i.e.
    this of user ,i.e, the global object(in this case) and global does not have name variables
*/
console.log(user.email());//om@gmail.com
console.log(this);// {}  (in browser it returns Window object)
function abc(){
    console.log(this); // global object as function is declared in global
}
abc()

// CHECK ARRAY IS EMPTY
let arr=[]
if(arr.length===0) console.log("empty array");

// CHECK OBJECT IS EMPTY
if(Object.keys(user).length===0){
    console.log("empty object");
}


let a=()=>{
    console.log(this);// {}
}
a()

a=()=>({
    name:"om"
})
console.log(a()); //return the object

let b=4
let c=4
function g(){
    b=5 // SAME B AS THE ONE OUTSIDE
    let c=5 //DIFFERENT C THAN THE ONE OUTSIDE
    console.log("b=",b);//5
    console.log("c=",c);//5
}
g()
console.log("b=",b);//5
console.log("c=",c);//4


// IMMEDIATELY INVOKED FUNCTION EXPRESSION
// GLOBAL SCOPE KE POLLUTION /  VARIABLES KO REMOVE KRNE KE LYE USED HOTA HAI MAINLY
(function efg(){
    // NAMED IIFE AS FUNCTION HAS NAME
    console.log("HI");
})(); // SEMICOLON IS VERY IMPORTANT HERE FOR THE NEXT LINES TO RUN 
(
    ()=>console.log("HELLO")
)() // SEMICOLON IS NOT IMPORTANT HERE AS AFTER THIS THERE IS NO IIFE

console.log("l") // NO SEMICOLON HERE SO IIFE STILL CANNOT RUN AFTER THIS

function av(){
    console.log("hi");
}
av(); //THE SEMICOLON HERE ALLOWS NEXT IIFE TO RUN (ANY SEMICOLON AFTER AN IIFE 
//ALLOWS NEXT IIFE TO RUN)

// parameterised IIFE
((name)=>console.log(name)
)("om");