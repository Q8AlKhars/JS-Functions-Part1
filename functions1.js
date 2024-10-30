function printName() {
  console.log("Dante");
}
printName();

function printAge(birthYear) {
  let currentYear = new Date().getFullYear();
  let Age = currentYear - birthYear;
  // console.log("Your Age is: ",Age );
  console.log(`your Age is: ${Age}`);
}
printAge(1888);

function printAgeAndName(birthYear, name) {
  let currentYear = new Date().getFullYear();
  let Age = currentYear - birthYear;
  console.log(`Hello ${name} you are ${Age} years old`);
}
printAgeAndName(1888, "Dante");

function printHello(name, language) {
  if (language === "en") {
    console.log(`Hello ${name}`);
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}
printHello("Dante", "en");
printHello("Dante", "es");
printHello("Dante", "fr");
printHello("Dante", "tr");

function printMax(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else {
    console.log(number2);
  }
}
printMax(88, 80);
