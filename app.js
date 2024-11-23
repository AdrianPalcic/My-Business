//Sidebar
const sidebarOpenButton = document.querySelector(".open");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseButton = document.querySelector(".close")

sidebarOpenButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden")
    sidebar.classList.add("animate__fadeInRight");
    sidebar.classList.remove("animate__fadeOutRight");

})
sidebarCloseButton.addEventListener("click", () => {
    sidebar.classList.remove("animate__fadeInRight");
    sidebar.classList.add("animate__fadeOutRight");
})

if (sidebar.classList.contains("animate__fadeOutRight")) {
    sidebar.classList.toggle("hidden")

}

//FAQ

const question = document.querySelectorAll(".faquestion");
const answer = document.querySelectorAll(".faqP");
const arrow = document.querySelectorAll(".arrow");

question.forEach((q, i) => {
    q.addEventListener("click", () => {
        answer[i].classList.toggle("hidden");
        arrow[i].classList.toggle("rotate")
    })

})