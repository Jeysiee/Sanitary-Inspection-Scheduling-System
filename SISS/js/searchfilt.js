// JavaScript for Search and Filter Functionality
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const filterDate = document.getElementById('filterDate');
    const filterButton = document.getElementById('filterButton');
    const inspectionTable = document.getElementById('inspectionTable').getElementsByTagName('tbody')[0];

    // Function to filter inspections
    function filterInspections() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedDate = filterDate.value;

        // Loop through all rows in the inspection table
        for (let i = 0; i < inspectionTable.rows.length; i++) {
            const row = inspectionTable.rows[i];
            const dateCell = row.cells[0].innerText;
            const locationCell = row.cells[1].innerText.toLowerCase();
            const inspectorCell = row.cells[2].innerText.toLowerCase();

            // Check if the row matches the search term and date filter
            const matchesSearch = locationCell.includes(searchTerm) || inspectorCell.includes(searchTerm);
            const matchesDate = selectedDate ? dateCell === selectedDate : true;

            // Show or hide the row based on the filters
            if (matchesSearch && matchesDate) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    }

    // Event listener for the filter button
    filterButton.addEventListener('click', filterInspections);

    // Optional: Add event listener for the search input to filter on every keypress
    searchInput.addEventListener('input', filterInspections);
});