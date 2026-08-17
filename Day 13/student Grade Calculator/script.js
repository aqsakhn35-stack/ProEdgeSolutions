const studentNameInput = document.querySelector("#studentName");
const marksInput = document.querySelector("#marks");
const calculateButton = document.querySelector("#calculateBtn");
const clearButton = document.querySelector("#clearBtn");
const resultElement = document.querySelector("#result");

// Calculate grade using arrow function
const calculateGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 50) return "D";

    return "F";
};

// Calculate percentage
const calculatePercentage = (marks, totalMarks = 100) =>
    (marks / totalMarks) * 100;

// Validate input
const validateInput = () => {
    const studentName = studentNameInput.value.trim();
    const marksValue = marksInput.value;

    if (studentName === "") {
        resultElement.textContent = "Please enter student name.";
        return false;
    }

    if (marksValue === "") {
        resultElement.textContent = "Please enter obtained marks.";
        return false;
    }

    const marks = Number(marksValue);

    if (marks < 0 || marks > 100) {
        resultElement.textContent =
            "Marks must be between 0 and 100.";
        return false;
    }

    return true;
};

// Calculate button
calculateButton.addEventListener("click", () => {

    if (!validateInput()) return;

    const studentName = studentNameInput.value.trim();
    const marks = Number(marksInput.value);

    const percentage = calculatePercentage(marks);
    const grade = calculateGrade(marks);

    resultElement.innerHTML = `
        <strong>Student:</strong> ${studentName}<br>
        <strong>Marks:</strong> ${marks}/100<br>
        <strong>Percentage:</strong> ${percentage}%<br>
        <strong>Grade:</strong> ${grade}
    `;
});

// Clear button
clearButton.addEventListener("click", () => {
    studentNameInput.value = "";
    marksInput.value = "";

    resultElement.textContent =
        "Enter your details to calculate the grade.";
});