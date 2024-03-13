const { Triangle, Circle, Square } = require('./shapes');

describe('shapes', () => {
    describe('Triangle', () => {
        it('Should render a triangle shape', () => {
            const triangle = new Triangle();
            expect(triangle.render())
                .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="blue"/>         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.color}">${triangle.title}</text> </svg>`);
        });
    });

    describe('Circle', () => {
        it('Should render a circle shape', () => {
            const circle = new Circle();
            expect(circle.render())
                .toEqual('<circle cx="150" cy="100" r="80" />');
        });
    });

    describe('Square', () => {
        it('Should render a square shape', () => {
            const square = new Square();
            expect(square.render())
                .toEqual('<rect x="50" y="50" width="100" height="100" />');
        });
    });
});
