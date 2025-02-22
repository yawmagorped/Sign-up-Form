const pass = document.querySelector("input#password");
const passConfirm = document.querySelector("input#confirmation");
const passContainer = document.querySelector("div#password-container");

passContainer.addEventListener("input", checkEquality);

function checkEquality() {
    if(pass.value == passConfirm.value) {
        pass.className = "valid";
        passConfirm.className = "valid";
    } else {
        pass.className = "invalid";
        passConfirm.className = "invalid";
    }
}