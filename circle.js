class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }



    // Method to get area of the Circle
    static getArea(obj) {
        var r = obj.radius;
          var PI = 3.14;
        return PI * r * r;
    }

    // Method to get Circumference of the Circle
    static getCircumference(obj1) {
        var r = obj1.radius;
        var PI = 3.14;
        return 2 * PI * r;
    }
}

var c1 = new Circle(2, "red");
var c2 = new Circle(2.3, "blue");

console.log(c2);
console.log(c1);

console.log((Circle.getArea(c1)).toFixed(2));
console.log((Circle.getCircumference(c1)).toFixed(2));

console.log((Circle.getArea(c2)).toFixed(2));
console.log((Circle.getCircumference(c2)).toFixed(2));


//OUTPUT

// Circle { radius: 2.3, color: 'blue' }
// Circle { radius: 2, color: 'red' }
// 12.56
// 12.56
// 16.61
// 14.44