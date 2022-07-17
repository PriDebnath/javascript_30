function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"`);

  if (!audio) {
    return;
  }

  audio.play();

  let key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  key.classList.add("playing");
  key.style.border = "0.15rem solid #ffc600";
  setTimeout(() => {
    key.classList.remove("playing");
    key.style.border = "0.15rem solid black";
  }, 200);
}
window.addEventListener("keydown", playSound);

let keys = document.querySelectorAll(".key");
