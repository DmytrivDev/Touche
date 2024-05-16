const refs = {
  buttonNext: document.querySelectorAll('.form-btn-next'),
  formActive: document.querySelector('.form-active'),

  surveyArea: document.querySelector('.survey-area'),
  allergy: document.querySelector('.allergy'),
};

function nextStep() {
  if (refs.buttonNext) {
    refs.buttonNext.forEach(el => {
      el.addEventListener('click', evt => {
        evt.preventDefault();

        const button = evt.currentTarget;
        const dataId = button.dataset.id;
        const nextStep = document.getElementById(dataId);

        refs.formActive.classList.remove('form-active');
        nextStep.classList.add('form-active');
      });
    });
  }
}
nextStep();
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
