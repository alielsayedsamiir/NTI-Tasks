let requiredAttendance = 75;
let scholarshipThreshold = 90;

function evaluateStudent(name, attendance, midterm, finalExam, assignment, tuitionPaid) {
    console.log("---------- STUDENT REPORT ----------");
    console.log("Student Name: " + name);

    if (!tuitionPaid) {
        console.log("Status: Results unavailable. Tuition payment is pending.");
        console.log("-------------------------------------");
        return;
    }

    console.log("Attendance: " + attendance + "%");

    if (attendance < requiredAttendance) {
        console.log("Status: FAIL (Attendance below required " + requiredAttendance + "%)");
        console.log("-------------------------------------");
        return;
    }

    let totalScore = midterm + finalExam + assignment;
    let letterGrade = "";

    if (totalScore >= 90) {
        letterGrade = "A";
    } else if (totalScore >= 75) {
        letterGrade = "B";
    } else if (totalScore >= 50) {
        letterGrade = "C";
    } else {
        letterGrade = "F";
    }

    console.log("Midterm Score: " + midterm);
    console.log("Final Exam Score: " + finalExam);
    console.log("Assignment Score: " + assignment);
    console.log("Total Score: " + totalScore);
    console.log("Letter Grade: " + letterGrade);

    if (letterGrade === "F") {
        console.log("Status: FAIL");
    } else {
        console.log("Status: PASS");
    }
    if (totalScore >= scholarshipThreshold) {
        console.log("Congratulations! You are eligible for a scholarship.");
    }

    console.log("-------------------------------------");
}

evaluateStudent("Sara", 85, 18, 50, 15, true);    
evaluateStudent("Omar", 60, 15, 40, 10, true);     
evaluateStudent("Laila", 90, 20, 55, 20, false);  
evaluateStudent("Youssef", 95, 20, 60, 15, true); 