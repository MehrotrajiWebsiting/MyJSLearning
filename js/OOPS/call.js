/*
    this in global context
    1) In window (browser)  - {this=window}
    2) In node - {}
*/
function SetUsername(username) {
    this.username=username;    
}
function createUser(username,email,password) {
    /*
        without .call, the function is still being called
        BUT once the function ends, its Execution context is deleted
        and values are lost
    */
    /*
        .call HOLDS THE REFERENCE of username variable updated from SetUsername function , i.e,
        correct definition of call-> call passes current Execution context to other function
    */
    /*
        function(this,variable) ensures that the value is updated to our variable
        i.e. we are sending REFERENCE of our variable
    */
    SetUsername.call(this,username);
    this.email=email;
    this.password=password;
}
const om=new createUser("om","om@gmail.com",123);
/*
    without using .call and this,username the OUTPUT was
    createUser {email: 'om@gmail.com', password: 123}
*/
console.log(om); //createUser {username: 'om', email: 'om@gmail.com', password: 123}
