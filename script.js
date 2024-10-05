const form = document.getElementById('jobApplicationForm');
const tableBody = document.getElementById('applicationsBody');
const table = document.getElementById('applicationsTable');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    // Create a new row for the table
    const newRow = tableBody.insertRow();

    // Insert each field into the corresponding table cell
    newRow.insertCell(0).textContent = formData.get('firstName');
    newRow.insertCell(1).textContent = formData.get('lastName');
    newRow.insertCell(2).textContent = formData.get('phone');
    newRow.insertCell(3).textContent = formData.get('email');
    newRow.insertCell(4).textContent = formData.get('street');
    newRow.insertCell(5).textContent = formData.get('city');
    newRow.insertCell(6).textContent = formData.get('state');
    newRow.insertCell(7).textContent = formData.get('zip');
    newRow.insertCell(8).textContent = formData.get('resume').name; // get file name
    newRow.insertCell(9).textContent = formData.get('coverLetter');
    newRow.insertCell(10).textContent = formData.get('educationLevel');
    newRow.insertCell(11).textContent = formData.get('school');
    newRow.insertCell(12).textContent = formData.get('major');
    newRow.insertCell(13).textContent = formData.get('gradYear');
    newRow.insertCell(14).textContent = formData.get('jobTitle');
    newRow.insertCell(15).textContent = formData.get('companyName');
    newRow.insertCell(16).textContent = formData.get('jobDates');
    newRow.insertCell(17).textContent = formData.get('responsibilities');
    newRow.insertCell(18).textContent = formData.get('skills');
    newRow.insertCell(19).textContent = formData.get('certifications');
    newRow.insertCell(20).textContent = formData.get('startDate');
    newRow.insertCell(21).textContent = formData.get('relocate');
    newRow.insertCell(22).textContent = formData.get('schedule');
    newRow.insertCell(23).textContent = formData.get('refName');
    newRow.insertCell(24).textContent = formData.get('refContact');
    newRow.insertCell(25).textContent = formData.get('refRelationship');
    newRow.insertCell(26).textContent = formData.get('whyCompany');

    // Show the table
    table.style.display = 'table';

    // Reset the form
    form.reset();
});

function displayTable() {
    table.style.display = 'table';
}
