const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('nav-open');
    // Додаємо анімацію для кнопки
    toggle.classList.toggle('active');
  });

  // Закриваємо меню при кліку поза ним
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
      navLinks.classList.remove('nav-open');
      toggle.classList.remove('active');
    }
  });
}
