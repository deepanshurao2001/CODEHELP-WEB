// //adding 100 para
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;
//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took " + (t2-t1) + " ms");





// //optimising a bit 
// const t3 = performance.now();
// let myDiv = document.createElement('div'); 

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para' + i;
//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took " + (t4-t3) + " ms");

//using document fragment

// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//         let newElement = document.createElement('p');
//         newElement.textContent = 'this is para' + i;
//         fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);

//single threading

// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = 'Js is Single';
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent = 'Kya haal Chaal';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

// //event loop

// console.log('Hi!');
// document.addEventListener('click', function(){
//     console.log('hello DiDi');
// });

// console.log("Welcome to Event loop");


//setTimeout
console.log("Hi!")

setTimeout(function timeout() {
    console.log('Hello Everyone');
},5000);

console.log("Welcome to SetTime out");