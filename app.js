const passwordBox = document.querySelector(".text");
const lengths = "12";

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_{}[]:<>?/";

const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  console.log(password);

  while (lengths > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

const button = document.querySelector(".generate");
button.addEventListener("click", generatePassword);

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
const copy = document.querySelector(".main img");
copy.addEventListener("click", copyPassword);
