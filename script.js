
// Function to handle navigation to the schedule page with mentor name
function goToSchedule(mentorName) {
    // Save the selected mentor name in localStorage
    localStorage.setItem('selectedMentor', mentorName);

    // Redirect to the schedule form page
    window.location.href = 'schedule.html';
}

// On the schedule.html page, populate the mentor field with the selected mentor's name
document.addEventListener('DOMContentLoaded', function () {
    const mentorField = document.getElementById('mentor');

    // Check if the mentor field exists on the current page
    if (mentorField && localStorage.getItem('selectedMentor')) {
        mentorField.value = localStorage.getItem('selectedMentor');
    }
 // Function to show the mentor list
function showMentors() {
    const mentorList = document.getElementById('mentorList');
    mentorList.style.display = 'block'; 
// Show the mentor list
}

});

