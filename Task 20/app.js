var x = +prompt ("Enter First Number");
var y = +prompt ("Enter Second Number");

if (x == y) {
    alert ('"Both Values are Equal"');
}

else if (x > y) {
    alert ("The Greater Number of "+x+" and "+y+" is " +x);
}

else if (y > x) {
    alert ("The Greater of "+x+" and "+y+" is " +y);
}