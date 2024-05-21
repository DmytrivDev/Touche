import axios from 'axios';

import { handleSubmitBtn } from './button-next';

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
  form.reset();
});
