const captchaCode = document.querySelector('.captcha-token');
const captchaInput = document.querySelector('.captcha-input');
const captchaBtn = document.querySelector('.submit-btn');
const result = document.querySelector(".result");
const reloadCaptcha = document.querySelector(".reloadCaptcha");

const captcha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let captcahValue = '';

function captchaGen() {
    for (let i = 0; i <= 5; i++) {
        const captchaDigit = Math.floor(Math.random() * captcha.length);
        captcahValue = captcahValue + captcha[captchaDigit];
    }
}

// Regenerate Captcha
function regeneratecaptcha() {
    captcahValue = "";
    captchaGen();
    captchaCode.innerText = captcahValue;
}


document.onload = captchaGen();
captchaCode.innerText = captchaCode.innerText + captcahValue;

// Reload Captcha Code
reloadCaptcha.onclick = function () {
    regeneratecaptcha();
}


captchaBtn.onclick = function () {
    event.preventDefault();
    if (captchaInput.value == captcahValue) {
        result.style.color = "green";
        result.innerText = "Congratulation You Solve Captcha";
        captchaInput.value = "";
        regeneratecaptcha();
    } else {
        result.style.color = "red";
        result.innerText = "You Fail, Please Try Again";
        captchaInput.value = "";
        regeneratecaptcha();
    }
}