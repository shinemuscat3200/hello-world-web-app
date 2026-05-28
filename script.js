const greetingButton = document.querySelector("#greetingButton");
const greeting = document.querySelector("#greeting");

greetingButton.addEventListener("click", () => {
  greeting.textContent = "Hello from your new web app.";
  greetingButton.classList.add("is-success");
});
