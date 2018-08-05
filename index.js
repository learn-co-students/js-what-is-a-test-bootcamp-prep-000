// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`
console.log(message)
module.exports = {name, height, message}
var index = require(“.../index.js”)

/* 
describe(“what-is-a-test”,() => {
  it(kreturnd “susan”’,()=> {
    expect(index.name).toEqual(”susan”)
    
  })
})

describe(” height”) => { it (”is less than 40” , () => { 
expect(index.height).toBeLessThan(40)
})
})

describe(”message” , () => {
  it(“gives the name and height”, () => { expect(index.message).toinclude(index.name)
  expect(index.message).toInclude(index.height)
})

})
