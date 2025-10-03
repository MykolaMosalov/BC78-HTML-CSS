const modalBtnEl = document.querySelector('.hero-btm');
const backdropEl = document.querySelector('.backdrop');
const closeBtnEl = document.querySelector('.modal-close-btn');
const bodyEl = document.body;

modalBtnEl.addEventListener('click', toggleModal);
closeBtnEl.addEventListener('click', toggleModal);

function toggleModal() {
  backdropEl.classList.toggle('is-open');

  if (backdropEl.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}
