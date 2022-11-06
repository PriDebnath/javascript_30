function setDate() {
  let hourHand = document.querySelector(".hourHand");
  let minHand = document.querySelector(".minHand");
  let secHand = document.querySelector(".secHand");
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMin = currentTime.getMinutes();
  let currentSec = currentTime.getSeconds();

  hourHand.style.transform = `rotate(${30 * currentHour + 90}deg)`;

  minHand.style.transform = `rotate(${6 * currentMin + 90}deg)`;

  secHand.style.transform = `rotate(${6 * currentSec + 90}deg)`;
}

setInterval(setDate, 1000);
