// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}
describe ("Message")=> {
  it("gives the name and height") ,() =>{
    expect(index.message).toInclude(index.name)
    expect(index.message).toInclude(index.height)
  })
})
