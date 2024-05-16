const refs = {
  buttonNext: document.querySelector('.form-btn-next'),
  formCheck: document.querySelectorAll('.form-choose'),

  surveyArea: document.querySelector('.survey-area'),
  allergy: document.querySelector('.allergy'),
};

// refs.buttonNext.addEventListener('click', () => {
//   for (let i = 0; i < refs.formCheck.length; i++) {
//     const formCheck = refs.formCheck[i];
//     if (formCheck.classList.contains('active')) {
//       const nextFormCheck = refs.formCheck[i + 1];
//       if (nextFormCheck) {
//         formCheck.classList.remove('active');
//         nextFormCheck.classList.add('active');
//         return; // Вийти з циклу після зміни активного елемента
//       }
//     }
//   }
// });

// function checkSurveyArea() {
//   const inputs = document.querySelectorAll('.survey-area input[type="radio"]');

//   refs.buttonNext.disabled = true;
//   refs.buttonNext.classList.add('disabled');

//   inputs.forEach(input => {
//     input.addEventListener('change', () => {
//       refs.buttonNext.disabled = false;
//       refs.buttonNext.classList.remove('disabled');
//     });
//   });
// }
// checkSurveyArea();

// function checkAllergy() {
//   const inputs = document.querySelectorAll('.allergy input[type="radio"]');

//   refs.buttonNext.disabled = true;
//   refs.buttonNext.classList.add('disabled');

//   inputs.forEach(input => {
//     input.addEventListener('change', () => {
//       refs.buttonNext.disabled = false;
//       refs.buttonNext.classList.remove('disabled');
//     });
//   });
// }
// checkAllergy();
