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
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

const form = document.getElementById("form");
const modalConfirm = document.querySelector(".modal-confirmation");

// const to get form inputs
// const firstName = document.getElementById("first");
// const lastname = document.getElementById("last");
// const email = document.getElementById("email");
// const birthdate = document.getElementById("birthdate");
// const quantity = document.getElementById("quantity");
// const tornamentLocation = document.getElementByName("location");
// const condition = document.getElementById("checkbox1");
// const btnSubmit = document.getElementById("btnSubmit");
// const btnValid = document.getElementById("btnValid");


// const to verify if input is valid or not

// Verifier les valeurs regex  ou if



// -------- Events for launching or closing modal form -------- //

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Close modal form 
modalBtnClose.addEventListener("click", function() {         
  modalbg.style.display = "none";
});
//Close modal confirmation
// NE MARCHE PAS !!!! //



function validate() {
//  checks if all other conditions return true. If not, return false, that blocks validation until return true.

  // conditions sur les inputs
  // Si problème
  // if (...) { elem.setAttribute("data-error-visible, true); return false; }
  //ces attributs sont dans le css .formData l-223 et 226

  modalbg.style.display = "none";
  modalConfirm.style.display = "block";
  return false; // blocks validation until return true; 
}
