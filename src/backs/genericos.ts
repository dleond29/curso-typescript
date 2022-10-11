// // import { Hero } from './classes/Hero';
// // // import * as HeroClasses from './classes/Hero';
// // // import powers from './data/powers';
// import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';

import { genericFunctionArrow } from "../generics/generics"
import { Villian, Hero } from "../interfaces";


// // // console.log('Hola Mundo!');

// // // const Hero = 123;

// // const ironman = new Hero('Ironman', 1, 55);

// // console.log(ironman);
// // console.log(ironman.power)


// // printObject(123);
// // printObject(new Date());
// // printObject({a:1, b:2, c:3});
// // printObject('Hola mundo!');

// const name: string = 'Diego';
// console.log(genericFunctionArrow(123.123).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);
