class Shape {
    constructor() {
    }

    setColor(color) {
        this.color = color;
    }

    setTitle(title) {
        this.title = title;
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render() {
        return '';
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
        // Specific rendering logic for Triangle
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> 
        
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.title}</text>
        </svg>`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }

    render() {
        // Specific rendering logic for Circle
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }

    render() {
        // Specific rendering logic for Square
        return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Triangle, Circle, Square };

