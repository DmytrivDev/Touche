import flatpickr from 'flatpickr';
import { French } from 'flatpickr/dist/l10n/fr.js';

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

document.addEventListener('DOMContentLoaded', () => {
  // Обработчик сабмита формы
  const form = document.getElementById('submitForm');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = {};

    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    console.log(formData);
    console.log('Form Data:', formValues);
  });
});
