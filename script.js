

function goToSchedule(mentorName) {
    localStorage.setItem('selectedMentor', mentorName);
    window.location.href = 'schedule.html';
}


document.addEventListener('DOMContentLoaded', function () {
    const mentorField = document.getElementById('mentor');

    
    if (mentorField && localStorage.getItem('selectedMentor')) {
        mentorField.value = localStorage.getItem('selectedMentor');
    }
function showMentors() {
    const mentorList = document.getElementById('mentorList');
    mentorList.style.display = 'block'; 
}

});

