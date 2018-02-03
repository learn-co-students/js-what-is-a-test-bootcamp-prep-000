// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}
expect(index.message).toInclude(index.name);
expect(index.message).toInclude(index.height);