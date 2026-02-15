// Carrossel simples para as imagens do banner
let currentSlide = 0;
const slides = document.querySelectorAll(".banner img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // muda a cada 5 segundos


// Permitir trocar a imagem destaque ao clicar
