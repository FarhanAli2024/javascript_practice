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
// chapter 9-11
// q1
// let city = prompt("Enter your city:");

// if(city=="karachi"){
//     alert('welcome to city of lights Karachi');
// }
// else{
//     alert(`welcome to ${city} `);
// }
// q2
// let gender=prompt('enter a gender ')
// if (gender=="male"){
//     alert('good morning  sir')
// }
// if(gender=="female"){
//     alert('good morning ma"am')
// }else{
//     alert("please enter a valid gender")

// }
//q3
// let color=prompt('enter a color  of signal')
// if(color=="red"){
//     alert('must stop')
// }
// if(color=="yellow"){
//     alert('get ready')
// }
// if(color=="green"){
//     alert('go')
// }
//q4
// let fuel=prompt("enter a remaing fuel in car");
// if(fuel==0.25){
//     alert("please refuel your car");
// }else{
//     alert("your car is good to go");
// }
//q5
//  a.let a=4;
// if(++a==5){
//     alert("given condition for variable a is true");
// }
// b. 
// let b=82;
// if(b++==83){
//     alert("given condition for variable b is true");
// }
// .c
// let c=12;

// if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
//d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e.
//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("false");
//     }
//f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//q6
// let totalMarks=500
// let obtainedMarks=prompt('enter a obtained marks ')
// let result=((obtainedMarks/totalMarks)*100)

// let A1="aOne";
// let A ="A";
// let B="B";
// let C="C";
// let f="fail"
// let  grade;
// let remarks;
// if (result=="80"){
//     grade=A1
//     remarks="Excellent"
// }
// if (result=="70"){
//     grade=A
//     remarks="good"
// }
// if (result=="60"){
//     grade=B
//     remarks="you need to improve"
// }
// if(result<"60"){
//     grade=f
//     remarks="fail"
// }
// document.write(`total marks ${totalMarks} <br>`)
// document.write(`obtain marks ${obtainedMarks} <br>`)
// document.write(`percentage ${result}% <br>`)
// document.write(` grade:${grade} <br>`)
// document.write(`remarks: ${remarks}`)
//q7
// const secretNumber= Math.floor(Math.random()*10)+1
// const userGuses=prompt(("Guess the secret number (between 1 and 10):"), 10);
// if (userGuses === secretNumber) {
//     alert("Bingo! Correct answer.");
//   } else if (userGuses + 1 === secretNumber) {
//     alert("Close enough to the correct answer.");
//   } else {
//     alert("Try again! The secret number was " + secretNumber);
//   } 
//q8
// let numberCheck=prompt(("Enter a number to check if it's divisible by 3:"), 10)

// if (numberCheck % 3 === 0){
//     alert("The number is divisible by 3.")

// }else{
//     alert("The number is not divisible by 3.")
// }
//q9
// const userNumber =prompt(("Enter a number to check if it's even or odd:"),10);

// if (userNumber % 2 === 0) {
//   alert("The number is even.");
// } else {
//   alert("The number is odd.");
// }
//q10
// const temperature = parseFloat(prompt("Enter the temperature:"));
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today's weather is so Cool.");
// } else {
//   alert("It's very cold outside.");
// }
//q11
// const firstNumber = parseFloat(prompt("Enter the first number:"));

// const secondNumber = parseFloat(prompt("Enter the second number:"));

// const operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;

// if (operation === "+") {
//     result = firstNumber + secondNumber;
//     alert(`Result: ${firstNumber} + ${secondNumber} = ${result}`);
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
//     alert(`Result: ${firstNumber} - ${secondNumber} = ${result}`);
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
//     alert(`Result: ${firstNumber} * ${secondNumber} = ${result}`);
// } else if (operation === "/") {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//         alert(`Result: ${firstNumber} / ${secondNumber} = ${result}`);
//     } else {
//         alert("Division by zero is not allowed.");
//     }
// } else if (operation === "%") {
//     result = firstNumber % secondNumber;
//     alert(`Result: ${firstNumber} % ${secondNumber} = ${result}`);
// } else {
//     alert("Invalid operation. Please enter +, -, *, /, or %.");
// }
// chapter 12-13
// let userData=prompt("enter a chacractor");
// let asciicode=userData.charCodeAt()
// if(asciicode >= 65 && asciicode <= 90){
//     alert("upper case letter")
// }
// else if(asciicode >= 97 && asciicode <= 122){
//     alert("lower case letter")
// }
// q2
// let userNum1=prompt("enter a first number");
// let userNum2=prompt("enter a second number");

// if (userNum1 > userNum2) {
//     alert(`${userNum1} is greater than ${userNum2}`);
// } else if (userNum1 < userNum2) {
//     alert(`${userNum2} is greater than ${userNum1}`);
// } else {
//     alert(`${userNum1} is equal to ${userNum2}`);
// }
//q3
// let checkValue=prompt("enter the number");
// let sign=prompt("enter a sign ex:'-','+'")

// if (sign=="+"){
     
//     alert("value is positive")

// }
// if(sign=="-"){
//     alert("value is negative")
// }
// if(checkValue==0){
//     alert("value is zero")
// }
//q4
// let checkVowel=prompt("enter a character");
// let checkVowel1=checkVowel.toLowerCase();
// if (checkVowel1 === 'a' || checkVowel1 === 'e'||checkVowel1=="o"||checkVowel1=="i"||checkVowel1=="u"){


//     alert("true")
//     }else{
//         alert("false")
//     }
//q5
// let Pass=454545
// let checkpass=prompt("enter the password");
// if(Pass==checkpass){
//     alert("password is correct")
// }else{
//     alert("password is incorrect")
    
// }
//q6
// before 
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
//q7
// const time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"), 10);

// if (time >= 0 && time < 1200) {
//     alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// } else {
//     alert("Invalid time! Please enter a valid 24-hour time.");
// }


