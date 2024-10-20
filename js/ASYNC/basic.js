/* JAVASCRIPT IS SYNCHRONOUS AND SINGLE-THREADED (everything executed on single thread)*/

/* EXECUTION CONTEXT
    execute ONE LINE of code at a time
    EACH OPERATION WAITS FOR LAST ONE TO COMPLETE BEFORE EXECUTION
*/

/* BLOCKING CODE
    BLOCK THE FLOW OF PROGRAM (eg- READ FILE SYNC - (wait till I read the file))
*/

/* NON-BLOCKING CODE
    DO NOT BLOCK EXECUTION (eg- READ FILE ASYNC - (do other work till I read the file))
*/

/* SEE VIDEO NO 37 FOR DIAGRAM and INTRODUCTION FOR 
    set timeout, register callback, taskQueue, setInterval, fetch(), promises,
    High Priority Queue/Promise Queue
*/   

//OUTPUT - 1 3 2
// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// },0);
// console.log(3);

