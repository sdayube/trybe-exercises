const stateArray = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

const form = document.querySelector('form');
const stateSelect = document.getElementById('state');
const dateInput = document.getElementById('start-date');
const button = document.querySelector('button');

function populateStates() {
  for (let i in stateArray) {
    const option = document.createElement('option');
    option.innerHTML = stateArray[i];
    stateSelect.appendChild(option)
  }
}

populateStates();

let isValidDate;

function checkDay(date) {
  const day = parseInt(date[0] + date[1]);
  if (day > 0 && day <= 31) {
    return true;
  }
  return false;
}

function checkMonth(date) {
  const month = parseInt(date[3] + date[4]);
  if (month > 0 && month <= 12) {
    return true;
  }
  return false;
}

function checkYear(date) {
  const year = parseInt(date[6] + date[7] + date[8] + date[9]);
  if (year > 0) {
    return true;
  }
  return false;
}

function checkFormat(date) {
    const format = (date[2] + date[5]);
  if (format === '//') {
    return true;
  }
  return false;
}

function valiDate() {
  const date = dateInput.value;
  if (checkFormat(date) && checkDay(date) && checkMonth(date) && checkYear(date)) {
    dateInput.setCustomValidity('');
  } else {
    dateInput.setCustomValidity('Invalid format');
  }
}

function preventSubmit(event) {
  event.preventDefault();
}

function formValidate() {
  form.reportValidity();
}

function printForm() {
  const formData = new FormData(form);
  return formData;
}

button.addEventListener('click', function(e) {
  preventSubmit(e);
  valiDate();
  if (formValidate()) {
    printForm();
  }
})
