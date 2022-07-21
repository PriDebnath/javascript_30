// targeting all html elements

let player = document.querySelector(".player");

let video = document.querySelector(".video");

let playerControls = document.querySelector(".player_controls");

let progress = document.querySelector(".progress");

let process_filled = document.querySelector(".progress_filled");

let ranges = document.querySelectorAll(".range");
let playBtn = document.querySelector(".play");

let skipBtns = document.querySelectorAll("[data-skip]");

let file = document.getElementById("file");

let fullBtn = document.getElementById("fullBtn");

// All features functions

function goFull() {
  console.log("full");
  video.classList.toggle("goFull");
}

function togglePlay(e) {
  if (video.paused) {
    video.play();
  } else if (video.played) {
    video.pause();
  }
}

function handleFile(e) {
  video.src = URL.createObjectURL(this.files[0]);
}

function updateBtn() {
  playBtn.innerText = this.paused ? "▶️" : "⏸️";
}

function skip() {
  let skipValue = this.dataset.skip;
  video.currentTime += parseInt(skipValue);
}

function handleRangeUpdate() {
  if (this.name == "volume") {
    video.volume = this.value;
  }
  if (this.name == "playbackRate") {
    video.playbackRate = this.value;
  }
}

function handleProgess() {
  let progessPercent = (video.currentTime / video.duration) * 100;
  process_filled.style.flexBasis = progessPercent + "%";
}

function handleProgessByClick(e) {
  let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  if (scrubTime) {
    video.currentTime = scrubTime;
  }
}

// event listeners

file.addEventListener("change", handleFile);
playBtn.addEventListener("click", togglePlay);

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", handleProgess);

skipBtns.forEach((skipBtn) => {
  skipBtn.addEventListener("click", skip);
});

fullBtn.addEventListener("click", goFull);

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
  range.addEventListener("touchmove", handleRangeUpdate);
});

progress.addEventListener("click", handleProgessByClick);

let isDown = false;

progress.addEventListener(
  "mousemove",
  (e) => isDown && handleProgessByClick(e)
);

progress.addEventListener("mousedown", () => (isDown = true));
progress.addEventListener("mouseup", () => (isDown = false));
