document.getElementById('inspectionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('inspectionDate').value;
    const location = document.getElementById('inspectionLocation').value;
    const inspector = document.getElementById('inspectorName').value;

    addInspectionToTable(date, location, inspector);
    updateDashboardStats();
    this.reset();
});

function addInspectionToTable(date, location, inspector) {
    const tableBody = document.getElementById('inspectionTable').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${location}</td>
        <td>${inspector}</td>
        <td><button onclick="deleteInspection(this)">${translations[localStorage.getItem('selectedLanguage') || 'en'].deleteButton}</button></td>
    `;
    tableBody.appendChild(newRow);
}

function deleteInspection(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
    updateDashboardStats();
}