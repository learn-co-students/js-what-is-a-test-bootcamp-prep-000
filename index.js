// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}


if (name === "Susan") {console.log("This is correct")} else {console.log("Expected name to be Susan")}

if(height < 40) {console.log("This is correct")} else {console.log("Expected height to be less than 40")}

console.log(message)
