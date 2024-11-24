const passwordBox = document.getElementById("Password");
const length = 40;
const upperCase ="ABCDEFGIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-={}[]:<>.,?/|\~";
const allChars = upperCase + lowerCase + number + symbol;
const PassGenerate = document.getElementById("gen-pass");
const PassCopy = document.getElementById("copy");

PassGenerate.addEventListener("click",()=>{
    createPassword();
})
PassCopy.addEventListener("click",()=>{
    copyPassword();
})

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length >password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    
}
