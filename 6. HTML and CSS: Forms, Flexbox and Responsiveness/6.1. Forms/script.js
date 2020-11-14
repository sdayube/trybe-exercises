const stateArray = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

const form = document.querySelector('form');
const stateSelect = document.getElementById('state');
const dateInput = document.getElementById('start-date');
const submitForm = document.getElementById('submit-form');
const resetForm = document.getElementById('reset-form');

function populateStates() {
  for (let i in stateArray) {
    const option = document.createElement('option');
    option.innerHTML = stateArray[i];
    stateSelect.appendChild(option)
  }
}

populateStates();

let isValidDate;

function checkFormat(date) {
  if (date.match(/^([0-2][1-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)) {
    return true;
  }
  return false;
}

function checkDate(date) {
  const day = parseInt(date[0] + date[1]);
  const month = parseInt(date[3] + date[4]);
  const year = parseInt(date[6] + date[7] + date[8] + date[9]);
  if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
    return true;
  }
  return false;
}

dateInput.DatePickerX.init({
  format: 'dd/mm/yyyy',
});

// function valiDate() {
//   const date = dateInput.value;
//   if (checkFormat(date) && checkDate(date)) {
//     dateInput.setCustomValidity('');
//   } else {
//     dateInput.setCustomValidity('Invalid format');
//   }
// }

function preventSubmit(event) {
  event.preventDefault();
}

function formValidate() {
  return form.reportValidity();
}

function printInputs() {
  const insertionPoints = document.querySelectorAll('.from-input');
  const source = document.querySelectorAll('.input');
  for (let i = 0; i < source.length; i += 1) {
    insertionPoints[i].innerText = source[i].value;
  }
}

function printSelect() {
  const insertionPoint = document.querySelector('.from-select');
  const source = document.getElementById('state');
  insertionPoint.innerText = source.options[source.selectedIndex].text;
}

function printRadio() {
  const insertionPoint = document.querySelector('.from-radio');
  const source = document.querySelectorAll('.radio input');
  const sourceLabel = document.querySelectorAll('.radio');
  for (let i = 0; i < source.length; i += 1) {
    if (source[i].checked) {
      insertionPoint.innerText = sourceLabel[i].innerText;
    }
  }
}

function printResume() {
  const insertionPoint = document.querySelector('.from-text-area');
  const source = document.querySelector('.textarea');
  insertionPoint.innerText = source.value;
}

function printForm() {
  printInputs();
  printSelect();
  printRadio();
  printResume();
}

submitForm.addEventListener('click', function(e) {
  preventSubmit(e);
  // valiDate();
  if (formValidate()) {
    printForm();
  }
})
