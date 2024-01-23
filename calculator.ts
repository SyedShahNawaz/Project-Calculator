import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'num1',
    message: 'Enter the first number:',
  },
  {
    type: 'input',
    name: 'num2',
    message: 'Enter the second number:',
  },
  {
    type: 'list',
    name: 'operation',
    message: 'Select an operation:',
    choices: ['Add', 'Subtract', 'Multiply', 'Divide', 'Exit'],
  },
];

function calculate() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.operation === 'Exit') {
      console.log('Exiting calculator...');
      return;
    }

    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);
    let result;

    switch (answers.operation) {
      case 'Add':
        result = num1 + num2;
        break;
      case 'Subtract':
        result = num1 - num2;
        break;
      case 'Multiply':
        result = num1 * num2;
        break;
      case 'Divide':
        result = num1 / num2;
        break;
    }

    console.log(`The result is: ${result}\n`);

    const newCalculation = [
      {
        type: 'list',
        name: 'newCalculation',
        message: 'Do you want to perform another calculation?',
        choices: ['Yes', 'No'],
      },
    ];

    inquirer.prompt(newCalculation).then((answer) => {
      if (answer.newCalculation === 'Yes') {
        calculate();
      } else {
        console.log('Exiting calculator...');
        process.exit();
      }
    });
  });
}

calculate();
