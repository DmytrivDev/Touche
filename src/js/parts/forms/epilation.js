export function checkEpilation() {
  const inputs = document.querySelectorAll('.epilation input[type="radio"]');
  const btnNext = document.querySelector('.epilation__btn');

  btnNext.disabled = true;
  btnNext.classList.add('disabled');

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      btnNext.disabled = false;
      btnNext.classList.remove('disabled');
    });
  });
}
