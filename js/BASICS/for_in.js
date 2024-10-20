// FOR IN RETURNS THE KEYS/INDEXES
// WORKS ON OBJECTS TOO
user={
    name:"om",
    age:21,
}
//get KEYS of object
for (const key in user){
    console.log(key);  //gives the keys
}
for (const key in user){
    console.log(key+" = "+user[key]);  
}

arr=["om","rahul"]
//returns INDEXES
for(const i in arr){
    console.log(i);   //INDEXES ONLY
}
for(const i in arr){
    console.log(arr[i]);  
}

// maps are not iterable so NO OUTPUT
let map=new Map();
map.set("IN","India")
map.set("US","USA")
// NO OUTPUT
for(const key in map){
    console.log(key);// NO OUTPUT
}