const buttonNext = document.querySelectorAll('.btn-next');

export function nextStep() {
  if (buttonNext) {
    buttonNext.forEach(elem => {
      elem.addEventListener('click', e => {
        e.preventDefault();

        const button = e.currentTarget;
        const dataId = button.dataset.id;
        const nextStep = document.getElementById(dataId);

        if (!button.classList.contains('disabled')) {
          const formActive = document.querySelector('.form-active');

          if (formActive) {
            formActive.classList.remove('form-active');
            nextStep.classList.add('form-active');
          }
        }
      });
    });
  }
}

const formSubmitBtn = document.querySelector('.form-submit');

export function handleSubmitBtn() {
  if (formSubmitBtn) {
    const dataId = formSubmitBtn.dataset.id;
    const nextStep = document.getElementById(dataId);

    if (!formSubmitBtn.classList.contains('disabled')) {
      const formActive = document.querySelector('.form-active');

      if (formActive) {
        formActive.classList.remove('form-active');
        nextStep.classList.add('form-active');
      }
    }
  }
}
