// let tip;
// const bill=40;


// tip=bill>=50 && bill <=300 ? tip=bill*15/100 : tip =bill*20/100;
// const total =bill + tip;

// console.log(`the bill was ${bill}, the tip was ${tip} and the total is ${total}`)


'use strict';
//const interface='audio';
//const private=534;
//const if=23;


// function logger(){
//     console.log('My name is Jonas');
// }
//calling ,running or invoking the function or executing the function
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//     const juice=`Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice=fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0))

// function calcAge1(birthYear){
//     return 2023-birthYear;

// }
// const age1= calcAge1(1981);





// const calcAge2= function (birthYear){
//     return 2023 -birthYear
// }
// const age2=calcAge2(1981)
// console.log(age1,age2)

// const calcAge2= function (birthYear){
//     return 2023 -birthYear
// }

//Arrow function
// const calcAge3= birthYear=>2023-birthYear;
// const age3=calcAge3(1981);
// console.log(age3);

// const yearsUntilRetirement=(birthYear,firstName)=>{
//     const age=2023-birthYear;
//     const retirement=65-age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1981,'Ali'))

// const cutPieces= function (fruit){
//     return fruit*4;
// }


// function fruitProcessor(apples,oranges){
// const applePieces= cutPieces(apples);
// const orangePieces=cutPieces(oranges)
//     const juice=`Juice with ${applePieces}piece of apples and ${orangePieces} piece of oranges.`
//     return juice;

// }
// console.log(fruitProcessor(2,3));

// const calcAverage=(score1,score2,score3)=>{
//     return (score1+score2+score3)/3
// }

// const scoreDolphins=calcAverage(44,23,71);
// const scoreKoalas=calcAverage(65,54,49)

// const checkWinner=function(avgDolphins,avgKoalas){


//     if(avgDolphins>=2*avgKoalas){
//         console.log(`Dolphins win $ ${avgDolphins} vs ${avgKoalas}`)
//     }else if(avgKoalas>=2*avgDolphins){
//         console.log(`Dolphins win $ ${avgKoalas} vs ${avgDolphins}`)
//     }else{
//         console.log('No one wins')
//     }
// }

// checkWinner(scoreDolphins,scoreKoalas)


// const friends=['Michaek','Steven','Peter'];
// console.log(friends)

// const years=new Array(1991,1984,2008,2020);
// console.log(years)

// console.log(friends[0])
// console.log(friends[2])
// console.log(friends.length)
// console.log(friends[friends.length-1])
// friends[2]='JAY';
// console.log(friends)

// const jonas=['Ali','Tarlaci',2037-1991,'teacher',friends];
// console.log(jonas)

// const friends=['Michaek','Steven','Peter'];
// const newLenght=friends.push('Jay');
// console.log(newLenght)
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// friends.pop();
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends)

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Mark'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Mark'));

// const calcTip=function(bill){
//     return bill >= 50 && bill <= 300 ? bill *0.5 : bill * 0.2;
// }

// const bills=[125,555,44];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(bills,tips)

// const totals=[bills[0] + tips[0],bills[1]+ tips[1],bills[2]+ tips[2]];

// const billDetails=`First bill is ${[bills[0]]} : tip is ${[tips[0]]} and the total is ${totals[0]}

// `;
// console.log(billDetails)
//console.log(bills,tips,totals);


// const jonas={
//     firstName:'Ali',
//     lastName:'Tarlaci',
//     age:2037-1991,
//     job:'QA Engineer',
//     friends:['Michael','Ilyas','Yunus']
// }
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey='Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last'+nameKey]);

// const jonas={
//         firstName:'Ali',
//         lastName:'Tarlaci',
//         birthYear:1991,
//         job:'QA Engineer',
//         friends:['Michael','Ilyas','Yunus'],
//         hasDriverLicence:true,

//  calcAge:function(birthYear){
//     return 2023-birthYear;
// }

// calcAge:function(){
//     console.log(this)
//     return 2023-this.birthYear;
// }
//    calcAge:function(){
//     this.age= 2037-this.birthYear;
//     return this.age;

//    },

//    getSummary:function(){
//     return`${this.firstName} is a ${this.calcAge()} year old ${this.job} , and he has ${this.hasDriverLicence ? 'a' : 'no '} drivers licence`

//    }

// }

// console.log(jonas.calcAge());
// console.log(jonas.age)
// console.log(jonas.getSummary())

//     const mark={
//         fullName:'Mark Miller',
//         mass:78,
//         height:1.69,
//         calBMI:function(){
//             this.bmi=this.mass / this.height ** 2;
//             return this.bmi;
//         }
//     };

//     const john={
//         fullName:'John Smith',
//         mass:92,
//         height:1.95,
//         calBMI:function(){
//             this.bmi=this.mass / this.height ** 2;
//             return this.bmi;
//         }
//     };

//    mark.calBMI();
//    john.calBMI()

//     if(mark.bmi > john.bmi){
//         console.log(`${mark.fullName} 's BMI (${mark.bmi}) is higher than ${john.fullName} 's BMI (${john.bmi})`)
//     }else if(john.bmi > mark.bmi){
//         console.log(`${john.fullName} 's BMI (${john.bmi}) is higher than ${mark.fullName} 's BMI (${mark.bmi})`)
//     }
//     else{
//         console.log('something is not right')
//     }

// for(let rep=1; rep<=10;rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const jonasArray=[
//     'jonas',
//     'Scmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven']

// ]
// const types=[];

// for(let i=0;i<jonasArray.length;i++){
//     console.log(jonasArray[i],typeof jonasArray[i]);
//     //types[i] =typeof jonasArray[i]
//     types.push(typeof jonasArray[i])
// }

// console.log(types)

// const years=[1991,2007,1969,2020];

// const ages=[];

// for(let i=0;i<years.length;i++){
//     ages.push(2037-years[i])
// }
// console.log(ages)

// //continue and break
// console.log('----ONLY STRINGS---')
// for(let i=0;i<jonasArray.length;i++){
//     if(typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i],typeof jonasArray[i]);

// }

// console.log('--Break with number')
// for(let i=0;i<jonasArray.length;i++){
//     if(typeof jonasArray[i] === 'number') break;
//     console.log(jonasArray[i],typeof jonasArray[i]);

// }

// const jonasArray=[
//     'jonas',
//     'Scmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven']
// ];

// for(let i=jonasArray.length-1;i>=0;i--){
//     console.log(jonasArray[i])
// }

// for(let exercise=1;exercise<4;exercise++){
//     console.log(`------starting exercise ${exercise}`)
//     for(let rep=1; rep < 6;rep++){
//         console.log(`Exercise ${exercise} Lifting weights repetition ${rep}`)
//     }
// }


// for(let rep=1;rep<=10;rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }


// let rep=1;
// while(rep<=10){
// console.log(`Lifting weights repetition ${rep}`);
// rep++;
// }

// console.log(`===================================`)

// let dice=Math.trunc(Math.random() * 6) + 1;

// console.log(dice)

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`)
//     dice=Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log(`Loop is about to end`)

// }



// const calcTip=function(bill){
//     return bill >= 50 && bill <= 300 ? bill *0.5 : bill * 0.2;
// }

// const bills=[22,295,176,440,37,105,10,1100,86,52];
// const tips=[];
// const totals=[];

// for(let i=0;i<bills.length;i++){
//     const tip=calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip+bills[i]);
// }

// console.log(bills,tips,totals);

// const calcAverage=function(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }

//     return sum/arr.length
// }

// console.log(calcAverage([2,3,7]));

// console.log(calcAverage(totals))
// console.log(calcAverage(tips))














