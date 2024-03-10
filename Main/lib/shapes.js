class Shape {
    constructor() {

    }
    render(){

    }
}

class Triangle extends Shape {
    constructor() {
        super();

    }

    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>';

    }

}

class Circle extends Shape {
    constructor() {
        super();

    }

    render() {
        return '<circle cx="150" cy="100" r="80" />';
    }

}

class Square extends Shape {
    constructor() {
        super();

    }

    render() {
        return '<rect x="50" y="50" width="100" height="100" />';
    }


}

module.exports = { Triangle, Circle, Square };