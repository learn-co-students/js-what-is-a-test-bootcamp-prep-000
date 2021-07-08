// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

function Name(name){
if (name === 'Susan'){
    return 'Susan'
}else{
  return 'We expect the name to equal Susan.'
}}


function Height(height){
  if( height < 40){
    return `Height is  ${height}`
  }else {
    return 'We expect the height to be less than 40.'
  }
}

function Message(message){
return message
}



module.exports = {name, height, message}
