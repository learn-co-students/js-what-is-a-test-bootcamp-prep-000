// write your code below!
var index = require("../index.js");
describe("Message", () => {
    it("gives the name and height", () => {
      expect(index.message).toInclude(index.name);
      expect(index.message).toInclude(index.height);
    });
  });
  
  console.log(message);