var input = prompt ("Enter the Day Name");
input = input.toLowerCase();
if (input == "monday" || input == "tuesday"||input == "wednesday" || input == "thursday" || input == "friday") {
    alert ('"It is a Week Day"');
}

else if (input == "saturday") {
    alert ('"It is Weekend”"');
}

else if (input == "sunday") {
    alert ('"Yay! It is a Holiday”"');
}

else {
    alert ("This is not a day!");
}