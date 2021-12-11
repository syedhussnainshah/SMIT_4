// Color Name Array
const bgColor = ['red', 'green', 'blue', 'pink'];
// Hex Color Array
const bgHexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
// MainSection Div Selected by ID
const mainSection = document.getElementById('mainSection');
// Color Name Show span Select by ID
const color = document.getElementById('color');
// Color Type Name Selected By ID
const colorName = document.getElementById('colorName');
// Hex Color Type Selected by ID
const hexColor = document.getElementById('hexColor');
// Change Color Button Selected by ID
const bgChangeBtn = document.getElementById('bgChangeBtn');

let a = 1;
colorName.onclick = function () {
    a = 1;
}
hexColor.onclick = function () {
    a = 2;
};


bgChangeBtn.addEventListener("click", function () {
    if (a == 1) {
        totalColor = bgColor.length;
        const colorIndex = Math.floor(Math.random() * totalColor);
        mainSection.style.background = bgColor[colorIndex];
        color.innerText = bgColor[colorIndex];
    } else if (a == 2) {
        totalHexColor = bgHexColor.length;
        hexColorName = Math.floor(Math.random() * totalHexColor);
        let hex = '#';
        let i = 0;
        for (i = 0; i < 6; i++) {
            hexColorIndex = Math.floor(Math.random() * totalHexColor);
            hex = hex + bgHexColor[hexColorIndex];
        }
        mainSection.style.background = hex;
        color.innerText = hex;
    } else {
        console.log(a);
    }
});