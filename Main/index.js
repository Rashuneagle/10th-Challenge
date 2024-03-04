const inquirer = require('inquirer');



const questions = [
    {
        type: 'input',
        message: 'Enter 3 letters for your logo',
        name: 'title',

    },
    
    {
        type: 'input',
        name: 'color',
        message: 'What do you want the text color to be?',
    },

    {
        type: 'input',
        message: 'What shape do you want?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    
    {
        type: 'input',
        message: 'What is the shapes color?',
        name: 'shape color',
    },

    
]