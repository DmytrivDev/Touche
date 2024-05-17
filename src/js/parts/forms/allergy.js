export function checkAllergy() {
  const inputs = document.querySelectorAll('.allergy input[type="radio"]');
  const btnNext = document.querySelector('.allergy__btn');

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
