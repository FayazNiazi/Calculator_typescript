import inquirer from "inquirer";
import chalk from  "chalk";
import chalkAnimation from 'chalk-animation';



console.log(`      
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`)



async function calculate() {
  while (true) {
    let { num1, num2, operation } = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: "Enter first number:",
      },
      {
        name: "num2",
        type: "number",
        message: "Enter second number:",
      },
      {
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exit",],
        message: "Select an operation",
      },
    ]);

    if (operation === "Exit") {
      console.log("Goodbye!");
      break; 
    }
    
    switch (operation) {
      case "Addition":
        console.log(`The sum of two numbers = ${num1 + num2}`);
        break;
      case "Subtraction":
        console.log(`The difference of two numbers = ${num1 - num2}`);
        break;
      case "Multiplication":
        console.log(`The product of two numbers = ${num1 * num2}`);
        break;
      case "Division":
        if (num2 === 0) {
          console.log("Division by zero is not allowed.");
        } else {
          console.log(`The division of two numbers = ${num1 / num2}`);
        }
        break;
      default:
        console.log("Invalid operation. Please select a valid operation.");
    }
  }
}

// Start the calculation loop
calculate();



  

