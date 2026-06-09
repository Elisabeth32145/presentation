document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelector('.slides');
  const cards = document.querySelectorAll('.card');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let index = 0;

  function update() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener('click', () => {
    index++;
    if (index >= cards.length) index = 0;
    update();
  });

  prev.addEventListener('click', () => {
    index--;
    if (index < 0) index = cards.length - 1;
    update();
  });

});