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

const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
const emailText = document.getElementById("emailText");
const birthdateText = document.getElementById("birthdateText");
const quantityText = document.getElementById("quantityText");
const locationText = document.getElementById("locationText");
const conditionText = document.getElementById("conditionText");


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
  //console.log(isDateFormatValid);
  if (!isDateFormatValid) {
    return false;
  }
  const date = new Date(birthdate.value);
  const currentDate = new Date();
  //console.log(date.getFullYear() <= currentDate.getFullYear())

  return date.getFullYear() <= currentDate.getFullYear()
    // && date.getMonth() <= currentDate.getMonth()
    // && date.getDate() <= currentDate.getMonth()

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
    return false
    // afficher oui ou non le message d'erreur : document.getElementById(element en question).textContent= "Vous devez vérifier que vous acceptez les termes et conditions. "
    conditionText.textContent = "Vous devez vérifier que vous acceptez les termes et conditions. ";

  }
 return true;
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

function showErrormessage(element, message) {
  element.textContent = message;
}
function clearErrormessages() {
  firstText.textContent = "";
  lastText.textContent = "";
  emailText.textContent = "";
  birthdateText.textContent = "";
  quantityText.textContent = "";
  locationText.textContent = "";
  conditionText.textContent = "";

}

document.getElementById("form").addEventListener("submit", function (event) {
  // console.log(isFirstnameValid());
  event.preventDefault();
  clearErrormessages();
 
  if (!isFirstnameValid()) {

    showErrormessage(firstText, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")

  }
  if (!isLastnameValid()) {

    showErrormessage(lastText, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")

  }
  if (!isEmailValid()) {

    showErrormessage(emailText, "Veuillez renseigner une adresse mail valide. Exemple : nom@contact.fr")

  }
  if (!isBirthdateValid()) {
    showErrormessage(birthdateText, "Veuillez renseigner votre date de naissance au bon format.")

  }
  if (!isQuantityValid()) {

    showErrormessage(quantityText, "Veuillez renseigner ce champ.")

  }
  if (!isTournamentLocationValid()) {

    showErrormessage(locationText, "Vous devez choisir une option.")

  }
  
  if (!isConditionValid()) {

    showErrormessage(conditionText, "Vous devez vérifier que vous acceptez les termes et conditions.")

  }
  if (isFormValid()) {
    modalbg.style.display = "none";
    modalConfirm.style.display = "block";
    form.clear();
  }

});

btnValid.addEventListener("click", function(){
  modalConfirm.style.display = "none";
})




