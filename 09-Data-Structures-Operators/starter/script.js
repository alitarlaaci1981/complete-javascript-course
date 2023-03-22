'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },
  order:function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },
  orderDelivery:function({starterIndex,mainIndex,time,address}){
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },
  orderPasta:function(ing1,ing2,ing3){
    console.log(`here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza:function(mainIngredient,...otherIngredients){
    console.log(`Main ingredient is ${mainIngredient}`);
    console.log(`other ingredients are ${otherIngredients}`);
  }
};


const rest1={
  name:'capri',
  numGuest:20,
}

const rest2={
  name:'La piazza',
  owner:'Giovanni Rossi'
}

// rest1.numGuest=rest1.numGuest || 10;
// rest2.numGuest=rest2.numGuest || 10;
rest1.numGuest ||=10;
rest1.numGuest ||=10;

console.log(rest1);
console.log(rest2)



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







  

