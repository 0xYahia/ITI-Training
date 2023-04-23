const { capitalizeText, createArray } = require("../mochaLab");
var chai = require("chai");
var expect = chai.expect;

describe("here we test capitalizeText function", function () {
  it("test that the function takes a string it will return a string", function () {
    expect(capitalizeText("yahia")).to.be.a("string");
  });

  it("test that the function takes a string and return it after capitalize it", function () {
    expect(capitalizeText("yahia")).to.equal("YAHIA");
  });

  it("test if the function takes number it will throw type error says parameter should be string", function () {
    expect(() => {
      capitalizeText(123);
    }).to.throw(TypeError, "Parameter should be a string");
  });
});
