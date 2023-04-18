const {
  sum,
  stringReverse,
  removeDuplicate,
  convertToArray,
} = require("../index");
var chai = require("chai");
var expect = chai.expect;
// chai.use(require('chai-string'));
// const { escapeRegExp } = require('');

//suite=>grouping testcases
//sum

//teardown
describe("Here we test sum function", () => {
  //if sum take 2 numbers will return sum of them
  var x;
  //   before(function () {
  //       console.log('before all');
  //   });
  //   beforeEach(function () {
  //     console.log('before each');
  //     // x=20
  // })
//   after(function () {
//     console.log("after all");
//   });
  afterEach(function () {
    console.log("after each");
  });
  it("test sum take 2 numbers will return sum of them", function () {
    expect(sum(2, 3)).to.equal(5);
    //  assert.equal(sum(2,3),5)
    //  sum(2,3).should.to.equal(5)
  });
  it("test sum take 2 zero numbers will return sum of them", function () {
    expect(sum(0, 0)).to.equal(0);
  });
  //if sum take non numeric numbers should throw error.

  it("test sum take non numeric numbers should throw error", function () {
    expect(function () {
      sum(3, "amira");
    }).to.throw(TypeError, "para must be number");
  });
});

//stringReverse
describe("Here we test stringReverse function", () => {
  it("test stringReverse with amira should return arima", function () {
    // expect(stringReverse("amira")).to.equal("arima").to.be.a("string");
    // expect(stringReverse("amira")).to.match(new RegExp('^ar'))
    expect(stringReverse("ali")).to.equal('ila').to.match(new RegExp('^i')).to.be.a('string')
  });
  //chaining
  //   it('test stringReverse with amira should return arima',function(){
  //       expect(stringReverse('amira')).to.equal('arima').to.be.a('string')
  //   })
  it("test stringReverse should return a string", function () {
    expect(stringReverse("amira")).to.be.a("string");
  });

  it("test stringReverse return string should include a spacific value", function () {
    expect(stringReverse("amira")).to.include("m");
  });
});



describe("Here we test removeDuplicate function",function(){
    it('test removeDuplicate works fine',function(){
        expect(removeDuplicate([2,3,2,4,2])).to.deep.equal([2,3,4]).to.include(2)
    })
})
