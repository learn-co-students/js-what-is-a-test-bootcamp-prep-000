var index = require("../index.js")

describe('name', ("Brandon") => {
    it('returns "Brandon"', ("Brandon") => {
      expect(index.name).toEqual('Brandon')
    })
  })

  describe("Height", ("74") => {
      it("is less than 40", ("74") => {
        expect(index.height).toBeLessThan("40")
      })
    })

    describe("Message", ("Brandon") => {
    it("Brandon", ("74") => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })
