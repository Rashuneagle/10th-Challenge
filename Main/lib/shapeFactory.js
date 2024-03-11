
const shapes = require('./shapes');

function createShape(shapeType, color, title, shapeColor) {
    let shape;

    if (shapeType === 'Triangle') {
        shape = new shapes.Triangle();
    } else if (shapeType === 'Circle') {
        shape = new shapes.Circle();
    } else if (shapeType === 'Square') {
        shape = new shapes.Square();
    } else {
        throw new Error('Invalid shape type');
    }

    // Set properties based on user input
    shape.setColor(color);
    shape.setTitle(title);
    shape.setShapeColor(shapeColor);

    return shape;
}

module.exports = { createShape };
