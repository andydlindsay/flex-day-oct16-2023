// class => group similar functionality together; blueprint
// return val (obj) => instance of that class

// class MyClass {}

// const MyOtherClass = class {};

class Square {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
}

// const square = new Square(3, 5);

// console.log(square);
// console.log(square.area());

class Prism extends Square {
  constructor(width, length, height) {
    super(width, length); // Area
    
    this.height = height;

    this.volume = this.volume.bind(this);
  }

  area() {
    return 42;
  }

  volume() {
    console.log(this);
    return this.area() * this.height;
  }
}

const prism = new Prism(4, 8, 3);

console.log(prism);
console.log(prism.volume());

const volume = prism.volume;

console.log(volume());

// class Another extends Prism {
//   constructor() {
//     super(); // Prism
//   }
// }
