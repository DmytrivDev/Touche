document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.hero__logo');
  const title = document.querySelector('.hero__title');
  const subtitle = document.querySelector('.hero__sumtitle');
  const box = document.querySelector('.hero__box');
  const vector = document.querySelector('.hero__btn');

  if (logo) {
    setTimeout(function () {
      logo.classList.add('up');
    }, 100);
  }

  if (title) {
    setTimeout(function () {
      title.classList.add('up');
    }, 250);
  }

  if (subtitle) {
    setTimeout(function () {
      subtitle.classList.add('up');
    }, 300);
  }

  if (box && vector) {
    setTimeout(function () {
      box.classList.add('up');
      vector.classList.add('up');
    }, 350);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const heroHeight = document.querySelector('.hero');
  const heroVector = document.querySelector('.vector__icon');
  if (heroHeight) {
    const heroHalf = heroHeight.offsetHeight / 2;

    window.addEventListener('scroll', () => {
      if (heroVector) {
        if (window.scrollY > heroHalf) {
          heroVector.classList.add('stopped');
        } else {
          heroVector.classList.remove('stopped');
        }
      }
    });
  }
});
