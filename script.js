// scrollar suave para navegação
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// efeito de digitação para o nome
const nome = "Antonio Sachinski";
let i = 0;
function escreverNome() {
  if (i < nome.length) {
    document.getElementById("nome").textContent += nome[i];
    i++;
    setTimeout(escreverNome, 100);
  }
}

escreverNome();