// write your code below!
var name = "Joe";
var height = 74;
var message = `${name} is ${height} inches tall`;

module.exports = {name, height, message}


function happyHolidays () {
  return "Happy holidays!"
}

function happyHolidaysTo (name) {
  return "Happy holidays, ${name}!";
}

function happyHolidayTo (name, holiday) {
  return "Happy ${holiday}, ${name}!";
}

function holidayCountdown (holiday, days) {
  return "It's ${days} days until ${holiday}!";
}