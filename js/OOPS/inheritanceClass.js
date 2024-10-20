class User{
    //constructor has same prop as normal constructors
    constructor(name){
        this.name=name;
    }
    printName(){
        console.log(this.name);        
    }
}
//same as Java
class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
    printTeacher(){
        //the variable here is name NOT username 
        console.log(this.name,this.email);
    }
}
const t1=new Teacher("om","abc");
t1.printTeacher(); //om abc
t1.printName(); //om
console.log(t1 instanceof User); //true
