// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// 

// const calcTempAplitude=function(temps){
// let max=temps[0]
// let min=temps[0]
// for(let i=0;i<temps.length;i++){
//     const curTemp=temps[i]
// if(typeof curTemp !== 'number') continue;
// if(curTemp >max) max=curTemp;
// if(curTemp <min) min=curTemp;
// }
// console.log(max,min);
// return max-min

// }

// const aplitude= calcTempAplitude([3,7,4,24,'error',-6])
// console.log(aplitude);

//problem 2;
// Function now receive 2 arrays of temps

// const measureKelvin=function(){
//     const measurement={
//         type:'temp',
//         unit:'celcius',
//         value: Number(prompt('Degrees celcius'))
//     }

//     const kelvin=measurement.value +273;
//     return kelvin;
// }
// debugger;
// console.log(measureKelvin());


const data1=[17,21,23];
const data2=[12,5,-5,0,4];

const printForecast=function(arr){
    let str='';

    for(let i=0;i<arr.length;i++){
      str=str+`${arr[i]}ºC in ${i + 1} days... `
    }
    console.log('...' + str);
}

printForecast(data1)
