const carrusel = document.querySelector('.carrusel');
const imagenes = carrusel.querySelectorAll('img');
const botonAnterior = carrusel.querySelector('.control-anterior');
const botonSiguiente = carrusel.querySelector('.control-siguiente');

let imagenActiva = 0;

botonAnterior.addEventListener('click', () => {
  imagenes[imagenActiva].classList.remove('imagen-activa');
  
  imagenActiva--;
  
  if (imagenActiva < 0) {
    imagenActiva = imagenes.length - 1;
  }
  
  imagenes[imagenActiva].classList.add('imagen-activa');
});

botonSiguiente.addEventListener('click', () => {
  imagenes[imagenActiva].classList.remove('imagen-activa');
  
  imagenActiva++;
  
  if (imagenActiva >= imagenes.length) {
    imagenActiva = 0;
  }
  
  imagenes[imagenActiva].classList.add('imagen-activa');
});
var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = docuemnt.getElemntsByClassName("slide");
    for (i=0; i < slides.legth; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.legth) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);

}
