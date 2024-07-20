// Callback -
// A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.

// syncronous programming
// it run code from top to bottom, line by line


// Hotel enter
// order food
// wait for food - food is preparing - 10 min
// food is ready - delivered to the table - 5 min
// eating food - 15 min
// payment - 3 min
// leave hotel

//  task using the setTimeout
 
// Enter ATM
// Insert Card - 2 sec
// Enter PIN - 3 sec
// Processing - 5 sec
// Withdraw Money - 2 sec
// Collect Money - 1 sec
// Leave ATM

// console.log("Enter ATM")
// setTimeout(()=>{
//     console.log("Insert Card")
// },2000);
// setTimeout(()=>{
//     console.log("Enter pin")
// },3000);
// setTimeout(()=>{
//     console.log("Processing")
//     setTimeout(fun, 2000);
// },5000);
// function fun() {
//   console.log("Withdraw Money");
//   setTimeout(fun2, 1000);
// }

// function fun2() {
//   console.log("Collect Money");
//   setTimeout(fun3, 0);
// }

// function fun3() {
//   console.log("Leave ATM");
// }


// // Make Tea
// // Boil Water
// // Add Sugar, Tea Powder, Milk - 5 min
// // Boil - 5 min
// // Serve - 1 min

// console.log("Make Tea")
// console.log("Boil Water")
// setTimeout(()=>{
//     console.log("Add Sugar, Tea Powder, Milk")
//     setTimeout(fun,5000)
// },5000)
// function fun(){
//     console.log("Boil")
//     setTimeout(fun2,1000)
// }

// function fun2(){
//     console.log("Serve")
// }




// //  Higher Order Function: A function that accepts a function as an argument and/or returns a function as its value. Callback Function: A function that's passed as a argument to another function.
// class Demo{
//     name="ver";
//     age=23;
//     job="developer"
//     constructor(){
//         console.log("It is a constructor")
//     }
// }

// class New extends Demo{
//     salary=50000;
    
//     constructor(){
//         console.log("It is a sub class constructor");
//         super()
//     }
    
// }
// let a=new Demo();
// let b=new New();


// task using promises

////////////////////////////////////////////////////////////////////////////////////////////////////
// function enterATM(callback) {
//   console.log("Enter ATM");
//   setTimeout(callback,2000);
// }
// function insertCard(callback) {
//   console.log("Insert Card");
//   setTimeout(callback, 3000);
// }

// function enterPIN(callback) {
//   console.log("Enter PIN");
//   setTimeout(callback, 5000); 
// }

// function processing(callback) {
//   console.log("Processing");
//   setTimeout(callback, 2000); 
// }

// function withdrawMoney(callback) {
//   console.log("Withdraw Money");
//   setTimeout(callback, 1000); 
// }

// function collectMoney(callback) {
//   console.log("Collect Money");
//   setTimeout(callback, 0);
// }

// function leaveATM() {
//   console.log("Leave ATM");
// }

// enterATM(()=>{
//     insertCard(()=>{
//         enterPIN(()=>{
//             processing(()=>{
//                 withdrawMoney(()=>{
//                     collectMoney(()=>{
//                         leaveATM()
//                     })
//                 })
//             })
//         })
//     })
// })
