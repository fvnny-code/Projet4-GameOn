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
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tournamentLocation = document.getElementsByName("location");
const condition = document.getElementById("checkbox1");
const btnSubmit = document.getElementById("btnSubmit");
const btnValid = document.getElementById("btnValid");

// Check if inputs are valid
function isFirstnameValid() {
  // trim is a method that escapes any space before and after a string
  return firstname.value.trim().length >= 2;
}
function isLastnameValid() {
  return lastname.value.trim().length >= 2;
}
function isEmailValid() {
  // The code below === const regex = new RegExp(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{1,5}/); with JS magic : /the regex between slashes /
  return /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{1,5}/.test(email.value);

}
function isBirthdateValid() {
  const isDateFormatValid = /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(birthdate.value);
  if (!isDateFormatValid) {
    return false;
  }
  const date = new Date(birthdate.value);
  const currentDate = new Date();
  return date.getFullYear() <= currentDate.getFullYear()
    && date.getMonth() <= currentDate.getMonth()
    && date.getDate() <= currentDate.getMonth()

}
function isQuantityValid() {
  return parseInt(quantity.value) >= 0;
}
function isTournamentLocationValid() {
  for (let i = 0; tournamentLocation.length > i; i++) {
    if (tournamentLocation[i].checked) {
      return true;
    }
  }
  return false;

}
function isConditionValid() {
  if (!condition.checked) {
    // afficher oui ou non le message d'erreur : document.getElementById(element en question).textContent= "Vous devez vérifier que vous acceptez les termes et conditions. "
    document.getElementById("checkbox1").textContent = "Vous devez vérifier que vous acceptez les termes et conditions. ";

  }
  return false;
}

// function to verify if the form (all inputs) is valid or not
function isFormValid() {
  return isFirstnameValid()
    && isLastnameValid()
    && isEmailValid()
    && isBirthdateValid()
    && isQuantityValid()
    && isTournamentLocationValid()
    && isConditionValid()
}

// -------- Events for launching or closing modal form -------- //

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal form 
modalBtnClose.addEventListener("click", function () {
  modalbg.style.display = "none";
});
//Close modal confirmation
// NE MARCHE PAS !!!! //



function validate() {
  if (isFormValid()) {
    modalbg.style.display = "none";
    modalConfirm.style.display = "block";
  }

  return false; // blocks validation until return true; 
}
