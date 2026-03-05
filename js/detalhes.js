// Gera a seção de detalhes dinamicamente a partir do arquivo JSON
const slug = window.location.hash.replace("#", "");

fetch('js/mulheres.json')
  .then(res => res.json())
  .then(data => {

    const mulher = data.mulheres.find(item => item.slug === slug);

    const container = document.getElementById("detalhe");

    const section = document.createElement('section');
    section.setAttribute('data-aos', 'fade-up');

    if (!mulher) {
      container.innerHTML = "<p>Registro não encontrado.</p>";
      return;
    }

    section.innerHTML = `
      <h1 class="title_woman">${mulher.nome}</h1>
      <h2 class="date_woman">${mulher.data}</h1>
      <img class="img_woman" src="${mulher.foto}" alt="${mulher.nome}">
      <p class="text_woman">${mulher.texto}</p>
      <p class="font_woman">Fonte: ${mulher.fonte}</p>
    `;

    container.appendChild(section);

    AOS.refresh();
  });