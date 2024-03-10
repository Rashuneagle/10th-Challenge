const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const fs = require('fs');

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
        type: 'list',
        message: 'What shape do you want?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'What is the shape color?',
        name: 'shapeColor',
    },
];

// Function to create SVG file


function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('SVG has been generated sucessfully!');
        }
    });
}

// Function to handle user input
function init() {
    inquirer.prompt(questions).then((answers) => {
        // Generate content using shapes function
        const shapeContent = shapes.render(answers.title, answers.color, answers.shape, answers.shapeColor);
        // Use writeToFile function to save the content to a file
        writeToFile('logo.svg', shapeContent);
    });
}


init();
