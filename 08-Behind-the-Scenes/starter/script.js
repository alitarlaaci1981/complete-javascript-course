'use strict';

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));



// function addDecl(a,b){
//     return a+b;
// }

// const addExpr=function(a,b){
//     return a+b;
// }

// const addArrow=(a,b)=> a+b;

//example
// if(!numProducts) deleteShoppingCart()

// const numProducts=10;

// function deleteShoppingCart(){
//     console.log('All products deleted!')
// }

// var x=1;
// let y=2;
// const z=3;

// console.log(x === window.x)
// console.log(y === window.y);
// console.log(z === window.z);


//console.log(this);
// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this)
// }
// calcAge(1991)


// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//  console.log(this);
// };
// calcAgeArrow(1980)

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year)
//     }
// }
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f=jonas.calcAge;
// f();

// const jonas = {
//     firstName:'Jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year)
//         const isMillenial=function(){
//             console.log(this.year>=1981 && this.year<=1996)
//         };
//         isMillenial();
//     },
//     greet:()=>console.log(`Hey ${this.firstName}`),
// }
// jonas.greet();
// jonas.calcAge();

// let age =30;
// let oldAge=age;
// age=31;
// console.log(age);
// console.log(oldAge);
let lastName='williams';
let oldLastName=lastName;
lastName='davis'
console.log(lastName,oldLastName);

const jessica={
    firstName:'jessica',
    lastName:'Williams',
    age:27
}
const marriedJessica=jessica;
marriedJessica.lastName='davis';
console.log(`Before Marriage: ${jessica.lastName}`);
console.log(`After Marriage : ${marriedJessica.lastName}`);
