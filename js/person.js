function showPerson(fname, lname, age) {
  var person = {
    firstName: fname,
    lastName: lname,
    age: age,
  };

  document.getElementById("result").innerHTML =
    person.firstName +
    " " +
    person.lastName +
    " is " +
    person.age +
    " years old.";
}
