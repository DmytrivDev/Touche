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
      formIsValid = false;
    }

    if (isEmpty(telSurname.value.trim())) {
      formIsValid = false;
    }

    const telValue = telInput.value.replace(/[^\d+]/g, '');
    if (!isMobilePhone(telValue, 'en-CA')) {
      formIsValid = false;
    }

    if (!isEmail(emailInput.value.trim())) {
      formIsValid = false;
    }

    if (!checkbox.checked) {
      formIsValid = false;
    }

    btnNext.disabled = !formIsValid;
    if (formIsValid) {
      btnNext.classList.remove('disabled');
    } else {
      btnNext.classList.add('disabled');
    }
  }

  function validateField(field) {
    if (field === telName) {
      if (isEmpty(telName.value.trim())) {
        telName.classList.add('error');
      } else {
        telName.classList.remove('error');
      }
    }

    if (field === telSurname) {
      if (isEmpty(telSurname.value.trim())) {
        telSurname.classList.add('error');
      } else {
        telSurname.classList.remove('error');
      }
    }

    if (field === telInput) {
      const telValue = telInput.value.replace(/[^\d+]/g, '');
      if (!isMobilePhone(telValue, 'en-CA')) {
        telInput.classList.add('error');
      } else {
        telInput.classList.remove('error');
      }
    }

    if (field === emailInput) {
      if (!isEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
      }
    }

    if (field === checkbox) {
      if (!checkbox.checked) {
        checkbox.classList.add('error');
      } else {
        checkbox.classList.remove('error');
      }
    }

    validateForm();
  }

  inputs.forEach(input => {
    input.addEventListener('input', validateForm);
    input.addEventListener('blur', () => validateField(input));
  });

  checkbox.addEventListener('change', () => {
    validateForm();
    validateField(checkbox);
  });

  validateForm();
}
