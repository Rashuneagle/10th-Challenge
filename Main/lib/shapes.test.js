const { Triangle, Circle, Square } = require('./shapes');



describe('shapes', () => {

    describe('Triangle', () => {
        it('Should render a triangle shape', () => {
            const triangle = new Triangle();
            expect(triangle.render())
            .toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });
});

describe('shapes', () => {
    
    describe('Circle', () => {
        it('Should render a circle shape', () => {
            const circle = new Circle();
            expect(circle.render())
            .toEqual('<circle cx="150" cy="100" r="80" />');
            

        });
    });
});

describe('shapes', () => {
    
    describe('Square', () => {
        it('Should render a square shape', () => {
            const square = new Square();
            expect(square.render())
            .toEqual('<rect x="50" y="50" width="100" height="100" />');

        });
    });
});