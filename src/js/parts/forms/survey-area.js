export function checkSurveyArea() {
  const btnNext = document.querySelector('.survey-area__btn');
  const inputs = document.querySelectorAll(
    '.survey-area input[type="checkbox"]'
  );

  function updateButtonState() {
    const allUnchecked = Array.from(inputs).every(input => !input.checked);
    btnNext.disabled = allUnchecked;
    if (allUnchecked) {
      btnNext.classList.add('disabled');
    } else {
      btnNext.classList.remove('disabled');
    }
  }

  if (btnNext && inputs.length > 0) {
    updateButtonState();

    inputs.forEach(input => {
      input.addEventListener('change', updateButtonState);
    });
  }
}
