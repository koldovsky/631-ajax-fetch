// IIFE
// (function() {})();

(function () {
    const slides = [
      '<img src="img/baby-yoda.svg" alt="Baby Yoda">',
      '<img src="img/girl.svg" alt="Girl">',
      '<img src="img/banana.svg" alt="Banana">',
      '<img src="img/viking.svg" alt="Viking">',
    ];
  
    let currentSlide = 0;
  
    function showCurrentSlide() {
      const slideContainer = document.querySelector(".three-carousel .slide-container");
      let html = '';
      html = slides[currentSlide];
      const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
      html += slides[nextSlide];
      const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
      html += slides[next2Slide];
      slideContainer.innerHTML = html;
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) currentSlide = 0;
      showCurrentSlide();
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      showCurrentSlide();
    }
  
    // setInterval(nextSlide, 1000);
    showCurrentSlide();
  
    const btnNext = document.querySelector(".three-carousel .slide-next");
    btnNext.addEventListener("click", nextSlide);
  
    const btnPrev = document.querySelector(".three-carousel .slide-prev");
    btnPrev.addEventListener("click", prevSlide);
  })();
  