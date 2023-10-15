document.addEventListener('DOMContentLoaded', () => {
    const dayInput = document.getElementById('DD');
    const monthInput = document.getElementById('MM');
    const yearInput = document.getElementById('YYYY');

    dayInput.addEventListener('input', () => {
        if (dayInput.value.length === 2) {
            monthInput.focus();
            monthInput.select();  // Select the contents of the month input
        }
    });

    monthInput.addEventListener('input', () => {
        if (monthInput.value.length === 2) {
            yearInput.focus();
            yearInput.select();  // Select the contents of the year input
        }
    });
});


const name1 = document.getElementById("name");
const DD = document.getElementById("DD");
const MM = document.getElementById("MM");
const YYYY = document.getElementById("YYYY");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
const day = parseInt(DD.value);
const month = parseInt(MM.value);
const year = parseInt(YYYY.value);

if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 9999) {
// Invalid input, change button color to red
btn.style.backgroundColor = "red";

// Revert to the original blue color after 500 milliseconds
setTimeout(() => {
    btn.style.backgroundColor = "#3498db";
}, 200);

return;
}

let FM = localStorage.getItem("Form_NO");
if (FM == null) {
    FM = 1;
} else {
    FM++;
}

localStorage.setItem("Form_NO", FM);
localStorage.setItem("Name" + FM, name1.value);
localStorage.setItem("DD" + FM, DD.value);
localStorage.setItem("MM" + FM, MM.value);
localStorage.setItem("YYYY" + FM, YYYY.value);

localStorage.setItem("First","1");
// Delay the redirection by 500 milliseconds (0.5 seconds)
setTimeout(() => {
window.location.href = "display.html";
}, 500);
});

const back = document.getElementById("btn-back");
back.addEventListener("click",()=>{
    localStorage.setItem("First","1");
    window.location.href = "display.html";
})
localStorage.setItem("toggle_d", "dnone");
