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
//animations

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-me');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with animate-left or animate-right classes
    const elementsToAnimate = document.querySelectorAll('.animate-left, .animate-right');

    // Create the IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check the class of the element and add the appropriate custom animation class
                if (entry.target.classList.contains('animate-left')) {
                    entry.target.classList.add('animate__fadeInLeft'); // Apply fadeInLeft
                } else if (entry.target.classList.contains('animate-right')) {
                    entry.target.classList.add('animate__fadeInRight'); // Apply fadeInRight
                }

                // Optional: Stop observing the element after it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Trigger when 50% of the element is visible

    // Start observing each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


//FAQ

const questions = document.querySelectorAll('.faquestion');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('.answer');
        if (question.classList.contains('active')) {
            // If it's active, collapse it
            answer.style.transition = 'height 0.3s ease';
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