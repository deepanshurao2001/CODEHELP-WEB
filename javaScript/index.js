
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

let rectangleObj1 = createRectangle(1,2);
let rectangleObj2 = createRectangle(5,8);
let rectangleObj3 = createRectangle(2,9);


// constructor function
function Rect(){
    this.length =1;
    this.breadth =2;
    this.draw= function(){
        console.log('Drawing')
    }
}
//object creation using constructor function
let rectangleObject = new Rect();