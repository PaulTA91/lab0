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

const myArray = [1, 3, 1, 7, 9];
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
