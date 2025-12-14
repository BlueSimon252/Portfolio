const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");
};




const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

editJobBtn.onclick = function () {
    const newTitle = prompt("Enter your new job title:");
    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
};

const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.onclick = function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
};


const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.onkeyup = function () {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
};




function validateForm() {
    const name = document.getElementById("nameField").value;
    const email = document.getElementById("emailField").value;

    if (name === "" || email === "") {
        alert("Please fill in Name and Email fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}




const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();
dateDisplay.textContent = today.toDateString();


const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning! ☀️";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon! 🌤️";
} else {
    greeting.textContent = "Good Evening! 🌙";
}
