// Roep DOM element

let openClose = document.getElementById('openClose');

// Functie
function startTime() {
  let now = new Date();
  console.log(now);
}

window.addEventListener('load', startTime());