// Student records stored in an array of objects
let students = [];


// Get HTML elements
const studentForm = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const studentId = document.getElementById("studentId");
const department = document.getElementById("department");
const semester = document.getElementById("semester");
const email = document.getElementById("email");
const contact = document.getElementById("contact");

const studentTableBody = document.getElementById("studentTableBody");
const studentCount = document.getElementById("studentCount");
const errorMessage = document.getElementById("errorMessage");
const noRecords = document.getElementById("noRecords");


// Add Student
studentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const nameValue = studentName.value.trim();
    const idValue = studentId.value.trim();
    const departmentValue = department.value.trim();
    const semesterValue = semester.value.trim();
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();


    // Validation: Empty fields
    if (
        nameValue === "" ||
        idValue === "" ||
        departmentValue === "" ||
        semesterValue === "" ||
        emailValue === "" ||
        contactValue === ""
    ) {
        showError("Please fill in all fields.");
        return;
    }


    // Validation: Duplicate Student ID
    const duplicateId = students.some(function (student) {
        return student.id.toLowerCase() === idValue.toLowerCase();
    });

    if (duplicateId) {
        showError("Student ID already exists. Please use a different ID.");
        return;
    }


    // Validation: Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        showError("Please enter a valid email address.");
        return;
    }


    // Create student object
    const student = {
        name: nameValue,
        id: idValue,
        department: departmentValue,
        semester: semesterValue,
        email: emailValue,
        contact: contactValue
    };


    // Add object to array
    students.push(student);


    // Update display
    displayStudents();

    // Clear form
    studentForm.reset();

    // Clear error message
    errorMessage.textContent = "";
});


// Display students dynamically
function displayStudents() {

    studentTableBody.innerHTML = "";


    if (students.length === 0) {

        noRecords.style.display = "block";
        studentCount.textContent = "0";

        return;
    }


    noRecords.style.display = "none";


    // Loop through student array
    students.forEach(function (student, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.department}</td>
            <td>${student.semester}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td>
                <button
                    class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        studentTableBody.appendChild(row);
    });


    // Update total student count
    studentCount.textContent = students.length;
}


// Delete student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}


// Show error message
function showError(message) {

    errorMessage.textContent = message;
}


// Initial display
displayStudents();