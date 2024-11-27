function updateDashboardStats() {
    const totalInspections = Math.floor(Math.random() * 101) + 50; // Random number between 50 and 150
    const completedInspections = Math.floor(Math.random() * (totalInspections + 1)); // Random number between 0 and totalInspections
    const pendingRequests = Math.floor(Math.random() * 10); // Random number between 0 and 10
    const userFeedback = Math.floor(Math.random() * 100); // Random number between 0 and 100

    document.getElementById('totalInspections').innerText = totalInspections;
    document.getElementById('completedInspections').innerText = completedInspections;
    document.getElementById('pendingRequests').innerText = pendingRequests;
    document.getElementById('userFeedback').innerText = userFeedback;
}

// Call the function to update stats on page load
updateDashboardStats();