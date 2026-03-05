// Gera cada uma das sections dinamicamente a partir do arquivo JSON
fetch('js/mulheres.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const container = document.getElementById('lista-mulheres');
    
    data.mulheres.forEach((mulher, index) => {

      const section = document.createElement('section');
      section.classList.add('info-section');
      section.setAttribute('data-aos', 'fade-up');

      // alternar lado da imagem
      if (index % 2 !== 0) {
        section.classList.add('reverse');
      }

      section.innerHTML = `
        <div class="info-content">
          <h2 id="sec${mulher.id}">${mulher.nome}</h2>
          <p>${mulher.descricao}</p>
          <a href="detalhe.html#${mulher.slug}" class="btn">
            Saiba Mais
          </a>
        </div>
        <div class="info-image">
          <img class="circle" src="${mulher.foto}" 
              alt="Foto de ${mulher.nome}" >
        </div>
      `;

      container.appendChild(section);
    });

    AOS.refresh();
  });