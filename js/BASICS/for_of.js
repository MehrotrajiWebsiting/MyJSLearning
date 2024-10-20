// DOES NOT WORK ON OBJECTS
// FOR OBJECTS iterate over OBJECT.keys() 
user={
    name:"om",
    age:21
}
for (const i of Object.keys(user)){
    console.log(i+" = "+user[i]);
}

arr=["om",1,"n",true];
// each element of array
for (const i of arr){
    console.log(i);
}
//each char of string
s="OM MEHROTRA"
for(const i of s){
    console.log(i);
}

let map=new Map();
map.set("IN","India")
map.set("US","USA")
console.log(map);
// key value pair as array
for(const key of map){
    console.log(key);
}
// individually access key and value
for(const [key,value] of map){
    console.log(key+" = "+value);
}