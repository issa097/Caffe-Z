let oo = [];

let name = prompt("what is your name");
oo.push(name);

let gender;
function lol() {
  while (gender != "male" || gender != "female") {
    gender = prompt(" Gender male/female please");
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

// let age = prompt("push your age");
// oo.push(age);
// console.log(age);

// let drinkType = prompt("do you want hot or cold drink");
// oo.push(drinkType);
// let drinkName = prompt("what is your drink name");
// oo.push(drinkName);

// alert("your drink is getting prepared ");

// for (let i = 0; i < oo.length; i++) {
//   console.log(oo[i]);
// }

// console.log(
//   "name:" + name,
//   "gender:" + gender,
//   "drinkType:" + drinkType,
//   "drinkName:" + drinkName
// );

// let div = document.getElementById("ll");
// let p = document.createElement("p");

// let ul = document.createElement("ul");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// let li4 = document.createElement("li");
// let li5 = document.createElement("li");
// div.appendChild(p);
// div.appendChild(ul);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);

// p.innerHTML = "name" + name;
// li2.innerHTML = "gender" + gender;
// li3.innerHTML = "age" + age;
// li4.innerHTML = "drinkType" + drinkType;

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

let form = document.getElementById("issa");
let label = document.createElement("label");
let input1 = document.createElement("input");
form.appendChild(label);
form.appendChild(input1);

let label2 = document.createElement("label");
let input2 = document.createElement("input");
form.appendChild(label2);
form.appendChild(input2);

let label3 = document.createElement("label");
let input3 = document.createElement("input");
input3.type = "number";
form.appendChild(label3);
form.appendChild(input3);

let label4 = document.createElement("label");
let checkbox = document.createElement("input");
let checkbox1 = document.createElement("input");
form.appendChild(label4);
form.appendChild(checkbox);
checkbox.type = "checkbox";

form.appendChild(checkbox1);
checkbox1.type = "checkbox";
let btn = document.createElement("button");
form.append(btn);

label.innerHTML = "name";
input1.innerHTML = "input";

label2.innerHTML = "gender";
input2.innerHTML = "input";

label3.innerHTML = "age";
input3.innerHTML = "input";

label4.innerHTML = "Drink";

btn.innerText = "login";

// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let btn = document.getElementById("button");
// let input4 = document.getElementById("input4");
// let input5 = document.getElementById("input5");
let btn = document.getElementById("btn");

btn.onclick = function (e) {
  p.innerHTML += input1.value;
  li2.textContent += input2.value;
  li3.textContent += input3.value;
  // li4.textContent += input4.value;

  e.preventDefault();
};

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.width = "25%";
