const buttonNext = document.querySelectorAll('.form-btn-next');

function nextStep() {
  buttonNext.forEach(elem => {
    elem.addEventListener('click', e => {
      e.preventDefault();

      const button = e.currentTarget;
      const dataId = button.dataset.id;
      const nextStep = document.getElementById(dataId);

      if (!button.classList.contains('disabled')) {
        const formActive = document.querySelector('.form-active');
        formActive.classList.remove('form-active');
        nextStep.classList.add('form-active');
      }
    });
  });
}
nextStep();

function checkSurveyArea() {
  const inputs = document.querySelectorAll('.survey-area input[type="radio"]');
  const btnNext = document.querySelector('.survey-area__btn');

  btnNext.disabled = true;
  btnNext.classList.add('disabled');

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      btnNext.disabled = false;
      btnNext.classList.remove('disabled');
    });
  });
}
checkSurveyArea();

function checkAllergy() {
  const inputs = document.querySelectorAll('.allergy input[type="radio"]');
  const btnNext = document.querySelector('.allergy__btn');

  btnNext.disabled = true;
  btnNext.classList.add('disabled');

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      btnNext.disabled = false;
      btnNext.classList.remove('disabled');
    });
  });
}
checkAllergy();
