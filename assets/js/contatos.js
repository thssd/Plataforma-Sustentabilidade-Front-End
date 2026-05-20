// ===========================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// ===========================

const form     = document.getElementById('contact-form');
const feedback = document.getElementById('feedback');

// Valida e-mail com regex
function emailValido(email) {
  return /
^
[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Exibe erro em um campo específico
function exibirErro(campoId, erroId, msg) {
  const campo = document.getElementById(campoId);
  const erro  = document.getElementById(erroId);
  if (campo) campo.classList.add('input-erro');
  if (erro)  erro.textContent = msg;
}