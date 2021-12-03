// Select Counter Div
const counter = document.getElementById("value");

let counterNumber = 0;

// Select All Button
const btnGroup = document.querySelectorAll('.btn');
// Use Foreach Loop to select clicked button
btnGroup.forEach(function (btn) {
    btn.onclick = function (e) {
        // Call All btn Classes
        const btnType = e.currentTarget.classList;
        // Check btn Classes
        if (btnType.contains("increment")) {
            counterNumber++;
        } else if (btnType.contains("decrement")) {
            counterNumber--;
        } else {
            counterNumber = 0;
        }
        // Pass value to Counter Div
        counter.innerText = counterNumber;
        if (counterNumber > 0) {
            counter.style.color = "green";
        } else if (counterNumber < 0) {
            counter.style.color = "red";
        } else {
            counter.style.color = "black";
        }

    };
});