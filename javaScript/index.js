
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
function createRectangle(){
    return rectangle={
        length: 1,
        breadth: 2,

        draw(){
            console.log('drawing rectangle');
        }
    };
}

let rectangleObj1 = createRectangle();