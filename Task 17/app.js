var firstValue = +prompt ("Enter First Value");
var secondValue = +prompt ("Enter Second Value");
var operator = prompt ("Enter Operator");

if (operator == "+") {
    alert ("Addition is : "+(firstValue + secondValue));
}

else if (operator == "-") {
    alert ("Subtraction is : "+(firstValue - secondValue));
}

else if (operator == "*") {
    alert ("Multiplication is : "+(firstValue * secondValue));
}

else if (operator == "/") {
    alert ("Division is : "+(firstValue / secondValue));
}

else if(operator == "%") {
    alert("Remainder is : "+(firstValue%secondValue));
}