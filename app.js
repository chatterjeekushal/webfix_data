
  // Function to animate text within a given slide
  function animateSlide(slide) {
    const caption = slide.querySelector(".carousel-caption");

    gsap.from(caption.querySelector("h5"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });

    gsap.from(caption.querySelector("p"), {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(caption.querySelector(".text-danger"), {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(caption.querySelector("h1"), {
      opacity: 0,
      y: 70,
      duration: 1.2,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(caption.querySelector("a"), {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1.2,
      ease: "power2.out",
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector("#carouselExampleCaptions");

    // Initialize animations for the first slide
    animateSlide(carousel.querySelector(".carousel-item.active"));

    // Add event listeners for slide changes
    carousel.addEventListener('slid.bs.carousel', function () {
      // Remove existing GSAP animations from all slides
      gsap.killTweensOf(".carousel-caption *");

      // Get the currently active slide
      const activeSlide = carousel.querySelector(".carousel-item.active");
      // Apply animations to the newly active slide
      animateSlide(activeSlide);
    });
  });

