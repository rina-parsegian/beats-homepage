// Mobile Menu Toggle
const headerMobile = document.querySelector('.header-mobile');
const toggleBtn = document.querySelector('.header-mobile__toggle');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    headerMobile.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
}