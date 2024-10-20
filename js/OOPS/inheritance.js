// OLDER APPROACH (not used much now) - __proto__
const base={
    name:"om",
}
const derived={
    age:21,
    //IT CAN ACCESS PROPERTIES OF base
    __proto__: base
}
//derived inherits base
console.log(derived.name); //om
/*  base cannot access properties of derived as it 
    is parent and do not inherit derived
*/
console.log(base.age); //undefined as base does not have age

const derived2={
    class:12,
}
//derived2 inherits derived
derived2.__proto__=derived;
//derived2 has access to derived as well as its parent object (base)
console.log(derived2.name,derived2.age,derived2.class);//om 21 12



// MODERN SYNTAX - Object.setPrototypeOf( child , parent );
Object.setPrototypeOf(derived,base);
console.log(derived.name); //om

/* 
    give a function for every String to give length 
    after removing extra space to left and right
*/
String.prototype.trueLength=function(){
    console.log(this); //[String: '(writes the string here)']
    console.log(`${this}`); //GIVES STRING
    //this gives the string
    console.log(`True Length is: ${this.trim().length}`);
}
const s="  om   ";
s.trueLength();/*[String: '  om   ']
  om
True Length is: 2
*/
"  mehrotra".trueLength();
/*
[String: '  mehrotra']
  mehrotra
True Length is: 8
 */