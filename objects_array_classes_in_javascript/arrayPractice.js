//* create an array containing different type of teas.
let teas = [
  "Green tea",
  "Oolong tea",
  "Black tea",
  "Earl Grey",
  "White tea",
  "Harbal tea",
];

//* Add "chamomila Tea" to the existing list of teas.
teas.push("chamomila Tea");

//* Remove "Oolong tea" from the list of teas.
// const index = teas.filter((item) => item !== "Oolong tea");

const index = teas.indexOf("Oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}

//* Filter the list to only include teas that are caffeinated.
// console.log(teas);
const caffeinatedTea = teas.filter((tea) => tea !== "Harbal tea");
// console.log(caffeinatedTea);

//* Sort the list of teas in alphabetial Order
const arraySort = teas.sort();
// console.log(arraySort);

//* Use a for loop to paint each type of tea in the array
for (const tea of teas) {
  //   console.log(tea);
}

//* Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
let loop = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Harbal tea") {
    loop++;
  }
}

// console.log(loop);

//* Use a for loop to create a new array with all tea names in uppercase.
let newArray = [];
for (let i = 0; i < teas.length; i++) {
  const value = teas[i].toUpperCase();
  newArray.push(value);
}

// console.log(newArray);

//* Use a for loop to find the tea name with the most characters
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}
// console.log(longestTea);

//* use a for loop to reverse the order of teas in the array
// console.log(teas);
let arrayReverse = [];
for (let i = teas.length - 1; i >= 0; i--) {
  arrayReverse.push(teas[i]);
}

console.log(arrayReverse);
