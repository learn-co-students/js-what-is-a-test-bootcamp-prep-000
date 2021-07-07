// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall` /* The backticks ` ` allow you to create a string which imports variables. The variables imported must be wrapped by ${ } */

module.exports = {name, height, message}
console.log(message)