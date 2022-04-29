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
  if (running) {
    time--;
    countdown--;
  }

  if (time == 0) {
    running = false;
    alert("Congrats, you survived and met your goal!");
  }

  setCount();
  setTime();
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
  editor = sanitizeWords(editor);
  words = editor.split(" ");

  if (words[0] === "") return 0;

  return words.length;
};

const setTime = () => {
  let timer = document.querySelector("#timer");
  timer.innerHTML = formatTime(time);
};

const setCount = () => {
  let wordCount = document.querySelector("#wordcount");
  wordCount.innerHTML = countWords();
};

const sanitizeWords = (words) => {
  words = words.replace(/^\s*|\s*$/g, "");
  words = words.replace(/\s+/g, " ");
  words = words.replace(/\n/g, " ");

  return words;
};

// //TO DO :
// implement timeSinceLastType() listener + consequences
// bonuses? quote api could be neat
// styling ugh
