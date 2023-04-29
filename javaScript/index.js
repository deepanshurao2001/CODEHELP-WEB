
console.log('jai Shree Ram!!')
var a=100;
console.log(a);
a=120;
console.log(a)
let firstName='Deepanshu';
console.log(firstName);

firstName = 3;
console.log(firstName);
let num=1;
let str='1';
console.log(num == str);
console.log(num === str);

let num1=1;
let str1=1;
console.log(num1 == str1);
console.log(num1 === str1);

 let rectangle1 = {
     length: 9,
     bredth: 4,

     draw: function() {
         console.log(this.length*this.bredth);
     }


 }
 

//factor function
function createRectangle(len,bre){
    return rectangle={
        length: len,
        breadth: bre,

        draw(){
            console.log(this.length*this.breadth);
        }
    };
}
Rect.name;
let rectangleObj1 = createRectangle(1,2);
let rectangleObj2 = createRectangle(5,8);
let rectangleObj3 = createRectangle(2,9);


// constructor function
function Rect(len,bre){
    this.length =len;
    this.breadth =bre;
    this.draw= function(){
        console.log('Drawing')
    }
}
//object creation using constructor function
let rectangleObject = new Rect(6,9);
rectangleObject.color = 'yellow';
console.log(rectangleObject);
delete rectangleObject.color;
console.log(rectangleObject);

let c=10;
function inc(c) {
    c++
}
inc(c);
console.log(c);

let d= {value:10};
function inc(d) {
    d.value++;
}
inc(d);
console.log(d.value);

let rectangle3 ={
    length:2,
    breadth:4,
};

//for-in loop
for(let key in rectangle3){
    //keys are reflected through key variable
    //values are reflected through rectangle[key]

    console.log(key,rectangle3[key]);
}

// for-of loop
for(let key of Object.entries(rectangle3)){
    console.log(key);
}

if('color' in rectangle3){
    console.log('present');
}
else{
    console.log('Absent');
}
if('length' in rectangle3){
    console.log('present');
}
else{
    console.log('Absent');
}


let src= {
    a:10,
    b:20,
    c:30
};
let dest = {};

for(let key in src){
    dest[key]=src[key];
}
console.log(src);
console.log(dest);
src.a++;
console.log(src);
console.log(dest);

let src1={
    x:10,
    y:20,
    z:30
};
let src2= {value:33};
let dest2 = Object.assign({},src1,src2);
console.log(dest2)

src.x++;
console.log(src1);
console.log(dest2);


let src3 ={
    q:2, 
    w:3,
    e:4
};

let dest4 = {...src3};
console.log(dest4);
src3.q++;
console.log(src3);
console.log(dest4);



// let number = [10,20,30,40,50];
// console.log(number)
// const joined = number.join(',');
// console.log(joined);

let message = 'this is my first message';
let parts = message.split(' ');
console.log(parts);

let joined = parts.join('_');

console.log(joined);

let numbers = [50,30,10,20,40];
numbers.sort();

console.log(numbers);
