let oo = [];

let name = prompt("what is your name");
oo.push(name);

let gender;
function lol() {
  while (gender != "male" || gender != "female") {
    gender = prompt("what is your Gender male/female please");
    let issa = gender.toLocaleLowerCase();
    if (issa == "male") {
      alert("Welcome Mr" + `${name}`);
      oo.push(issa);
      break;
    } else if (issa == "female") {
      alert("Welcome Ms" + `${name}`);
      oo.push(issa);

      break;
    }
  }
}
lol();

let age = prompt("push your age");
oo.push(age);
console.log(age);

let drinkType = prompt("do you want hot or cold drink");
oo.push(drinkType);
let drinkName = prompt("what is your drink name");
oo.push(drinkName);

alert("your drink is getting prepared ");

for (let i = 0; i < oo.length; i++) {
  console.log(oo[i]);
}

console.log(
  "name:" + name,
  "gender:" + gender,
  "drinkType:" + drinkType,
  "drinkName:" + drinkName
);

// //Evaluate each of the following Javascript expressions and show the value
// console.log(-9 * 3);
// console.log("“value is “" + 50);
// console.log(17 % 5);
// console.log(5 % 17);
// console.log(5 / 10);
// console.log(4 == 4);
// console.log(4 != 5);
// console.log(7 <= 8);
// console.log(Math.ceil(8.5), Math.floor(8.5));

// // Read a number (using prompt) and display it using alert
// let num = prompt("push the number");
// alert("num=" + num);

// // Q3 : Read in two numbers and display them in ascending order
// let x1 = prompt("num1");
// let x2 = prompt("num2");
// if (x1 < x2) {
//   alert(x1 + "<" + x2);
// } else {
//   alert(x2 + "<" + x1);
// }

// // Q4: Read in two numbers and display the larger
// let c1 = prompt("push the number");
// let c2 = prompt("push another number");

// if (c1 > c2) {
//   alert(c1 +" " + "is larger");
// } else {
//   alert(c2 +" " + "is larger");
// }

// // Q5: Read two numbers and display their sum.  What problem did you encounter?
// let sum1 = prompt("push the number");
// let sum2 = prompt("push another number");

// alert("sum=" + (+sum1 + +sum2));

// // Q6: If you have a “num” variable,  Your task is to print:
// let numbers = prompt("push the number 1-9");
// switch (+numbers) {
//   case 1:
//     alert("ONE");
//     break;

//   case 2:
//     alert("TWO");
//     break;

//   case 3:
//     alert("THREE");
//     break;

//   case 4:
//     alert("FOUR");
//     break;

//   case 5:
//     alert("FIVE");
//     break;

//   case 6:
//     alert("SIX");
//     break;

//   case 7:
//     alert("SEVEN");
//     break;

//   case 8:
//     alert("EIGHT");
//     break;

//   case 9:
//     alert("NINE");
//     break;

//   default:
//     alert("PLEASE TRY AGAIN");
// }

// let input = document.querySelectorAll("form .input");
// let list = document.getElementsByTagName("li");
// let btn = document.getElementsByClassName(".kk");

let hh = document.getElementById("uu");
let div = document.getElementById("ll");
let hhhh = document.getElementById("kk");
function issa() {
  hhh.createElement();
}

let ul = document.createElement("ul");
let p = document.createElement("p");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

div.appendChild(p);
div.appendChild(li2);
div.appendChild(li3);
div.appendChild(li4);

p.innerHTML = ("name", name);
li2.innerHTML = ("gender", gender);
li3.innerHTML = ("age", age);
li4.innerHTML = ("drinkType", drinkType);
