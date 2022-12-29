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
// -------- Events for launching or closing modal form -------- //

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal form with X button
document.getElementById("closeForm").addEventListener("click", function (closeModal) {
  modalbg.style.display = "none";
});
// Close confirm form with X button
document.getElementById("closeConfirm").addEventListener("click", function (closeConfirm) {
  modalConfirm.style.display = "none";
});


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

// function to show error messages when input is not valid
// function showErrormessage(formInput, filledForm, message) {
//   formInput.target.setValidity("");
//   if(!formInput.target.validity.valid && formInput.target.value.length == 0){
//     formInput.target.setValidity(message);
//   }
// };
// Error message by input
document.getElementById("btnSubmit").addEventListener("click", function (filledForm) {

  if (!isFirstnameValid()) {

    showErrormessage(formInput, filledForm, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")


  }
  if (!isLastnameValid) {

    showErrormessage(formInput, filledForm, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")

  }
  if (!isEmailValid) {

    showErrormessage(formInput, filledForm, "Veuillez renseigner une adresse mail valide. Exemple : nom@contact.fr")

  }
  if (!isBirthdateValid) {

    showErrormessage(formInput, filledForm, "Veuillez renseigner votre date de naissance.")

  }
  if (!isQuantityValid) {

    showErrormessage(formInput, filledForm, "Veuillez renseigner ce champ.")

  }
  if (!isTournamentLocationValid) {

    showErrormessage(formInput, filledForm, "Veuillez renseigner ce champ.")

  }
  if (!isConditionValid) {

    showErrormessage(formInput, filledForm, "Vous devez accepter les conditions générales d'utilisation")

  }
  // if(!isFirstnameValid()){
  //   isFirstnameValid.oninvalid = function(formInput){
  //     showErrormessage(formInput, filledForm, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
  //   };
  //   return false;
  // }
  // if(!isLastnameValid){
  //   isLastnameValid.oninvalid = function(formInput){
  //     showErrormessage(formInput, filledForm, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  //   };
  //   return false;
  // }
  // if(!isEmailValid){
  //  isEmailValid.oninvalid = function(formInput){
  //     showErrormessage(formInput, filledForm, "Veuillez renseigner une adresse mail valide. Exemple : nom@contact.fr")
  //   };
  //   return false;
  // }
  // if(!isBirthdateValid){
  //   isBirthdateValid.oninvalid = function(formInput){
  //     showErrormessage(formInput, filledForm, "Veuillez renseigner votre date de naissance.")
  //   };
  //   return false;
  // }
  // if(!isQuantityValid){
  //   isQuantityValid.oninvalid = function(formInput){
  //     showErrormessage(formInput, filledForm, "Veuillez renseigner ce champ.")
  //   };
  //   return false;
  // }
  // if(!isTournamentLocationValid){
  //   isTournamentLocationValid.oninvalid = function(formInput){
  //     showErrormessage(formInput, filledForm, "Veuillez renseigner ce champ.")
  //   };
  //   return false;
  // }
  // if(!isConditionValid){
  //   isConditionValid.oninvalid = function(formInput){
  //     showErrormessage(formInput, filledForm, "Vous devez accepter les conditions générales d'utilisation")
  //   };
  //   return false;
  // }

});

function validate() {
  modalbg.style.display = "none";
  modalConfirm.style.display = "block";
  return false;
}


// function validate() {
//   if (isFormValid()) {
//     modalbg.style.display = "none";
//     modalConfirm.style.display = "block";
//   }

//   return false; // blocks validation until return true; 
// }
