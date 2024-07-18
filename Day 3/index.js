// Day 3: Control Structures

// Tasks/Activities:
// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

// let num = +prompt("Enter Number");

// if (num == 0) {
//   console.log(`${num} is Zero`);
// } else if (num > 0) {
//   console.log(`${num} is Possitive Number.`);
// } else if (num < 0) {
//   console.log(`${num} is Negative Number.`);
// }

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

// let userAge = +prompt("Enter Your Age")

// if (userAge >= 18) {
//     console.log(`You Eligible For Vote`);
// }else{
//     console.error("Sorry, You are not eligible for vote!");
// }

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

// let num1 = 2222;
// let num2 = 112;
// let num3 = 999;

// if (num1 >= num2) {
//   if (num1 >= num3) {
//     console.log(`${num1} is larger`);
//   } else {
//     console.log(`${num3} is larger`);
//   }
// } else {
//   if (num2 >= num3) {
//     console.log(`${num2} is larger`);
//   } else {
//     console.log(`${num3} is larger`);
//   }
// }

// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

// let dayNum = 5;

// switch (dayNum) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Number");
// }

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

// let num = 44;
// let totalNum = 100;

// switch (true) {
//   case num <= 100 && num > 90:
//     console.log("A+");
//     break;
//   case num < 90 && num > 80:
//     console.log("A");
//     break;
//   case num <= 80 && num > 70:
//     console.log("B");
//     break;
//   case num <= 70 && num > 60:
//     console.log("C");
//     break;
//   case num <= 60 && num > 50:
//     console.log("Need Improvement");
//     break;
//   default:
//     console.log("Failed");
// }

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

// let num = 15;
// num % 2 == 0 ? console.log("Even") : console.log("Odd");

// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// let year = 2023;
// let isLeapYear;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             isLeapYear = true;
//         } else {
//             isLeapYear = false;
//         }
//     } else {
//         isLeapYear = true;
//     }
// } else {
//     isLeapYear = false;
// }

// if (isLeapYear) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

// let num = +prompt("Enter Number");

// if (num == 0) {
//   console.log(`${num} is Zero`);
// } else if (num > 0) {
//   console.log(`${num} is Possitive Number.`);
// } else if (num < 0) {
//   console.log(`${num} is Negative Number.`);
// }

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

// let userAge = +prompt("Enter Your Age")

// if (userAge >= 18) {
//     console.log(`You Eligible For Vote`);
// }else{
//     console.error("Sorry, You are not eligible for vote!");
// }

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

// let dayNum = 5;

// switch (dayNum) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Number");
// }

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

// let num = 44;
// let totalNum = 100;

// switch (true) {
//   case num <= 100 && num > 90:
//     console.log("A+");
//     break;
//   case num < 90 && num > 80:
//     console.log("A");
//     break;
//   case num <= 80 && num > 70:
//     console.log("B");
//     break;
//   case num <= 70 && num > 60:
//     console.log("C");
//     break;
//   case num <= 60 && num > 50:
//     console.log("Need Improvement");
//     break;
//   default:
//     console.log("Failed");
// }

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// let year = 2023;
// let isLeapYear;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             isLeapYear = true;
//         } else {
//             isLeapYear = false;
//         }
//     } else {
//         isLeapYear = true;
//     }
// } else {
//     isLeapYear = false;
// }

// if (isLeapYear) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// Achievement:
// By the end of these activities, students will:
// • Implement and understand basic if-else control flow.
// • Use nested if-else statements to handle multiple conditions.
// • Utilize switch cases for control flow based on specific values.
// • Apply the ternary operator for concise condition checking.
// • Combine multiple conditions to solve more complex problems.
