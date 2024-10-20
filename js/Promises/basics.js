/* Promise is an OBJECT representing eventual completion or 
    failure of an asynchronus operation.
    It has 3 states : 
        1)pending - initial state, neither fulfilled nor rejected
        2)fulfilled - operation completed successfully
        3)rejected - operation failed
*/
//  CREATING PROMISES (new Promise())
const promiseOne=new Promise(function(resolve,reject){
    // DO AN ASYNC TASK (DB tasks, cryptography, network,etc)
    setTimeout(()=>{
        console.log("Async task is complete");
        resolve(); //to connect to .then
    },1000)
});

// CONSUMING PROMISE (.then)
// .then is related to resolve
promiseOne.then(function(){
    // IT WILL ALWAYS RUN LAST
    console.log("Promise Consumed");
});


new Promise(function(resolve,reject){
    // DO AN ASYNC TASK (DB tasks, cryptography, network,etc)
    setTimeout(()=>{
        console.log("Async task 2 is complete");
        resolve(); //to connect to .then
    },2000)
}).then(function(){
    console.log("Promise 2 Consumed");
});

// SENDING DATA FROM PROMISE CREATION TO PROMISE CONSUMPTION
const promiseThree=new Promise(function(resolve,reject) {
    setTimeout(()=>{
        resolve({name:"om",email:"om@gmail.com"})
    },1000);
});
// ACCESSING DATA THROUGH PROMISE CONSUMPTION
promiseThree.then(function(user){
    console.log(user);    //{name: 'om', email: 'om@gmail.com'}
});

// USING REJECT AND MULTIPLE then (CHAINING)
const promiseFour=new Promise(function(resolve,reject) {
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({name:"om",email:"om@gmail.com"});
        }
        else{
            reject("ERROR: Something went wrong"); //this message is passed to catch
        }
    },1000);
});

//catch() is used for errors/reject
/*IN CHAINING
    VALUE RETURNED BY FIRST then goes to next then    
*/
promiseFour
.then((user)=>{
    console.log(user); //{name: 'om', email: 'om@gmail.com'}
    return user.name; //this is returned to next then
})
.then((username)=>{
    console.log(username); //om
})
.catch(function(error){
    console.log(error); //this gets value from reject()   
})
.finally(()=>{
    //finally is ALWAYS EXECUTED
    console.log("The Promise 4 is either resolved or rejected");    
});

//USING async and await in place of then and catch
/* async and await have problem that they
    DO NOT HANDLE ERRORS(reject()) DIRECTLY
*/
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"123"});
        }else{
            reject("Error: JS went wrong")
        }
    },1000);
});

/*async - wait for work to be done. 
    If failed gives error. 
    If successfull then moves forward
    HERE WE USE try catch block AS IT GIVES ERROR when reject is called
    (async await do not handle errors directly)
*/
async function consumePromiseFive() {
    try {
        //wait for promiseFive
        const response=await promiseFive;
        console.log(response); 
    } catch (error) {
        console.log(error); //gives message written in reject()
    }   
}
consumePromiseFive();


// fetch
/* OUTPUT FROM FETCH WILL COME BEFORE THAN THE PROMISES CREATES ABOVE
    BECAUSE fetch has special HIGH PRIORITY QUEUE / Micro Task Queue whereas the
    ABOVE PROMISES are using setTimeout which uses taskQueue (not high priority)
    The functions in fetch queue will be always be executed BEFORE those in setTimeout 
    when taking same time 
*/
async function getAllUsers() {
    try {
        //fetch returns a promise
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        /*CONVERTING response from String to JSON take time
            so we need to await 
            or there will be NO OUTPUT
        */
        const data=await response.json();
        console.log(data);  
        console.log(data[0]);
        console.log("NAME IS:",data[0].name);
    } catch (error) {
        console.log("E:",error);    
    }  
}
getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    /* 
        response.json takes time so we cannot use it directly but have to wait for it
        if we had merged both then into single then it would NOT GIVE ANY OUTPUT
    */
    return response.json();
})
.then((data)=>{
    console.log(data);
    console.log(data[1]);
    console.log("Next Name is :",data[1].name);
})
.catch((error)=>{
    console.log("E:",error);
});

/*                      IMPORTANT
    Error comes only when network error is encountered ,i.e.
     browser was not able to make request

    A fetch promise DOES NOT REJECT HTTP errors (404,etc)
    It will come as response (then) 
    In such case the then handler should check 
        response.ok and/or response.status properties
*/
//SEE MDN doc for second parameter in fetch()
//SEE VIDEO 41 CHAI OR CODE FROM AROUND 11:00

//SEE VIDEO 41 CHAI OR CODE FROM AROUND 14:00 (IMPORTANT)
/* 
    fetch  - 2 parts
    1)Data- reserves space in memory for the response
        there are 2 arrays onfulfilled[] (for resolve) and onRejection[] (for reject)

    2)WebBrowser/ node native - provides resource for network request
        if response (Even 404 error) is returned then pushed to onfulfilled[]
        if network request fails then pushed to onRejection[]

    3)after this the Data stores the response in memory (where it reserved space)
        and the response is now available to use
*/