//DO NOT ALLOW OBJECTS INSTATIATED FROM MY CLASS (or subclass) TO USE CERTAIN METHODS
class User{
    //constructor has same prop as normal constructors
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //cannot be accessed by objects
    static printAge(){
        console.log(this.age);        
    }
}
const u1=new User("om",21);
// u1.printAge(); 
/*GIVES ERROR THAT printAge() is not a function 
as it is not accessible to object*/