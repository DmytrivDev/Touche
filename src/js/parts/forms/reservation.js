import flatpickr from 'flatpickr';
import { French } from 'flatpickr/dist/l10n/fr.js';

import 'flatpickr/dist/flatpickr.min.css';

flatpickr('#reservation-date', {
  locale: French,
  altInput: true,
  altFormat: 'M j, Y',
  dateFormat: 'd.m.Y',
  showMonths: 1,
  minDate: 'today',
  shorthandCurrentMonth: true,
  maxDate: new Date().fp_incr(21),
  inline: true,
});

const style = document.createElement('style');
style.innerHTML = `
    .flatpickr-calendar .dayContainer span:nth-child(n+36) {
      display: none !important;
    }
  `;
document.head.appendChild(style);

export function reservationForm() {
  const reservationDiv = document.getElementById('reservation');
  if (!reservationDiv) {
    return;
  }

  const dateInput = document.getElementById('reservation-date');
  const timeInputs = document.querySelectorAll(
    'input[name="reservation-time"]'
  );

  const btnNext = document.querySelector('.reservation__btn');

  let formIsValid = true;

  if (!dateInput.value.trim()) {
    formIsValid = false;
  }

  let timeSelected = false;
  timeInputs.forEach(input => {
    if (input.checked) {
      timeSelected = true;
    }
  });

  if (!timeSelected) {
    formIsValid = false;
  }

  btnNext.disabled = !formIsValid;
  if (formIsValid) {
    btnNext.classList.remove('disabled');
  } else {
    btnNext.classList.add('disabled');
  }
}

const reservationDiv = document.getElementById('reservation');
if (reservationDiv) {
  const dateInput = document.getElementById('reservation-date');
  const timeInputs = document.querySelectorAll(
    'input[name="reservation-time"]'
  );

  dateInput.addEventListener('change', reservationForm);

  timeInputs.forEach(input => {
    input.addEventListener('change', reservationForm);
  });
}
