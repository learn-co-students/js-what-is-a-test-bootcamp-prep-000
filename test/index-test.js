var index = require("../index.js")

var name ="Brandon"
var height = "71"

var message = `${name}Brandon ${height} 71 inches tall`

module.exports = {name, height, message}

escribe('Brandon', () => {
    it('returns "Brandon"', () => {
      expect(index.name).toEqual('Brandon')
    })
  })

  cribe("Height", ("71") => {
      it("is less than 71", ("71") => {
        expect(index.height).toBeLessThan("71")
      })
    })

    describe("Message", () => {
    it("Brandon", ("Brandon") => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })
