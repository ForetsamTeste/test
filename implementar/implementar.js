/*Schuab - Esta parte é a interação do menu*/
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/Imagem/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/Imagem/close_white_36dp.svg";
  }
}
/*Schuab - Esta parte é responsável por trocar as imagens de acordo com a interação selecionada no menu*/
  function changeImage(id) {
    const imgPath = imagePaths[id];
    document.getElementById('mapa_inicial').src = imgPath;
/*Schuab - Adiciona transição entre as imagens */
    mapaInicial.style.opacity = 0; 
    mapaInicial.onload = function () {
        mapaInicial.style.opacity = 1;
    };
}
/*Schuab - Banco de imagens a serem chamadas pelo código acima*/
const imagePaths = {
    'link_biblioteca': 'assets/Imagem/biblioteca.png',
    'link_saa': 'assets/Imagem/saa.png',
    'link_apoio1': 'assets/Imagem/logo.png',
    'link_apoio2': 'assets/Imagem/apoio2.png',
    'link_apoio3': 'assets/Imagem/apoio3.png',
    'link_apoio4': 'assets/Imagem/apoio4.png',
    'link_blocoA': 'assets/Imagem/blocoA.png',
    'link_blocoB': 'assets/Imagem/blocoB.png',
    'link_blocoC': 'assets/Imagem/blocoC.png',
    'link_blocoD': 'assets/Imagem/blocoD.png',
    'link_blocoE': 'assets/Imagem/blocoE.png',
    'link_blocoF': 'assets/Imagem/blocoF.png',
    'link_quadras': 'assets/Imagem/quadras.png',
    'link_estacionamentos': 'assets/Imagem/estacionamentos.png',
    'link_lapec': 'assets/Imagem/lapec.png',
    'link_casas_apoios': 'assets/Imagem/casas_apoios.png',
    'link_veterinária': 'assets/Imagem/veterinária.png',
};

