
Enter your age:
<input id="ag"> 
<button onclick="myFunction()"> Submit </button>
<p id="demo"> </p>
<script>
function MyFunction()
{ var age=document.getElementById("ag").value; 
var txt;
if (age<18){txt="too young to watch porn!"};
else {txt="Welcome and enjoy!"}
document.getElementById("demo").innerHTML=txt;}