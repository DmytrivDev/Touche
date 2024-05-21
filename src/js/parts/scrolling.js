import scrollToElement from 'scroll-to-element';

const scrollBtns = document.querySelector('.vector');
if (scrollBtns) {
  scrollBtns.addEventListener('click', () => {
    const authorization = document.querySelector('.authorization');

    scrollToElement(authorization, {
      duration: 1000,
    });
  });
}
