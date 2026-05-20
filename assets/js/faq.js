const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer   = item.querySelector('.faq-answer');
  const icon     = item.querySelector('.faq-icon');

  question.addEventListener('click', () => {

    // Fecha os outros itens abertos
    faqItems.forEach(outro => {
      if (outro !== item) {
        outro.querySelector('.faq-answer').style.display = 'none';
        outro.classList.remove('active');
      }
    });

    // Alterna o item clicado
    const aberto = answer.style.display === 'block';
    answer.style.display = aberto ? 'none' : 'block';
    item.classList.toggle('active', !aberto);
  });
});