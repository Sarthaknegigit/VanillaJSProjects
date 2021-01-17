const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Functions

// To Play and Pause the video
function toggleVidState() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// To Change the play icon to play/pause according to vid state
function changePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// To update ProgressBar and Timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}
//To Access a particular timestamp using progressbar
function setVidProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}
//To stop the video(get the player to start of the video in paused state)
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event Listeners

video.addEventListener("click", toggleVidState);
video.addEventListener("play", changePlayIcon);
video.addEventListener("pause", changePlayIcon);
video.addEventListener("timeupdate", updateProgress);
play.addEventListener("click", toggleVidState);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVidProgress);
