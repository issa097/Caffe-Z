let name = prompt("your name");

let gender = prompt("mal , female ");

if (gender == "mal") {
  alert("Welcome Mr" + `${name}`);
} else if (name == "female") {
  alert("wELCOM Mrs" + `${name}`);
} else {
  alert("wlcome");
}
let drink = prompt("cpld , hot");
let drinkss = prompt("what is the dirnk");
let drinks = alert("prepared");

console.log(
  "name:" + name,
  "gender:" + gender,
  "drink:" + drink,
  "drinkss:" + drinkss
);

console.log(-9 * 3);
console.log("“value is “" + 50);
console.log(17 % 5);
console.log(5 % 17);
console.log(5 / 10);
console.log(4 == 4);
console.log(4 != 5);
console.log(7 <= 8);
console.log(Math.ceil(8.5), Math.floor(8.5));

let num = prompt("push the number");
alert("num=" + num);

let x1 = prompt("num1");
let x2 = prompt("num2");
if (x1 < x2) {
  alert(x1 + "<" + x2);
} else {
  alert(x2 + "<" + x1);
}

let c1 = prompt("push the number");
let c2 = prompt("push the number");

if (c1 > c2) {
  alert(c1 + "larger");
} else {
  alert(c2 + "larger");
}

let sum1 = prompt("push the number");
let sum2 = prompt("push the number");

alert(+sum1 + +sum2);

let numbers = prompt("push the number 1-9");
switch (+numbers) {
  case 1:
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;

  case 4:
    alert("FOUR");
    break;

  case 5:
    alert("FIVE");
    break;

  case 6:
    alert("SIX");
    break;

  case 7:
    alert("SEVEN");
    break;

  case 8:
    alert("EIGHT");
    break;

  case 9:
    alert("NINE");
    break;

  default:
    alert("PLEASE TRY AGAIN");
}


