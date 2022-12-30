// Evry
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var isString = fruits.every((el) => {
  return typeof el === "string";
});

console.log(isString);
//////////////////////////////////
//Some
var testStratWithA = fruits.some((el) => {
  return el.startsWith("a");
});

console.log(testStratWithA);
//////////////////////////////////
//Filter
var filter = fruits.filter((el) => {
  return el.startsWith("b") || el.startsWith("s");
});

console.log(filter);
//////////////////////////////////
//Map + forEach
var filter2 = fruits
  .map((el) => {
    return `like => ${el}`;
  })
  .forEach((el) => {
    console.log(el);
  });
