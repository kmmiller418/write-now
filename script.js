const submit = document.querySelector("#submit");
let time;
let grace;
let difficulty;
let running;
let countdown;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  setSettings();
  startEditor();
});

const setSettings = () => {
  const radioButtons = document.querySelectorAll('input[name="difficulty"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      difficulty = radioButton.value;
      break;
    }
  }

  time = document.querySelector('input[name="time"]').value * 60;
  grace = document.querySelector("select[name=grace-period]").value;
  countdown = grace;

  console.log(difficulty);
  console.log(time);
  console.log(grace);
};

const startEditor = () => {
  const settings = document.querySelector("#settings-page");
  const editor = document.querySelector("#writing-box");

  settings.classList.add("hidden");
  editor.classList.remove("hidden");

  running = true;

  setInterval(() => {
    tick();
  }, 1000);
};

const tick = () => {
  let timer = document.querySelector("#timer");
  let wordCount = document.querySelector("#wordcount");

  if (running){
    time--;
    countdown--;
  }

  if (time == 0){
    running = false;
    alert("Congrats, you survived and met your goal!")
  }

  wordCount.innerHTML = countWords();
  timer.innerHTML = formatTime(time);
};

const formatTime = (time) => {
  let min = String(Math.floor(time / 60));
  let sec = String(time % 60);

  if (min.length < 2) min = "0" + min;
  if (sec.length < 2) sec = "0" + sec;

  return min + ":" + sec;
};

const countWords = () => {
    const editor = document.querySelector("#textbox").value;
    words = editor.split(" ");

    if (words[0] === "") return 0;

    return words.length;
    /// Currently, counts a new word as soon as a space is detected, look into regex?
}

// //TO DO :
// implement timeSinceLastType() listener + consequences
// bonuses? quote api could be neat 
// styling ugh