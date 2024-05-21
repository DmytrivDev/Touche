import isEmpty from 'validator/lib/isEmpty';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmail from 'validator/lib/isEmail';
import IMask from 'imask';

export function submitForm() {
  const submitDiv = document.getElementById('submit');
  if (!submitDiv) {
    return;
  }

  const inputs = document.querySelectorAll('.submit__box-inputs input');

  const nameInput = document.getElementById('submit-name');
  const surnameInput = document.getElementById('submit-surname');
  const emailInput = document.getElementById('submit-email');
  const telInput = document.getElementById('submit-tel');
  const checkbox = document.getElementById('submit-check');

  const btnSubmit = document.querySelector('.submit__btn');

  const telMaskOptions = {
    mask: '+1 (000) 000-0000',
  };
  IMask(telInput, telMaskOptions);

  function validateForm() {
    let formIsValid = true;

    if (isEmpty(nameInput.value.trim())) {
      formIsValid = false;
    }

    if (isEmpty(surnameInput.value.trim())) {
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

    btnSubmit.disabled = !formIsValid;
    if (formIsValid) {
      btnSubmit.classList.remove('disabled');
    } else {
      btnSubmit.classList.add('disabled');
    }
  }

  function validateField(field) {
    if (field === nameInput) {
      if (isEmpty(nameInput.value.trim())) {
        nameInput.classList.add('error');
      } else {
        nameInput.classList.remove('error');
      }
    }

    if (field === surnameInput) {
      if (isEmpty(surnameInput.value.trim())) {
        surnameInput.classList.add('error');
      } else {
        surnameInput.classList.remove('error');
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
