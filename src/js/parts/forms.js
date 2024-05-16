const refs = {
  buttonNext: document.querySelectorAll('.form-btn-next'),
  formCheck: document.querySelectorAll('.form-choose'),

  surveyArea: document.querySelector('.survey-area'),
  allergy: document.querySelector('.allergy'),
};

function nextStep() {
  if (refs.buttonNext) {
    refs.buttonNext.forEach(el => {
      el.addEventListener('click', evt => {
        evt.preventDefault();

        const button = evt.currentTarget;
        console.log(button);
        const dataId = button.dataset;
        console.log(dataId);
        const nextStep = document.getElementById(dataId);
        console.log(nextStep);

        // if (!button.classList.contains('disabled')) {
        //   document.querySelector('.active').classList.remove('active');
        //   nextStep.classList.add('nextStep');
        // }
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
