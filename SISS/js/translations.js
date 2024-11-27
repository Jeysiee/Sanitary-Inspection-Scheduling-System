const translations = {
    en: {
        title: "SANIDA",
        home: "Dashboard",
        scheduledInspections: "Scheduled Inspections",
        reports: "Reports",
        feedback: "Feedback",
        settings: "Settings",
        language: "Language",
        dateLabel: "Inspection Date",
        locationLabel: "Inspection Location",
        inspectorLabel: "Inspector Name",
        addButton: "Add Inspection",
        deleteButton: "Delete",
        totalInspections: "Total Inspections",
        completedInspections: "Completed Inspections",
        pendingRequests: "Pending Requests",
        userFeedback: "User  Feedback",
    },
    tl: {
        title: "SANIDA",
        home: "Dashboard",
        scheduledInspections: "Naka-iskedyul na mga Inspeksyon",
        reports: "Ulat",
        feedback: "Puna",
        settings: "Mga Setting",
        language: "Wika",
        dateLabel: "Petsa ng Inspeksyon",
        locationLabel: "Lokasyon ng Inspeksyon",
        inspectorLabel: "Pangalan ng Inspektor",
        addButton: "Magdagdag ng Inspeksyon",
        deleteButton: "Tanggalin",
        totalInspections: "Kabuuang Inspeksyon",
        completedInspections: "Nakompletong Inspeksyon",
        pendingRequests: "Naka-pending na mga Kahilingan",
        userFeedback: "Puna ng Gumagamit",
    }
};

function changeLanguage(lang) {
    // Update the text content based on the selected language
    document.querySelector('.navbar-brand').innerHTML = `
        <img src="path/to/your/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-top mr-2">
        ${translations[lang].title}
    `;

    // Update navbar links
    document.querySelector('.nav-item.active .nav-link').textContent = translations[lang].home;
    document.querySelectorAll('.nav-item:not(.active) .nav-link')[0].textContent = translations[lang].scheduledInspections;
    document.querySelectorAll('.nav-item:not(.active) .nav-link')[1].textContent = translations[lang].reports;
    document.querySelectorAll('.nav-item:not(.active) .nav-link')[2].textContent = translations[lang].feedback;
    document.querySelectorAll('.nav-item:not(.active) .nav-link')[3].textContent = translations[lang].settings;

    // Update the language dropdown text
    document.querySelector('.nav-link.dropdown-toggle').textContent = translations[lang].language;

    // Update form labels
    document.getElementById('inspectionDateLabel').textContent = translations[lang].dateLabel;
    document.getElementById('inspectionLocationLabel').textContent = translations[lang].locationLabel;
    document.getElementById('inspectorNameLabel').textContent = translations[lang].inspectorLabel;
    document.getElementById('addInspectionButton').textContent = translations[lang].addButton;

    // Update dashboard stats labels
    document.getElementById('totalInspectionsLabel').textContent = translations[lang].totalInspections;
    document.getElementById('completedInspectionsLabel').textContent = translations[lang].completedInspections;
    document.getElementById('pendingRequestsLabel').textContent = translations[lang].pendingRequests;
    document.getElementById('userFeedbackLabel').textContent = translations[lang].userFeedback;

    // Store the selected language in local storage
    localStorage.setItem('selectedLanguage', lang);
}

function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to English
    changeLanguage(savedLanguage);
}