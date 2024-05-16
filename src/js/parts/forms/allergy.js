export function checkAllergy() {
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
