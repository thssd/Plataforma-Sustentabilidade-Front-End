const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Acessibilidade: informa estado do menu
    const expandido = navLinks.classList.contains('active');
    toggle.setAttribute('aria-expanded', expandido);
  });

  // Fecha o menu ao clicar em um link (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ===========================
// MARCA LINK ATIVO NO MENU
// ===========================

const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === paginaAtual) {
    link.style.textDecoration = 'underline';
    link.style.opacity = '1';
    link.style.fontWeight = '700';
  }
});