var color = prompt ("Enter the color of road Traffic Signal");

if (color == "red" || color == "Red") {
    alert ("Vehicles must stop!");
}

else if (color == "yellow" || color == "Yellow") {
    alert ("Vehicles should get ready to move!");
}

else if (color == "green" || color == "Green") {
    alert ("Vehicles can move now!");
}

else {
    alert ("This is not a valid color of Road Traffic Signal");
}