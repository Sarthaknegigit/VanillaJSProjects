const msgEl = document.getElementById("msg");

const randomNum = getRandomNum();

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

//Start game
recognition.start();

//capturing user voice
function onSpeak(e) {
  // console.log(e);
  const msg = e.results[0][0].transcript;
  showMsg(msg);
  validateMsg(msg);
}

//showing the spoken message
function showMsg(msg) {
  msgEl.innerHTML = `
     <div>YOU SAID:</div>
    <span class="box">${msg}</span>
    
     `;
}

//Validating Msg
function validateMsg(msg) {
  const num = +msg;

  //Number or not
  if (Number.isNaN(num)) {
    msgEl.innerHTML += "<div> Please speak a valid number ! </div>";
    return;
  }

  //Validating number against the range
  if (num < 1 || num > 50) {
    msgEl.innerHTML += "<div> Please speak a Number between 1-50 !</div>";
    return;
  }

  //for result
  if (num === randomNum) {
    document.body.innerHTML = `
        <h1>YOU WON</h1>
        <h2>You guessed the number <em>${randomNum}</em> Correctly.</h2>
        <button class="play-btn" id="play-btn">PLAY AGAIN</button>
        `;
  } else if (num > randomNum) {
    msgEl.innerHTML += "<div> Go LOWER!</div>";
  } else {
    msgEl.innerHTML += "<div> Go HIGHER!</div>";
  }
}

//getting a random No.
function getRandomNum() {
  x = Math.floor(Math.random() * 50) + 1;
  return x;
}

//Event Listeners
recognition.addEventListener("result", onSpeak);

recognition.addEventListener("end", function () {
  recognition.start();
});

document.body.addEventListener("click", function (e) {
  if (e.target.id == "play-btn") {
    window.location.reload();
  }
});
console.log(x);
