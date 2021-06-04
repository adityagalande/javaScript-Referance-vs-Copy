const player = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = player;

// console.log(player);
// console.log(team);
//
// team[3] = "TIM";
//
// console.log(player);
// console.log(team);

// OUTPUT -->

// (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:6 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:10 (4) ["Wes", "Sarah", "Ryan", "TIM"]
// index.js:11 (4) ["Wes", "Sarah", "Ryan", "TIM"]

// ----------------------------------------------------------------
const team2 = player.slice();

// console.log(player);
// console.log(team2);
//
// team2[3] = "Yudi";
//
// console.log(player);
// console.log(team2);


// OUTPUT -->

// index.js:01 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:17 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:21 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:22 (4) ["Wes", "Sarah", "Ryan", "Yudi"]


// ----------------------------------------------------------------

const team3 = [].concat(player);

// console.log(player);
// console.log(team3);
//
// team3[3] = "Amit";
//
// console.log(player);
// console.log(team3);

// OUTPUT -->

// 4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:45 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:49 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:50 (4) ["Wes", "Sarah", "Ryan", "Amit"]

// --------------------------------------------------------------------

const team4 = [...player];


// console.log(player);
// console.log(team4);
//
// team4[3] = "Rob";
//
// console.log(player);
// console.log(team4);

// OUTPUT -->

// index.js:64 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:65 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:69 (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// index.js:70 (4) ["Wes", "Sarah", "Ryan", "Rob"]

// ---------------------------------------------------------------------

// .......................................................................................

// --------------------------------OBJECTS------------------------------

const person = {
  name: 'Wes Bos',
  age: 80,
  year: {
    one: 2020
  }
};

const wes = Object.assign({}, person);

console.log(person);
console.log(wes);

wes.name = "Aditya";

console.log(person);
console.log(wes);

// OUTPUT -->


﻿
// index.js:95 {name: "Wes Bos", age: 80, year: {…}}
// index.js:96 {name: "Wes Bos", age: 80, year: {…}}
// index.js:100 {name: "Wes Bos", age: 80, year: {…}}
// index.js:101 {name: "Aditya", age: 80, year: {…}}
