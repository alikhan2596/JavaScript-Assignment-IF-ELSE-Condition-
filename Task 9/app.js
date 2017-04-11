var names = prompt ("Enter Your Full Name :-");
var rollNo = prompt ("Enter Your Roll No");

var html = +prompt ("Enter Your HTML Obtained Marks");
var css = +prompt ("Enter Your CSS Obtained Marks");
var javaScript = +prompt ("Enter Your JavaScript Obtained Marks");
var totalMarks = prompt ("Enter Total Marks of each course");

var marksObtained = html + css + javaScript;
var totalMarks = totalMarks*3;
var percentage = (marksObtained * 100) / totalMarks;

if (percentage >=80 && percentage < 100) {
    alert ('Excellent! "A+ Grade" '  + percentage);
var grade = "A+ Grade";
var remarks = "Excellent";
}

else if (percentage >=70 && percentage < 80) {
    alert ('Best! "A Grade" ' + percentage);
var grade = "A Grade";
var remarks = "Best";
}

else if (percentage >=60 && percentage < 70) {
    alert ('Good! "B Grade" ' + percentage);
var grade = "B Grade";
var remarks = "Good";
}

else if (percentage >=50 && percentage < 40) {
    alert ('Fine! "C Grade" ' + percentage);
var grade = "C Grade";
var remarks = "Fine"
}

else if (percentage >=40 && percentage < 30) {
    alert ('Weak! "D Grade" ' + percentage);
var grade = "D Grade";
var remarks = "Weak";
}

else if (percentage >=33 && percentage < 40) {
    alert ('Poor! "E Grade" ' + percentage);
var grade = "E Grade";
var remarks = "Poor";
}

else if (percentage > 101) {
    alert ("Invalid Percentage!");
}

else {
    alert ('You need to improve "You Failed" ' + percentage);
var grade = "F Grade";
var remarks = "You need to improve!";
}

