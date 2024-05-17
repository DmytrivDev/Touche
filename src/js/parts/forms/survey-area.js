export function checkSurveyArea() {
  const btnNext = document.querySelector('.survey-area__btn');
  const inputs = document.querySelectorAll('.survey-area input[type="radio"]');

  if (btnNext) {
    btnNext.disabled = true;
    btnNext.classList.add('disabled');

    if (inputs) {
      inputs.forEach(input => {
        input.addEventListener('change', () => {
          btnNext.disabled = false;
          btnNext.classList.remove('disabled');
        });
      });
    }
  }
}
