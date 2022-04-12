const submit = document.querySelector("#submit");
let time;
let grace;
let difficulty;

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const radioButtons = document.querySelectorAll('input[name="difficulty"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      difficulty = radioButton.value;
      break;
    }
  }

  time = document.querySelector('input[name="time"]').value * 60;
  grace = document.querySelector("select[name=grace-period]").value;

  console.log(difficulty);
  console.log(time);
  console.log(grace);
});
