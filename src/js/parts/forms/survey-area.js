export function checkSurveyArea() {
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
