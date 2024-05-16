const buttonNext = document.querySelectorAll('.form-btn-next');

export function nextStep() {
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
