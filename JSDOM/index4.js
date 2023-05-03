// let first = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('SetTimeout1 started')
//     }, 2000);
//     resolve(true);
// })

// let output=first.then(() => {
//     let second = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('SetTimeout2 started');
//         }, 3000);
//         resolve("SetTimeout2 resolved");
//     })
//     return second;
// });
// output.then((value) =>  console.log(value));

// async function abcd(){
//     return "HELLO";
// }
// console.log(abcd())


// async function utility() {

// let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve("Delhi is Hot"); 
//     }, 5000);
// });

// let hydMausam = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("Hydrabad is cool");
//     },6000);
// });

// let dM = await delhiMausam;
// let hM = await hydMausam;

// return [dM, hM];

// }

