// Function to calculate age and create a form
function calculate(person, dd, mm, yyyy, formIndex) {
    const currentDate = new Date();

    let rd, rm, ry;
    let cd, cm, cy;

    cd = currentDate.getDate();
    cm = currentDate.getMonth() + 1;
    cy = currentDate.getFullYear();

    ry = cy - yyyy;
    rm = cm - mm;
    rd = cd - dd;

    if(rd<0){
        rm-=1;
        rd+=30;
    }
    if (rm<0) {
        ry-=1;
        rm+=12;        
    }

    // if (cm < mm) {
    //     ry -= 1;
    //     rm += 12;
    // }
    // if (cd < dd) {
    //     rm -= 1;
    //     rd += 30;
    // }

    //----------------

    if (mm < 10) {
        mm = "0" + mm;
    }
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (yyyy < 10) {
        yyyy = "0" + yyyy;
    }

    //------------

    if (rm < 10) {
        rm = "0" + rm;
    }
    if (rd < 10) {
        rd = "0" + rd;
    }
    if (ry < 10) {
        ry = "0" + ry;
    }

    const toggle_d = localStorage.getItem("toggle_d");

    const form = document.createElement('form');
    form.innerHTML = `
    <div class="form_element">
        <label for="person">Name</label>
        <input type="text" id="person" value="${person}" readonly>
    </div>
    <div id="output_date">
    <div class="form_element">
        <label for="DD">DD</label>
        <input type="text" id="DD" value="${dd}" readonly>
    </div>
    <div class="form_element">
        <label for="MM">MM</label>
        <input type="text" id="MM" value="${mm}" readonly>
    </div>
    <div class="form_element">
        <label for="YYYY">YYYY</label>
        <input type="text" id="YYYY" value="${yyyy}" readonly>
    </div>
    </div>
    

    <div class="form_element">
<label for="name">Age</label>
<textarea id="age" readonly>${ry} years ${rm} months ${rd} days</textarea>
</div>

    <button class="delete-button ${toggle_d}" onclick="deleteForm(${formIndex})">Delete</button>`;

    const formDisplay = document.querySelector('.form_display');
    formDisplay.appendChild(form);
}

// Example usage
// calculate("raman", 12, 8, 2005, 1);
// calculate("tarun", 12, 8, 2006, 2);
// calculate("shory", 12, 8, 2006, 3);

// Function to update the displayed forms
function updateForms() {
    const formDisplay = document.querySelector('.form_display');
    formDisplay.innerHTML = ''; // Clear existing forms

    const FM = localStorage.getItem("Form_NO");
    for (let i = 1; i <= FM; i++) {
        const name = localStorage.getItem("Name" + i);
        const DD = localStorage.getItem("DD" + i);
        const MM = localStorage.getItem("MM" + i);
        const YYYY = localStorage.getItem("YYYY" + i);

        if (name == null) {

        } else {
            calculate(name, parseInt(DD), parseInt(MM), parseInt(YYYY), i);
        }
    }
}

// Initial update of forms
updateForms();

// Auto-update the forms every 10 seconds
setInterval(updateForms, 100); // 10,00 milliseconds = 1 seconds

// Function to delete the form and remove from localStorage
function deleteForm(formIndex) {
    localStorage.removeItem("Name" + formIndex);
    localStorage.removeItem("DD" + formIndex);
    localStorage.removeItem("MM" + formIndex);
    localStorage.removeItem("YYYY" + formIndex);

    // Update the displayed forms after deletion
    updateForms();
}

let deleteButtonVisible = false;  // Variable to track delete button visibility

function toggleClass() {
    // const deleteButtons = document.querySelectorAll('.delete-button');
    // for (const button of deleteButtons) {
    //     // button.classList.toggle('block');
    //     button.classList.remove('dnone');
    // }
    if (localStorage.getItem("toggle_d") === null) {
        localStorage.setItem("toggle_d", "dnone")
    }
    if (localStorage.getItem("toggle_d") == "dnone") {
        localStorage.setItem("toggle_d", "block");
    } else {
        localStorage.setItem("toggle_d", "dnone")
    }
}

// Rest of your JavaScript code remains unchanged
// <div class="form_element">
//         <label for="name">Age</label>
//         <input type="text" id="age" value="${ry} years ${rm} months ${rd} days" readonly>
//     </div>

function reform() {
    localStorage.setItem("First", "0")
    window.location.href = "index1.html";
}