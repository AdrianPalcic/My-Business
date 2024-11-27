//Sidebar
const sidebarOpenButton = document.querySelector(".open");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseButton = document.querySelector(".close")

sidebarOpenButton.addEventListener("click", () => {
    sidebar.classList.remove("hidden")
    sidebar.classList.add("animate__fadeInRight");
    sidebar.classList.remove("animate__fadeOutRight");

})
sidebarCloseButton.addEventListener("click", () => {
    sidebar.classList.remove("animate__fadeInRight");
    sidebar.classList.add("animate__fadeOutRight");
    setTimeout(() => {
        sidebar.classList.add("hidden")
    }, 500)
})

//FAQ

const questions = document.querySelectorAll('.faquestion');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('.answer');
        if (question.classList.contains('active')) {
            // If it's active, collapse it
            answer.style.transition = 'height 0.6s ease';
            answer.style.height = '0'; // Collapse immediately
            question.classList.remove('active');
        } else {
            // If it's not active, expand it
            answer.style.transition = 'height 0.6s ease';
            answer.style.height = answer.scrollHeight + 'px'; // Set to full height
            question.classList.add('active');
        }
    });
});

//Form

const form = document.getElementById("form");
const nameInput = document.getElementById("ime");
const surnameInput = document.getElementById("prezime")
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!nameInput.value || !surnameInput.value || !emailInput.value) {
        alert("Please fill in all fields");
        return
    }
})