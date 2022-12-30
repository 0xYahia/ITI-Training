let obj = {
  name: "asdasdg",
  address: "ASdas",
  age: 25,
};

let handler = {
  get: function (target, prop, prox) {
    if (!target.hasOwnProperty(prop)) {
      throw `${prop} is not exist`;
    }
    return target[prop];
  },
  set: function (target, prop, value, prox) {
    if (!target.hasOwnProperty(prop)) {
      throw prop + " is not exist";
    }
    switch (prop) {
      case "name":
        if (isFinite(value)) {
          throw "sholud be characters";
        }
        if (!isFinite(value) && value.length != 7) {
          throw "sholud be 7 characters";
        }
      case "address":
        if (isFinite(value)) {
          throw "sholud be characters";
        }
      case "age":
        if (!isFinite(value)) {
          throw "sholud be number";
        }
        if (isFinite(value) && value < 25) {
          throw "sholud be number more than 25";
        }
        if (isFinite(value) && value > 60) {
          throw "sholud be number less than 60";
        }
    }

    return (target[prop] = value);
  },
};
let prox = new Proxy(obj, handler);
console.log(prox.name);
prox.age = 55;
console.log(prox.age);
