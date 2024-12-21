//chapter 4
//q1
// var x = 1, y = 2, z = 3;
//q2
// legal
//var one;
//var two;
// var $three;
// var _four;
//var isUserLoggedIn;
//illegal
// var 1one;
// var t w o;
// var three-three;
// var
// var @five
// q3
// document.write("“Rules for naming JS variables”"+`Variable names can only contain${'_tempValue'},${'$price'},${'isUserLoggedIn'}and ${'age1'}.`)
// q4
// document.write(`Variables must begin with a ${" $name"},${" _name"} or ${"name"}`)
// q5
// document.write("Variable names are case sensitive")
// q6
// document.write(" Variable names should not be JS keyword")
//chapter 5
//q1
// let x =+prompt("enter a  first num ")
// let y =+prompt("enter a second num ")
// let oprater= prompt("enter a operator ")
// let result = x+y;
// document.write(`sum of ${x} and ${y} is ${result}`)
// q2

// if(oprater=="-"){
//     result=x-y;
// }
// if(oprater=="/"){
//     result=x/y;
// }
// if(oprater=="*"){
//     result=x*y;
// }
// if(oprater=="%"){
//     result=x%y;
// }
// if(oprater==" "){
//     alert("bhai sign tu daal")
// }
// if(x==" "||y==" "){
//     alert("bhai number tu daal")
// }

// document.write(`${x} ${oprater} ${y} is ${result}`)
//q3
// let x;
// document.write(` “Value after variable declaration is:${x}” <br>`)
// x=5;
// document.write(` “Initial value:${x}” <br>`)
// x++
// document.write(` “Value after increment is:${x}”  <br>`)
// x +=7
// document.write(` “Value after add 7 is:${x}”  <br>`)
// --x
// document.write(`“Value after decrement is: ${x}”<br> `)
//  x %=12
//  document.write(` “The remainder is : ${x}”.`)
// q4
// let movieTicket=600
// document.write(`per person ticket is ${movieTicket} <br>`)
// movieTicket *=5;
// document.write(`total cost of buy 5 ticket to a movie is ${movieTicket}`)
// q5
// let x = 4 * 1;
// document.write(`4x1=${x} <br>`)
// x = 4 * 2;
// document.write(`4x2=${x} <br>`)
// x = 4 * 3;
// document.write(`4x3=${x} <br>`)
// x = 4 * 4;
// document.write(`4x4=${x} <br>`)
// x = 4 * 5
// document.write(`4x5=${x} <br>`)
// x = 4 * 6
// document.write(`4x6=${x} <br>`)
// x = 4 * 7
// document.write(`4x7=${x} <br>`)
// x = 4 * 8
// document.write(`4x8=${x} <br>`)
// x = 4 * 9
// document.write(`4x9=${x} <br>`)
// x = 4 * 10
// document.write(`4x10=${x} <br>`)
// q6
// let celsius=25
// let Fahrenheit=(celsius * 9/5) + 32;
// document.write(`${celsius}°C is ${Fahrenheit}°F <br>`);
// Fahrenheit=90;
// celsius = (Fahrenheit - 32) * 5/9; 
// document.write(`${Fahrenheit}°F is ${celsius}°C`)
//q7
// let item1=500;
// let item2=250;
// let charges=100;
// let total = (item1*2)+(item2*3)+100
// document.write(`price of item1 is ${item1}<br>`)
// document.write(`Quantity of item1 is 2<br>`)
// document.write(`price of item2 is ${item2}<br>`)
// document.write(`Quantity of item2 is 3<br>`)
// document.write(`shpping charges is ${charges}<br> `)
// document.write(`total cost of your ordered ${total} `)
//q8
// let obtainMarks=800;
// let totalMarks=900;
// let result=(obtainMarks/totalMarks)*100;
// document.write(`obtainMark${obtainMarks} <br>`);
// document.write(`totalMarks${totalMarks} <br>`);
// document.write(`percentage is ${result}% <br>`);
// q9
// const usd=280;
// const sar=75;
//  const totalPkr=(10*usd)+(25*sar);
//  console.log(totalPkr);
// document.write(`<h1>currency in PKR</h1> <br>`)
// document.write(`total crrency in PKR:${totalPkr}`)
//q10
// let x;
// x=((+5*10)/2)
// console.log(x);
// q11
// let birthYear =1999;
// let currentYear = 2024;
// let userAge=(currentYear-birthYear);
// document.write(`current year is ${currentYear} <br>`)
// document.write(`birth year is ${birthYear} <br>`)
// document.write(`age is ${userAge}`)
// q12
// let radius=5;
// let pi=3.142;
// let circumference=(2*pi*radius);
// let area=(pi*radius*radius)
// document.write(`radius is ${radius} <br>`)
// document.write(`circumference is ${circumference} <br>`)
// document.write(`area of circle is ${area} <br>`)
//q13
// let favoriteSnack="halwa";
// let currentAge=15;
// let maxAge=65;
// let perdayAmount=3;
// let yearleft=(maxAge-currentAge);
// let totalAmount=(yearleft*365)*perdayAmount;
// document.write(`You will need ${totalAmount} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`);
// chapter 6-9
// q1
// let a = 10;
// document.write(`<h1> result</h1> <br>`)
// document.write(`value of a is:${a}<br>`)
// document.write(`-----------------------------------------------<br>`)
// a++
// document.write(`value of a after increment is:${a}<br>`)

// document.write(`The value of ++a is ${++a}<br>`)
// document.write(`now the value of a is ${a}<br>`)

// document.write(` the value of a++ ${a++}<br>`)
// document.write(`now the value of a is ${a}<br>`)

// document.write(`the value of --a${--a}<br>`)
// document.write(`now the value of a is ${a}<br>`)

// document.write(`the value of a--${a--}<br>`)
// document.write(`now the value of a is ${a}<br>`)
// q2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result,a,b);
// q3
// let userName=prompt('enter a name ')
// if (userName){
//     alert(`hello ${userName}`)
// }
// else{
//     alert('please enter a name ')
// }
// q4
// let number = prompt("Enter a number to display its multiplication table:", "5");

// number = number ? parseInt(number) : 5;

// document.write(`<h2>Multiplication Table of ${number}</h2>`);
// for (let i = 1; i <= 10; i++) {
//   document.write(`${number} x ${i} = ${number * i}<br>`);
// }
// q5
// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// const totalMarks = 100;

// let marks1 = parseFloat(prompt(`Enter obtained marks for ${subject1} (out of ${totalMarks}):`));

// let marks2 = parseFloat(prompt(`Enter obtained marks for ${subject2} (out of ${totalMarks}):`));
// let marks3 = parseFloat(prompt(`Enter obtained marks for ${subject3} (out of ${totalMarks}):`));

// let obtainedMarks = marks1 + marks2 + marks3;
// let percentage = (obtainedMarks / (totalMarks * 3)) * 100;

// document.write(`<h2>Marks Sheet</h2>`);
// document.write(`
//   <table border="1" cellspacing="0" cellpadding="8">
//     <tr>
//       <th>Subject</th>
//       <th>Total Marks</th>
//       <th>Obtained Marks</th>
//     </tr>
//     <tr>
//       <td>${subject1}</td>
//       <td>${totalMarks}</td>
//       <td>${marks1}</td>
//     </tr>
//     <tr>
//       <td>${subject2}</td>
//       <td>${totalMarks}</td>
//       <td>${marks2}</td>
//     </tr>
//     <tr>
//       <td>${subject3}</td>
//       <td>${totalMarks}</td>
//       <td>${marks3}</td>
//     </tr>
//     <tr>
//       <td><strong>Total</strong></td>
//       <td><strong>${totalMarks * 3}</strong></td>
//       <td><strong>${obtainedMarks}</strong></td>
//     </tr>
//     <tr>
//       <td colspan="3"><strong>Percentage: ${percentage.toFixed(2)}%</strong></td>
//     </tr>
//   </table>
// `);

























