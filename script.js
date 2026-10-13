//1. var — 10 Questions
//Create a var variable called name and initialize it with your name. Print it.
var name = "Arun";
console.log(name);

//Create a var variable called age with value 25. Reassign it to 30 and print it.
var age = 25;
age = 30;
console.log(age);

//Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.
var city = "Chennai";
city = "Bangalore";
console.log(city);

//Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.
var salary = 25000;
var salary = 35000;
console.log(salary);

//Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.
var value = 10;
value = 20;
var value = 30;
console.log(value);

//Create a var variable called department with "ECE" and redeclare it with "CSE".
var department = "ECE";
var department = "CSE";
console.log(department);

//Create a var variable called mark with 50, reassign it to 75, and print it.
var mark = 50;
mark = 75;
console.log(mark);

//Create a var variable called company and redeclare it with another company name.
var company = "TCS";
var company = "Stackly";
console.log(company);

//Create a var variable without assigning a value, then initialize it later and print it.
var designation;
designation = "Frontend Developer";
console.log(designation);

//Create one var variable and change its value three times. Print the final value.
var color = "Red";
color = "Blue";
color = "Green";
color = "Yellow";
console.log(color);


// 2. let — 10 Questions
//Create a let variable called age and initialize it with your age. Print it.
let age1 = 28;
console.log(age1);

//Create a let variable called salary, initialize it with 30000, then reassign it to 40000.
let salary1 = 30000;
salary1 = 40000;
console.log(salary1);

//Create a let variable called name, assign your name, then change it to another name.
let name1 = "Arun";
name1 = "Arunachalam";
console.log(name1);

//Create a let variable called department and change its value from "ECE" to "CSE".
let department1 = "ECE";
department1 = "CSE";
console.log(department1);

//Create a let variable called mark, initialize it with 60, then reassign it to 90.
let mark1 = 60;
mark1 = 90;
console.log(mark1);

//Declare a let variable without initialization. Later assign a value and print it.
let qualification;
qualification = "B.E";
console.log(qualification);

//Try to redeclare the same let variable. Observe what happens.
// let age = 25;
// let age = 30;
console.log(age);

//Create a let variable called city and reassign it two times. Print the final value.
//let city = "Chennai";
city = "Bangalore";
city = "Coimbatore";
console.log(city);

//Create three different let variables and print all three.
//let name = "Arun";
//let age = 25;
//let city = "Chennai";
city = "Chennai";
console.log(name);
console.log(age);
console.log(city);

//Create a let variable, initialize it, reassign it, and try to redeclare it.
//let salary = 30000;
salary = 40000;
//let salary = 50000;
console.log(salary);


//3. const — 8 Questions
//Create a const variable called age with value 25 and print it.
const a = 25;
console.log(a);

//Create a const variable called salary with value 50000 and print it.
const sal = 50000;
console.log(sal);

//Create a const variable called company with "Stackly" and print it.
const comp = "Stackly";
console.log(comp);

//Try to reassign a const variable with another value. Observe the result.
const ag = 25;
//ag = 30;
console.log(ag);

//Try to redeclare a const variable. Observe the result.
const com = "TCS";
//const com = "Infosys";
console.log(com);

//Create a const variable called college and initialize it with your college name
const college = "Muthayammal Engineering College";
console.log(college);

//Create three const variables for name, age, and department. Print them.
//const name = "Arun";
//const age = 25;
const dep = "CSE";
console.log(name);
console.log(age);
console.log(dep);

//Write a program using one var, one let, and one const variable. Print all three.
var name = "Arun";
//let age = 25;
const college1 = "Muthayammal College";
console.log(name);
console.log(age);
console.log(college1);

//4. Printing Statements — 7 Questions
//Print your name using console.log().
console.log("Arun");

//Create a variable containing your age and print it using console.log().
//let age = 25;
console.log(age);

//Print the number 100 using console.log().
console.log(100);

//Create three variables and print their values using console.log().
// let name = "Arun";
// let age = 25;
// let city = "Chennai";
console.log(name);
console.log(age);
console.log(city);

//Create a variable called message with "Hello JavaScript" and print it.
let message = "Hello JavaScript";
console.log(message);

//Create a variable, print its value, change its value, and print it again.
//let name = "Arun";
console.log(name);
name = "Naveen";
console.log(name);

//Print your name, age, and qualification using three separate console.log() statements.
console.log("Arun");
console.log(25);
console.log("B.E");

//5. alert() — 5 Questions
//Display "Welcome to JavaScript" using alert().
alert("Welcome to JavaScript");

//Create a variable called userName and display it using alert().
let userName = "Arun";
alert(userName);

//Create a variable called userAge and display it using alert().
let userAge = 25;
alert(userAge);

//Create a variable containing "Welcome Naveen" and show it in a popup.
let mes = "Welcome Naveen";
alert(mes);

//Create a variable containing your qualification and display it using alert().
let qualifi = "B.E Computer Science";
alert(qualifi);

//6. prompt() — 5 Questions
//Ask the user "What is your name?" using prompt() and print the answer in the console.
let n = prompt("What is your name?");
console.log(n);

//Ask the user "How old are you?" using prompt() and display the answer using alert().
let b = prompt("How old are you?");
alert(b);

//Ask the user for their qualification and print the answer in the console.
let qua = prompt("What is your qualification?");
console.log(qua);

//Ask the user for their name and show the entered name in a popup.
let na = prompt("What is your name?");
alert(na);

//Ask the user for their age and print the entered age in the console.
let c = prompt("How old are you?");
console.log(c);

//7. confirm() & document.writeln() — 3 Questions
//Create a confirmation box asking "Do you know programming?".
confirm("Do you know programming?");

//Create a variable containing "Welcome to Batch 41" and display it using document.writeln().
let m = "Welcome to Batch 41";
document.writeln(m);

//Ask the user "Do you want to continue?" using confirm().
let result = confirm("Do you want to continue?");
console.log(result);

//8. Console Methods — 2 Questions
//Write one program that uses console.log(), console.warn(), and console.error() to display three different messages.
console.log("This is a normal message");
console.warn("This is a warning message");
console.error("This is an error message");
console.clear();

//Write a program using console.log(), console.warn(), console.error(), and console.clear(). Observe what happens after each statement.
console.log("Hello");
console.warn("Warning");
console.error("Error");
console.clear();
console.log("After clear");
