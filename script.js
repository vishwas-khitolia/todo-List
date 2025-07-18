// localStorage se students data uthaya ja raha hai ya agar nahi mila to empty array
let students = JSON.parse(localStorage.getItem("students")) || [];

// Form aur Table ke HTML elements ko access kiya gaya hai
const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTable");

// localStorage me students data save karne ka function
function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

// Table me saare students ko render (display) karne ka kaam
function renderTable() {
  tableBody.innerHTML = ""; // Pehle table ko clear kar do
  students.forEach((student, i) => {
    const row = document.createElement("tr"); // Ek naya row banaya
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${student.name}</td>
      <td>${student.studentId}</td>
      <td>${student.email}</td>
      <td>${student.contact}</td>
      <td>${student.address}</td>
      <td>
        <!-- Edit aur Delete ke buttons icons ke sath -->
        <button class="btn btn-sm btn-warning me-2" onclick="editStudent(${i})">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn btn-sm btn-danger" onclick="deleteStudent(${i})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    tableBody.appendChild(row); // Row ko table me add kiya
  });
}

// Form ke submit hone par data validate aur add/update kiya jaata hai
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Form ka default reload behavior roka

  // Form fields ka value uthaya
  const name = document.getElementById("name").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const address = document.getElementById("address").value.trim();
  const editIndex = document.getElementById("editIndex").value;

  // Validations: naam sirf characters, studentId only number, unique, etc.
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

  // Student object banaya
  const studentData = { name, studentId, email, contact, address };

  // Agar edit ho raha hai to us index par update karo, warna naya add karo
  if (editIndex !== "") {
    students[editIndex] = studentData;
    document.getElementById("studentId").disabled = false;
  } else {
    students.push(studentData);
  }

  // localStorage update + table dobara render
  saveToLocalStorage();
  renderTable();
  form.reset(); // Form reset
  document.getElementById("editIndex").value = "";
  document.getElementById("studentId").disabled = false;
});

// Edit button click hone par data form me preload ho jaata hai
function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("studentId").value = student.studentId;
  document.getElementById("email").value = student.email;
  document.getElementById("contact").value = student.contact;
  document.getElementById("address").value = student.address;
  document.getElementById("editIndex").value = index;
  document.getElementById("studentId").disabled = true; // ID disable taaki unique bane rahe
}

// Delete button click hone par confirm box aata hai, fir delete hota hai
function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1); // Student ko list se hata do
    saveToLocalStorage();
    renderTable();
  }
}

// Page load hote hi table render hoti hai
renderTable();
