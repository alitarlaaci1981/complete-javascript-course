'use strict';
//const fetch = require('node-fetch')
import fetch from 'node-fetch';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const heading=document.getElementById('my-heading');
// const paragraph=document.getElementById('my-paragraph')
//paragraph.textContent="my new paragraph"
//heading.textContent="welcome to my new element"


// Data needed for first part of the section
const weekdays=['mon','tue','wed','thu','fri','sat','sun'];
const openingHours= {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //es6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },



  orderDelivery({starterIndex,mainIndex,time,address}){
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },
  orderPasta(ing1,ing2,ing3){
    console.log(`here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza(mainIngredient,...otherIngredients){
    console.log(`Main ingredient is ${mainIngredient}`);
    console.log(`other ingredients are ${otherIngredients}`);
  }
};

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schedman'.split(' '));
const [firstName,lastName]='Jonas Schmedtmann'.split(' ')
//const { default: fetch } = import('node-fetch');

async function generateRandomPhoneNumber() {
  try {
    const response = await fetch('https://randommer.io/api/Phone/Generate?CountryCode=US&Quantity=1', {
      headers: {
        'X-Api-Key': '14cf32f28c54405e9aca8227164186ce'
      }
    });

    const data = await response.json();
    console.log(data[0].PhoneNumber);
  } catch (error) {
    console.log(error);
  }
}

generateRandomPhoneNumber();

  

  



// const plane='A320';
// console.log(airline.slice(4));
// console.log(airline.slice(4,7))
// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1))
// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// const checkMiddleSeat=function(seat){
//   //b and e middle seat
//   const s=seat.slice(-1);
//   if (s==='B' || s==='E'){
//     console.log('You got the middle seat')
//   }
//   else{
//     console.log('You got lucky')
//   }

// }
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')





// const ordersSet=new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza'])
// console.log(ordersSet);
// for(const day of Object.keys(openingHours)){
//   console.log(day)
// }

// const values=Object.values(openingHours);
// console.log(values);

// //entire object
// const entries= Object.entries(openingHours);
// //console.log(entries)
// for(const [key,{open,close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }



// if(restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

//with optional chaining
// console.log(restaurant.openingHours.mon?.open);





// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// for(const item of menu){
//   console.log(item)
// };

// for(const [i,el] of menu.entries()){
//   console.log(`${i+1}: ${el}`)
// }
//console.log(...menu.entries())















// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// //how to conver this set into a new array
// const events=[...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);






// const question=new Map([
//   ['question','what is the best programming language int he world'],
//   [1,'C'],
//   [2,'Java'],
//   [3,'JavaScript'],
//   ['correct',3],
//   [true,'Correct'],
//   [false,'try again!']
// ])

// console.log(question);
// console.log(question.get('question'));
// for(const [key,value] of question){
//   if(typeof key === 'number'){
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer=Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//convert map to array

//console.log(...question);



// const rest=new Map();
// rest.set('name','Classico Italiano');
// rest.set(1,'Florance,italy');
// rest.set(2,'Lisbon,Portugal');
// console.log(rest);

// rest
// .set('caregories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open',11)
// .set('close',23)
// .set(true,'We are open:D')
// .set(false,'We are closed :(');
// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time=21;
// let stat=rest.get(time>rest.get('open') && time < rest.get('close'));
// console.log(stat);

// console.log(rest.has('caregories'));
// rest.delete(2);
// rest.set([1,2],'test')

// console.log(rest);

// console.log(rest.size);

// console.log(res.get([1,2]));





















// const orderSet=new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza'
// ]);
// console.log(orderSet);

// console.log(new Set('jonas'))
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// console.log(orderSet);
//  orderSet.clear();
// for(const order of orderSet){
//   console.log(order);
// };

// example
// const staff=['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
// const staffUnique=[...new Set(staff)];
// console.log(staffUnique);





// const properties=Object.keys( restaurant.openingHours);
// console.log(properties);
//  let openStr=`We are open on ${properties.length} days: `;
//  for(const day of properties){
//   openStr+=`${day}, `;
//  }
//  console.log(openStr);

 //Property values;
//  const values=Object.values(restaurant.openingHours);
//  console.log(values);

 //entire object
 //const entries= Object.entries(restaurant.openingHours);
// console.log(entries);

//  for(const [key,{open,close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
//  }


// const rest1={
//   name:'capri',
//   numGuest:20,
// }

// const rest2={
//   name:'La piazza',
//   owner:'Giovanni Rossi'
// }

// rest1.numGuest=rest1.numGuest || 10;
// rest2.numGuest=rest2.numGuest || 10;
// rest1.numGuest ||=10;
// rest1.numGuest ||=10;

// console.log(rest1);
// console.log(rest2)



// restaurant.numGuest=0
// const guest=restaurant.numGuest || 10;
// console.log(guest)

// const guestCorrect=restaurant.numGuest ?? 10;
// console.log(guestCorrect)

// FIRST truthy value will be printed in the console. javascript engine will not at the second value or other values
// console.log(3 ||'David');
// console.log(''|| 'David');
// console.log(true || 0);
// console.log(undefined || null);


// restaurant.numGuest=23;
// const guest1= restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1)
// const guest2= restaurant.numGuest || 10;
// console.log(guest2)

// console.log('-----AND-------');

// console.log(0&&'jonas');
// console.log(7 && 'jonas');
// console.log('hello' && 23 && null && 'jonas');

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms','spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach')














// const add=function(...numbers){
//   let sum=0;
//   for(let i=0;i<numbers.length;i++){
//     sum+=numbers[i];
//   }
//   console.log(sum)
  
// }

// add(4,4,5)

// const x=[23,5,7];
// add(...x)

// restaurant.orderPizza('mushrooms','onions','olives','spinach');





//const arr=[7,8,9];
//const newArr=[1,2,arr[0]]
//console.log(newArr)

//const goodArr=[1,2,...arr];
//console.log(goodArr)

//console.log(...newArr);


//const newMenu=[...restaurant.mainMenu,'Gnocci','lasagna'];
//console.log(newMenu);

//coppy array

//const mainMenucopy=[...restaurant.mainMenu];
//const menu=[...restaurant.mainMenu,...restaurant.starterMenu]
//console.log(menu)
//spread operator with real work examples
//const ingredients=[
  // prompt("Let\s make pasta! Ingredient 1?"),
  // prompt("Let\s make pasta! Ingredient 2?"),
  // prompt("Let\s make pasta! Ingredient 3?")
//]
//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

//Objects

// const newRestaurant={...restaurant,founder:"giuseppe",founding:19981}
// console.log(newRestaurant)

// const restaurantCopy={...restaurant};
// restaurantCopy.name='Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);






// restaurant.orderDelivery({
//   time:'23:39',
//   address:'via del sole,21',
//   mainIndex:2,
//   starterIndex:2,
// })



// const {name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);

// const {
//   name:restName,
//   openingHours:hours,
//   categories:tags}
//   =restaurant;
// console.log(restName,hours,tags)

// const{menu=[],starterMenu:starter=[]}=restaurant;
// console.log(menu,starter);

// //mutating a variables

// //nested objects
// const {fri:{open,close}}=openingHours;
// console.log(open,close);







  

