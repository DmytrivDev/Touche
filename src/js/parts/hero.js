document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.hero__logo');
  const title = document.querySelector('.hero__title');
  const subtitle = document.querySelector('.hero__sumtitle');
  const box = document.querySelector('.hero__box');
  const vector = document.querySelector('.hero__btn');

  if (logo) {
    setTimeout(function () {
      logo.classList.add('active');
    }, 100);
  }

  if (title) {
    setTimeout(function () {
      title.classList.add('active');
    }, 250);
  }

  if (subtitle) {
    setTimeout(function () {
      subtitle.classList.add('active');
    }, 300);
  }

  if (box && vector) {
    setTimeout(function () {
      box.classList.add('active');
      vector.classList.add('active');
    }, 350);
  }
});
