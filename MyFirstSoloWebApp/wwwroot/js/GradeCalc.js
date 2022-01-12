$("#btnSend").click(function () {
totalGrade = (($("#txtAssign").val() * .55) + ($("#txtGrp").val() * .05) + ($("#txtQz").val() * .1) + ($("#txtXm").val() * .2) + ($("#txtNtx").val() * .1))
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

    alert("Total Grade: " + totalGrade + " Letter Grade: " + letterGrade)
        //$("#txtAssign").val() + 
        //$("#txtGrp").val() +
        //$("#txtQz").val() +
        //$("#txtXm").val() +
        //$("#txtNtx").val())
})