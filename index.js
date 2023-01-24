// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }
    set diameter(input) {
        this.radius = input / 2;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }
    set circumference(input) {
        this.diameter = input / Math.PI;
        this.radius = this.diameter / 2;
    }

    get area() {
        return Math.PI * (this.radius * this.radius);
    }
    set area(input) {
        this.radius = Math.sqrt(input / Math.PI);
    }

}