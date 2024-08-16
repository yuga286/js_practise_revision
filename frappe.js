
// let persone = {
//     name:"Sanju",
//     age:22,
//     address:{
//         city:"Amrawati",
//         state:"Maharashatra",
//         country:"India"
//     }
// }

// let persone2=persone;

// persone2.age=24

// console.log(persone);
// console.log(persone2);





// let persone = {
//     name:"Sanju",
//     age:22,
//     address:{
//         city:"Amrawati",
//         state:"Maharashatra",
//         country:"India"
//     }
// }

// let persone2 = JSON.stringify(persone);
// let persone3=JSON.parse(persone2)

// persone3.age=24
// persone3.address.city="Akola"

// console.log(persone);
// console.log(persone2);
// console.log(persone3);


// let arr=[1,3,6]
// let arr2=arr
// arr2[2]=400
// console.log(arr);
// console.log(arr2);


// let arr=[1,3,6]
// let arr2=JSON.stringify(arr)
// let arr3=JSON.parse(arr2)
// arr3[2]=400
// console.log(arr);
// console.log(arr2);
// console.log(arr3);


let persone = {
    name:"Sanju",
    age:22,
    address:{
        city:"Amrawati",
        state:"Maharashatra",
        country:"India",
        sayhi:function(){
            console.log("sayhi");
            
        }
    }
}

console.log(persone.address.sayhi());


// let persone2 = JSON.stringify(persone);
// let persone3=JSON.parse(persone2)

// persone3.age=24
// persone3.address.city="Akola"

// console.log(persone);
// console.log(persone2);
// console.log(persone3);

