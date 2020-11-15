console.log("First JS Line")
alert("Welcome to BMI Calculator");
var a = prompt("Enter Your weight in kG");
var b = prompt("Enter your height in meters");
var BMI = a / (b * b);
document.getElementById("weight").innerHTML = "Your weight is -:" + a;
document.getElementById("height").innerHTML = "Your height is -:" + b;
document.getElementById("BMI").innerHTML = "Your BMI is -:" + Math.round(BMI);
alert("heyy!! your BMI is " + Math.round(BMI));