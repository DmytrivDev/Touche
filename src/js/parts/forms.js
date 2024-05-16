function checkSurveyArea() {
  const inputs = document.querySelectorAll('.survey-area input[type="radio"]');
  const buttonNext = document.querySelector('.form-btn-next');

  buttonNext.disabled = true;
  buttonNext.classList.add('disabled');

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      buttonNext.disabled = true;
      buttonNext.classList.remove('disabled');
    });
  });
}
checkSurveyArea();
