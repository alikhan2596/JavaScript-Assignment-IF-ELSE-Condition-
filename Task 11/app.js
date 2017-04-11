var secretNumber = prompt ("Guess the Secret Number (ranging from 1 to 10) ");

if (secretNumber == 8) {
    alert ('"Bingo!"');
}

else if (secretNumber == 7 || secretNumber == 9) {
    alert ("Close enough to the Correct Answer!");
}

else {
    alert ("Sorry! You did not guess the Correct Answer!");
}