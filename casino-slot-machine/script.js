let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let spin = document.getElementById("btn-spin");
let cheat = document.getElementById("btn-cheat");

spin.onclick = (event) => animation(event);
cheat.onclick = (event) => animation(event);

function jackpot() {
  if (
    value1.innerText == value2.innerText &&
    value2.innerText == value3.innerText
  ) {
    alert("Jackpot");
  }
}

function animation(event) {
  let intervalId; // store previous setInterval Function

  // start animation
  value1.classList.add("animate");
  value2.classList.add("animate");
  value3.classList.add("animate");

  intervalId = setInterval(() => {
    value1.innerText = Math.floor(Math.random() * 9);
    value2.innerText = Math.floor(Math.random() * 9);
    value3.innerText = Math.floor(Math.random() * 9);
  }, 100);

  // disable spin btn to avoid infinte spinning
  event.target.disabled = true;

  setTimeout(() => {
    /**stop animation */
    value1.classList.remove("animate");
    clearInterval(intervalId);

    intervalId = setInterval(() => {
      value2.innerText = Math.floor(Math.random() * 9);
      value3.innerText = Math.floor(Math.random() * 9);
    }, 100);

    if (event.target.innerText == "CHEAT") value1.innerText = 7;
  }, 3000);

  setTimeout(() => {
    value2.classList.remove("animate");
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      value3.innerText = Math.floor(Math.random() * 9);
    }, 100);
    if (event.target.innerText == "CHEAT") value2.innerText = 7;
  }, 4000);

  setTimeout(() => {
    value3.classList.remove("animate");
    clearInterval(intervalId);
    event.target.disabled = false;
    setTimeout(jackpot, 500);
    if (event.target.innerText == "CHEAT") value3.innerText = 7;
  }, 5000);
}

/*************Random Stuff**************/
/* 
//change the value in slots as per animation speed
function updateAnimation(newSpeed) {
  //if prev interval func exist, need to clear it
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    value1.innerText = getVal(event)
    value2.innerText = getVal(event)
    value3.innerText = getVal(event)
  }, 1000 / newSpeed);
}


slider.onchange = function (event) {
  //document.documentElement => root of css
  // Changing value of speed variable in css
  document.documentElement.style.setProperty("--speed", event.target.value);

  // need to change animation w.r.t speed
  updateAnimation(event.target.value);
};
 */
