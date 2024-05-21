import isEmpty from 'validator/lib/isEmpty';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmail from 'validator/lib/isEmail';
import IMask from 'imask';

export function destinationForm() {
  const inputs = document.querySelectorAll('.destination__box-inputs input');

  const telName = document.getElementById('destination-name');
  const telSurname = document.getElementById('destination-surname');
  const telInput = document.getElementById('destination-tel');
  const emailInput = document.getElementById('destination-email');
  const checkbox = document.getElementById('destination-check');

  const btnNext = document.querySelector('.destination__btn');

  const telMaskOptions = {
    mask: '+1 (000) 000-0000',
  };
  IMask(telInput, telMaskOptions);

  function validateForm() {
    let formIsValid = true;

    if (isEmpty(telName.value.trim())) {
      telName.classList.add('error');
      formIsValid = false;
    } else {
      telName.classList.remove('error');
    }

    if (isEmpty(telSurname.value.trim())) {
      telSurname.classList.add('error');
      formIsValid = false;
    } else {
      telSurname.classList.remove('error');
    }

    const telValue = telInput.value.replace(/[^\d+]/g, '');

    if (!isMobilePhone(telValue, 'en-CA')) {
      telInput.classList.add('error');
      formIsValid = false;
    } else {
      telInput.classList.remove('error');
    }

    if (!isEmail(emailInput.value.trim())) {
      emailInput.classList.add('error');
      formIsValid = false;
    } else {
      emailInput.classList.remove('error');
    }

    if (!checkbox.checked) {
      checkbox.classList.add('error');
      formIsValid = false;
    } else {
      checkbox.classList.remove('error');
    }

    btnNext.disabled = !formIsValid;
    if (formIsValid) {
      btnNext.classList.remove('disabled');
    } else {
      btnNext.classList.add('disabled');
    }
  }

  inputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });

  checkbox.addEventListener('change', validateForm);

  validateForm();
}
