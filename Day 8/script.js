const form = document.getElementById("gradeForm");
const resetButton = document.getElementById("resetButton");

const errorMessage = document.getElementById("errorMessage");
const resultSection = document.getElementById("resultSection");

const displayName = document.getElementById("displayName");
const displayRoll = document.getElementById("displayRoll");
const totalMarks = document.getElementById("totalMarks");
const percentage = document.getElementById("percentage");
const grade = document.getElementById("grade");
const status = document.getElementById("status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    errorMessage.textContent = "";

    const studentName = document.getElementById("studentName").value.trim();
    const rollNumber = document.getElementById("rollNumber").value.trim();

    if (studentName === "" || rollNumber === "") {
        errorMessage.textContent =
            "Please enter student name and roll number.";
        return;
    }

    const subjectInputs = [
        document.getElementById("subject1"),
        document.getElementById("subject2"),
        document.getElementById("subject3"),
        document.getElementById("subject4"),
        document.getElementById("subject5")
    ];

    let marks = [];

    for (let i = 0; i < subjectInputs.length; i++) {

        if (subjectInputs[i].value === "") {
            errorMessage.textContent =
                "Please enter marks for all subjects.";
            return;
        }

        const mark = Number(subjectInputs[i].value);

        if (mark < 0 || mark > 100) {
            errorMessage.textContent =
                "Marks must be between 0 and 100.";
            return;
        }

        marks.push(mark);
    }

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    const percentageValue = (total / 500) * 100;

    let gradeValue;

    if (percentageValue >= 80) {
        gradeValue = "A";
    } else if (percentageValue >= 70) {
        gradeValue = "B";
    } else if (percentageValue >= 60) {
        gradeValue = "C";
    } else if (percentageValue >= 50) {
        gradeValue = "D";
    } else {
        gradeValue = "F";
    }

    let statusValue;

    if (percentageValue >= 50) {
        statusValue = "Pass";
    } else {
        statusValue = "Fail";
    }

    displayName.textContent = studentName;
    displayRoll.textContent = rollNumber;
    totalMarks.textContent = total;
    percentage.textContent = percentageValue.toFixed(2) + "%";
    grade.textContent = gradeValue;
    status.textContent = statusValue;

    resultSection.style.display = "block";
});

resetButton.addEventListener("click", function () {
    form.reset();

    errorMessage.textContent = "";
    resultSection.style.display = "none";

    displayName.textContent = "-";
    displayRoll.textContent = "-";
    totalMarks.textContent = "-";
    percentage.textContent = "-";
    grade.textContent = "-";
    status.textContent = "-";
});