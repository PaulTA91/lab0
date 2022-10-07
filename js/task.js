console.log("Task A");

var team = {
  teamname: "McLaren",
  base: "Working",
  principal: "Andreas Seidl",
  drivers: [
    {
      name: "Daniel Rocciardo",
      dob: new Date(1989, 8, 1),
      points: [25, 18, 0, 25, 25],
    },
    {
      name: "Lando Norris",
      dob: new Date(1999, 10, 13),
      points: [12, 10, 25, 8, 10],
    },
  ],
};

console.log(JSON.stringify(team.drivers[0].points, null, 0));

totaPoints();

function totaPoints() {
  let sum =
    team.drivers[0].points.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }) +
    team.drivers[1].points.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
  console.log("Total team points: " + sum);
}
// function totaPoints() {
//   let sum = calculateDriverPoints(0) + calculateDriverPoints(1);
//   console.log(sum);
// }

// function calculateDriverPoints(x) {
//   team.drivers[x].points.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue;
//   });
// }

let { teamname, base } = team;
console.log(teamname + ", " + base);

let lando = team.drivers[1];

console.log(lando);

console.log("Task B");

var myArray = [1, 3, 1, 7, 9];
console.log(myArray);
console.log(myArray[1]);
console.log(myArray.length);
var sorted = myArray.sort(function (a, b) {
  return a - b;
});
console.log(sorted);
var reversed = myArray.sort(function (a, b) {
  return b - a;
});
console.log(reversed);
console.log(myArray);
console.log("7 at index " + myArray.indexOf(7));
myArray.pop();
console.log(myArray);
var index = myArray.indexOf(9);
myArray.splice(index, 1);
console.log(myArray);
myArray = [1, 3, 1, 7, 9];
let filtered = myArray.filter((c) => c < 6);
console.log(filtered);
console.log(myArray);
let squared = myArray.map((c) => c ** 2); //iterates through array and applies function to each item?
console.log(squared);
let question4 = myArray.map((x) => x + 3);
console.log(question4);
let pairs = myArray.map((x) => [x, String.fromCharCode(x + 64)]); //returns an array of arrays
console.log(pairs);
let max = myArray.reduce(function (a, b) {
  return Math.max(a, b);
});
console.log(max);
let pairs2 = myArray.flatMap((x) => [x, String.fromCharCode(x + 64)]); //same result as .map() but flattened into a single array
console.log(pairs2);
console.log("Challenge");
let coords = [
  [0, 1],
  [3, 4],
  [-5, 12],
  [2, 2],
];

let distances = coords.reduce(function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
});

console.log(distances);
