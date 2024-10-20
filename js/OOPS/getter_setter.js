/*
    getter and setter are special methods placed over properties
    to modify the process of storing and accessing values from 
    the memory
*/

class User{
    //by default each class has getters and setters
    constructor(email,password){
        /*
            YOU HAVE TO initialize email and password in 
            constructor
        */
        this.email=email;
        /*  
            getter and constructor both are setting 
            value of password which gives ERROR - 
            Maximum call stack size exceeded
            Thus use different variable name in getter and setter 
            (the name must be same in both)
        */
        this.password=password;
    }
    /*you NEED to define both getter and setter at same time
         or it gives error*/
    // getters - get propertyname(){}
    get password(){
        // DIFFERENT VARIABLE NAME than password                        
        return this._password.toUpperCase();
    }
    //setter - set propertyname(){}
    set password(value){
        // DIFFERENT VARIABLE NAME than password                        
        this._password=value
    }

    get email(){
        return `${this._email.toUpperCase()}/abc`;
    }
    set email(value){
        this._email=value;
    }
}

const om=new User("om@gmail.com","abc");
console.log(om.password); //ABC
console.log(om.email);

// OLD METHOD
//function
function User2(email,password) {
    //ITS _email NOT email
    this._email=email,
    this._password=password,
    
    //ITS email NOT _email
    Object.defineProperty(this,'email',{
        get:function() {
            //ITS _email NOT email
            return this._email;
        },
        set:function(value){
            //ITS _email NOT email
            this._email=value;
        }
    })
}
const u2=new User2("om@abc","OM");
console.log(u2.email);

//object based (NOT USED AT ALL (VERRRY FEW AS ITS WEIRD))
const user3={
    _email:'adbdf',
    _password:'123',    

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}
//create object on base/reference of user3 (by default its null)
const a=Object.create(user3);
console.log(a.email);
