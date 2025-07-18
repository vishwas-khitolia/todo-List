let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTable");

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}
function renderTable() {
  tableBody.innerHTML = "";
  students.forEach((student, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${student.name}</td>
      <td>${student.studentId}</td>
      <td>${student.email}</td>
      <td>${student.contact}</td>
      <td>${student.address}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="editStudent(${i})">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn btn-sm btn-danger" onclick="deleteStudent(${i})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const address = document.getElementById("address").value.trim();
  const editIndex = document.getElementById("editIndex").value;

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Name must contain only letters.");
    return;
  }
  if (!/^\d+$/.test(studentId)) {
    alert("Student ID must be a number.");
    return;
  }
  if (editIndex === "" && students.some((stu) => stu.studentId === studentId)) {
    alert("Student ID already exists.");
    return;
  }
  if (!/^\d{10}$/.test(contact)) {
    alert("Contact number must be 10 digits.");
    return;
  }
  if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert("Invalid email format.");
    return;
  }

  const studentData = { name, studentId, email, contact, address };

  if (editIndex !== "") {
    students[editIndex] = studentData;
    document.getElementById("studentId").disabled = false;
  } else {
    students.push(studentData);
  }

  saveToLocalStorage();
  renderTable();
  form.reset();
  document.getElementById("editIndex").value = "";
  document.getElementById("studentId").disabled = false;
});

function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("studentId").value = student.studentId;
  document.getElementById("email").value = student.email;
  document.getElementById("contact").value = student.contact;
  document.getElementById("address").value = student.address;
  document.getElementById("editIndex").value = index;
  document.getElementById("studentId").disabled = true;
}

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    saveToLocalStorage();
    renderTable();
  }
}

renderTable();
