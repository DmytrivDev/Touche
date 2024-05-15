import scrollToElement from 'scroll-to-element';

export const scrolling = () => {
  const scrollBtns = document.querySelector('.vector');
  if (scrollBtns) {
    scrollBtns.addEventListener('click', () => {
      const authorization = document.querySelector('.authorization');

      scrollToElement(authorization, {
        duration: 1000,
      });
    });
  }
};
