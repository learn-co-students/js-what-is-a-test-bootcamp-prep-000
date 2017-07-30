var index = require("../index.js")

/*
var name = "Joe"
var height = "74"
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}

console.log(name+" "+ height+"\n"+message) */


describe('Name', () => {
  it('returns "Susan"', () => {
    expect(index.name).toEqual('Susan')
  })
})

console.log(index.name)
