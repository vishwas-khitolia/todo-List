Student Registration System
===========================

Objective:
----------
The purpose of this project is to develop a web-based Student Registration System using HTML, CSS (Bootstrap), and JavaScript. It allows users to register students by entering details like name, ID, contact, email, and address. The system also enables editing and deleting records, with data stored in browser's local storage to ensure persistence.

Features Implemented:
----------------------

1. Responsive Design:
   - Implemented using Bootstrap 5.
   - Works smoothly on desktop, tablet, and mobile devices.

2. Form Fields:
   - Name
   - Student ID
   - Email ID
   - Contact Number
   - Address

3. Input Validations:
   - Name: Only alphabetic characters and spaces allowed.
   - Student ID: Must be numeric and unique (duplicate entries restricted).
   - Email: Must follow a proper email format.
   - Contact Number: Must be exactly 10 digits and numeric only.
   - Empty fields are not allowed.

4. Student ID Validation (Uniqueness):
   - While adding a new student, the system checks if the Student ID already exists.
   - This ensures no duplicate student entries.

5. CRUD Functionality:
   - Create: Add a new student with the form.
   - Read: Display all student records in a Bootstrap-styled table.
   - Update: Edit button loads the record into the form for modification.
   - Delete: Deletes a student record after confirmation.

6. Data Storage:
   - All data is saved using the browser’s localStorage.
   - This ensures data is retained even after the page is refreshed or reopened.

7. Auto-incremented Table Row IDs:
   - Row numbers in the table are generated using i + 1 logic in JavaScript.
   - If a record is deleted, the row IDs remain sequential (1, 2, 3...).

8. Scroll Feature:
   - The student list section is scrollable if entries exceed the visible area.
   - Ensures a clean and manageable UI.

9. User Interface Design:
   - Clean UI using Bootstrap: Navbar, Forms, Table, Buttons.
   - Custom striped table rows for improved readability.
   - Form placeholders added for better user guidance.

10. Code Structure:
    - All code is written in a single `index.html` file for simplicity.
    - JavaScript logic is embedded with comments explaining each section.

How to Run:
-----------
1. Open `index.html` in any modern browser.
2. Fill out the form and click Save / Update.
3. View the registered students in the table below.
4. Use Edit to update details, and Delete to remove a record.

Note:
-----

- All validation and functionality requirements as per evaluation criteria have been fulfilled.
- The project is built using Bootstrap 5 for responsive design and enhanced UI.
- On 17/07/2025, during a one-to-one session, I was informed that using Bootstrap is allowed.
- However, if you prefer a version without Bootstrap, I can also provide the same system using only HTML, CSS, and JavaScript.
