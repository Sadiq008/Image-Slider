document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".btn_prev");
  const nextBtn = document.querySelector(".btn_next");
  const currentSlideElement = document.querySelector(".current");
  const totalSlidesElement = document.querySelector(".total");

  let currentIndex = 0;
  const totalSlides = slides.length;
  const slideIntervalTime = 3000;
  let slideInterval;

  // Initialize total slides count
  totalSlidesElement.textContent = totalSlides;

  // GSAP timeline for slide transitions
  const tl = gsap.timeline({ repeat: -1, paused: true });

  const showSlide = (index) => {
    tl.pause();
    gsap.to(slides, {
      xPercent: -100 * index,
      duration: 1,
      ease: "power2.inOut",
    });
    currentSlideElement.textContent = index + 1;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    showSlide(currentIndex);
  };

  const startAutoSlide = () => {
    slideInterval = setInterval(nextSlide, slideIntervalTime);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval);
  };

  // Event listeners for next/previous buttons
  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  // Initialize the first slide
  showSlide(currentIndex);

  // Start the automatic slideshow
  startAutoSlide();
});
