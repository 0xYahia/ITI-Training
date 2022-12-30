let obj = {
  name: "Yahia",
  age: 25,
  address: "Mansoura",
};

function objIterator() {
  let count = -1;
  let keys = Object.keys(obj);
  return {
    next: function () {
      count++;
      if (count < keys.length) {
        return {
          value: [keys[count], obj[keys[count]]],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}

obj[Symbol.iterator] = objIterator;
for (let i of obj) {
  console.log(i);
}

function* gen() {
  for (key in obj) {
    yield [key, obj[key]];
  }
}

let iterator = gen();
