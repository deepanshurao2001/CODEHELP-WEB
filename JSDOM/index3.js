// console.log("Deepanshu Here");

// setTimeout(function() {
//     console.log('Third');
// },3000);

// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

let mePromise = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('I am inside Promise');
    }, 5000);
   // resolve(223323423432);
   reject(new Error('Here is an Error '))
});
mePromise.then((value)=> { console.log(value)}, (error)=>{console.log("Recieved an Error")});
console.log('pehla');