const { Employee } = require("../../jasnmineDemo");

describe("here we test Employee", function () {
  let emp;
  beforeEach(function () {
    emp = new Employee("ramy", 30, 4);
  });
  describe("here test calculateSalary", function () {
    //spec
    it("should retur 5000 when yearsOfExp is less than 5", function () {
      expect(emp.calculateSalary()).toBe(5000);
    });
    it("should retur 9000 when yearsOfExp is greater than 5", function () {
      emp.yearsOfExp = 6;
      // expect(emp.calculateSalary()).toBe(9000)
      emp.calculateSalary();
      expect(emp.salary).toBe(9000);
    });
  });
  describe("here test setAddress", function () {
    //spec
    it(" test if we pass country as eg and city is Alex  address will become {country:'eg',city:'Alex'}", function () {
      emp.setAddress("eg", "Alex");
      // expect(emp.address).toEqual({country:'eg',city:'Alex'})
      // expect(emp.address.city).toBe('Alex')
      expect(Object.keys(emp.address)).toContain("country");
    });
  });

  describe("here we test getPromoted", function () {
    it("test getPromoted works fine", function () {
        //Spy
        spyOn(emp,"sendEmployeeEmail")
      emp.calculateSalary();
      emp.getPromoted(emp.sendEmployeeEmail);
      expect(emp.salary).toBe(6000);
      expect(emp.sendEmployeeEmail).toHaveBeenCalled()
      expect(emp.sendEmployeeEmail).toHaveBeenCalledTimes(1)
      expect(emp.sendEmployeeEmail).toHaveBeenCalledWith("you got promoted to be senior")
    });
    
//mocking
    it("should call fake function",function(){
        let fakeFunction=jasmine.createSpy("mock fun")
        emp.calculateSalary()
        emp.getPromoted(fakeFunction)
        expect(emp.salary).toBe(6000);
    })
    it("should call fake function",function(){
        let fakeFunction=jasmine.createSpy("mock fun")
        spyOn(emp,"sendEmployeeEmail")
        emp.calculateSalary()
        emp.getPromoted(fakeFunction)
        expect(emp.salary).toBe(6000);
        // expect(emp.sendEmployeeEmail).toHaveBeenCalled()
        expect(fakeFunction).toHaveBeenCalled()
        expect(fakeFunction).toHaveBeenCalledTimes(1)
        expect(fakeFunction).toHaveBeenCalledWith("you got promoted to be senior")
    })
  });

  describe("here we test deptInfo",function(){
      it("deptInfo should call getLocation and get code from dept",function(){
          let fakeObj=jasmine.createSpyObj(["getCode","getLocation"])
          fakeObj.getLocation.and.callFake(function(){
              return "Alex"
          })
          emp.deptInfo(fakeObj)
          expect(fakeObj.getLocation).toHaveBeenCalled()
      })
  })
});
