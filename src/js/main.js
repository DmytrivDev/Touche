import './parts/hero';
import './parts/vector-animation';
import { scrolling } from './parts/scrolling';

import { checkSurveyArea } from './parts/forms/survey-area';
import { checkAllergy } from './parts/forms/allergy';
import { checkEpilation } from './parts/forms/epilation';
import './parts/forms/destination';
import './parts/forms/reservation';

import './parts/submit';

import { nextStep } from './parts/button-next';

scrolling();

checkSurveyArea();
checkAllergy();
checkEpilation();

nextStep();

// const form = document.getElementById('submitForm');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const formValues = {};

//   formData.forEach((value, key) => {
//     formValues[key] = value;
//   });

//   console.log('Form Data:', formValues);
// });
