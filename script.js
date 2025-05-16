const button = document.querySelector(".button"); //select the particular element
const body = document.body; //select the body

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    button.textContent = "Switch to light mode";
  } else {
    button.textContent = "Switch to dark mode";
  }
});

//Added an event on button using add event listner, when the button is clicked a function will run which switch the "mode of screen"
// added a condition that if body is already in a dark-mode user can click the button to swith to light mode or else vice-versa also
// the button text context also changes when button is clicked

//  body.classList.toggle("dark-mode") is used to add or remove css styling of dark-mode to/from the body
