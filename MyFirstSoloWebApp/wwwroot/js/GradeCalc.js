/*Makes a button*/
$("#btnSend").click(function () {
    //Creates the value of total grade based on inputs
    totalGrade = (($("#txtAssign").val() * .55) + ($("#txtGrp").val() * .05) + ($("#txtQz").val() * .1) + ($("#txtXm").val() * .2) + ($("#txtNtx").val() * .1))
    //Creates total letter grade and assigns it the be the letter grade according to the total grade
    letterGrade = ""
    if ((totalGrade) >= 94) {
        letterGrade = "A";
    } else if ((totalGrade) >= 90) {
        letterGrade = "A-";
    } else if ((totalGrade) >= 87) {
        letterGrade = "B+";
    } else if ((totalGrade) >= 84) {
        letterGrade = "B";
    } else if ((totalGrade) >= 80) {
        letterGrade = "B-";
    } else if ((totalGrade) >= 77) {
        letterGrade = "C+";
    } else if ((totalGrade) >= 74) {
        letterGrade = "C";
    } else if ((totalGrade) >= 70) {
        letterGrade = "C-";
    } else {
        letterGrade = "F";
    }

    alert("Total Grade: " + totalGrade + " Letter Grade: " + letterGrade);
    //Creates the button that will display the total grade and the letter grade
})
//Assignments 55 %
//Group Project 5 %
//Quizzes 10 %
//Exams 20 %
//INTEX 10 %