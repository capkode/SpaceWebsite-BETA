/* i fucking hate java script lmfao */

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    items.forEach((item) => observer.observe(item));
  });

  
  window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;
    const items = document.querySelectorAll(".timeline-item");
    items.forEach(item => {
      item.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
  });

  


  
