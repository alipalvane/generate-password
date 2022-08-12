const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  input.value = generatePassword(16);
});

const generatePassword = (length = 16) => {
  let charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-?/`";
  let password = "";
  for (let i = 0; i < length; ++i) {
    let at = Math.floor(Math.random() * (charset.length + 1));
    password += charset.charAt(at);
  }
  return password
};
