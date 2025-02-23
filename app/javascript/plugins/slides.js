const initSlides = () => {
  if (document.querySelector(".slider-area")) {
      const slideArea = document.querySelector(".slider-area");
      const images = slideArea.querySelectorAll(".slide");

      let currentSlide = 0;
      let z = 1;

      slideArea.addEventListener("click", function () {
          currentSlide = currentSlide + 1;

          if (currentSlide > images.length - 1) {
              currentSlide = 0;
          }

          z = z + 1;

          images.forEach((image) => {
              image.style.animation = "";
          });

          images[currentSlide].style.zIndex = z;
          // images[currentSlide].style.animation = "fade 0.5s";
      });
  }
};

export { initSlides };