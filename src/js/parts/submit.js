import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmpty from 'validator/lib/isEmpty';
import IMask from 'imask';
import axios from 'axios';

import { handleSubmitBtn } from './button-next';

export const formFunc = async () => {
  const telInputs = document.querySelectorAll('input[type="tel"]');

  const telMaskOptions = {
    mask: '+38 (\\000) 000 00 00',
  };

  telInputs?.forEach(input => {
    IMask(input, telMaskOptions);
  });

  async function sendForm(form) {
    const myFormData = new FormData(form);

    //Axios request

    //If success
    formEnd(form, true);
  }

  function formEnd(form, status) {
    if (status) {
      form.reset();
    }
  }

  const form = document.querySelector('.submitForm');

  form.addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    removeErrors();

    const fileds = e.target.elements;
    let errors = 0;

    Array.from(fileds).forEach(field => {
      const isReq = field.dataset.required;

      if (isReq) {
        const type = field.type;
        const val = field.value;

        if (checkField(field, type, val)) {
          errors += 1;
        }
      }

      field.addEventListener('focus', removeErrors);
      field.addEventListener('change', removeErrors);
    });

    if (!errors) {
      sendForm(e.target);
    }
  }

  function checkField(field, type, val) {
    let errors = false;

    if (type === 'text') {
      if (isEmpty(val)) {
        errors = true;
        field.classList.add('error');
      }
    }

    if (type === 'email') {
      if (isEmpty(val) || !isEmail(val)) {
        errors = true;
        field.classList.add('error');
      }
    }

    if (type === 'tel') {
      if (
        isEmpty(val) ||
        !isMobilePhone(val.replace(/[^\d+]/g, ''), ['uk-UA'])
      ) {
        errors = true;
        field.classList.add('error');
      }
    }

    if (type === 'checkbox') {
      if (field.checked === false) {
        errors = true;
        field.classList.add('error');
      }
    }

    return errors;
  }

  function removeErrors() {
    const errors = document.querySelectorAll('.error');

    errors.forEach(el => {
      el.classList.remove('error');
    });
  }
};

const form = document.getElementById('submitForm');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = {};

  formData.forEach((value, key) => {
    if (!formValues[key]) {
      formValues[key] = [];
    }
    formValues[key].push(value);
  });

  handleSubmitBtn();

  console.log('Form Data:', formValues);
});
