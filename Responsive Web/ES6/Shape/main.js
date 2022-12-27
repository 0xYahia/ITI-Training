class Shape {
  constructor(d1, d2) {
    this.d1 = d1;
    this.d2 = d2;
  }
  calcArea() {}
  calcPerimeter() {}
  toString() {
    console.log(this.calcArea());
    console.log(this.calcPerimeter());
  }
}

export class Rectangle extends Shape {
  constructor(d1, d2) {
    super(d1, d2);
  }
  calcArea() {
    return this.d1 * this.d2;
  }
  calcPerimeter() {
    return 2 * (this.d1 + this.d2);
  }
}

export class Square extends Shape {
  constructor(d1) {
    super(d1);
  }
  calcArea() {
    return this.d1 ** 2;
  }
  calcPerimeter() {
    return 4 * this.d1;
  }
}

export class Circle extends Shape {
  constructor(d1) {
    super(d1);
  }
  calcArea() {
    return Math.PI * this.d1 * this.d1;
  }
  calcPerimeter() {
    return 2 * Math.PI * this.d1;
  }
}
