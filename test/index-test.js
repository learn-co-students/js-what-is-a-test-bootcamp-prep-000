var index = require("../index.js")

/*
describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })
})
*/
if (index.name === "Susan") {console.log("This is correct")}
else {console.log("Expected name to be Susan")}

if(index.height < 40) {console.log("This is correct")}
else {console.log("Expected height to be less than 40")}

console.log(index.name " is" index.height " tall")
