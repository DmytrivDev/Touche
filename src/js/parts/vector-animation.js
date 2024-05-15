document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroVector = document.querySelector('.vector__icon');

  if (hero) {
    const heroHeight = hero.getBoundingClientRect().height;
    const heroBottom = hero.getBoundingClientRect().bottom;
    const heroHeightHalf = heroHeight / 2;

    if (heroVector) {
      if (heroHeightHalf > heroBottom) {
        heroVector.classList.add('stopped');
      } else {
        heroVector.classList.remove('stopped');
      }

      window.addEventListener('scroll', () => {
        const heightBottomScroll = hero.getBoundingClientRect().bottom;

        if (heroVector) {
          if (heroHeightHalf > heightBottomScroll) {
            heroVector.classList.add('stopped');
          } else {
            heroVector.classList.remove('stopped');
          }
        }
      });
    }
  }
});
