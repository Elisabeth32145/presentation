document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".carousel").forEach((carousel) => {

    const track = carousel.querySelector(".track");
    const slides = carousel.querySelectorAll(".project-card");
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");

    let index = 0;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
      index++;
      if (index >= slides.length) index = 0;
      update();
    });

    prev.addEventListener("click", () => {
      index--;
      if (index < 0) index = slides.length - 1;
      update();
    });

  });

});