var expect = require("chai").expect;
var fbn = require("../app/fibonacci");
var fibonacci = fbn.fibonacci;
var getNumberAt = fbn.getNumberAt;

describe("Fibonacci's series", () => {

  it ("should return [] if n < 0", () => {
    expect([]).to.eql(fibonacci(-1))
  });

  it ("should return [] if n = 0", () => {
    expect([]).to.eql(fibonacci(0))
  });

  it("should return [1] if n = 1", () =>{
    expect([1]).to.eql(fibonacci(1));
  });

  it("should return [1,1] if n = 2", () => {
    expect([1,1]).to.eql(fibonacci(2));
  });

  it("should return [1,1,2,3] if n = 4", () => {
    expect([1,1,2,3]).to.eql(fibonacci(4));
  });

  it("should return 55 if position = 10", () => {
    expect(55).to.eql(getNumberAt(10));
  });

});
