var name = prompt ("Enter Your Full Name :-");
var rollNo = prompt ("Enter Your Roll No.");

var nameOfItem1 = prompt ("Enter the Name of Item # 01.");
var nameOfItem2 = prompt ("Enter the Name of Item # 02.");

var price1 = +prompt ("Enter the Price of Item # 01.");
var quantity1 = +prompt ("Enter the Quantity of Item # 01.");

var price2 = +prompt ("Enter the Price of Item # 02.");
var quantity2 = +prompt ("Enter the Quantity if Item # 02.");

var shippingCharges = +prompt ("Enter Shipping Charges.");

var totalCost = (price1 * quantity1) + (price2 * quantity2) + (shippingCharges);
var dicountedPrice;

