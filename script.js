let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let milisecondsElement = document.getElementById('miliseconds');

let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');

buttonStop.disabled = true;
buttonReset.disabled = true;

let interval;

function startTimer() {
  miliseconds++;

  if (miliseconds <= 9) {
    milisecondsElement.innerHTML = '0' + miliseconds;
  }
  if (miliseconds > 9) {
    milisecondsElement.innerHTML = miliseconds;
  }

  if (miliseconds >= 99) {
    seconds++;
    miliseconds = 0;
    secondsElement.innerHTML = '0' + seconds;
  }
  if (seconds > 9) {
    secondsElement.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    minutesElement.innerHTML = '0' + minutes;
    seconds = 0;
    secondsElement.innerHTML = '0' + seconds;
  }
  if (minutes > 9) {
    minutesElement.innerHTML = minutes;
  }
}

let intervalId;

function start() {
  intervalId = setInterval(startTimer, 10);
  buttonStart.removeEventListener('click', start);
  buttonStop.addEventListener('click', stop);
  buttonReset.addEventListener('click', reset);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  buttonReset.disabled = false;
}

function stop() {
  clearInterval(intervalId);
  buttonStart.addEventListener('click', start);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  buttonStop.removeEventListener('click', stop);
}

function reset() {
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  minutesElement.innerHTML = '0' + minutes;
  secondsElement.innerHTML = '0' + seconds;
  milisecondsElement.innerHTML = '0' + miliseconds;
  clearInterval(intervalId);
  buttonStart.addEventListener('click', start);
  buttonReset.removeEventListener('click', reset);

  buttonStart.disabled = false;
  buttonStop.disabled = true;
  buttonReset.disabled = true;
}

buttonStart.addEventListener('click', start);
