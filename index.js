// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

describe("Joe", () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })
  describe("74", () => {
    it("is less than 40", () => {
      expect(index.height).toBeLessThan(40)
    })
  })
  describe("message", () => {
      it("gives the name and height", () => {
        expect(index.message).toInclude(index.name)
        expect(index.message).toInclude(index.height)
      })
    })


console.log(message)

module.exports = {name, height, message}
