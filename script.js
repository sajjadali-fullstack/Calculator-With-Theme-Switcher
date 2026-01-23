
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        if (value === "=") {
            try {
                expression = eval(expression);
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        }
        else if (value === "AC") {
            expression = "";
            input.value = "";
        }
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
        }



        else {
            expression += value;
            input.value = expression;
        }
    });
});


const toggleBtn = document.getElementById("modeToggle");

// 1️⃣ AUTO SYSTEM DARK MODE
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// 2️⃣ LOAD SAVED MODE
const savedMode = localStorage.getItem("theme");

if (savedMode === "dark" || (!savedMode && prefersDark)) {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
}

// 3️⃣ TOGGLE + SAVE MODE
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});