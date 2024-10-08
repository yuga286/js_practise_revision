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

// Enter ATM
// Insert Card - 2 sec
// Enter PIN - 3 sec
// Processing - 5 sec
// Withdraw Money - 2 sec
// Collect Money - 1 sec
// Leave ATM


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



// ########################################################################################################################################

// task using the promises

// A promise is an Object that may produce a single value 
// some time in the future: either a resolved value, 
// or a reason that it’s not resolved (e.g., a network error occurred). 

// A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

// Promise States
// 1. Pending - initial state, neither fulfilled nor rejected.
// 2. Fulfilled - meaning that the operation completed successfully.
// 3. Rejected - meaning that the operation failed.

// Errors -
// 1. Syntax Error
// 2. Runtime Error
// 3. Logical Error
// 4. Network Error


// Syntax - 

// Promise Constructor

// Promise takes a function that is called excuter function

// Promise methods
// 1. then() - it is called when a promise is resolved
// 2. catch() - it is called when a promise is rejected
// 3. finally() - it is called when a promise is settled, i.e. either resolved or rejected


// Make Tea
// 1. Boil Water - 2 min
// 2. Add Sugar - 1 min
// 3. Add Tea Leaves - 1min
// 4. Add Milk - 1min
// 5. Serve Tea

// Make Tea
// 1. Boil Water - 2 min
// 2. Add Sugar - 1 min
// 3. Add Tea Leaves - 1min
// 4. Add Milk - 1min
// 5. Serve Tea

// function boilWater(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res("water is boiling")
//             }
//             else{
//                 rej("water is not boiled")
//             }
//         },2000);
//     })
// }

// function addSugar(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res("add sugar")
//             }
//             else{
//                 rej("sugar is not added")
//             }
//         },1000);
//     })
// }

// function addTeaLeaves(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res("add Tea leaves")
//             }
//             else{
//                 rej("Tea Leaves is not added")
//             }
//         },1000);
//     })
// }


// function addMilk(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res("add Milk")
//             }
//             else{
//                 rej("Milk is not added")
//             }
//         },1000);
//     })
// }

// function serveTea(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res("serve Tea")
//             }
//             else{
//                 rej("can't Serve Tea")
//             }
//         },0);
//     })
// }

// boilWater()
// .then((res)=>{
//     console.log(res)
//     return addSugar();
// })
// .then((res)=>{
//     console.log(res)
//     return addTeaLeaves();
// })
// .then((res)=>{
//     console.log(res)
//     return addMilk();
// })
// .then((res)=>{
//     console.log(res)
//     return serveTea();
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((error) => {
//     console.error("An error occurred:", error);
// })
// .finally(() => {
//     console.log("Thank you for serving the tea.");
// });


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task of async/await

// Make Tea
// 1. Boil Water - 2 min
// 2. Add Sugar - 1 min
// 3. Add Tea Leaves - 1min
// 4. Add Milk - 1min
// 5. Serve Tea

// function boilWater(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res(console.log("water is boiling"))
//             }
//             else{
//                 rej(console.log("water is not boiled"))
//             }
//         },2000);
//     })
// }

// function addSugar(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res(console.log("add sugar"))
//             }
//             else{
//                 rej(console.log("sugar is not added"))
//             }
//         },1000);
//     })
// }

// function addTeaLeaves(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res(console.log("add Tea leaves"))
//             }
//             else{
//                 rej(console.log("Tea Leaves is not added"))
//             }
//         },1000);
//     })
// }


// function addMilk(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res(console.log("add Milk"))
//             }
//             else{
//                 rej(console.log("Milk is not added"))
//             }
//         },1000);
//     })
// }

// function serveTea(){
//     return new Promise((res,rej)=>{
//         let newvar=true
//         setTimeout(()=>{
//             if(newvar){
//                 res(console.log("serve Tea"))
//             }
//             else{
//                 rej(console.log("can't Serve Tea"))
//             }
//         },0);
//     })
// }

// async function makeTea(){
//     await boilWater();
//     await addSugar();
//     await addTeaLeaves();
//     await addMilk();
//     serveTea();
// }

// makeTea();


// ///////////////////////////////////////////////////////////////////////////////////////////////
// fetchAPI

const button = document.getElementById("btn");
        let image = document.getElementById("image");
        let error = document.getElementById("error")
        // console.log(button,"button");

        button.addEventListener("click",()=>{
            fetchData();
        })

        function fetchData(){
           let api = "https://jsonplaceholder.typicode.com/photos/1";

           fetch(api)
              .then((response)=>{
                    console.log(response,"response");
                    // return response.json()
                    console.log(response.json());
                
              })
            //   .then((data)=>{
            //     console.log(data.url,"data");
            //     image.src = data.url;
            //   })
              .catch((error)=>{
                error.innerHtml = error.message;
              })

    
        }


// Preparing for a Birthday Party

// Design Costumes: Takes 2 hours.
// Prepare Treasure Maps: Takes 3 hours.
// Bake Dora Cake: Takes 2 hours.
// Set Up Doraemon Decorations: Takes 2 hours, and this should be done after preparing the treasure maps.
// Arrange Doraemon-Themed Music: Takes 1 hour.
// Prepare Doraemon Lunch: Takes 1 hour, and this should be done after baking the Dora cake.
// Send Invitations to the Friends (Giyan, Suneo, Dekisigi, Shizuka) : Takes 1 hour, but this must be done after designing the costumes.
// Organize Doraemon Games: Takes 1.5 hours, and this should be done after arranging the music.

// function costumes() {
//   return new Promise((res,rej)=>{
//     let cos=true;
//     setTimeout(()=>{
//       if(cos){
//         res(console.log("Design Constumers"))
//       }
//       else{
//         rej(console.log("Design not constumers"))
//       }
//     },2000)
//   })
// }


// function treasureMaps() {
//   return new Promise((res,rej)=>{
//     let cos=true;
//     setTimeout(()=>{
//       if(cos){
//         res(console.log("Treasure Maps are ready"))
//       }
//       else{
//         rej(console.log("Treasure Maps are not ready"))
//       }
//     },3000)
//   })
// }

// function bakeDoraCake() {
//   return new Promise((res,rej)=>{
//     let cos=true;
//     setTimeout(()=>{
//       if(cos){
//         res(console.log("Dora Cakes are ready"))
//       }
//       else{
//         rej(console.log("Dora Cake is not ready"))
//       }
//     },2000)
//   })
// }

// function Decorations() {
//   return new Promise((res,rej)=>{
//     let cos=true;
//     setTimeout(()=>{
//       if(cos){
//         res(console.log("Decorations are ready"))
//       }
//       else{
//         rej(console.log("Decorations are not ready"))
//       }
//     },2000)
//   })
// }

// function DoraemonThemedMusic() {
//   return new Promise((res,rej)=>{
//     let cos=true;
//     setTimeout(()=>{
//       if(cos){
//         res(console.log("Deraemon Themed Music is ready"))
//       }
//       else{
//         rej(console.log("Deraemon Themed Music is not ready"))
//       }
//     },1000)
//   })
// }

// function lunch() {
//   return new Promise((res,rej)=>{
//     let cos=true;
//     setTimeout(()=>{
//       if(cos){
//         res(console.log("Lunch is ready"))
//       }
//       else{
//         rej(console.log("Lunch is not ready"))
//       }
//     },1000)
//   })
// }

// function invitations() {
//   return new Promise((res,rej)=>{
//     let cos=true;
//     setTimeout(()=>{
//       if(cos){
//         res(console.log("Invitation is ready"))
//       }
//       else{
//         rej(console.log("Invitation is not get sended"))
//       }
//     },1000)
//   })
// }

// function games() {
//   return new Promise((res,rej)=>{
//     let cos=true;
//     setTimeout(()=>{
//       if(cos){
//         res(console.log("Games is ready"))
//       }
//       else{
//         rej(console.log("Games is not ready"))
//       }
//     },1500)
//   })
// }

// async function party(){
//   await costumes();
//   await invitations();
//   await treasureMaps();
//   await Decorations();
//   await bakeDoraCake();
//   await lunch();
//   await DoraemonThemedMusic();
//   games();
// }

// party()