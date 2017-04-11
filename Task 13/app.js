var teamA = prompt ("Enter the Name of Team A");
var scoreA = prompt ("Enter the Score of Team A");

var teamB = prompt ("Enter the Name of Team B");
var scoreB = prompt ("Enter the Score of Team B");

if (scoreA == scoreB) {
    alert ('"Match Tie!"');
}

else if (scoreA > scoreB) {
    alert (teamA + " " + "has won the Match");
}

else if (scoreB > scoreA) {
    alert (teamB + " " + "has won the Match");
}
