function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".modal-form");
const modalConfirm = document.querySelector(".modal-confirmation");
const modalBtn = document.querySelectorAll(".modal-btn");
// Verifier les valeurs regex  ou if
const formData = document.querySelectorAll(".formData");

console.log(modalBtn);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  console.log("lol");
  modalbg.style.display = "block";
}

function validate() {
  //console.log("blourp");
  // conditions sur les inputs

  // Si problème
  // if (...) { elem.setAttribute("data-error-visible, true); return false; }
  //ces attributs sont dans le css .formData l-223 et 226

  modalbg.style.display = "none";
  modalConfirm.style.display = "block";

  return false; // blocks validation until return true; 
}

