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


// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(content);
// }
// utility();
// async function helper(){

// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Deepanshu',
//         body: 'Programmer',
//         userId: 2001,
//         weight: 85,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// };

// let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
// let response = content.json();
// return response;
// }


// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }

// utility();
   


// Closure function

function outer(){
    let a =5;
    function inner1(){
        let a=3;
        console.log(a);
        function inner2(){
            let a=7;
            console.log(a);

            function inner3(){
                let a= 10;
                console.log(a);
            }
            return inner3();
        }
        return inner2();
    }
    return inner1();
}