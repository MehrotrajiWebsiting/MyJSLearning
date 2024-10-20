class User{
    //constructor has same prop as normal constructors
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    printAge(){
        console.log(this.age);        
    }
}
const u1=new User("om",21);
u1.printAge(); //21


//  SAME CODE
// function User(name,age) {
//     this.name=name;
//     this.age=age;
// }
// User.prototype.printAge=function () {
//     console.log(this.age);
// }
// const u2=new User("om",21);
// u2.printAge();